import { Suspense } from 'react';

import { Projects } from '@/components/core/projects/projects';
import { ProjectsSkeleton } from '@/components/core/projects/projects-skeleton';

export default function ProjectsPage() {
  return (
    <section>
      <h1 className='mb-8 text-2xl font-semibold tracking-tighter'>
        My Projects
      </h1>
      <Suspense fallback={<ProjectsSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <Projects />
      </Suspense>
    </section>
  );
}
