import './globals.css';

import * as Sentry from '@sentry/nextjs';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Nunito_Sans, Playfair_Display } from 'next/font/google';
import { Person, WithContext } from 'schema-dts';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Providers from '@/components/providers';
import { JsonLdScript } from '@/components/seo-helpers';
import { cn } from '@/lib/utils';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans'
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Keyvan Hosseini',
    url: 'https://keyvanhosseini.ir',
    image: 'https://keyvanhosseini.ir/images/authors/keyvan-bw.png',
    description:
      'A simple portfolio where I talk about my newest techniques about programming',
    sameAs: [
      'https://github.com/skh113',
      'https://t.me/Da_Real_K1',
      'https://www.linkedin.com/in/real-keyvan-hosseini/',
      'https://www.instagram.com/keyvan_hosseini1/'
    ]
  };

  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-dvh flex-col font-sans antialiased',
          nunitoSans.variable,
          playfair.variable
        )}
      >
        <JsonLdScript data={jsonLd} />
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export function generateMetadata(): Metadata {
  const metadata: Metadata = {
    title: "Keyvan's portfolio",
    description:
      'A simple portfolio where I talk about my newest techniques about programming',
    keywords: [
      'Keyvan Hosseini',
      'Frontend',
      'Software Development',
      'Front-end developer',
      'Frontend development',
      'Computer Science',
      'Software Engineering',
      'Programming',
      'Web Development',
      'Mobile Development',
      'AI',
      'Machine Learning',
      'Data Science'
    ],
    authors: [{ name: 'Keyvan Hosseini' }],
    creator: 'Keyvan Hosseini',
    robots: {
      index: true,
      follow: true,
      nocache: false,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1
    },
    category: 'technology',
    applicationName: "Keyvan's portfolio",
    publisher: 'Keyvan Hosseini',
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
      ...Sentry.getTraceData(),
      'google-site-verification': process.env.GOOGLE_SITE_VERIFICATION!
    }
  };

  return metadata;
}
