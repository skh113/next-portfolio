import Image from 'next/image';
import Link from 'next/link';
import { ContentMetadata } from '@/lib/content';
import { formatDate } from '@/lib/utils';

export default function Posts({ posts }: { posts: ContentMetadata[] }) {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      {posts.map(post => (
        <li key={post.slug} className='group'>
          <Link href={`/posts/${post.slug}`} className='flex gap-x-4 gap-y-1'>
            {post.image && (
              <Image
                src={post.image}
                alt={post.title ?? 'Post Image'}
                width={96}
                height={96}
                className='rounded-md h-24 w-24 object-cover grayscale-0 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:grayscale-100'
              />
            )}
            <div className='max-w-lg'>
              <p className='text-lg line-clamp-1 font-semibold'>{post.title}</p>
              <p className='mt-1 line-clamp-2 text-sm text-balance font-light text-muted-foreground'>
                {post.summary}
              </p>
              {post.publishedAt && (
                <p className='mt-1 text-sm font-light'>
                  {formatDate(post.publishedAt)}
                </p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
