import Intro from '@/components/intro';
import RecentPosts from '@/components/recent-posts';

export default function Home() {
  return (
    <main className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />

        <RecentPosts />
      </div>
    </main>
  );
}
