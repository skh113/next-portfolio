import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MDXContent from '@/components/mdx-content';
import { getAllContents, getContentBySlug } from '@/lib/content';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  const posts = await getAllContents('posts');
  return posts.map(post => ({ slug: post.slug }));
}

export default async function Post({ params }: PageProps<'/posts/[slug]'>) {
  const { slug } = await params;
  const post = await getContentBySlug('posts', slug);

  if (!post) notFound();

  const { content, metadata } = post;
  const { title, image, author, publishedAt } = metadata;

  return (
    <section className='pb-20 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
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

        <main className='prose text-pretty mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>

        {/*<footer className='mt-16'>*/}
        {/*  <NewsletterForm />*/}
        {/*</footer>*/}
      </div>
    </section>
  );
}

// Open Graph Metadata
export async function generateMetadata({ params }: PageProps<'/posts/[slug]'>) {
  const { slug } = await params;
  const posts = await getContentBySlug('posts', slug);

  if (!posts) {
    return {
      title: 'Post not found'
    };
  }

  const { metadata } = posts;
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
