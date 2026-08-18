import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "projeto-um",
    name: "Nome do Projeto 1",
    date: "2024-03",
    description: {
      pt: "Descrição breve do projeto: qual problema ele resolve e qual foi o seu papel no desenvolvimento.",
      en: "Short project description: what problem it solves and what your role was in building it.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/seu-usuario/projeto-um",
    demoUrl: "https://projeto-um.exemplo.com",
  },
  {
    slug: "projeto-dois",
    name: "Nome do Projeto 2",
    date: "2024-09",
    description: {
      pt: "Descrição breve do projeto: qual problema ele resolve e qual foi o seu papel no desenvolvimento.",
      en: "Short project description: what problem it solves and what your role was in building it.",
    },
    technologies: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/seu-usuario/projeto-dois",
  },
];
