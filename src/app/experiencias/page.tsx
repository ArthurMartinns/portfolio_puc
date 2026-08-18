"use client";

import { useLanguage } from "@/context/language-context";
import { dictionary } from "@/data/content";
import { experiences } from "@/data/experiences";

export default function ExperiencesPage() {
  const { locale } = useLanguage();
  const copy = dictionary.experience;

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          <span className="font-mono text-accent">{"// "}</span>
          {copy.title[locale]}
        </h1>
        <p className="mt-3 text-base text-muted">{copy.subtitle[locale]}</p>
      </header>

      <ol className="relative mt-14 flex flex-col gap-8 border-l border-border pl-8 sm:pl-10">
        {experiences.map((experience) => {
          const details = [
            experience.employmentType[locale],
            experience.workMode[locale],
            experience.location[locale],
          ];

          return (
            <li key={`${experience.organization}-${experience.period[locale]}`} className="relative">
              <span className="absolute -left-[33px] top-1.5 h-2 w-2 rounded-full bg-accent sm:-left-[41px]" />
              <article className="rounded-sm border border-border bg-surface p-6 transition-colors hover:border-accent/60">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-lg font-semibold tracking-tight">{experience.organization}</h2>
                  <span className="font-mono text-xs uppercase tracking-wide text-muted">
                    {experience.period[locale]}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">{experience.role[locale]}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wide text-muted">{details.join(" · ")}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{experience.description[locale]}</p>

                <div className="mt-5">
                  <h3 className="font-mono text-xs uppercase tracking-wide text-muted">
                    {copy.highlights[locale]}
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                    {experience.highlights[locale].map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                {experience.technologies && (
                  <div className="mt-5">
                    <h3 className="font-mono text-xs uppercase tracking-wide text-muted">
                      {copy.technologies[locale]}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs font-medium text-foreground"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
