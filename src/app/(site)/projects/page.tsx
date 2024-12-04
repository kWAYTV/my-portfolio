import { Suspense } from 'react';

import { Projects } from '@/components/core/projects/projects';
import { ProjectsSkeleton } from '@/components/core/projects/projects-skeleton';

export default function ProjectsPage() {
  return (
    <section>
      <h1 className='mb-8 text-2xl font-semibold tracking-tighter'>
        My Projects
      </h1>
      <p className='mb-4 text-neutral-800 dark:text-neutral-200'>
        {`A collection of my open source projects, automatically synced with GitHub. 
        These range from developer tools to personal experiments, showcasing my 
        journey in software development.`}
      </p>
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
    </section>
  );
}

export const metadata = {
  title: 'Projects',
  description: 'Browse my open source projects.'
};
