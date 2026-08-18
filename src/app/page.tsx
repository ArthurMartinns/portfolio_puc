"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { dictionary, siteConfig } from "@/data/content";

export default function Home() {
  const { locale } = useLanguage();
  const home = dictionary.home;

  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_75%_20%,var(--accent-soft),transparent_36%),radial-gradient(circle_at_10%_0%,var(--accent-soft),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] opacity-70 dot-grid" />

      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <section className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="max-w-3xl">
            <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {home.availability[locale]}
            </div>

            <p className="animate-rise mt-8 font-mono text-sm text-accent" style={{ animationDelay: "0.05s" }}>
              {"// "}
              {home.greeting[locale]}
            </p>
            <h1
              className="animate-rise mt-3 text-[clamp(3.4rem,8vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]"
              style={{ animationDelay: "0.1s" }}
            >
              {siteConfig.name}
            </h1>
            <p
              className="animate-rise mt-5 font-mono text-xs uppercase tracking-[0.17em] text-muted sm:text-sm"
              style={{ animationDelay: "0.15s" }}
            >
              {siteConfig.role[locale]}
              <span className="mx-2 text-accent">/</span>
              {home.location[locale]}
            </p>
            <p
              className="animate-rise mt-7 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg"
              style={{ animationDelay: "0.2s" }}
            >
              {home.tagline[locale]}
            </p>

            <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.25s" }}>
              <Link
                href="/projetos"
                className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[0_8px_20px_var(--accent-soft)] transition-transform hover:-translate-y-0.5"
              >
                {home.ctaProjects[locale]}
              </Link>
              <Link
                href="/contato"
                className="rounded-md border border-border bg-surface/80 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
              >
                {home.ctaContact[locale]}
              </Link>
            </div>
          </div>

          <aside
            className="corner-frame animate-rise relative overflow-hidden rounded-sm border border-border bg-surface/90 p-5 shadow-[14px_14px_0_var(--accent-soft)] backdrop-blur sm:p-6"
            style={{ animationDelay: "0.3s" }}
            aria-label="Professional profile"
          >
            <div className="absolute inset-0 -z-10 opacity-70 dot-grid" />
            <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              <span>profile.ts</span>
              <span className="flex gap-1.5" aria-hidden="true">
                <i className="h-2 w-2 rounded-full bg-accent" />
                <i className="h-2 w-2 rounded-full bg-border" />
                <i className="h-2 w-2 rounded-full bg-border" />
              </span>
            </div>
            <div className="mt-6 space-y-4 font-mono text-sm leading-relaxed">
              <p>
                <span className="text-accent">const</span> profile = {"{"}
              </p>
              <p className="pl-4 text-muted">
                role: <span className="text-foreground">&quot;{siteConfig.role[locale]}&quot;</span>,
              </p>
              <p className="pl-4 text-muted">
                focus: <span className="text-foreground">&quot;Java / Spring Boot&quot;</span>,
              </p>
              <p className="pl-4 text-muted">
                frontend: <span className="text-foreground">&quot;React / TypeScript&quot;</span>,
              </p>
              <p className="pl-4 text-muted">
                location: <span className="text-foreground">&quot;{home.location[locale]}&quot;</span>
              </p>
              <p>{"}"};</p>
            </div>
          </aside>
        </section>

        <section className="mt-20 grid gap-5 sm:mt-28 lg:grid-cols-5">
          <article className="rounded-sm border border-border bg-surface p-6 sm:p-8 lg:col-span-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              <span className="font-mono text-accent">{"// "}</span>
              {home.aboutTitle[locale]}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{home.aboutBody[locale]}</p>
          </article>

          <article className="corner-frame relative overflow-hidden rounded-sm border border-border bg-surface p-6 lg:col-span-2 sm:p-8">
            <div className="absolute inset-0 -z-10 opacity-60 dot-grid" />
            <h2 className="text-lg font-semibold tracking-tight">
              <span className="font-mono text-accent">{"// "}</span>
              {home.focusTitle[locale]}
            </h2>
            <ul className="mt-5 flex flex-col divide-y divide-border">
              {home.focusItems[locale].map((item, index) => (
                <li key={item} className="flex items-center gap-3 py-3 text-sm font-medium first:pt-0 last:pb-0">
                  <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="border-l-2 border-accent bg-accent-soft/45 px-6 py-7 sm:px-8 lg:col-span-5">
            <h2 className="text-lg font-semibold tracking-tight">{home.goalsTitle[locale]}</h2>
            <p className="mt-2 max-w-3xl text-base leading-relaxed text-muted">{home.goalsBody[locale]}</p>
          </article>
        </section>
      </div>
    </div>
  );
}
