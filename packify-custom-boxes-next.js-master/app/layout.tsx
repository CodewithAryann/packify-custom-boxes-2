import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PromoBanner from '@/components/PromoBanner'
import WhatsAppButton from '@/components/WhatsAppButton'
import ClubPopup from '@/components/ClubPopup'
import Script from 'next/script'
import Tawk from '@/components/Tawk'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Custom Packaging Boxes USA | Wholesale Custom Printed Boxes | Packify',
  description: 'Leading custom packaging manufacturer in USA. Custom boxes, mailer boxes, rigid boxes & eco-friendly packaging. Free design support, fast 7-day delivery across USA. No minimum order quantity.',
  keywords: 'custom packaging boxes USA, custom printed boxes wholesale, mailer boxes USA, rigid boxes wholesale, custom box manufacturer USA, cardboard boxes wholesale, gift boxes USA, luxury packaging boxes, ecommerce packaging USA, sustainable packaging USA, food packaging boxes, custom shipping boxes, wholesale packaging supplies, custom tuck boxes, magnetic closure boxes, custom cosmetic boxes, burger boxes wholesale, cigarette packaging boxes, dispenser boxes USA, kraft boxes wholesale',
  authors: [{ name: 'Packify Custom Boxes' }],
  robots: 'index, follow',
  metadataBase: new URL('https://packifycustomboxes.com/'),
  alternates: {
    canonical: 'https://packifycustomboxes.com/',
  },
  openGraph: {
    title: 'Custom Packaging Boxes USA | Wholesale Custom Printed Boxes | Packify',
    description: 'Leading custom packaging manufacturer in USA. Get custom boxes, mailer boxes & eco-friendly packaging. Free design support. Fast delivery across USA.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Packify Custom Boxes',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom Packaging Boxes USA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Packaging Boxes USA | Wholesale Custom Printed Boxes',
    description: 'Premium custom packaging boxes in USA. Eco-friendly, luxury & wholesale packaging solutions.',
    images: ['/images/og-image.jpg'],
  },
  other: {
    'geo.region': 'US',
    'geo.placename': 'United States',
    'geo.position': '37.0902;-95.7129',
    'ICBM': '37.0902, -95.7129',
  },
}

// JSON-LD Schema for Local Business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Packify Custom Boxes',
  description: 'Leading custom packaging manufacturer in USA offering custom boxes, mailer boxes, rigid boxes & eco-friendly packaging solutions.',
  url: 'https://packifycustomboxes.com/',
  logo: 'https://packifycustomboxes.com/images/logo.png',
  image: 'https://packifycustomboxes.com/images/og-image.jpg',
  telephone: '+1-800-XXX-XXXX',
  email: 'info@packifycustomboxes.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '37.0902',
    longitude: '-95.7129',
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'State', name: 'California' },
    { '@type': 'State', name: 'Texas' },
    { '@type': 'State', name: 'Florida' },
    { '@type': 'State', name: 'New York' },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '37.0902',
      longitude: '-95.7129',
    },
    geoRadius: '5000000',
  },
  priceRange: '$$',
  openingHours: 'Mo-Sa 09:00-18:00',
  sameAs: [
    'https://www.facebook.com/packifycustomboxes',
    'https://www.instagram.com/packifycustomboxes',
    'https://www.linkedin.com/company/packifycustomboxes',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Custom Packaging Products',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Custom Mailer Boxes',
          description: 'Custom printed mailer boxes for ecommerce and shipping in USA',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Rigid Boxes',
          description: 'Premium luxury rigid boxes for gifts and high-end products',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Custom Tuck Boxes',
          description: 'Versatile tuck end boxes for retail packaging',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Food Packaging Boxes',
          description: 'FDA-approved food packaging boxes for restaurants and delivery',
        },
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-white.png" />
        <link rel="icon" href="/images/Favicon.webp" />
        <link rel="canonical" href="https://packifycustomboxes.com/" />
        <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" as="style" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="tsfU_k96qBeW0MTfbS8ER5eUy1XQ_E4OMfKFUJSelPo" />

        {/* Geo-targeting for USA */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="37.0902;-95.7129" />
        <meta name="ICBM" content="37.0902, -95.7129" />

        {/* Open Graph & Twitter Meta - USA Optimized */}
        <meta property="og:title" content="Custom Packaging Boxes USA | Wholesale Custom Printed Boxes | Packify" />
        <meta property="og:description" content="Leading custom packaging manufacturer in USA. Get custom boxes, mailer boxes & eco-friendly packaging. Free design support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://packifycustomboxes.com/" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:site_name" content="Packify Custom Boxes" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Packaging Boxes USA | Wholesale Custom Printed Boxes" />
        <meta name="twitter:description" content="Premium custom packaging boxes in USA. Eco-friendly, luxury & wholesale packaging solutions." />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* GOOGLE ANALYTICS */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Q9X5E4D8X4" />
        <Script id="google-analytics">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Q9X5E4D8X4');
    `}
        </Script>
      </head>


      <body className={inter.className}>
        <Suspense fallback={null}>
          <Header />
        </Suspense>

        <main className="min-h-screen">{children}</main>

        <Tawk />
        <Footer />
        <WhatsAppButton />

        {/* Tawk.to Chat Widget */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/687ff2649e6e70191a1b4f39/1j0pslmr5';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        {/* GSAP Scripts */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="lazyOnload" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}