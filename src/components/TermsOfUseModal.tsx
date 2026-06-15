"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "@/i18n/use-translations";

type TermsOfUseModalProps = {
  onClose: () => void;
};

export function InternalTermsButton() {
  const { t } = useTranslations();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-left underline-offset-2 transition-colors hover:text-white/80 hover:underline"
      >
        {t.footer.internalTerms}
      </button>
      {open ? <TermsOfUseModal onClose={() => setOpen(false)} /> : null}
    </>
  );
}

function TermsOfUseModal({ onClose }: TermsOfUseModalProps) {
  const { t } = useTranslations();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-miami-ocean/90 backdrop-blur-sm"
        onClick={onClose}
        aria-label={t.terms.closeAria}
      />

      <div className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-slate-100 px-5 py-4 sm:px-6 sm:py-5">
          <h2
            id="terms-modal-title"
            className="text-lg font-bold uppercase leading-snug tracking-wide text-miami-ocean sm:text-xl"
          >
            {t.terms.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
            aria-label={t.terms.close}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="space-y-5 overflow-y-auto px-5 py-5 sm:space-y-6 sm:px-6 sm:py-6">
          {t.terms.sections.map((section) => (
            <section key={section.title}>
              <h3
                className={`text-sm font-bold uppercase tracking-wide sm:text-base ${
                  section.accent === "red" ? "text-red-600" : "text-miami-ocean"
                }`}
              >
                {section.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <div className="flex shrink-0 justify-end border-t border-slate-100 px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-miami-ocean px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-miami-ocean/90"
          >
            {t.terms.understood}
          </button>
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
  );
}
