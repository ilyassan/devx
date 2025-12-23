import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DevX - Swiss Precision IT Solutions | Web Development & Digital Transformation",
    template: "%s | DevX"
  },
  description: "DevX is a Swiss-based IT solutions company delivering world-class web development, mobile apps, cloud solutions, and digital transformation services to clients worldwide. Swiss precision meets global innovation.",
  keywords: [
    "IT solutions",
    "web development",
    "mobile development",
    "cloud solutions",
    "digital transformation",
    "Swiss IT company",
    "software development",
    "custom web applications",
    "UI/UX design",
    "DevOps",
    "Switzerland technology company"
  ],
  authors: [{ name: "DevX" }],
  creator: "DevX",
  publisher: "DevX",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.devx.ch",
    title: "DevX - Swiss Precision IT Solutions for Global Businesses",
    description: "Transform your business with Swiss-quality technology. Web development, cloud solutions, and digital transformation services.",
    siteName: "DevX",
    images: [
      {
        url: "https://www.devx.ch/icon.png",
        width: 1024,
        height: 1024,
        alt: "DevX Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevX - Swiss Precision IT Solutions",
    description: "Engineering IT solutions that scale globally with Swiss precision and innovation.",
    creator: "@devx",
    site: "@devx",
    images: ["https://www.devx.ch/icon.png"],
  },
  verification: {
    google: "67npQe_3wOxDohlRGBcKBO0YaFfYF3M23nz9uL5PUo0",
  },
  alternates: {
    canonical: "https://www.devx.ch",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
