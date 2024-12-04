import { type LucideIcon } from 'lucide-react';

export type NavPath = '/' | '/projects' | '/blog' | 'https://github.com/kWAYTV';

export type NavItem = {
  name: string;
  icon: LucideIcon;
  tooltip: string;
};

export type NavItems = Record<NavPath, NavItem>;
