import type { Project } from "@/lib/types";
import type { Locale } from "@/lib/types";
import { dictionary } from "@/data/content";

export function ProjectMedia({ project, locale }: { project: Project; locale: Locale }) {
  if (project.image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={project.image} alt={project.name} className="h-full w-full object-cover" />;
  }

  return (
    <div className="dot-grid flex h-full w-full flex-col items-center justify-center gap-2 bg-surface-muted">
      <span className="rounded-sm border border-border bg-surface px-3 py-1 font-mono text-lg font-semibold text-accent">
        {project.name.charAt(0)}
      </span>
      <span className="font-mono text-xs uppercase tracking-wide text-muted">
        {dictionary.projects.imagePlaceholder[locale]}
      </span>
    </div>
  );
}
