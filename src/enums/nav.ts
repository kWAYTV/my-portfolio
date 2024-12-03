import { BookOpen, GithubIcon, HomeIcon, MenuIcon } from 'lucide-react';

export const navItems = {
  '/': {
    name: 'home',
    icon: HomeIcon
  },
  '/projects': {
    name: 'projects',
    icon: MenuIcon
  },
  '/blog': {
    name: 'blog',
    icon: BookOpen
  },
  'https://github.com/kWAYTV': {
    name: 'github',
    icon: GithubIcon
  }
} as const;

export type NavItem = {
  name: string;
  icon: React.ElementType;
};
