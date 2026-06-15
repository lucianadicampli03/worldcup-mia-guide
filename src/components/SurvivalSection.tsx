"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { useTranslations } from "@/i18n/use-translations";
import type { SurvivalData } from "@/types/survival";

export default function SurvivalSection() {
  const { t, dict } = useTranslations();
  const data = dict.survival;

  return (
    <section id="survival" className="bg-miami-sand px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal variant="fade-up-lg" className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <header>
            <h2 className="text-3xl font-extrabold tracking-tight text-miami-ocean sm:text-4xl lg:text-5xl">
              {t.survival.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {t.survival.subtitle}
            </p>
          </header>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          <ScrollReveal variant="fade-up" delay={0}>
            <PhrasesCard phrases={data.phrases} title={t.survival.usefulPhrases} />
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <ProTipCard title={data.proTip.title} body={data.proTip.body} />
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200}>
            <GettingAroundCard
              title={data.gettingAround.title}
              description={data.gettingAround.description}
              links={data.gettingAround.links}
              emergencyLabel={t.survival.emergency}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function PhrasesCard({
  phrases,
  title,
}: {
  phrases: SurvivalData["phrases"];
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-slate-100 p-5 sm:p-6">
      <h3 className="text-xl font-bold text-miami-ocean">{title}</h3>

      <ul className="mt-4 space-y-3">
        {phrases.map((phrase) => (
          <li
            key={phrase.spanish}
            className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"
          >
            <div>
              <p className="font-bold text-miami-coral">{phrase.spanish}</p>
              <p className="text-sm text-slate-600">{phrase.english}</p>
            </div>
            <span className="shrink-0 rounded-full border border-slate-200 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
              {phrase.tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProTipCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-miami-coral">
          <LightbulbIcon />
        </span>
        <div>
          <h3 className="text-xl font-bold text-miami-ocean">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

function GettingAroundCard({
  title,
  description,
  links,
  emergencyLabel,
}: {
  title: string;
  description: string;
  links: SurvivalData["gettingAround"]["links"];
  emergencyLabel: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
      <h3 className="text-xl font-bold text-miami-ocean">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>

      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target={link.url.startsWith("#") ? undefined : "_blank"}
              rel={link.url.startsWith("#") ? undefined : "noopener noreferrer"}
              className="block rounded-xl border border-slate-200 bg-miami-sand/50 px-4 py-3 transition-colors hover:border-miami-teal hover:bg-white"
            >
              <p className="font-semibold text-miami-ocean">{link.name}</p>
              <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">
                {link.description}
              </p>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-4 flex items-center gap-1.5 text-sm text-slate-600">
        <PhoneIcon />
        <span>
          <span className="font-semibold text-miami-teal">{emergencyLabel} </span>
          911
        </span>
      </p>
    </div>
  );
}

function LightbulbIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-miami-teal" aria-hidden>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}
