import { skills } from '@/data/skills';
import { guides } from '@/data/guides';
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://clawdbot.guide';
const LAST_UPDATED = '2026-01-28';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE, lastModified: new Date(LAST_UPDATED), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${BASE}/guides`, lastModified: new Date(LAST_UPDATED), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${BASE}/skills`, lastModified: new Date(LAST_UPDATED), changeFrequency: 'daily' as const, priority: 0.9 },
  ];

  const guidePages = guides.map(g => ({
    url: `${BASE}/guides/${g.slug}`,
    lastModified: new Date(g.lastModified || g.publishDate),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const skillPages = skills.map(s => ({
    url: `${BASE}/skills/${s.slug}`,
    lastModified: new Date(LAST_UPDATED),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...guidePages, ...skillPages];
}
