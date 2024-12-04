import { ArrowUpRight } from 'lucide-react';

import { githubRepoUrl } from '@/lib/metadata';

export default function Footer() {
  return (
    <footer className='mb-16'>
      <ul className='font-sm mt-8 flex flex-col space-y-2 text-neutral-600 dark:text-neutral-300 md:flex-row md:space-x-4 md:space-y-0'>
        <li>
          <a
            href='/rss'
            className='flex items-center hover:text-neutral-800 dark:hover:text-neutral-100'
          >
            <ArrowUpRight />
            <p className='ml-2'>rss</p>
          </a>
        </li>
        <li>
          <a
            href={githubRepoUrl}
            className='flex items-center hover:text-neutral-800 dark:hover:text-neutral-100'
          >
            <ArrowUpRight />
            <p className='ml-2'>repo</p>
          </a>
        </li>
      </ul>
      <p className='mt-8 text-neutral-600 dark:text-neutral-300'>
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}
