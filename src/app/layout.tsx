import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yoderspainting.com'),
  title: {
    default: "Yoder's Painting | Professional Painting in Harrisonburg, VA",
    template: "%s | Yoder's Painting",
  },
  description:
    "Yoder's Painting delivers flawless interior and exterior paint jobs in Harrisonburg and the Shenandoah Valley. Get a free estimate today.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: "Yoder's Painting",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "Yoder's Painting" }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: "Yoder's Painting",
  description:
    'Professional interior and exterior painting services for residential and commercial properties in Harrisonburg, VA and the Shenandoah Valley.',
  '@id': 'https://yoderspainting.com',
  url: 'https://yoderspainting.com',
  telephone: '+1-540-555-0100',
  email: 'info@yoderspainting.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Harrisonburg',
    addressRegion: 'VA',
    postalCode: '22801',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '14:00',
    },
  ],
  areaServed: ['Harrisonburg, VA', 'Rockingham County, VA', 'Shenandoah Valley, VA', 'Staunton, VA', 'Waynesboro, VA'],
  priceRange: '$$',
  image: 'https://yoderspainting.com/og-image.jpg',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
