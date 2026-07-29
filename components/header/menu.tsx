'use client';

import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface HeaderMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function HeaderMenuButton({ isOpen, onToggle }: HeaderMenuButtonProps) {
  return (
    <button
      className='relative flex size-10 items-center justify-center rounded-md p-2 text-primary transition-colors hover:bg-muted hover:text-foreground md:hidden'
      onClick={onToggle}
      aria-label='Toggle menu'
      aria-expanded={isOpen}
      aria-controls='mobile-menu'
    >
      <Cross1Icon
        className={cn(
          'absolute size-6 transition-all ease-in-out',
          isOpen
            ? 'scale-100 rotate-0 opacity-100'
            : 'scale-0 rotate-90 opacity-0'
        )}
      />

      <HamburgerMenuIcon
        className={cn(
          'absolute size-6 transition-all ease-in-out',
          isOpen
            ? 'scale-0 -rotate-90 opacity-0'
            : 'scale-100 rotate-0 opacity-100'
        )}
      />
    </button>
  );
}

interface HeaderMenuPanelProps {
  headerItems: { link: string; label: string }[];
  isOpen: boolean;
  onNavigate: () => void;
}

export function HeaderMenuPanel({
  headerItems,
  isOpen,
  onNavigate
}: HeaderMenuPanelProps) {
  const pathname = usePathname();

  return (
    <div
      id='mobile-menu'
      className={cn(
        'grid transition-[grid-template-rows] duration-300 ease-in-out md:hidden',
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      )}
      inert={isOpen ? undefined : true}
    >
      <div className='overflow-hidden'>
        <ul
          className={cn(
            'flex flex-col items-center gap-3 border-t border-border p-4 transition-opacity duration-300 ease-in-out',
            isOpen ? 'opacity-100' : 'opacity-0'
          )}
        >
          {headerItems.map(({ label, link }, index) => (
            <Fragment key={link}>
              <li>
                <Link
                  href={{ pathname: link }}
                  className={cn(
                    'text-2xl font-medium transition-colors hover:text-primary',
                    pathname === link && 'text-foreground'
                  )}
                  onClick={onNavigate}
                  tabIndex={isOpen ? undefined : -1}
                >
                  {label}
                </Link>
              </li>
              {index !== headerItems.length - 1 && (
                <Separator orientation='horizontal' className='w-full' />
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
