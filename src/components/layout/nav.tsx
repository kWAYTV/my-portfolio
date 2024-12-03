'use client';

import { Link } from 'next-view-transitions';

import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { navItems } from '@/enums/nav';

export function Navbar() {
  return (
    <aside className='-ml-[8px] mb-16 tracking-tight'>
      <div className='lg:sticky lg:top-20'>
        <nav
          className='fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto'
          id='nav'
        >
          <div className='flex flex-row space-x-1 pr-10'>
            {Object.entries(navItems).map(([path, { name, icon: Icon }]) => {
              return (
                <Button
                  key={path}
                  variant='linkHover2'
                  className='flex items-center gap-2 p-2'
                  asChild
                >
                  <Link href={path} aria-label={`Navigate to ${name}`}>
                    <Icon className='h-4 w-4' aria-hidden='true' />
                    <span className='capitalize'>{name}</span>
                  </Link>
                </Button>
              );
            })}
            <ModeToggle />
          </div>
        </nav>
      </div>
    </aside>
  );
}
