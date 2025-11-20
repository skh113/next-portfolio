'use client';

import { WifiOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

export function OfflineSync() {
  const router = useRouter();

  useEffect(() => {
    const handleOffline = () => {
      toast.error('You are offline', {
        description: 'Check your internet connection.',
        icon: <WifiOff className='size-6' />,
        duration: Infinity, // Keep it until online
        id: 'offline-toast'
      });
    };

    const handleOnline = () => {
      toast.success('You are back online!', { id: 'offline-toast' });
    };

    // Optional: Force redirect to game if they try to click links while offline
    // Note: This is aggressive. The PWA fallback is usually preferred.
    // However, if you want to FORCE the game view instantly:
    const handleLinkClick = (e: MouseEvent) => {
      if (!navigator.onLine) {
        const target = (e.target as HTMLElement).closest('a');
        if (target && target.href.startsWith(window.location.origin)) {
          e.preventDefault();
          router.push('/offline');
        }
      }
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);
    window.addEventListener('click', handleLinkClick); // Uncomment to force redirect

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('click', handleLinkClick);
    };
  }, [router]);

  return null;
}
