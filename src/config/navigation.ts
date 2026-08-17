import {
  BookOpen, Clock, Gamepad2, Hammer, Rocket, Users, ScrollText, Wrench, Scale, Home, Info,
  type LucideIcon,
} from 'lucide-react';

export const NAVIGATION_CONFIG = [
  { key: 'home', labelKey: 'nav_home', path: '/', icon: Home, showInHeader: false, showInSidebar: true, showInFooter: false, sitemap: true, priority: 1, changeFrequency: 'daily' },
  { key: 'guides', labelKey: 'nav_guides', path: '/guides', icon: BookOpen, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'updates', labelKey: 'nav_updates', path: '/updates', icon: Clock, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'gameplay', labelKey: 'nav_gameplay', path: '/gameplay', icon: Gamepad2, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'crafting', labelKey: 'nav_crafting', path: '/crafting', icon: Hammer, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'spaceships', labelKey: 'nav_spaceships', path: '/spaceships', icon: Rocket, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'crew', labelKey: 'nav_crew', path: '/crew', icon: Users, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'story', labelKey: 'nav_story', path: '/story', icon: ScrollText, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'technical', labelKey: 'nav_technical', path: '/technical', icon: Wrench, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'comparisons', labelKey: 'nav_comparisons', path: '/comparisons', icon: Scale, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'about', labelKey: 'nav_about', path: '/about', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'monthly' },
  { key: 'sitemap', labelKey: 'nav_sitemap', path: '/sitemap', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: false, priority: 0.5, changeFrequency: 'monthly' },
  { key: 'privacy-policy', labelKey: 'nav_privacyPolicy', path: '/privacy-policy', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.4, changeFrequency: 'yearly' },
  { key: 'terms-of-service', labelKey: 'nav_termsOfService', path: '/terms-of-service', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.4, changeFrequency: 'yearly' },
] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => 'isContentType' in item && item.isContentType).map((item) => item.key);

export const CONTENT_TYPES_WITH_DEDICATED_PAGES = new Set(CONTENT_TYPES);

export type NavigationItem = (typeof NAVIGATION_CONFIG)[number];
export type ContentType = (typeof CONTENT_TYPES)[number];

export function isContentType(value: string): value is ContentType {
  return CONTENT_TYPES.includes(value as ContentType);
}

export function getNavigationItem(path: string) {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  return NAVIGATION_CONFIG.find((item) => item.path === normalized || item.key === path);
}

export const CONTENT_DIR_NAMES: Record<ContentType | string, string> = {
  'guides': 'guides',
  'updates': 'updates',
  'gameplay': 'gameplay',
  'crafting': 'crafting',
  'spaceships': 'spaceships',
  'crew': 'crew',
  'story': 'story',
  'technical': 'technical',
  'comparisons': 'comparisons',
} as Record<ContentType, string>;

export function getContentDir(contentType: ContentType): string {
  return CONTENT_DIR_NAMES[contentType] || contentType;
}

export const GUIDE_CATEGORIES: Record<string, { emoji: string; order: number }> = {
  'guides':       { emoji: '📖', order: 1 },
  'updates':      { emoji: '🔄', order: 2 },
  'gameplay':     { emoji: '🎮', order: 3 },
  'crafting':     { emoji: '🔨', order: 4 },
  'spaceships':   { emoji: '🚀', order: 5 },
  'crew':         { emoji: '👥', order: 6 },
  'story':        { emoji: '📜', order: 7 },
  'technical':    { emoji: '🔧', order: 8 },
  'comparisons':  { emoji: '⚖️', order: 9 },
};

export const CATEGORY_ORDER = Object.entries(GUIDE_CATEGORIES)
  .sort(([, a], [, b]) => a.order - b.order)
  .map(([key]) => key);

export const CATEGORY_AFFINITY: Record<string, string[]> = {
  'guides':       ['gameplay', 'updates', 'story'],
  'updates':      ['guides', 'gameplay', 'comparisons'],
  'gameplay':     ['guides', 'crafting', 'story'],
  'crafting':     ['gameplay', 'spaceships', 'guides'],
  'spaceships':   ['crafting', 'gameplay', 'crew'],
  'crew':         ['spaceships', 'story', 'gameplay'],
  'story':        ['crew', 'guides', 'updates'],
  'technical':    ['gameplay', 'comparisons', 'guides'],
  'comparisons':  ['updates', 'technical', 'story'],
};
