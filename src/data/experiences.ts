import type { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    organization: "Nome da Empresa/Instituição",
    role: { pt: "Estagiário(a) de Desenvolvimento", en: "Development Intern" },
    period: { pt: "Jan 2024 – Presente", en: "Jan 2024 – Present" },
    description: {
      pt: "Descreva aqui suas atividades principais, tecnologias utilizadas e resultados alcançados durante essa experiência.",
      en: "Describe your main activities, technologies used and results achieved during this experience.",
    },
  },
  {
    organization: "Projeto Open Source / Evento Técnico",
    role: { pt: "Colaborador(a)", en: "Contributor" },
    period: { pt: "Ago 2023 – Dez 2023", en: "Aug 2023 – Dec 2023" },
    description: {
      pt: "Descreva sua participação em projetos open source, hackathons ou eventos técnicos relevantes para sua trajetória.",
      en: "Describe your participation in open source projects, hackathons or tech events relevant to your journey.",
    },
  },
  {
    organization: "Freelance",
    role: { pt: "Desenvolvedor(a) Front-end", en: "Front-end Developer" },
    period: { pt: "Mar 2023 – Jul 2023", en: "Mar 2023 – Jul 2023" },
    description: {
      pt: "Descreva o escopo do trabalho freelancer, o cliente (se aplicável) e as principais entregas.",
      en: "Describe the scope of the freelance work, the client (if applicable) and the main deliverables.",
    },
  },
];
