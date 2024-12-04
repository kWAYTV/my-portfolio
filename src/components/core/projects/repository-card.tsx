import { GitFork, Star } from 'lucide-react';

import type { Repository } from '@/interfaces/github';

interface RepositoryCardProps {
  repository: Repository;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <div className='mb-4 flex flex-col space-y-1'>
      <div className='flex w-full flex-row space-x-0 md:space-x-2'>
        <div className='w-[100px] tabular-nums text-neutral-600 dark:text-neutral-400'>
          {repository.language || 'Unknown'}
        </div>
        <div className='flex flex-1 justify-between'>
          <a
            href={repository.html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='tracking-tight text-neutral-900 dark:text-neutral-100'
          >
            {repository.name}
          </a>
          <div className='flex items-center space-x-4 text-neutral-600 dark:text-neutral-400'>
            <span className='flex items-center'>
              <Star className='mr-1 h-4 w-4' />
              {repository.stargazers_count}
            </span>
            <span className='flex items-center'>
              <GitFork className='mr-1 h-4 w-4' />
              {repository.forks_count}
            </span>
          </div>
        </div>
      </div>
      {repository.description && (
        <p className='pl-[100px] text-sm text-neutral-600 dark:text-neutral-400 md:pl-[116px]'>
          {repository.description}
        </p>
      )}
    </div>
  );
}
