import { Suspense } from 'react';

import { Projects } from './projects';

export default function ProjectsPage() {
  return (
    <section>
      <h1 className='mb-8 text-2xl font-semibold tracking-tighter'>
        My Projects
      </h1>
      <Suspense
        fallback={
          <div className='text-neutral-600 dark:text-neutral-400'>
            Loading projects...
          </div>
        }
      >
        <Projects />
      </Suspense>
    </section>
  );
}
