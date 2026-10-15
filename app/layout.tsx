import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kpro.co.in'),
  title: {
    default: 'Kpro Solutions | Enterprise GenAI, Cloud & Data Engineering',
    template: '%s | Kpro Solutions',
  },
  description:
    'Kpro Solutions delivers enterprise GenAI systems, cloud infrastructure modernization, big data lakehouses, and IoT edge solutions under a True Fixed Cost Model.',
  keywords: [
    'Enterprise GenAI',
    'Cloud Migration',
    'DevOps',
    'Big Data Lakehouse',
    'IoT Engineering',
    'True Fixed Cost Model',
    'Bengaluru',
  ],
  authors: [{ name: 'Kpro Solutions Pvt. Ltd.' }],
  creator: 'Kpro Solutions Pvt. Ltd.',
  icons: {
    icon: '/img/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kpro.co.in',
    siteName: 'Kpro Solutions',
    title: 'Kpro Solutions | Enterprise GenAI, Cloud & Data Engineering',
    description:
      'Enterprise GenAI systems, cloud infrastructure modernization, and analytics delivered with guaranteed budgets and definite outcomes.',
    images: [
      {
        url: '/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'Kpro Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kpro Solutions | Enterprise GenAI, Cloud & Data Engineering',
    description:
      'Enterprise GenAI systems, cloud infrastructure modernization, and analytics delivered with guaranteed budgets and definite outcomes.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.kpro.co.in/#organization',
                  name: 'Kpro Solutions Pvt. Ltd.',
                  url: 'https://www.kpro.co.in',
                  logo: 'https://www.kpro.co.in/img/logo.png',
                  sameAs: [
                    'https://www.linkedin.com/company/kprosolutions/',
                    'https://twitter.com/kprosolutions',
                  ],
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Bengaluru',
                    addressRegion: 'Karnataka',
                    addressCountry: 'IN',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.kpro.co.in/#website',
                  url: 'https://www.kpro.co.in',
                  name: 'Kpro Solutions',
                  publisher: {
                    '@id': 'https://www.kpro.co.in/#organization',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
