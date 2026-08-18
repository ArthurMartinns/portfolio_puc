import type { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    organization: "P.avelar Engenharia",
    role: { pt: "Desenvolvedor de Front-end Júnior", en: "Junior Front-end Developer" },
    period: { pt: "Jan 2025 – Jul 2026", en: "Jan 2025 – Jul 2026" },
    employmentType: { pt: "Tempo integral", en: "Full-time" },
    location: { pt: "Belo Horizonte, MG", en: "Belo Horizonte, MG" },
    workMode: { pt: "Híbrido", en: "Hybrid" },
    description: {
      pt: "Desenvolvimento de interfaces web com foco em qualidade, manutenção e integração com o back-end.",
      en: "Development of web interfaces focused on quality, maintainability and back-end integration.",
    },
    highlights: {
      pt: [
        "Desenvolvimento de interfaces web utilizando React e TypeScript.",
        "Criação e manutenção de componentes reutilizáveis e organizados.",
        "Consumo de APIs REST para integração com o back-end.",
        "Aplicação de Styled Components e Tailwind CSS para estilização.",
        "Implementação de validações e regras de interface.",
        "Escrita e manutenção de documentação técnica de projetos.",
      ],
      en: [
        "Developed web interfaces using React and TypeScript.",
        "Created and maintained reusable, well-organized components.",
        "Consumed REST APIs for back-end integration.",
        "Applied Styled Components and Tailwind CSS for styling.",
        "Implemented interface validations and business rules.",
        "Wrote and maintained project technical documentation.",
      ],
    },
    technologies: ["React", "TypeScript", "JavaScript", "Styled Components", "Tailwind CSS", "REST APIs", "Git"],
  },
  {
    organization: "P.avelar Engenharia",
    role: { pt: "Desenvolvedor de Front-end", en: "Front-end Developer" },
    period: { pt: "Jan 2024 – Jan 2025", en: "Jan 2024 – Jan 2025" },
    employmentType: { pt: "Estágio", en: "Internship" },
    location: { pt: "Belo Horizonte, MG", en: "Belo Horizonte, MG" },
    workMode: { pt: "Presencial", en: "On-site" },
    description: {
      pt: "Atuação na evolução e manutenção das interfaces das aplicações, em colaboração com a equipe de desenvolvimento.",
      en: "Contributed to the evolution and maintenance of application interfaces in collaboration with the development team.",
    },
    highlights: {
      pt: [
        "Realização de ajustes e melhorias na interface das aplicações.",
        "Correção de bugs e apoio na manutenção do sistema.",
        "Versionamento de código com Git, colaborando ativamente com a equipe de desenvolvimento.",
        "Participação em revisões de código e melhorias contínuas com foco em boas práticas.",
      ],
      en: [
        "Made interface adjustments and improvements across applications.",
        "Fixed bugs and supported system maintenance.",
        "Used Git for version control while actively collaborating with the development team.",
        "Participated in code reviews and continuous improvements focused on best practices.",
      ],
    },
    technologies: ["TypeScript", "Styled Components", "Git"],
  },
  {
    organization: "Laboratório Hermes Pardini",
    role: { pt: "Aprendiz", en: "Apprentice" },
    period: { pt: "Jan 2022 – Jan 2023", en: "Jan 2022 – Jan 2023" },
    employmentType: { pt: "Aprendiz", en: "Apprenticeship" },
    location: { pt: "Belo Horizonte, MG", en: "Belo Horizonte, MG" },
    workMode: { pt: "No local", en: "On-site" },
    description: {
      pt: "Apoio às rotinas administrativas e operacionais da empresa.",
      en: "Supported the company's administrative and operational routines.",
    },
    highlights: {
      pt: [
        "Suporte em atividades administrativas e organização de documentos internos.",
        "Acompanhamento de planilhas, relatórios e demandas operacionais.",
        "Atendimento e comunicação entre setores da empresa.",
      ],
      en: [
        "Supported administrative activities and the organization of internal documents.",
        "Tracked spreadsheets, reports and operational requests.",
        "Assisted communication and service between company departments.",
      ],
    },
  },
];
