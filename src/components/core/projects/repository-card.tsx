import { GitFork, LockIcon, Star } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import type { Repository } from '@/interfaces/github';

interface RepositoryCardProps {
  repository: Repository;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='mb-4 flex flex-col space-y-1 rounded-md p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex w-full flex-row space-x-0 md:space-x-2'>
        <div className='w-[100px] tabular-nums text-neutral-600 dark:text-neutral-400'>
          {repository.language || 'Unknown'}
        </div>
        <div className='flex flex-1 justify-between'>
          <div className='flex items-center gap-2'>
            <Button
              variant='link'
              asChild
              className='h-auto p-0 text-base font-normal tracking-tight text-neutral-900 hover:bg-transparent hover:text-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-300'
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
              <Tooltip>
                <TooltipTrigger>
                  <LockIcon className='mr-1 h-4 w-4' />
                </TooltipTrigger>
                <TooltipContent>
                  This repository is private and may not be accessible
                </TooltipContent>
              </Tooltip>
            )}
          </div>
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
      <AnimatePresence>
        {repository.description && isHovered && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className='overflow-hidden pl-[100px] text-sm text-neutral-600 dark:text-neutral-400 md:pl-[116px]'
          >
            {repository.description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
