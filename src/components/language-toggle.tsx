"use client";

import { useLanguage } from "@/context/language-context";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label="Toggle language"
      className="flex h-9 items-center gap-1.5 rounded-md border border-border bg-surface px-3 font-mono text-xs font-medium transition-colors hover:border-accent"
    >
      <span className={locale === "pt" ? "text-accent" : "text-muted"}>PT</span>
      <span className="text-border">/</span>
      <span className={locale === "en" ? "text-accent" : "text-muted"}>EN</span>
    </button>
  );
}
