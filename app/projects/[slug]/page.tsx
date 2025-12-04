import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MDXContent from '@/components/mdx-content';
import { getAllContents, getContentBySlug } from '@/lib/content';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  const projects = await getAllContents('projects');
  return projects.map(project => ({ slug: project.slug }));
}

export default async function Project({
  params
}: PageProps<'/projects/[slug]'>) {
  const { slug } = await params;
  const project = await getContentBySlug('projects', slug);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;
  const { title, image, author, publishedAt } = metadata;

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='size-5' />
          <span>Back to projects</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
}

// Open Graph Metadata
export async function generateMetadata({
  params
}: PageProps<'/projects/[slug]'>) {
  const { slug } = await params;
  const project = await getContentBySlug('projects', slug);

  if (!project) {
    return {
      title: 'Project not found'
    };
  }

  const { metadata } = project;
  const { title, summary, image } = metadata;

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      images: image ? [{ url: image }] : [],
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: summary,
      images: image ? [image] : []
    }
  };
}
