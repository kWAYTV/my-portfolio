import { create } from 'zustand';

import type { Repository } from '@/interfaces/github';

interface GitHubStore {
  repos: Repository[];
  currentPage: number;
  itemsPerPage: number;
  isLoading: boolean;
  error: string | null;
  setRepos: (repos: Repository[]) => void;
  setCurrentPage: (page: number) => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useGitHubStore = create<GitHubStore>(set => ({
  repos: [],
  currentPage: 1,
  itemsPerPage: 5,
  isLoading: false,
  error: null,
  setRepos: repos => set({ repos }),
  setCurrentPage: page => set({ currentPage: page }),
  setError: error => set({ error }),
  setLoading: loading => set({ isLoading: loading })
}));
