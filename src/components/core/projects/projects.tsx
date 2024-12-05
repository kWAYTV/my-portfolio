import { fetchGithubRepos } from '@/actions/github';
import { ClientProjects } from '@/components/core/projects/client-projects';

export async function Projects() {
  const result = await fetchGithubRepos();

  if ('error' in result) {
    throw new Error(result.error);
  }

  return <ClientProjects initialRepos={result.repos} />;
}
