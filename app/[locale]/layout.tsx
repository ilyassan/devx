import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {locales} from '@/i18n/config';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>
}): Promise<Metadata> {
  const {locale} = await params;
  const messages = await getMessages({locale});
  const metadata = messages.Metadata as any;

  return {
    title: {
      default: metadata.home.title,
      template: "%s | DevX"
    },
    description: metadata.home.description,
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
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      url: locale === 'en' ? "https://www.devx.ch" : `https://www.devx.ch/${locale}`,
      title: metadata.home.title,
      description: metadata.home.description,
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
      canonical: locale === 'en' ? "https://www.devx.ch" : `https://www.devx.ch/${locale}`,
      languages: {
        'en': 'https://www.devx.ch',
        'fr': 'https://www.devx.ch/fr',
      },
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
    formatDetection: {
      email: false,
      telephone: false,
      address: false,
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
