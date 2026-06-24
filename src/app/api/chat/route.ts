import { buildAssistantSystemPrompt } from "@/lib/assistant-context";
import { isLocale } from "@/i18n/types";
import { NextRequest, NextResponse } from "next/server";

type ChatHistoryItem = {
  role: "user" | "assistant";
  content: string;
};

type GeminiResponse = {
  candidates?: {
    content?: {
      parts?: { text?: string }[];
    };
  }[];
  error?: {
    message?: string;
    status?: string;
    code?: number;
  };
};

const FALLBACK_MODELS = ["gemini-2.5-flash-lite", "gemini-2.5-flash"];

function parseRetrySeconds(message?: string): number {
  if (!message) return 4;
  const match = message.match(/retry in ([\d.]+)s/i);
  return match ? Math.ceil(Number(match[1])) + 1 : 4;
}

function sleep(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function callGemini(
  apiKey: string,
  model: string,
  contents: { role: string; parts: { text: string }[] }[],
  locale: string
): Promise<{ ok: true; reply: string } | { ok: false; status: number; data: GeminiResponse }> {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: buildAssistantSystemPrompt(locale as "en" | "es" | "fr" | "pt") }],
        },
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 350,
        },
      }),
    }
  );

  const data = (await response.json()) as GeminiResponse;

  if (!response.ok) {
    return { ok: false, status: response.status, data };
  }

  const reply = data.candidates?.[0]?.content?.parts
    ?.map((part) => part.text ?? "")
    .join("")
    .trim();

  if (!reply) {
    return {
      ok: false,
      status: 502,
      data: { error: { status: "EMPTY_RESPONSE" } },
    };
  }

  return { ok: true, reply };
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "AI is not configured. Add GEMINI_API_KEY to .env.local and restart the dev server.",
      },
      { status: 503 }
    );
  }

  let body: { message?: string; history?: ChatHistoryItem[]; locale?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const message = body.message?.trim();

  if (!message) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  if (message.length > 500) {
    return NextResponse.json(
      { error: "Message is too long. Keep it under 500 characters." },
      { status: 400 }
    );
  }

  const locale = body.locale && isLocale(body.locale) ? body.locale : "en";

  const history = (body.history ?? []).filter(
    (item): item is ChatHistoryItem =>
      (item.role === "user" || item.role === "assistant") &&
      typeof item.content === "string" &&
      item.content.trim().length > 0
  );

  const preferredModel = process.env.GEMINI_MODEL ?? FALLBACK_MODELS[0];
  const models = [preferredModel, ...FALLBACK_MODELS.filter((m) => m !== preferredModel)];

  const contents = [
    ...history.slice(-4).map((item) => ({
      role: item.role === "assistant" ? "model" : "user",
      parts: [{ text: item.content }],
    })),
    { role: "user", parts: [{ text: message }] },
  ];

  try {
    let lastError: GeminiResponse | null = null;
    let lastStatus = 502;

    for (const model of models) {
      let result = await callGemini(apiKey, model, contents, locale);

      if (result.ok) {
        return NextResponse.json({ reply: result.reply });
      }

      lastError = result.data;
      lastStatus = result.status;

      const isRateLimit =
        result.status === 429 ||
        result.data.error?.status === "RESOURCE_EXHAUSTED";

      if (isRateLimit) {
        const waitSeconds = parseRetrySeconds(result.data.error?.message);
        await sleep(Math.min(waitSeconds, 10));
        result = await callGemini(apiKey, model, contents, locale);
        if (result.ok) {
          return NextResponse.json({ reply: result.reply });
        }
        lastError = result.data;
        lastStatus = result.status;
      }

      const retryable =
        isRateLimit ||
        result.data.error?.status === "UNAVAILABLE" ||
        result.status >= 500;

      if (!retryable) break;
    }

    console.error("Gemini API error:", lastStatus, lastError);

    let userMessage =
      "The assistant couldn't reach the AI service. Try again in a moment.";

    if (
      lastStatus === 429 ||
      lastError?.error?.status === "RESOURCE_EXHAUSTED"
    ) {
      userMessage =
        "The assistant is getting a lot of questions right now. Wait 30–60 seconds and try again, or use the suggestion chips below.";
    } else if (
      lastError?.error?.status === "INVALID_ARGUMENT" ||
      lastStatus === 400
    ) {
      userMessage =
        "Invalid Gemini request. Check GEMINI_API_KEY and GEMINI_MODEL in .env.local.";
    }

    return NextResponse.json({ error: userMessage }, { status: 502 });
  } catch (error) {
    console.error("Chat route error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
