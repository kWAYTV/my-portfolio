import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { fetchGithubRepos } from '@/actions/github';

export function useGithubRepos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const { data, isLoading, error } = useQuery({
    queryKey: ['github-repos'],
    queryFn: async () => {
      const result = await fetchGithubRepos();
      if ('error' in result) throw new Error(result.error);
      return result.repos;
    }
  });

  const filteredRepos =
    data?.filter(
      repo =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchTerm.toLowerCase())
    ) ?? [];

  const paginatedRepos = filteredRepos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    repos: paginatedRepos,
    totalRepos: filteredRepos.length,
    isLoading,
    error: error as Error | null,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    itemsPerPage
  };
}
