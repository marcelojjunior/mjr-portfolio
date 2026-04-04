import { en } from '@/i18n/en'

export const ptBR = {
  nav: {
    home: 'Início',
    projects: 'Projetos',
    experience: 'Experiência',
    stack: 'Stack',
    contact: 'Contato',
  },
  a11y: {
    skipToContent: 'Pular para o conteúdo principal',
    toggleTheme: 'Alternar tema de cores',
    toggleLanguage: 'Alternar idioma',
    openMenu: 'Abrir menu de navegação',
    closeMenu: 'Fechar menu de navegação',
    mainNav: 'Navegação principal',
  },
  hero: {
    terminalLine: 'marcelojunior@dev:~/portfolio$',
    terminalOutput: 'run portfolio',
    badge: 'Full Stack Developer',
    headline: 'olá, eu sou',
    name: 'Marcelo Junior',
    roleLine: '// Full Stack Developer',
    description:
      'Focado na resolução de problemas técnicos, desenvolvendo soluções eficientes, práticas e alinhadas às necessidades reais dos usuários.',
    ctaProjects: 'Ver projetos',
    ctaCv: 'Baixar CV',
  },
  projects: {
    title: 'Projetos',
    subtitle: 'Entrega, impacto e sistemas em produção.',
    featured: 'Destaque',
    impactLabel: 'Impacto',
    viewGithub: 'GitHub',
    viewLive: 'Demo ao vivo',
    items: {
      commerce: {
        name: 'API de plataforma de e-commerce',
        description:
          'Problema: checkout lento e integrações frágeis. Solução: camada de API redesenhada com cache, pagamentos idempotentes e observabilidade.',
        impact: [
          'Tempo de resposta da API reduzido em ~40%',
          'Mais de 10k requisições/dia no pico',
          'Conclusão de checkout melhorada com erros mais claros',
        ],
      },
      mobile: {
        name: 'App mobile de operações de campo',
        description:
          'Problema: fluxos offline-first ausentes em ferramentas legadas. Solução: app React Native com fila de sync e resolução de conflitos.',
        impact: [
          'Menos tempo de entrada de dados para equipes de campo',
          'Modo offline confiável com sync em background',
          'Publicado para iOS e Android a partir de um único codebase',
        ],
      },
      internal: {
        name: 'Painel administrativo interno',
        description:
          'Problema: ferramentas fragmentadas para operações. Solução: dashboard React unificado com acesso por perfil e métricas em tempo real.',
        impact: [
          'Fluxos consolidados em uma interface',
          'Decisões mais rápidas com dados operacionais ao vivo',
          'Frontend type-safe com TypeScript',
        ],
      },
    },
  },
  experience: {
    title: 'Experiência',
    subtitle: 'Funções com foco em escala, performance e entrega.',
    items: {
      soulloop: {
        company: 'Soulloop',
        role: 'Software Engineer',
        period: 'Outubro 2025 — Presente',
        workModel: 'Remoto',
        location: 'São Paulo-SP',
        bullets: [
          'Atuo na manutenção e evolução de um aplicativo mobile em React Native, implementando funcionalidades e resolvendo bugs críticos',
          'Desenvolvo interfaces responsivas e de alta performance, com foco em experiência do usuário',
          'Integro o aplicativo com APIs e serviços externos, garantindo comunicação eficiente entre sistemas',
          'Colaboro com designers e backend para garantir consistência e qualidade na experiência do produto',
          'Atuo na sustentação do aplicativo, garantindo estabilidade, correções contínuas e melhorias de performance',
          'Participo da definição de escopo e planejamento de funcionalidades',
        ]
      },
      buzzveltech: {
        company: 'Buzzvel',
        role: 'Tech Manager',
        period: 'Março 2025 — Outubro 2025',
        workModel: 'Remoto',
        location: 'Lisboa, Portugal',
        bullets: [
          'Gerenciei o time de desenvolvimento em múltiplos projetos simultâneos, garantindo alinhamento e eficiência nas entregas',
          'Planejei tarefas e sprints utilizando metodologias ágeis, assegurando organização e previsibilidade',
          'Atuei na gestão de pessoas, acompanhando desempenho individual e apoiando o desenvolvimento do time',
          'Realizei code reviews e ofereci suporte técnico para garantir a qualidade das entregas',
          'Organizei e acompanhei entregas de projetos, garantindo cumprimento de prazos e objetivos',
          'Participei de decisões estratégicas alinhadas aos objetivos de negócio',
        ]
      },
      buzzveldev: {
        company: 'Buzzvel',
        role: 'Software Engineer',
        period: 'Novembro 2022 — Fevereiro 2025',
        workModel: 'Remoto',
        location: 'Lisboa, Portugal',
        bullets: [
          'Atuei como desenvolvedor front-end na criação e manutenção de aplicações web e mobile utilizando React, Next.js, React Native e TypeScript',
          'Desenvolvi interfaces responsivas e acessíveis, com foco em performance e experiência do usuário',
          'Participei do desenvolvimento de landing pages, sistemas internos e sites institucionais, seguindo boas práticas de desenvolvimento',
          'Criei soluções personalizadas em WordPress, incluindo blocos e temas sob medida para diferentes projetos',
          'Realizei code reviews e colaborei com o time para garantir a qualidade e consistência das entregas',
        ]
      },
      produtecnica: {
        company: 'Grupo Produtécnica',
        role: 'Assistente de T.I.',
        period: 'Fevereiro 2022 — Julho 2022',
        workModel: 'Presencial',
        location: 'Balsas-MA',
        bullets: [
          'Prestei suporte técnico presencial e remoto para matriz e filiais, garantindo a continuidade dos serviços',
          'Atuei na manutenção de sistemas e no atendimento de incidentes e requisições de usuários',
          'Analisei falhas e identifiquei oportunidades de melhoria em processos internos',
          'Levantei requisitos e elaborei especificações funcionais para sistemas',
          'Realizei consultas e análises em banco de dados Oracle para suporte a diagnósticos e melhorias',
          'Instalei, configurei e mantive ferramentas e sistemas corporativos',
          'Monitorei e mantive sistemas de segurança (antivírus e firewall), contribuindo para um ambiente mais seguro',
        ]
      },
      contabilize: {
        company: 'Contabilize Contabilidade',
        role: 'Assistente de T.I.',
        period: 'Janeiro 2021 — Janeiro 2022',
        workModel: 'Presencial',
        location: 'Balsas-MA',
        bullets: [
          'Atuei no suporte técnico resolvendo incidentes de hardware e software, garantindo a continuidade dos serviços',
          'Gerenciei usuários e permissões no Active Directory, contribuindo para maior controle e segurança de acesso',
          'Executei consultas em PostgreSQL para suporte a operações internas e validação de informações',
          'Configurei e mantive sistemas e ferramentas corporativas, assegurando desempenho e confiabilidade',
          'Acompanhei e mantive sistemas de segurança (antivírus e firewall), reduzindo riscos e vulnerabilidades',
        ]
      },
    },
  },
  stack: {
    title: 'Stack',
    subtitle: 'Ferramentas que uso para entregar ponta a ponta.',
    groups: {
      mobile: 'Mobile',
      backend: 'Backend',
      frontend: 'Frontend',
      tools: 'Ferramentas',
    },
  },
  contact: {
    title: 'Contato',
    subtitle: 'Canais diretos — sem formulário.',
    emailAria: 'Enviar e-mail para Marcelo Junior',
    externalAria: 'Abre em uma nova aba',
    cards: {
      email: {
        title: 'E-mail',
        action: 'Enviar e-mail',
      },
      github: {
        title: 'GitHub',
        action: 'Ver perfil',
      },
      linkedin: {
        title: 'LinkedIn',
        action: 'Abrir perfil',
      },
    },
  },
  footer: {
    rights: 'Todos os direitos reservados.',
  },
} as unknown as typeof en
