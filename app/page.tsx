import Intro from '@/components/intro';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function Home() {
  const markdown = `
    # This is a markdown heading
  `;

  return (
    <main className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <MDXRemote source={markdown} />
      </div>
    </main>
  );
}
