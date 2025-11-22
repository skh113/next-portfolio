import Link from 'next/link';
import ThemeToggle from '@/components/header/theme-toggle';
import { Separator } from '../ui/separator';
import HeaderMenu from './menu';

const headerItems: { link: string; label: string }[] = [
  { link: '/posts', label: 'Posts' },
  { link: '/projects', label: 'Projects' },
  { link: '/contact', label: 'Contact' }
];

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            SKH
          </Link>
        </div>
        <ul className='hidden items-center gap-6 text-sm font-light text-muted-foreground md:flex sm:gap-10'>
          {headerItems.map(({ label, link }) => (
            <li key={link} className='transition-colors hover:text-foreground'>
              <Link href={{ pathname: link }}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className='ml-auto md:ml-0'>
          <ThemeToggle />
        </div>

        <Separator orientation='vertical' className='h-6 mr-2 md:hidden' />

        <HeaderMenu headerItems={headerItems} />
      </nav>
    </header>
  );
}
