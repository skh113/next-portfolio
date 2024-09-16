import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import Providers from '@/components/providers';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
});

export const metadata: Metadata = {
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
    images: '/keyvan-bw.png',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Keyvan's portfolio",
    description:
      'A simple portfolio where I talk about my newest techniques about programming',
    images: '/keyvan-bw.png'
  }
};

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
        </Providers>
      </body>
    </html>
  );
}
