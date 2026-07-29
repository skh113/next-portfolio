'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HeaderMenuButton, HeaderMenuPanel } from '@/components/header/menu';
import ThemeToggle from '@/components/header/theme-toggle';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const headerItems: { link: string; label: string }[] = [
  { link: '/posts', label: 'Posts' },
  { link: '/projects', label: 'Projects' },
  { link: '/contact', label: 'Contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className='fixed inset-x-0 top-0 z-50'>
      {/* One frosted surface for bar + menu — nested backdrop-blur does not work */}
      <div className='bg-background/75 backdrop-blur-sm'>
        <nav className='container flex max-w-3xl items-center justify-between py-4'>
          <div>
            <Link href='/' className='font-serif text-2xl font-bold'>
              SKH
            </Link>
          </div>
          <ul className='hidden items-center gap-6 text-sm font-light text-muted-foreground md:flex sm:gap-10'>
            {headerItems.map(({ label, link }) => (
              <li
                key={link}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === link && 'text-foreground'
                )}
              >
                <Link href={{ pathname: link }}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className='ml-auto md:ml-0'>
            <ThemeToggle />
          </div>

          <Separator orientation='vertical' className='mr-2 h-6 md:hidden' />

          <HeaderMenuButton
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen(open => !open)}
          />
        </nav>

        <HeaderMenuPanel
          headerItems={headerItems}
          isOpen={isMenuOpen}
          onNavigate={() => setIsMenuOpen(false)}
        />
      </div>
    </header>
  );
}
