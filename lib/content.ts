import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export type Content = {
  metadata: ContentMetadata;
  content: string;
};

export type ContentMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  slug: string;
};

type AvailableDirectories = 'projects' | 'posts';

export async function getContentBySlug(
  dir: AvailableDirectories,
  slug: string
): Promise<Content | null> {
  const rootDirectory = path.join(process.cwd(), 'content', dir);

  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
    const { data, content } = matter(fileContent);
    return { metadata: { ...data, slug }, content };
  } catch (error) {
    return null;
  }
}

export async function getAllContents(
  dir: AvailableDirectories,
  limit?: number
): Promise<ContentMetadata[]> {
  const rootDirectory = path.join(process.cwd(), 'content', dir);

  const files = fs.readdirSync(rootDirectory);

  const contents = files
    .map(file => getProjectMetadata(dir, file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1;
      } else {
        return -1;
      }
    });

  if (limit) {
    return contents.slice(0, limit);
  }

  return contents;
}

export function getProjectMetadata(
  dir: AvailableDirectories,
  filepath: string
): ContentMetadata {
  const rootDirectory = path.join(process.cwd(), 'content', dir);

  const slug = filepath.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  const { data } = matter(fileContent);
  return { ...data, slug };
}
