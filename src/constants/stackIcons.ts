import type { IconType } from 'react-icons'
import {
  SiApple,
  SiBootstrap,
  SiCss,
  SiDocker,
  SiExpo,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWordpress,
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { VscCode } from 'react-icons/vsc'

const STACK_ICON_MAP: Record<string, IconType> = {
  'React Native': TbBrandReactNative,
  Expo: SiExpo,
  Flutter: SiFlutter,
  'Node.js': SiNodedotjs,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  PHP: SiPhp,
  Laravel: SiLaravel,
  WordPress: SiWordpress,
  Firebase: SiFirebase,
  Docker: SiDocker,
  React: SiReact,
  'Next.js': SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML: SiHtml5,
  CSS: SiCss,
  Tailwind: SiTailwindcss,
  Bootstrap: SiBootstrap,
  Git: SiGit,
  GitHub: SiGithub,
  GitLab: SiGitlab,
  Vercel: SiVercel,
  Linux: SiLinux,
  macOS: SiApple,
}

export function getStackIcon(tech: string): IconType {
  return STACK_ICON_MAP[tech] ?? VscCode
}
