export type Locale = "pt" | "en";

export type LocalizedText = Record<Locale, string>;

export interface Project {
  slug: string;
  name: string;
  date: string;
  description: LocalizedText;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
}

export interface Experience {
  organization: string;
  role: LocalizedText;
  period: LocalizedText;
  description: LocalizedText;
}
