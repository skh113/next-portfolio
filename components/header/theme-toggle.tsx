'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      size='sm'
      variant='ghost'
      className='size-10 p-1'
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      }}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='size-6 text-orange-300' />
      ) : (
        <MoonIcon className='size-6 text-sky-950' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
