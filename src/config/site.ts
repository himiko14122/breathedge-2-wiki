import { routing, type Locale } from '@/i18n/routing';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://breathedge2.wiki';
export const SITE_NAME = 'Breathedge 2 Wiki';
export const HERO_IMAGE = '/images/hero.webp';
export const LOGO_IMAGE = '/logo.svg';
export const TWITTER_HANDLE = 'Red_Ruins';
export const GA_TRACKING_ID = 'G-KSZFYRY6RG';
export const SLUG_PREFIX = 'Breathedge-2-';

export const EXTERNAL_LINKS = {
  steam: 'https://store.steampowered.com/app/2412960/Breathedge_2/',
  discord: 'https://discord.gg/uezQcU7',
  youtube: 'https://www.youtube.com/channel/UCWiB1kDWmjFPIFMTdj0eL9Q',
  reddit: '',
  twitter: 'https://x.com/Red_Ruins',
  website: '',
} as const;

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function localizedPath(locale: Locale | string, path = '/') {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (locale === routing.defaultLocale) {
    // English root "/" served directly; other English paths use /en/ prefix
    // (matches sitemap generator + next-intl localePrefix 'always')
    return normalized === '/' ? '/' : `/en${normalized}`;
  }
  return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`;
}
