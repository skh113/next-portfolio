'use client';

import { ThemeProvider, useTheme } from 'next-themes';

import { Toaster } from '@/components/ui/sonner';
import { OfflineSync } from './offline-indicator';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      {children}
      <ToasterProvider />
      <OfflineSync />
    </ThemeProvider>
  );
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      position='top-right'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  );
}
