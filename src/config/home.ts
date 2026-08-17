import {
  BookOpen, Clock, Gamepad2, Hammer, Rocket, Users, ScrollText, Wrench, Scale,
  LifeBuoy, Feather, Gauge, TrendingUp,
  type LucideIcon,
} from 'lucide-react';

export interface StatConfig {
  val: string;
  labelKey: string;
}

export interface ModuleCardConfig {
  key: string;
  labelKey: string;
  titleKey: string;
  descKey: string;
  href: string;
  stats: StatConfig[];
  icon: LucideIcon;
  ctaKey?: string;
}

export interface GameFeatureConfig {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}

export interface StartHereStepConfig {
  titleKey: string;
  descKey: string;
  href: string;
}

export interface HeroCtaConfig {
  labelKey: string;
  href: string;
  style: 'primary' | 'secondary';
}

export const HOME_CONFIG = {
  hero: {
    // Official EA Release Date Trailer — GameTrailers (verified in research_report §2/§3)
    videoId: 'ffJvnGGyfAI',
    badgeKeys: [
      'home_hero_badge_ea',
      'home_hero_badge_genre',
      'home_hero_badge_mode',
      'home_hero_badge_controller',
      'home_hero_badge_languages',
    ],
    ctas: [
      { labelKey: 'home_hero_cta_guides', href: '/guides', style: 'primary' as const },
      { labelKey: 'home_hero_cta_technical', href: '/technical', style: 'secondary' as const },
      { labelKey: 'home_hero_cta_updates', href: '/updates', style: 'secondary' as const },
    ],
  },

  moduleCards: [
    { key: 'guides', labelKey: 'home_module_guides', titleKey: 'home_module_guides_title', descKey: 'home_module_guides_desc', href: '/guides', stats: [{ val: 'Start', labelKey: 'home_module_guides_stat1' }, { val: '10+', labelKey: 'home_module_guides_stat2' }], icon: BookOpen, ctaKey: 'home_module_guides_cta' },
    { key: 'updates', labelKey: 'home_module_updates', titleKey: 'home_module_updates_title', descKey: 'home_module_updates_desc', href: '/updates', stats: [{ val: 'Aug 31', labelKey: 'home_module_updates_stat1' }, { val: '16–20 mo', labelKey: 'home_module_updates_stat2' }], icon: Clock, ctaKey: 'home_module_updates_cta' },
    { key: 'gameplay', labelKey: 'home_module_gameplay', titleKey: 'home_module_gameplay_title', descKey: 'home_module_gameplay_desc', href: '/gameplay', stats: [{ val: 'Zones', labelKey: 'home_module_gameplay_stat1' }, { val: '1P', labelKey: 'home_module_gameplay_stat2' }], icon: Gamepad2, ctaKey: 'home_module_gameplay_cta' },
    { key: 'crafting', labelKey: 'home_module_crafting', titleKey: 'home_module_crafting_title', descKey: 'home_module_crafting_desc', href: '/crafting', stats: [{ val: 'Tools', labelKey: 'home_module_crafting_stat1' }, { val: 'Repair', labelKey: 'home_module_crafting_stat2' }], icon: Hammer, ctaKey: 'home_module_crafting_cta' },
    { key: 'spaceships', labelKey: 'home_module_spaceships', titleKey: 'home_module_spaceships_title', descKey: 'home_module_spaceships_desc', href: '/spaceships', stats: [{ val: 'Ship', labelKey: 'home_module_spaceships_stat1' }, { val: 'Vehicles', labelKey: 'home_module_spaceships_stat2' }], icon: Rocket, ctaKey: 'home_module_spaceships_cta' },
    { key: 'crew', labelKey: 'home_module_crew', titleKey: 'home_module_crew_title', descKey: 'home_module_crew_desc', href: '/crew', stats: [{ val: 'Roles', labelKey: 'home_module_crew_stat1' }, { val: 'Chicken', labelKey: 'home_module_crew_stat2' }], icon: Users, ctaKey: 'home_module_crew_cta' },
    { key: 'story', labelKey: 'home_module_story', titleKey: 'home_module_story_title', descKey: 'home_module_story_desc', href: '/story', stats: [{ val: 'Ch. 1', labelKey: 'home_module_story_stat1' }, { val: 'Corp.', labelKey: 'home_module_story_stat2' }], icon: ScrollText, ctaKey: 'home_module_story_cta' },
    { key: 'technical', labelKey: 'home_module_technical', titleKey: 'home_module_technical_title', descKey: 'home_module_technical_desc', href: '/technical', stats: [{ val: 'GTX 1660', labelKey: 'home_module_technical_stat1' }, { val: '12 GB', labelKey: 'home_module_technical_stat2' }], icon: Wrench, ctaKey: 'home_module_technical_cta' },
    { key: 'comparisons', labelKey: 'home_module_comparisons', titleKey: 'home_module_comparisons_title', descKey: 'home_module_comparisons_desc', href: '/comparisons', stats: [{ val: 'vs B2', labelKey: 'home_module_comparisons_stat1' }, { val: 'Worth?', labelKey: 'home_module_comparisons_stat2' }], icon: Scale, ctaKey: 'home_module_comparisons_cta' },
  ] as ModuleCardConfig[],

  gameFeatures: [
    { titleKey: 'home_feature_survival_title', descKey: 'home_feature_survival_desc', icon: LifeBuoy },
    { titleKey: 'home_feature_chicken_title', descKey: 'home_feature_chicken_desc', icon: Feather },
    { titleKey: 'home_feature_ship_title', descKey: 'home_feature_ship_desc', icon: Rocket },
    { titleKey: 'home_feature_updates_title', descKey: 'home_feature_updates_desc', icon: TrendingUp },
  ] as GameFeatureConfig[],

  startHereSteps: [
    { titleKey: 'home_start_1_title', descKey: 'home_start_1_desc', href: '/guides' },
    { titleKey: 'home_start_2_title', descKey: 'home_start_2_desc', href: '/technical' },
    { titleKey: 'home_start_3_title', descKey: 'home_start_3_desc', href: '/crafting' },
    { titleKey: 'home_start_4_title', descKey: 'home_start_4_desc', href: '/spaceships' },
    { titleKey: 'home_start_5_title', descKey: 'home_start_5_desc', href: '/crew' },
  ] as StartHereStepConfig[],

  gameOverview: {
    infoItems: ['developer', 'publisher', 'platform', 'genre', 'mode', 'release', 'predecessor'],
    cta: {
      guideLabelKey: 'home_about_cta',
      guideHref: '/guides',
      externalLabelKey: 'home_cta_steam',
      externalLinkKey: 'steam',
    },
  },

  faq: {
    keys: ['releaseDate', 'multiplayer', 'demo', 'systemRequirements', 'eaScope', 'vsBreathedge', 'pricePlan'],
  },

  bottomCta: {
    guideHref: '/guides',
    guideLabelKey: 'home_cta_guide',
    externalLinkKey: 'steam',
    externalLabelKey: 'home_cta_steam',
  },
};
