import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { getAllContent } from '@/lib/content';
import { getAlternates } from '@/lib/seo';
import CategoryPage from '@/components/CategoryPage';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = routing.locales.includes(locale as Locale) ? (locale as Locale) : routing.defaultLocale;
  setRequestLocale(validLocale);
  const t = await getTranslations();
  const navKey = t.has('nav_spaceships') ? 'nav_spaceships' : 'nav_home';
  return {
    title: `${t(navKey)} | ${t('site_title')}`,
    description: t.has('page_spaceships_description') ? t('page_spaceships_description') : t('site_description'),
    alternates: getAlternates(`/spaceships`, validLocale),
  };
}

export default async function SpaceshipsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = routing.locales.includes(locale as Locale) ? (locale as Locale) : routing.defaultLocale;
  setRequestLocale(validLocale);

  const allContent = await getAllContent('spaceships', validLocale);
  const articles = allContent.map(item => ({ slug: item.slug, metadata: item.metadata }));

  return <CategoryPage catKey="spaceships" articles={articles} />;
}
