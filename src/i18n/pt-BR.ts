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
    terminalLine: 'whoami',
    terminalOutput: 'Desenvolvedor Full Stack (Mobile · Backend · Frontend)',
    badge: 'disponível para oportunidades',
    headline: 'olá, eu sou',
    name: 'Marcelo Junior',
    roleLine: '// construindo produtos digitais escaláveis e centrados no usuário',
    description:
      'Projeto e construo soluções digitais ponta a ponta — da arquitetura de backend a aplicações mobile e web, com foco em performance, escalabilidade e experiência do usuário.',
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
      acme: {
        company: 'ACME Labs',
        role: 'Engenheiro Full Stack Sênior',
        period: '2022 — Presente',
        bullets: [
          'APIs escaláveis com Node.js e PostgreSQL com milhares de requisições diárias',
          'Arquitetura frontend com React e TypeScript',
          'Ambientes Docker para padronizar deploys',
        ],
      },
      north: {
        company: 'Northwind Systems',
        role: 'Desenvolvedor Full Stack',
        period: '2019 — 2022',
        bullets: [
          'Serviços Laravel e MySQL para clientes B2B',
          'Módulos React Native usados por equipes de vendas mobile',
          'Menor tempo de resposta a incidentes com logs e alertas estruturados',
        ],
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
