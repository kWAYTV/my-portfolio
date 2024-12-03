'use server';

import { Octokit } from '@octokit/rest';

import { env } from '@/env';
import type { Repository } from '@/interfaces/github';

export async function fetchGithubRepos() {
  try {
    if (!env.GITHUB_TOKEN) {
      throw new Error('GITHUB_TOKEN is required');
    }

    const octokit = new Octokit({
      auth: env.GITHUB_TOKEN
    });

    let allRepos: Repository[] = [];
    let page = 1;

    while (true) {
      // Fetch repositories page by page
      const response = await octokit.repos.listForAuthenticatedUser({
        sort: 'updated',
        per_page: 100,
        page,
        affiliation: 'owner',
        visibility: 'public'
      });

      const repos = response.data;

      // If no more repos are returned, break the loop
      if (repos.length === 0) break;

      // Format and add repositories to our collection
      const formattedRepos: Repository[] = repos.map(repo => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description ?? null,
        html_url: repo.html_url,
        private: repo.private ?? false,
        fork: repo.fork ?? false,
        created_at: repo.created_at ?? null,
        updated_at: repo.updated_at ?? null,
        language: repo.language ?? null,
        stargazers_count: repo.stargazers_count ?? 0,
        forks_count: repo.forks_count ?? 0,
        organization: undefined
      }));

      allRepos = [...allRepos, ...formattedRepos];

      // If we received fewer repos than requested, we've hit the end
      if (repos.length < 100) break;

      // Move to next page
      page++;
    }

    // Sort all repositories by update date
    const sortedRepos = allRepos.sort((a, b) => {
      const dateA = a.updated_at ? new Date(a.updated_at).getTime() : 0;
      const dateB = b.updated_at ? new Date(b.updated_at).getTime() : 0;
      return dateB - dateA;
    });

    return { repos: sortedRepos };
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return { error: 'Failed to fetch repositories' };
  }
}
