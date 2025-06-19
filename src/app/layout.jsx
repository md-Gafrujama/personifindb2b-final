// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Optimized font loading with display swap for better performance
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Prevents invisible text during font load
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["ui-monospace", "SFMono-Regular", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
});

// Enhanced metadata for better SEO
export const metadata = {
  title: {
    default: "Personified B2B Marketing | Expert Marketing Agency Solutions",
    template: "%s | Personified B2B Marketing"
  },
  description: "Personified is a leading B2B marketing agency specializing in personalized marketing strategies, content creation, and innovative solutions. Drive growth with our tailored approach to B2B marketing.",
  keywords: [
    "B2B marketing agency",
    "personalized marketing strategies",
    "business marketing solutions",
    "content marketing",
    "B2B lead generation",
    "marketing automation",
    "digital marketing",
    "brand development"
  ],
  authors: [{ name: "Personified Marketing Team" }],
  creator: "Personified B2B Marketing",
  publisher: "Personified B2B Marketing",
  
  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com", // Replace with your actual domain
    siteName: "Personified B2B Marketing",
    title: "Personified B2B Marketing | Expert Marketing Agency Solutions",
    description: "Leading B2B marketing agency specializing in personalized strategies and innovative solutions for business growth.",
    images: [
      {
        url: "/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Personified B2B Marketing Agency",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Personified B2B Marketing | Expert Marketing Agency Solutions",
    description: "Leading B2B marketing agency specializing in personalized strategies and innovative solutions for business growth.",
    images: ["/twitter-image.jpg"], // Add your Twitter card image
    creator: "@yourhandle", // Replace with your Twitter handle
  },
  
  // Icons and manifest
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" },
    ],
  },
  
  manifest: "/site.webmanifest",
  
  // Additional SEO metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Canonical URL (replace with your actual domain)
  alternates: {
    canonical: "https://yourwebsite.com",
  },
  
  // Verification for search engines (add your verification codes)
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  
  // Category for better classification
  category: "business",
  
  // App metadata for PWA
  applicationName: "Personified B2B Marketing",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Personified B2B Marketing",
  },
  
  // Format detection
  formatDetection: {
    telephone: false,
  },
};

// Viewport configuration for better mobile experience
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning={true} // Prevents hydration warnings for theme switching
    >
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for common external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Personified B2B Marketing",
              "description": "Leading B2B marketing agency specializing in personalized marketing strategies and innovative solutions.",
              "url": "https://yourwebsite.com", // Replace with your actual domain
              "logo": "https://yourwebsite.com/logo.png", // Replace with your logo URL
              "sameAs": [
                "https://www.linkedin.com/company/yourcompany", // Replace with your social media
                "https://twitter.com/yourhandle",
                "https://www.facebook.com/yourpage"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX", // Replace with your phone
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address", // Replace with your address
                "addressLocality": "Your City",
                "addressRegion": "Your State",
                "postalCode": "Your ZIP",
                "addressCountry": "US"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50 rounded-br-md transition-all duration-200"
        >
          Skip to main content
        </a>

        {/* Page content with semantic HTML */}
        <main id="main-content" role="main">
          {children}
        </main>

        {/* Performance monitoring script (optional) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Web Vitals tracking
              if ('web-vital' in window) {
                // Add your analytics tracking here
              }
            `
          }}
        />
      </body>
    </html>
  );
}