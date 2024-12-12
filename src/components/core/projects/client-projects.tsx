'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { RepositoryCard } from '@/components/core/projects/repository-card';
import { RepositoryCardSkeleton } from '@/components/core/projects/repository-card-skeleton';
import { SearchInput } from '@/components/core/projects/search-input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { useGithubRepos } from '@/hooks/use-github-repos';

export function ClientProjects() {
  const {
    repos,
    totalRepos,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    itemsPerPage
  } = useGithubRepos();

  const totalPages = Math.ceil(totalRepos / itemsPerPage);

  if (error) {
    return <div>Error loading repositories: {error.message}</div>;
  }

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <div className='space-y-4'>
      <SearchInput
        name='search'
        value={searchTerm}
        onValueChange={handleSearchChange}
      />
      <div>
        {isLoading
          ? Array.from({ length: itemsPerPage }).map((_, index) => (
              <div key={index}>
                <RepositoryCardSkeleton />
                {index < itemsPerPage - 1 && <Separator className='my-1' />}
              </div>
            ))
          : repos.map((repo, index) => (
              <div key={repo.id}>
                <RepositoryCard repository={repo} />
                {index < repos.length - 1 && <Separator className='my-1' />}
              </div>
            ))}
      </div>

      {totalRepos > itemsPerPage && (
        <>
          <Separator className='my-2' />
          <div className='flex items-center justify-between px-1'>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='sm'
                  className='h-8 w-8 p-0'
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className='h-4 w-4' />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Previous page</TooltipContent>
            </Tooltip>

            <span className='text-sm text-muted-foreground'>
              {currentPage} / {totalPages}
            </span>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='sm'
                  className='h-8 w-8 p-0'
                  onClick={() =>
                    setCurrentPage(p => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className='h-4 w-4' />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Next page</TooltipContent>
            </Tooltip>
          </div>
        </>
      )}
    </div>
  );
}
