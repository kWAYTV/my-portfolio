import { create } from 'zustand';

import type { Repository } from '@/interfaces/github';

interface GitHubStore {
  repos: Repository[];
  filteredRepos: Repository[];
  searchTerm: string;
  currentPage: number;
  itemsPerPage: number;
  isLoading: boolean;
  error: string | null;

  setRepos: (repos: Repository[]) => void;
  setSearchTerm: (term: string) => void;
  setCurrentPage: (page: number) => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useGitHubStore = create<GitHubStore>((set, get) => ({
  repos: [],
  filteredRepos: [],
  searchTerm: '',
  currentPage: 1,
  itemsPerPage: 5,
  isLoading: false,
  error: null,

  setRepos: repos => {
    set({ repos });
    const { searchTerm } = get();
    const filtered = repos.filter(
      repo =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRepos: filtered });
  },

  setSearchTerm: term => {
    const { repos } = get();
    set({ searchTerm: term });
    const filtered = repos.filter(
      repo =>
        repo.name.toLowerCase().includes(term.toLowerCase()) ||
        repo.description?.toLowerCase().includes(term.toLowerCase())
    );
    set({ filteredRepos: filtered, currentPage: 1 });
  },

  setCurrentPage: page => set({ currentPage: page }),
  setError: error => set({ error }),
  setLoading: loading => set({ isLoading: loading })
}));
