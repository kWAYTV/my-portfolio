import { BlogPosts } from '@/components/core/blog/posts';
import { Description } from '@/components/core/home/description';
import { Hero } from '@/components/core/home/hero';
import { createMetadata } from '@/lib/metadata';

export default function HomePage() {
  return (
    <section>
      <Hero />
      <Description />
      <div className='my-8'>
        <BlogPosts />
      </div>
    </section>
  );
}

export const metadata = createMetadata({
  title: 'Home',
  description: 'perc.dev - Homepage'
});
