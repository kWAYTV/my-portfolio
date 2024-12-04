import { Link } from 'next-view-transitions';

import { formatDate, getBlogPosts } from '@/lib/blog';

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map(post => (
          <Link
            key={post.slug}
            className='mb-4 flex flex-col space-y-1 rounded-md p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900'
            href={`/blog/${post.slug}`}
          >
            <div className='flex w-full flex-row space-x-0 md:space-x-2'>
              <p className='w-[100px] tabular-nums text-neutral-600 dark:text-neutral-400'>
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className='tracking-tight text-neutral-900 dark:text-neutral-100'>
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
