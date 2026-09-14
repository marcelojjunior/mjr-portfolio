import type { Locale } from '@/config/site'

/**
 * Interface strings only. Long-form content lives in src/content — never here.
 */
export const ui = {
  pt: {
    'nav.work': 'Projetos',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.menu': 'Abrir menu',
    'nav.close': 'Fechar menu',
    'nav.skipToContent': 'Pular para o conteúdo',

    'hero.eyebrow': 'Full stack',
    'hero.headlineBefore': 'Olá, eu sou o',
    'hero.headlineAccent': 'Marcelo Junior',
    'hero.headlineAfter': '',
    'hero.lede':
      'Engenheiro de Software. Moro em São Paulo, atualmente trabalho na Soulloop, e há cinco anos construo sistemas, sites e aplicativos.',
    'hero.primary': 'Entrar em contato',
    'hero.secondary': 'Ver projetos',

    'work.eyebrow': 'Projetos',
    'work.title': 'Projetos que construí e outros de que participei, e as decisões por trás deles.',
    'work.listTitle': 'O que eu construí',
    'work.open': 'Ver projeto',

    'path.eyebrow': 'Experiências',
    'path.title': 'Algumas das experiências profissionais que construíram minha trajetória.',

    'case.role': 'Papel',
    'case.period': 'Entrega',
    'case.kind': 'Tipo',
    'case.stack': 'Stack',
    'case.links': 'Links',
    'case.live': 'Visitar site',
    'case.repo': 'Repositório',
    'case.repoPrivate': 'privado',
    'case.company': 'Empresa',
    'case.companyCase': 'Case na',
    'case.outcome': 'Em números',
    'case.back': 'Todos os projetos',
    'case.placeholderNote': 'Números marcados como rascunho até o cliente liberar.',
    'case.shotsPending': 'Prints entram aqui',
    'case.walkthrough': 'Navegação pelo site',
    'case.walkthroughNote': 'Vídeo sem som · só carrega quando você dá play',
    'gallery.prev': 'Anterior',
    'gallery.next': 'Próxima',
    'gallery.video': 'Vídeo',
    'gallery.counter': 'de',

    'contact.eyebrow': 'Contato',
    'contact.title': 'Vamos conversar',
    'contact.lede': 'Se quiser falar comigo, escolha o canal que preferir.',
    'contact.email': 'E-mail',

    'about.eyebrow': 'Sobre',
    'about.now': 'Agora',
    'about.based': 'Onde',
    'about.languages': 'Idiomas',
    'about.skillsTitle': 'Habilidades técnicas',
    'about.education': 'Formação',
    'about.workTitle': 'O que eu construí',
    'about.workCta': 'Ver os projetos',
    'about.portraitAlt': 'Marcelo Junior, de óculos escuros e moletom azul, com a ponte 25 de Abril e o rio Tejo ao fundo, em Lisboa',

    'notFound.code': 'Erro 404',
    'notFound.title': 'Essa página não existe',
    'notFound.lede': 'O endereço está errado, ou a página saiu do ar. Os dois caminhos abaixo funcionam.',
    'notFound.home': 'Ir para a home',
    'notFound.work': 'Ver os projetos',

    'lang.switch': 'View in English',
    'lang.label': 'Idioma',
    'theme.toLight': 'Mudar para o tema claro',
    'theme.toDark': 'Mudar para o tema escuro',
    'footer.built': 'Todos os direitos reservados.',
  },
  en: {
    'nav.work': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Open menu',
    'nav.close': 'Close menu',
    'nav.skipToContent': 'Skip to content',

    'hero.eyebrow': 'Full stack',
    'hero.headlineBefore': "Hi, I'm",
    'hero.headlineAccent': 'Marcelo Junior',
    'hero.headlineAfter': '',
    'hero.lede':
      'Software Engineer. I live in São Paulo, currently work at Soulloop, and have spent five years building systems, websites and apps.',
    'hero.primary': 'Get in touch',
    'hero.secondary': 'See the projects',

    'work.eyebrow': 'Projects',
    'work.title': 'Projects I built and others I worked on, and the decisions behind them.',
    'work.listTitle': 'What I have built',
    'work.open': 'View project',

    'path.eyebrow': 'Experiences',
    'path.title': 'Some of the professional experience that shaped my path.',

    'case.role': 'Role',
    'case.period': 'Delivered',
    'case.kind': 'Type',
    'case.stack': 'Stack',
    'case.links': 'Links',
    'case.live': 'View live',
    'case.repo': 'Repository',
    'case.repoPrivate': 'private',
    'case.company': 'Company',
    'case.companyCase': 'Case on',
    'case.outcome': 'In numbers',
    'case.back': 'All projects',
    'case.placeholderNote': 'Figures marked as draft until the client clears them.',
    'case.shotsPending': 'Screenshots go here',
    'case.walkthrough': 'A walk through the site',
    'case.walkthroughNote': 'Silent video · only downloads when you press play',
    'gallery.prev': 'Previous',
    'gallery.next': 'Next',
    'gallery.video': 'Video',
    'gallery.counter': 'of',

    'contact.eyebrow': 'Contact',
    'contact.title': "Let's talk",
    'contact.lede': 'If you want to talk, pick whichever channel you prefer.',
    'contact.email': 'Email',

    'about.eyebrow': 'About',
    'about.now': 'Now',
    'about.based': 'Based in',
    'about.languages': 'Languages',
    'about.skillsTitle': 'Technical skills',
    'about.education': 'Education',
    'about.workTitle': 'What I have built',
    'about.workCta': 'See the projects',
    'about.portraitAlt': 'Marcelo Junior in sunglasses and a blue hoodie, with the 25 de Abril bridge and the Tagus river behind him, in Lisbon',

    'notFound.code': 'Error 404',
    'notFound.title': 'This page does not exist',
    'notFound.lede': 'Either the address is wrong or the page is gone. Both routes below work.',
    'notFound.home': 'Go to the home page',
    'notFound.work': 'See the projects',

    'lang.switch': 'Ver em português',
    'lang.label': 'Language',
    'theme.toLight': 'Switch to light theme',
    'theme.toDark': 'Switch to dark theme',
    'footer.built': 'All rights reserved.',
  },
} as const satisfies Record<Locale, Record<string, string>>

export type UIKey = keyof (typeof ui)['pt']

export function useTranslations(locale: Locale) {
  return (key: UIKey): string => ui[locale][key]
}
