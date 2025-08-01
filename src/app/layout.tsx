import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Cogentalyst - Swarm Intelligence for Business Process Automation',
    template: '%s | Cogentalyst'
  },
  description: 'Advanced AI solutions using Swarm Intelligence methodology for business process automation. Beyond prompt engineering - precise, cost-effective, and reliable AI automation.',
  keywords: ['AI automation', 'machine learning', 'business process automation', 'swarm intelligence', 'fine-tuning', 'AI consulting', 'process optimization'],
  authors: [{ name: 'Cogentalyst', url: 'https://cogentalyst.com' }],
  creator: 'Cogentalyst',
  publisher: 'Cogentalyst',
  metadataBase: new URL('https://cogentalyst.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cogentalyst.com',
    siteName: 'Cogentalyst',
    title: 'Cogentalyst - Swarm Intelligence for Business Process Automation',
    description: 'Advanced AI solutions using Swarm Intelligence methodology for business process automation. Beyond prompt engineering.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cogentalyst - Swarm Intelligence for Business Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cogentalyst - Swarm Intelligence for Business Process Automation',
    description: 'Advanced AI solutions using Swarm Intelligence methodology for business process automation. Beyond prompt engineering.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cogentalyst',
    url: 'https://cogentalyst.com',
    description: 'Advanced AI solutions using Swarm Intelligence methodology for business process automation',
    email: 'info@cogentalyst.com',
    foundingDate: '2025',
    serviceArea: 'Global',
    serviceType: 'AI Automation Consulting',
    knowsAbout: ['Artificial Intelligence', 'Business Process Automation', 'Machine Learning', 'Swarm Intelligence'],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-primary">
        {children}
      </body>
    </html>
  );
}