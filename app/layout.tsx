import './globals.css';

import * as Sentry from '@sentry/nextjs';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Providers from '@/components/providers';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}

export function generateMetadata(): Metadata {
  const metadata: Metadata = {
    title: "Keyvan's portfolio",
    description:
      'A simple portfolio where I talk about my newest techniques about programming',
    metadataBase: new URL(process.env.WEBSITE_URL!),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US'
      }
    },
    openGraph: {
      title: "Keyvan's portfolio",
      description:
        'A simple portfolio where I talk about my newest techniques about programming',
      images: '/images/authors/keyvan-bw.png',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: "Keyvan's portfolio",
      description:
        'A simple portfolio where I talk about my newest techniques about programming',
      images: '/images/authors/keyvan-bw.png'
    },
    other: {
      ...Sentry.getTraceData()
    }
  };

  return metadata;
}
