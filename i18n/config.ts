// Centralized i18n configuration
export const locales = ['en', 'fr', 'de'] as const;
export const defaultLocale = 'en' as const;

export type Locale = typeof locales[number];
