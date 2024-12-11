import { GitFork, LockIcon, Star } from 'lucide-react';

import { AnimatedTooltip } from '@/components/motion/tooltip';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Repository } from '@/interfaces/github';

interface RepositoryCardProps {
  repository: Repository;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <div className='group rounded-md p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900'>
      <div className='flex w-full flex-col space-y-2'>
        <div className='flex items-start justify-between'>
          <div className='flex items-center gap-2'>
            <Button
              variant='link'
              asChild
              className='h-auto p-0 text-base font-medium tracking-tight text-neutral-900 hover:bg-transparent hover:text-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-300'
            >
              <a
                href={repository.html_url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {repository.name}
              </a>
            </Button>
            {repository.private && (
              <AnimatedTooltip content={{ description: 'Private repository' }}>
                <LockIcon className='h-4 w-4 text-neutral-500' />
              </AnimatedTooltip>
            )}
          </div>
          <div className='flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400'>
            <span className='flex items-center gap-1'>
              <Star className='h-4 w-4' />
              {repository.stargazers_count}
            </span>
            <span className='flex items-center gap-1'>
              <GitFork className='h-4 w-4' />
              {repository.forks_count}
            </span>
          </div>
        </div>

        <div className='flex items-center gap-x-4 text-sm'>
          <Badge
            variant='outline'
            className='bg-neutral-50 dark:bg-neutral-900'
          >
            {repository.language || 'Unknown'}
          </Badge>
          {repository.description && (
            <AnimatedTooltip content={{ description: repository.description }}>
              <span className='line-clamp-1 cursor-default text-neutral-600 dark:text-neutral-400'>
                {repository.description}
              </span>
            </AnimatedTooltip>
          )}
        </div>
      </div>
    </div>
  );
}
