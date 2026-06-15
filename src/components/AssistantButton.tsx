"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "@/i18n/use-translations";
import type { Locale } from "@/i18n/types";

type Message = {
  id: string;
  role: "assistant" | "user";
  text: string;
  time: string;
};

function formatTime(date: Date, locale: Locale) {
  const localeTag =
    locale === "en"
      ? "en-US"
      : locale === "es"
        ? "es-MX"
        : locale === "fr"
          ? "fr-FR"
          : "pt-BR";

  return date.toLocaleTimeString(localeTag, {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AssistantButton() {
  const { dict, locale, t } = useTranslations();
  const [open, setOpen] = useState(
    () =>
      typeof window !== "undefined" && window.location.hash === "#assistant"
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(0);

  useEffect(() => {
    setMessages([
      {
        id: "greeting",
        role: "assistant",
        text: dict.assistant.greeting,
        time: formatTime(new Date(), locale),
      },
    ]);
  }, [dict.assistant.greeting, locale]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    function onHashChange() {
      setOpen(window.location.hash === "#assistant");
    }

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, open]);

  function nextMessageId(prefix: string) {
    messageIdRef.current += 1;
    return `${prefix}-${messageIdRef.current}`;
  }

  function addUserMessage(text: string) {
    const userMsg: Message = {
      id: nextMessageId("user"),
      role: "user",
      text,
      time: formatTime(new Date(), locale),
    };
    setMessages((prev) => [...prev, userMsg]);
    return userMsg;
  }

  function appendAssistantMessage(text: string) {
    setMessages((prev) => [
      ...prev,
      {
        id: nextMessageId("assistant"),
        role: "assistant",
        text,
        time: formatTime(new Date(), locale),
      },
    ]);
  }

  function addAssistantReply(text: string) {
    setTimeout(() => appendAssistantMessage(text), 400);
  }

  function handleSuggestion(suggestion: (typeof dict.assistant.suggestions)[number]) {
    if (isLoading) return;
    addUserMessage(suggestion.text);
    addAssistantReply(suggestion.reply);
  }

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = {
      id: nextMessageId("user"),
      role: "user",
      text: trimmed,
      time: formatTime(new Date(), locale),
    };

    const history = messages
      .filter((message) => message.id !== "greeting")
      .map((message) => ({
        role: message.role,
        content: message.text,
      }));

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history, locale }),
      });

      const data = (await response.json()) as { reply?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? t.assistant.errorApi);
      }

      appendAssistantMessage(
        data.reply ?? t.assistant.fallbackReply
      );
    } catch (error) {
      appendAssistantMessage(
        error instanceof Error
          ? error.message
          : t.assistant.errorGeneric
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div id="assistant" className="fixed bottom-4 right-4 z-[90] sm:bottom-6 sm:right-6">
      {open && (
        <div
          ref={panelRef}
          className="mb-4 flex w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:w-96"
          role="dialog"
          aria-label={t.assistant.dialogLabel}
        >
          <header className="flex items-center justify-between bg-miami-ocean px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <Image
                src="/images/clutch-avatar.png"
                alt=""
                width={40}
                height={40}
                unoptimized
                className="h-10 w-10 rounded-full bg-white/10 object-cover object-top"
              />
              <div>
                <p className="font-bold leading-tight">{t.assistant.name}</p>
                <p className="flex items-center gap-1 text-xs text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  {t.assistant.aiOnline}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label={t.assistant.closeAssistant}
            >
              <CloseIcon />
            </button>
          </header>

          <div className="max-h-72 space-y-3 overflow-y-auto bg-slate-50 px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                    message.role === "user"
                      ? "rounded-br-md bg-miami-ocean text-white"
                      : "rounded-bl-md bg-white text-slate-700"
                  }`}
                >
                  <AssistantMessageText
                    text={message.text}
                    isUser={message.role === "user"}
                    onNavigate={() => setOpen(false)}
                    sectionLabels={t.assistant.sectionLabels}
                  />
                  <p
                    className={`mt-1 text-right text-[10px] ${
                      message.role === "user" ? "text-white/70" : "text-slate-400"
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-sm text-slate-500 shadow-sm">
                  <span className="inline-flex items-center gap-1">
                    {t.assistant.thinking}
                    <span className="animate-pulse">...</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="space-y-2 border-t border-slate-100 bg-white px-3 py-3">
            <div className="flex flex-wrap gap-2">
              {dict.assistant.suggestions.map((suggestion) => (
                <button
                  key={suggestion.text}
                  type="button"
                  disabled={isLoading}
                  onClick={() => handleSuggestion(suggestion)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-left text-xs font-medium text-slate-700 transition-colors hover:border-miami-teal hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <SuggestionIcon type={suggestion.icon} />
                  {suggestion.text}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                disabled={isLoading}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") handleSend();
                }}
                placeholder={isLoading ? t.assistant.thinkingPlaceholder : t.assistant.typePlaceholder}
                className="flex-1 rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-miami-teal disabled:bg-slate-50 disabled:text-slate-400"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-miami-ocean text-white transition-colors hover:bg-miami-teal disabled:cursor-not-allowed disabled:opacity-50"
                aria-label={t.assistant.sendMessage}
              >
                <SendIcon />
              </button>
            </div>

            <p className="text-center text-[10px] leading-relaxed text-slate-400">
              {t.assistant.disclaimer}
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="relative ml-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-miami-coral bg-white shadow-lg transition-transform hover:scale-105 sm:h-16 sm:w-16"
        aria-expanded={open}
        aria-label={open ? t.assistant.closeAssistant : t.assistant.openAssistant}
      >
        <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-miami-coral" />
        <Image
          src="/images/clutch-avatar.png"
          alt="Clutch mascot"
          width={48}
          height={48}
          unoptimized
          className="h-10 w-10 rounded-full object-cover object-top sm:h-12 sm:w-12"
        />
      </button>
    </div>
  );
}

function AssistantMessageText({
  text,
  isUser,
  onNavigate,
  sectionLabels,
}: {
  text: string;
  isUser: boolean;
  onNavigate: () => void;
  sectionLabels: Record<string, string>;
}) {
  const linkClass = isUser
    ? "font-semibold underline underline-offset-2"
    : "font-semibold text-miami-ocean underline underline-offset-2 hover:text-miami-teal";

  const clean = text.replace(/\*\*([^*]+)\*\*/g, "$1");
  const parts = clean.split(/(#(?:explore|food|survival|transit|assistant)\b)/gi);

  return (
    <p>
      {parts.map((part, index) => {
        const match = part.match(/^#(explore|food|survival|transit|assistant)$/i);
        if (match) {
          const id = match[1].toLowerCase();
          return (
            <a
              key={`${id}-${index}`}
              href={`#${id}`}
              className={linkClass}
              onClick={onNavigate}
            >
              {sectionLabels[id]}
            </a>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </p>
  );
}

function SuggestionIcon({ type }: { type: string }) {
  const className = "h-3.5 w-3.5 shrink-0 text-miami-ocean";

  if (type === "food") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
      </svg>
    );
  }

  if (type === "explore") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm0 11.5L5.5 9.5 12 6l6.5 3.5L12 14.5z" />
      </svg>
    );
  }

  if (type === "party") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M2 22 14 10l-2-2L0 20l2 2zm7.5-9.5L22 0l-2 2-12.5 12.5 2 2zM14 6l2-2 4 4-2 2-4-4z" />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
  );
}
