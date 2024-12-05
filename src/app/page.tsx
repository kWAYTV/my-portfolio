import { BlogPosts } from '@/components/core/blog/posts';
import { Description } from '@/components/core/home/description';
import { Hero } from '@/components/core/home/hero';

export default async function HomePage() {
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
