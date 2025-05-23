import type { Metadata } from "next";
import "./globals.css";
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'OpSprocket - Tech That Gets The Job Done',
    template: '%s | OpSprocket'
  },
  description: 'Transform your business with cutting-edge technology solutions. From websites to automation, we handle the tech so you can focus on growth. Trusted by 500+ businesses worldwide.',
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
    'tech solutions',
    'OpSprocket',
    'small business technology',
    'enterprise solutions'
  ],
  authors: [{ name: 'OpSprocket Team' }],
  creator: 'OpSprocket',
  publisher: 'OpSprocket',
  category: 'Technology',
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
    title: 'OpSprocket - Tech That Gets The Job Done',
    description: 'Transform your business with cutting-edge technology solutions. From websites to automation, we handle the tech so you can focus on growth. Trusted by 500+ businesses worldwide.',
    siteName: 'OpSprocket',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OpSprocket - Tech That Gets The Job Done - Digital Solutions for Business Growth',
        type: 'image/png',
      },
      {
        url: '/opsprocket-logo.svg',
        width: 1091,
        height: 1091,
        alt: 'OpSprocket Logo',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@opsprocket',
    creator: '@opsprocket',
    title: 'OpSprocket - Tech That Gets The Job Done',
    description: 'Transform your business with cutting-edge technology solutions. From websites to automation, we handle the tech so you can focus on growth.',
    images: [
      {
        url: '/og-image.png',
        alt: 'OpSprocket - Tech That Gets The Job Done',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/opsprocket-logo.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: [
      { url: '/opsprocket-logo.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'OpSprocket',
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
        
        {/* Enhanced Favicon Configuration */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/opsprocket-logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/opsprocket-logo.svg" />
        <link rel="mask-icon" href="/opsprocket-logo.svg" color="#22D5A1" />
        
        {/* Progressive Web App */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#22D5A1" />
        <meta name="msapplication-TileColor" content="#0E0E10" />
        <meta name="msapplication-navbutton-color" content="#22D5A1" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "OpSprocket",
              "alternateName": "OpSprocket Technologies",
              "description": "Digital solutions that transform businesses through cutting-edge technology. We specialize in websites, automation, sales funnels, and digital marketing.",
              "url": "https://opsprocket.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://opsprocket.com/opsprocket-logo.svg",
                "width": 1091,
                "height": 1091
              },
              "image": "https://opsprocket.com/og-image.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "hello@opsprocket.com",
                "availableLanguage": ["English"],
                "areaServed": "Worldwide"
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
                "https://facebook.com/opsprocket",
                "https://instagram.com/opsprocket"
              ],
              "foundingDate": "2020",
              "numberOfEmployees": "50-100",
              "industry": "Technology Services",
              "slogan": "Tech that gets the job done",
              "knowsAbout": [
                "Web Development",
                "Business Automation",
                "Digital Marketing",
                "Sales Funnels",
                "Process Optimization",
                "Technology Consulting"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Website Development",
                      "description": "Modern, responsive websites that convert visitors into customers"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sales Funnels",
                      "description": "Automated sales systems that nurture leads and drive conversions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Business Automation",
                      "description": "Custom automation solutions that eliminate repetitive tasks"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digital Marketing",
                      "description": "Data-driven marketing strategies that increase visibility and drive growth"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Additional Schema for Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "OpSprocket",
              "url": "https://opsprocket.com",
              "description": "Tech that gets the job done - Transform your business with cutting-edge technology solutions",
              "inLanguage": "en-US",
              "isPartOf": {
                "@type": "Organization",
                "name": "OpSprocket"
              },
              "about": {
                "@type": "Thing",
                "name": "Digital Business Solutions",
                "description": "Comprehensive technology services for business transformation"
              },
              "keywords": "digital transformation, business automation, website development, sales funnels, digital marketing"
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
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: 'OpSprocket - Tech That Gets The Job Done',
                    custom_map: {'custom_parameter': 'value'}
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
