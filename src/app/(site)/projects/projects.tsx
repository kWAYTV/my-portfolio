import { fetchGithubRepos } from '@/actions/github';
import { ClientProjects } from '@/components/core/projects/client-projects';

export async function Projects() {
  const result = await fetchGithubRepos();
  const repos = 'repos' in result && result.repos ? result.repos : [];

  return <ClientProjects initialRepos={repos} />;
}
