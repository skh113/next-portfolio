import Link from 'next/link';
import Projects from '@/components/projects';
import { getAllContents } from '@/lib/content';

export default async function RecentProjects() {
  const projects = await getAllContents('projects', 4);

  return (
    <section>
      <div>
        <h2 className='title mb-8'>Recent Projects</h2>
        <Projects projects={projects} />

        <Link
          href='/projects'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All projects</span>
        </Link>
      </div>
    </section>
  );
}
