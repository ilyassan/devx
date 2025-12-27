import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
import {locales, defaultLocale} from './config';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // The `localePrefix` option configures how locales are displayed in pathnames
  // 'as-needed' means the default locale (en) won't have a prefix, but others will (e.g., /fr)
  localePrefix: 'as-needed',

  // Disable locale detection to prevent cookie-based redirects
  // This ensures the URL is the only source of truth for the locale
  localeDetection: false
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
