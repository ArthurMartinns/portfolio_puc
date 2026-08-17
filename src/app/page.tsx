"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { dictionary, siteConfig } from "@/data/content";

export default function Home() {
  const { locale } = useLanguage();
  const home = dictionary.home;

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <section className="flex flex-col items-start gap-5">
        <p className="animate-rise font-mono text-sm text-accent">
          {"// "}
          {home.greeting[locale]}
        </p>
        <h1
          className="animate-rise text-4xl font-semibold tracking-tight sm:text-6xl"
          style={{ animationDelay: "0.05s" }}
        >
          {siteConfig.name}
        </h1>
        <p
          className="animate-rise font-mono text-sm uppercase tracking-wide text-muted sm:text-base"
          style={{ animationDelay: "0.1s" }}
        >
          {siteConfig.role[locale]}
        </p>
        <p
          className="animate-rise max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg"
          style={{ animationDelay: "0.15s" }}
        >
          {home.tagline[locale]}
        </p>

        <div className="animate-rise mt-2 flex flex-wrap gap-3" style={{ animationDelay: "0.2s" }}>
          <Link
            href="/projetos"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {home.ctaProjects[locale]}
          </Link>
          <Link
            href="/contato"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {home.ctaContact[locale]}
          </Link>
        </div>
      </section>

      <section className="mt-20 grid gap-10 sm:mt-28 sm:grid-cols-5 sm:gap-12">
        <div className="sm:col-span-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            <span className="font-mono text-accent">{"// "}</span>
            {home.aboutTitle[locale]}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{home.aboutBody[locale]}</p>

          <h3 className="mt-8 text-lg font-semibold tracking-tight">
            <span className="font-mono text-accent">{"// "}</span>
            {home.goalsTitle[locale]}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">{home.goalsBody[locale]}</p>
        </div>

        <div className="sm:col-span-2">
          <div className="corner-frame dot-grid rounded-sm border border-border bg-surface p-5">
            <p className="text-sm font-semibold tracking-tight">
              <span className="font-mono text-accent">{"// "}</span>
              {home.focusTitle[locale]}
            </p>
            <ul className="mt-4 flex flex-col divide-y divide-border">
              {home.focusItems[locale].map((item, index) => (
                <li key={item} className="flex items-center gap-3 py-3 text-sm font-medium first:pt-0 last:pb-0">
                  <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
