import type { Locale } from "@/lib/types";

export const siteConfig = {
  name: "Arthur Martins",
  role: {
    pt: "Engenheiro de Software",
    en: "Software Engineer",
  },
  email: "arthurmartinsdev@gmail.com",
  whatsapp: "5531997002244",
  linkedin: "https://www.linkedin.com/in/arthurmarrtins",
  github: "https://github.com/ArthurMartinns",
};

export const dictionary = {
  nav: {
    about: { pt: "Sobre Mim", en: "About Me" },
    projects: { pt: "Projetos", en: "Projects" },
    experience: { pt: "Experiências", en: "Experience" },
    contact: { pt: "Contato", en: "Contact" },
  },
  home: {
    greeting: { pt: "Olá, eu sou", en: "Hi, I'm" },
    tagline: {
      pt: "Transformo lógica em experiência, construindo soluções robustas de ponta a ponta.",
      en: "I turn logic into experience by building robust end-to-end solutions.",
    },
    availability: { pt: "Disponível para novos desafios", en: "Available for new challenges" },
    location: { pt: "Belo Horizonte, MG", en: "Belo Horizonte, MG" },
    ctaProjects: { pt: "Ver projetos", en: "View projects" },
    ctaContact: { pt: "Fale comigo", en: "Get in touch" },
    aboutTitle: { pt: "Sobre mim", en: "About me" },
    aboutBody: {
      pt: "Sou engenheiro de software em formação pela PUC Minas. Meu foco é desenvolver backends escaláveis com Java e Spring Boot, somando a experiência profissional que adquiri com React e TypeScript para entregar soluções robustas, claras e de alta qualidade.",
      en: "I'm a Software Engineering student at PUC Minas. I focus on developing scalable backends with Java and Spring Boot, combining my professional experience with React and TypeScript to deliver robust, clear, high-quality solutions.",
    },
    focusTitle: { pt: "Habilidades", en: "Skills" },
    focusItems: {
      pt: ["Java e Spring Boot", "APIs REST e bancos relacionais", "React e TypeScript", "Clean Code e SOLID"],
      en: ["Java and Spring Boot", "REST APIs and relational databases", "React and TypeScript", "Clean Code and SOLID"],
    },
    goalsTitle: { pt: "Objetivos", en: "Goals" },
    goalsBody: {
      pt: "Estou em Belo Horizonte e aberto a novos desafios para criar produtos robustos, escaláveis e de alta qualidade em times que valorizem colaboração e aprendizado contínuo.",
      en: "I'm based in Belo Horizonte and open to new challenges where I can create robust, scalable, high-quality products with teams that value collaboration and continuous learning.",
    },
  },
  projects: {
    title: { pt: "Projetos", en: "Projects" },
    subtitle: {
      pt: "Uma seleção de projetos que representa minha trajetória como desenvolvedor.",
      en: "A selection of projects that represents my journey as a developer.",
    },
    technologies: { pt: "Tecnologias", en: "Technologies" },
    repository: { pt: "Repositório", en: "Repository" },
    liveDemo: { pt: "Ver online", en: "Live demo" },
    imagePlaceholder: { pt: "Imagem/GIF do projeto", en: "Project image/GIF" },
  },
  experience: {
    title: { pt: "Experiências", en: "Experience" },
    subtitle: {
      pt: "Experiências profissionais que contribuíram para minha evolução como desenvolvedor.",
      en: "Professional experiences that have contributed to my growth as a developer.",
    },
    highlights: { pt: "Principais atividades", en: "Key responsibilities" },
    technologies: { pt: "Tecnologias", en: "Technologies" },
  },
  contact: {
    title: { pt: "Contato", en: "Contact" },
    subtitle: {
      pt: "Tem um desafio em mente? Vamos construir a solução.",
      en: "Got a challenge in mind? Let's build the solution.",
    },
    formName: { pt: "Nome", en: "Name" },
    formEmail: { pt: "E-mail", en: "Email" },
    formMessage: { pt: "Mensagem", en: "Message" },
    formSubmit: { pt: "Enviar mensagem", en: "Send message" },
    formSending: { pt: "Enviando...", en: "Sending..." },
    formSuccess: {
      pt: "Mensagem enviada com sucesso! Responderei em breve.",
      en: "Message sent successfully! I'll get back to you soon.",
    },
    formError: {
      pt: "Não foi possível enviar agora. Tente novamente ou use um dos canais ao lado.",
      en: "Couldn't send right now. Please try again or use one of the channels beside.",
    },
    errorRequired: { pt: "Preencha este campo.", en: "This field is required." },
    errorEmail: { pt: "Informe um e-mail válido.", en: "Enter a valid email." },
    errorMinLength: { pt: "Escreva uma mensagem um pouco maior.", en: "Write a slightly longer message." },
  },
  footer: {
    rights: { pt: "Todos os direitos reservados.", en: "All rights reserved." },
  },
} as const;

export function t<T extends Record<Locale, string>>(field: T, locale: Locale): string {
  return field[locale];
}
