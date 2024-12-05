'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { Repository } from '@/interfaces/github';
import { useGitHubStore } from '@/store/github';

import { RepositoryCard } from './repository-card';
import { SearchInput } from './search-input';

interface ClientProjectsProps {
  initialRepos: Repository[];
}

export function ClientProjects({ initialRepos }: ClientProjectsProps) {
  const { filteredRepos, currentPage, itemsPerPage, setRepos, setCurrentPage } =
    useGitHubStore();

  useEffect(() => {
    setRepos(initialRepos);
  }, [initialRepos, setRepos]);

  const totalPages = Math.ceil(filteredRepos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRepos = filteredRepos.slice(startIndex, endIndex);

  return (
    <div>
      <SearchInput />
      <div className='my-8'>
        {currentRepos.map(repo => (
          <div key={repo.id}>
            <RepositoryCard repository={repo} />
            <Separator className='my-2' />
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className='mt-4 flex items-center justify-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className='h-7 w-7'
          >
            <ChevronLeft className='h-4 w-4' />
          </Button>
          <span className='tabular-nums'>
            {currentPage} / {totalPages}
          </span>
          <Button
            variant='ghost'
            size='icon'
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className='h-7 w-7'
          >
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      )}
    </div>
  );
}
