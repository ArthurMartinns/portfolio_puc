import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "portfolio-pessoal",
    name: "Portfólio Pessoal",
    description: {
      pt: "Portfólio pessoal criado para apresentar minha trajetória profissional, experiências, habilidades e principais projetos.",
      en: "Personal portfolio created to showcase my professional background, experiences, skills and main projects.",
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/ArthurMartinns/meuPortfolio",
  },
  {
    slug: "library-api",
    name: "Library API",
    description: {
      pt: "API REST para gerenciar livros, autores e usuários, com autenticação OAuth2/JWT, controle de acesso por perfis e documentação Swagger.",
      en: "REST API to manage books, authors and users, with OAuth2/JWT authentication, role-based access control and Swagger docs.",
    },
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "OAuth2/JWT", "Swagger"],
    githubUrl: "https://github.com/ArthurMartinns/libraryAPI",
  },
];
