import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.devx.com",
    title: "DevX - Swiss Precision IT Solutions for Global Businesses",
    description: "Transform your business with Swiss-quality technology. Web development, cloud solutions, and digital transformation services.",
    siteName: "DevX",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevX - Swiss Precision IT Solutions",
    description: "Engineering IT solutions that scale globally with Swiss precision and innovation.",
    creator: "@devx",
  },
  verification: {
    google: "your-google-verification-code",
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
      </body>
    </html>
  );
}
