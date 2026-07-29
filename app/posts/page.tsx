import PostsWithSearch from '@/components/posts-with-search';
import { getAllContents } from '@/lib/content';

export default async function PostsPage() {
  const posts = await getAllContents('posts');

  return (
    <section className='pb-20 pt-28 md:pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Posts</h1>

        <PostsWithSearch posts={posts} />
      </div>
    </section>
  );
}
