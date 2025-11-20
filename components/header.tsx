'use client';

import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from '@/components/theme-toggle';
import { Separator } from './ui/separator';

const headerItems = [
  { link: '/posts', label: 'Posts' },
  { link: '/projects', label: 'Projects' },
  { link: '/contact', label: 'Contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
        <div className='ml-auto'>
          <ThemeToggle />
        </div>

        <Separator orientation='vertical' className='h-6 mr-3' />

        <button
          className='md:hidden'
          onClick={toggleMenu}
          aria-label='Toggle menu'
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <Cross1Icon className='size-6' />
          ) : (
            <HamburgerMenuIcon className='size-6' />
          )}
        </button>
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className='absolute left-0 right-0 top-full border-b border-border bg-background p-4 md:hidden'>
            <ul className='flex flex-col items-center gap-3'>
              {headerItems.map(({ label, link }, index) => (
                <>
                  <li key={link}>
                    <Link
                      href={{ pathname: link }}
                      className='text-2xl font-medium transition-colors hover:text-muted-foreground'
                      onClick={() => setIsMenuOpen(false)} // Close menu on click
                    >
                      {label}
                    </Link>
                  </li>
                  {index !== headerItems.length - 1 && (
                    <Separator orientation='horizontal' className='w-full' />
                  )}
                </>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
