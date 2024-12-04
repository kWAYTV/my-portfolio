'use client';

import { ArrowUpRight } from 'lucide-react';
import { useLayoutEffect, useState } from 'react';

import { githubRepoUrl } from '@/lib/metadata';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useLayoutEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className='mb-16'>
      <ul className='font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 dark:text-neutral-300 md:flex-row md:space-x-4 md:space-y-0'>
        <li>
          <a
            className='flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100'
            rel='noopener noreferrer'
            target='_blank'
            href='/rss'
          >
            <ArrowUpRight />
            <p className='ml-2 h-7'>rss</p>
          </a>
        </li>
        <li>
          <a
            className='flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100'
            rel='noopener noreferrer'
            target='_blank'
            href={githubRepoUrl}
          >
            <ArrowUpRight />
            <p className='ml-2 h-7'>repo</p>
          </a>
        </li>
      </ul>
      <p className='mt-8 text-neutral-600 dark:text-neutral-300'>
        © {year} MIT Licensed
      </p>
    </footer>
  );
}
