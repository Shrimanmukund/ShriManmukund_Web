import type { Metadata } from 'next';
import { Fraunces, Inter, Noto_Sans_Devanagari } from 'next/font/google';
import './templates.css';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { generateHospitalSchema } from '@/lib/seo/schemas';

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  display: 'swap',
  variable: '--font-fraunces',
});

const inter = Inter({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-inter',
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-noto-devanagari',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shrimanmukundhospital.com'),
  title: {
    default: 'Shri Manmukund Hospital, Amravati | Advanced Proctology & Surgery',
    template: '%s | Shri Manmukund Hospital',
  },
  description:
    'Specialist proctology, general surgery, and integrated Ayurvedic care in Amravati led by Dr. Vipin Tongale and Dr. Swati Tongale. Ksharsutra, laser, and modern surgical options under one roof. Since 2011.',
  keywords: [
    'piles doctor Amravati',
    'fistula treatment Amravati',
    'Ksharsutra Amravati',
    'female proctologist Amravati',
    'Uttarbasti Amravati',
    'laser piles surgery Amravati',
    'Dr Vipin Tongale',
    'Dr Swati Tongale',
    'Shri Manmukund Hospital',
  ],
  authors: [{ name: 'Dr. Vipin Tongale' }, { name: 'Dr. Swati Tongale' }],
  creator: 'Shri Manmukund Hospital',
  publisher: 'Shri Manmukund Hospital',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shrimanmukundhospital.com/',
    siteName: 'Shri Manmukund Hospital, Amravati',
    title: 'Shri Manmukund Hospital, Amravati | Advanced Proctology & Surgery',
    description:
      'Specialist proctology, general surgery, and integrated Ayurvedic care in Amravati. Ksharsutra, laser, and modern surgical options under one roof. Over 16,000 surgeries since 2011.',
    images: [
      {
        url: '/images/logo/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Shri Manmukund Hospital Amravati',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Manmukund Hospital, Amravati',
    description:
      'Premier Center for Advanced Proctology, Ksharsutra, Laser Surgery & Ayurveda in Vidarbha.',
    images: ['/images/logo/logo.jpg'],
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
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hospitalSchema = generateHospitalSchema();

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${notoDevanagari.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FBF7EC] text-[#2D2A20] selection:bg-[#E5EBDD] selection:text-[#1B3A5B]">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
