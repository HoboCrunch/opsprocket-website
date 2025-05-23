import type { Metadata } from "next";
import "./globals.css";
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'OpSprocket - Digital Solutions That Get The Job Done',
    template: '%s | OpSprocket'
  },
  description: 'Transform your business with cutting-edge technology solutions. From websites to automation, we handle the tech so you can focus on growth. Trusted by 500+ businesses.',
  keywords: [
    'digital transformation',
    'business automation',
    'website development',
    'sales funnels',
    'operational tools',
    'digital marketing',
    'business technology',
    'process automation',
    'custom software',
    'tech solutions'
  ],
  authors: [{ name: 'OpSprocket Team' }],
  creator: 'OpSprocket',
  publisher: 'OpSprocket',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://opsprocket.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://opsprocket.com',
    title: 'OpSprocket - Digital Solutions That Get The Job Done',
    description: 'Transform your business with cutting-edge technology solutions. From websites to automation, we handle the tech so you can focus on growth.',
    siteName: 'OpSprocket',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OpSprocket - Digital Solutions That Get The Job Done',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpSprocket - Digital Solutions That Get The Job Done',
    description: 'Transform your business with cutting-edge technology solutions. From websites to automation, we handle the tech so you can focus on growth.',
    images: ['/og-image.jpg'],
    creator: '@opsprocket',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#21F1A4" />
        <meta name="msapplication-TileColor" content="#0E0E10" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "OpSprocket",
              "description": "Digital solutions that transform businesses through cutting-edge technology",
              "url": "https://opsprocket.com",
              "logo": "https://opsprocket.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "hello@opsprocket.com"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Innovation Drive",
                "addressLocality": "Tech City",
                "addressRegion": "TC",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://twitter.com/opsprocket",
                "https://linkedin.com/company/opsprocket",
                "https://github.com/opsprocket",
                "https://facebook.com/opsprocket"
              ],
              "foundingDate": "2020",
              "numberOfEmployees": "50-100",
              "industry": "Technology Services",
              "services": [
                "Website Development",
                "Sales Funnel Creation",
                "Business Automation",
                "Digital Marketing"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        
        {/* Analytics Scripts */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
