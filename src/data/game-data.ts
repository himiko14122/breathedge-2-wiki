// Game-specific data for Breathedge 2
// Data driven from research_report.md / module_info.mdx verified facts.

/* ──────────────── Color Maps ──────────────── */
export const TIER_COLOR_MAP: Record<string, string> = {
  S: 'var(--color-tier-s)',
  A: 'var(--color-tier-a)',
  B: 'var(--color-tier-b)',
  C: 'var(--color-tier-c)',
};
export const TIER_COLOR_DEFAULT = 'var(--color-tier-c)';

export function tierColor(tier: string): string {
  return TIER_COLOR_MAP[tier] ?? TIER_COLOR_DEFAULT;
}

/* ──────────────── Entity Tables (homepage Table modules) ──────────────── */
export interface ZoneEntry {
  id: string;
  nameKey: string;
  typeKey: string;
  threatKey: string;
  resourceKey: string;
  tier: string;
}

// Regions/zones explored in Early Access Chapter 1 — verified concepts from
// research_report §3 (star systems / zones, planetary surfaces, space).
export const ZONES: ZoneEntry[] = [
  { nameKey: 'zone_debris_name', typeKey: 'zone_debris_type', threatKey: 'zone_debris_threat', resourceKey: 'zone_debris_resource', tier: 'C', id: 'debris' },
  { nameKey: 'zone_o2station_name', typeKey: 'zone_o2station_type', threatKey: 'zone_o2station_threat', resourceKey: 'zone_o2station_resource', tier: 'B', id: 'o2station' },
  { nameKey: 'zone_planet_name', typeKey: 'zone_planet_type', threatKey: 'zone_planet_threat', resourceKey: 'zone_planet_resource', tier: 'A', id: 'planet' },
  { nameKey: 'zone_chapter1_name', typeKey: 'zone_chapter1_type', threatKey: 'zone_chapter1_threat', resourceKey: 'zone_chapter1_resource', tier: 'S', id: 'chapter1' },
];

export interface SystemEntry {
  id: string;
  nameKey: string;
  roleKey: string;
  locKey: string;
  resourceKey: string;
  tier: string;
}

// Star systems / zones per official three pillars (research_report §3).
export const STAR_SYSTEMS: SystemEntry[] = [
  { nameKey: 'sys_open_name', roleKey: 'sys_open_role', locKey: 'sys_open_loc', resourceKey: 'sys_open_resource', tier: 'A', id: 'open' },
  { nameKey: 'sys_station_name', roleKey: 'sys_station_role', locKey: 'sys_station_loc', resourceKey: 'sys_station_resource', tier: 'B', id: 'station' },
  { nameKey: 'sys_surface_name', roleKey: 'sys_surface_role', locKey: 'sys_surface_loc', resourceKey: 'sys_surface_resource', tier: 'B', id: 'surface' },
  { nameKey: 'sys_demo_name', roleKey: 'sys_demo_role', locKey: 'sys_demo_loc', resourceKey: 'sys_demo_resource', tier: 'C', id: 'demo' },
];

/* ──────────────── Entity Cards (homepage Cards modules) ──────────────── */
export interface CrewEntry {
  id: string;
  nameKey: string;
  roleKey: string;
  needKey: string;
  tier: string;
}

export const CREW: CrewEntry[] = [
  { nameKey: 'crew_chicken_name', roleKey: 'crew_chicken_role', needKey: 'crew_chicken_need', tier: 'S', id: 'chicken' },
  { nameKey: 'crew_rp_name', roleKey: 'crew_rp_role', needKey: 'crew_rp_need', tier: 'A', id: 'rp' },
  { nameKey: 'crew_engineer_name', roleKey: 'crew_engineer_role', needKey: 'crew_engineer_need', tier: 'A', id: 'engineer' },
  { nameKey: 'crew_cook_name', roleKey: 'crew_cook_role', needKey: 'crew_cook_need', tier: 'B', id: 'cook' },
];

export interface CraftEntry {
  id: string;
  nameKey: string;
  sourceKey: string;
  useKey: string;
  tier: string;
}

export const CRAFTING: CraftEntry[] = [
  { nameKey: 'craft_tape_name', sourceKey: 'craft_tape_source', useKey: 'craft_tape_use', tier: 'S', id: 'tape' },
  { nameKey: 'craft_metal_name', sourceKey: 'craft_metal_source', useKey: 'craft_metal_use', tier: 'A', id: 'metal' },
  { nameKey: 'craft_oxygen_name', sourceKey: 'craft_oxygen_source', useKey: 'craft_oxygen_use', tier: 'S', id: 'oxygen' },
  { nameKey: 'craft_suit_name', sourceKey: 'craft_suit_source', useKey: 'craft_suit_use', tier: 'A', id: 'suit' },
];

/* ──────────────── Sidebar Codes ──────────────── */
export interface SidebarCode {
  code: string;
  reward: string;
}

// Breathedge 2 has no redemption-code system (non-Gacha Steam title, no in-game codes).
// Contract: placeholder-only, never mixed with real codes.
export const SIDEBAR_CODES: SidebarCode[] = [
  { code: 'None', reward: 'No active codes yet. Check back soon!' },
];

/* ──────────────── Footer Data (T3 replaces from research_report 3d) ──────────────── */
export const FOOTER_DATA = {
  officialDiscordUrl: 'https://discord.gg/uezQcU7',
  officialYoutubeUrl: 'https://www.youtube.com/channel/UCWiB1kDWmjFPIFMTdj0eL9Q',
  communityTool: { label: 'Steam Store', href: 'https://store.steampowered.com/app/2412960/Breathedge_2/' },
} as const;
