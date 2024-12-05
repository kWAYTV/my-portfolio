import { BlogPosts } from '@/components/core/blog/posts';
import { createMetadata } from '@/lib/metadata';

export default function BlogPage() {
  return (
    <section>
      <h1 className='mb-8 text-2xl font-semibold tracking-tighter'>My Blog</h1>
      <BlogPosts />
    </section>
  );
}

export const metadata = createMetadata({
  title: 'Blog',
  description: 'Read my blog.'
});
