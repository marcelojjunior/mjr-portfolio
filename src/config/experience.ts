import type { Locale } from './site'

type Localised = Record<Locale, string>

export type ExperienceItem = {
  id: string
  company: string
  role: Localised
  period: Localised
  workModel: Localised
  location: Localised
  bullets: Record<Locale, string[]>
}

/**
 * Carried over from the previous site, where it was already current.
 * Copy is due a pass; the facts are correct.
 */
export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'soulloop',
    company: 'Soulloop',
    role: { pt: 'Software Engineer', en: 'Software Engineer' },
    period: { pt: 'Outubro 2025 — Presente', en: 'October 2025 — Present' },
    workModel: { pt: 'Remoto', en: 'Remote' },
    location: { pt: 'São Paulo-SP', en: 'São Paulo, SP' },
    bullets: {
      pt: [
        'Atuo na manutenção e evolução de um aplicativo mobile em React Native, implementando funcionalidades e resolvendo bugs críticos',
        'Desenvolvo interfaces responsivas e de alta performance, com foco em experiência do usuário',
        'Integro o aplicativo com APIs e serviços externos, garantindo comunicação eficiente entre sistemas',
        'Colaboro com designers e backend para garantir consistência e qualidade na experiência do produto',
        'Atuo na sustentação do aplicativo, garantindo estabilidade, correções contínuas e melhorias de performance',
        'Participo da definição de escopo e planejamento de funcionalidades',
      ],
      en: [
        'Maintain and evolve a React Native mobile application, shipping features and resolving critical bugs',
        'Build responsive, high-performance interfaces with a focus on user experience',
        'Integrate the app with APIs and external services, keeping system communication efficient',
        'Work with designers and backend developers to keep the product experience consistent',
        'Support the application in production: stability, continuous fixes and performance work',
        'Take part in scope definition and feature planning',
      ],
    },
  },
  {
    id: 'buzzvel-tech',
    company: 'Buzzvel',
    role: { pt: 'Tech Manager', en: 'Tech Manager' },
    period: { pt: 'Março 2025 — Outubro 2025', en: 'March 2025 — October 2025' },
    workModel: { pt: 'Remoto', en: 'Remote' },
    location: { pt: 'Lisboa, Portugal', en: 'Lisbon, Portugal' },
    bullets: {
      pt: [
        'Gerenciei o time de desenvolvimento em múltiplos projetos simultâneos, garantindo alinhamento e eficiência nas entregas',
        'Planejei tarefas e sprints utilizando metodologias ágeis, assegurando organização e previsibilidade',
        'Atuei na gestão de pessoas, acompanhando desempenho individual e apoiando o desenvolvimento do time',
        'Realizei code reviews e ofereci suporte técnico para garantir a qualidade das entregas',
        'Organizei e acompanhei entregas de projetos, garantindo cumprimento de prazos e objetivos',
        'Participei de decisões estratégicas alinhadas aos objetivos de negócio',
      ],
      en: [
        'Led the development team across several simultaneous projects, keeping delivery aligned and efficient',
        'Planned tasks and sprints with agile methods, making the work organised and predictable',
        'Handled people management: tracking individual performance and supporting the team growth',
        'Ran code reviews and gave technical support to keep delivery quality high',
        'Organised and tracked project delivery against deadlines and objectives',
        'Took part in strategic decisions aligned with business goals',
      ],
    },
  },
  {
    id: 'buzzvel-dev',
    company: 'Buzzvel',
    role: { pt: 'Software Engineer', en: 'Software Engineer' },
    period: { pt: 'Novembro 2022 — Fevereiro 2025', en: 'November 2022 — February 2025' },
    workModel: { pt: 'Remoto', en: 'Remote' },
    location: { pt: 'Lisboa, Portugal', en: 'Lisbon, Portugal' },
    bullets: {
      pt: [
        'Atuei como desenvolvedor front-end na criação e manutenção de aplicações web e mobile utilizando React, Next.js, React Native e TypeScript',
        'Desenvolvi interfaces responsivas e acessíveis, com foco em performance e experiência do usuário',
        'Participei do desenvolvimento de landing pages, sistemas internos e sites institucionais, seguindo boas práticas de desenvolvimento',
        'Criei soluções personalizadas em WordPress, incluindo blocos e temas sob medida para diferentes projetos',
        'Realizei code reviews e colaborei com o time para garantir a qualidade e consistência das entregas',
      ],
      en: [
        'Worked as a front-end developer building and maintaining web and mobile apps in React, Next.js, React Native and TypeScript',
        'Built responsive, accessible interfaces with a focus on performance and user experience',
        'Contributed to landing pages, internal systems and institutional sites, following solid development practices',
        'Built custom WordPress solutions, including bespoke blocks and themes for different projects',
        'Ran code reviews and worked with the team to keep delivery consistent',
      ],
    },
  },
  {
    id: 'produtecnica',
    company: 'Grupo Produtécnica',
    role: { pt: 'Assistente de T.I.', en: 'IT Assistant' },
    period: { pt: 'Fevereiro 2022 — Julho 2022', en: 'February 2022 — July 2022' },
    workModel: { pt: 'Presencial', en: 'On-site' },
    location: { pt: 'Balsas-MA', en: 'Balsas, MA' },
    bullets: {
      pt: [
        'Prestei suporte técnico presencial e remoto para matriz e filiais, garantindo a continuidade dos serviços',
        'Atuei na manutenção de sistemas e no atendimento de incidentes e requisições de usuários',
        'Analisei falhas e identifiquei oportunidades de melhoria em processos internos',
        'Levantei requisitos e elaborei especificações funcionais para sistemas',
        'Realizei consultas e análises em banco de dados Oracle para suporte a diagnósticos e melhorias',
        'Instalei, configurei e mantive ferramentas e sistemas corporativos',
        'Monitorei e mantive sistemas de segurança (antivírus e firewall), contribuindo para um ambiente mais seguro',
      ],
      en: [
        'Provided on-site and remote technical support for head office and branches, keeping services running',
        'Maintained systems and handled user incidents and service requests',
        'Analysed failures and identified opportunities to improve internal processes',
        'Gathered requirements and wrote functional specifications for systems',
        'Ran queries and analysis on Oracle databases to support diagnostics and improvements',
        'Installed, configured and maintained corporate tools and systems',
        'Monitored and maintained security systems (antivirus and firewall)',
      ],
    },
  },
  {
    id: 'contabilize',
    company: 'Contabilize Contabilidade',
    role: { pt: 'Assistente de T.I.', en: 'IT Assistant' },
    period: { pt: 'Janeiro 2021 — Janeiro 2022', en: 'January 2021 — January 2022' },
    workModel: { pt: 'Presencial', en: 'On-site' },
    location: { pt: 'Balsas-MA', en: 'Balsas, MA' },
    bullets: {
      pt: [
        'Atuei no suporte técnico resolvendo incidentes de hardware e software, garantindo a continuidade dos serviços',
        'Gerenciei usuários e permissões no Active Directory, contribuindo para maior controle e segurança de acesso',
        'Executei consultas em PostgreSQL para suporte a operações internas e validação de informações',
        'Configurei e mantive sistemas e ferramentas corporativas, assegurando desempenho e confiabilidade',
        'Acompanhei e mantive sistemas de segurança (antivírus e firewall), reduzindo riscos e vulnerabilidades',
      ],
      en: [
        'Provided technical support, resolving hardware and software incidents to keep services running',
        'Managed users and permissions in Active Directory, improving access control and security',
        'Ran PostgreSQL queries to support internal operations and validate data',
        'Configured and maintained corporate systems and tools for performance and reliability',
        'Monitored and maintained security systems (antivirus and firewall), reducing risk',
      ],
    },
  },
]
