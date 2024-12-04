import './globals.css';

import localFont from 'next/font/local';
import { ViewTransitions } from 'next-view-transitions';

import Footer from '@/components/layout/footer';
import { Navbar } from '@/components/layout/nav';
import { Providers } from '@/components/providers';
import { createMetadata } from '@/lib/metadata';
import { baseUrl } from '@/lib/metadata';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang='en' suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} mx-4 mt-8 max-w-xl antialiased lg:mx-auto`}
        >
          <Providers>
            <main className='mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0'>
              <Navbar />
              {children}
              <Footer />
            </main>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}

export const metadata = createMetadata({
  title: {
    template: '%s | perc.dev',
    default: 'perc.dev'
  },
  description: 'Welcome to my portfolio!',
  metadataBase: baseUrl
});
