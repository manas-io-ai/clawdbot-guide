import { guides } from '@/data/guides';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clawdbot Guides — Setup, Configuration, Security & More',
  description: 'Complete collection of Clawdbot (Moltbot) guides. Installation, setup, security best practices, advanced configuration, monetization, and more.',
};

export default function GuidesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-4">📖 Clawdbot Guides</h1>
      <p className="text-gray-400 mb-12 max-w-2xl">Complete guides for every aspect of Clawdbot (Moltbot) — from first install to advanced automation.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {guides.map(guide => (
          <a key={guide.slug} href={`/guides/${guide.slug}`} className="bg-card border border-gray-800 rounded-xl p-6 hover:border-accent/30 transition group">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-accent font-mono bg-accent/10 px-2 py-0.5 rounded">{guide.category}</span>
              <span className="text-xs text-gray-600">{guide.publishDate}</span>
            </div>
            <h2 className="font-semibold text-white group-hover:text-accent transition mb-2">{guide.title}</h2>
            <p className="text-sm text-gray-500">{guide.description}</p>
            <div className="flex flex-wrap gap-1 mt-3">
              {guide.tags.slice(0, 4).map(tag => (
                <span key={tag} className="text-xs text-gray-600 bg-gray-800 px-2 py-0.5 rounded">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
