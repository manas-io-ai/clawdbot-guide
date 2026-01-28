import { skills, categories } from '@/data/skills';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Clawdbot Skills & Integrations — 50+ Tools for Your AI Assistant',
  description: 'Browse all 50+ Clawdbot (Moltbot) skills and integrations. Messaging, productivity, development, media, smart home, data, and automation tools.',
};

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-4">⚡ All Skills & Integrations</h1>
      <p className="text-gray-400 mb-12 max-w-2xl">
        Clawdbot (Moltbot) supports 50+ skills and integrations. Browse by category to find the tools that matter to you.
      </p>

      {categories.map(cat => {
        const catSkills = skills.filter(s => s.category === cat.slug);
        if (catSkills.length === 0) return null;
        return (
          <div key={cat.slug} className="mb-12" id={cat.slug}>
            <h2 className="text-2xl font-bold text-white mb-6">{cat.icon} {cat.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {catSkills.map(skill => (
                <a key={skill.slug} href={`/skills/${skill.slug}`} className="bg-card border border-gray-800 rounded-xl p-5 hover:border-accent/30 transition group">
                  <h3 className="font-semibold text-white group-hover:text-accent transition mb-1">{skill.name}</h3>
                  <p className="text-sm text-gray-500">{skill.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {skill.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs text-gray-600 bg-gray-800 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
