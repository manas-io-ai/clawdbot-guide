import { skills, categories } from '@/data/skills';
import { guides } from '@/data/guides';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moltbot Guide — Setup, Skills & Tutorials for Moltbot (Clawdbot) AI Agent',
  description: 'The #1 resource for Moltbot (formerly Clawdbot). Complete setup guides, 50+ skill tutorials, security hardening, troubleshooting, and professional setup services. Updated January 2026.',
  keywords: ['moltbot', 'clawdbot', 'moltbot setup', 'moltbot guide', 'moltbot tutorial', 'AI agent', 'AI assistant', 'autonomous AI', 'moltbot skills', 'moltbot telegram', 'moltbot discord'],
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-16">
        <div className="text-center">
          <div className="inline-block bg-accent/10 text-accent text-xs font-mono px-3 py-1 rounded-full mb-6">
            Updated January 2026 • Covers Clawdbot &amp; Moltbot
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Complete Guide to<br />
            <span className="text-accent glow">Clawdbot</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Everything you need to set up, customize, and master your personal AI assistant.
            From installation to advanced automation — all in one place.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/guides/setup-clawdbot-complete-guide" className="bg-accent text-bg font-semibold px-8 py-3 rounded-lg hover:bg-accent-dim transition">
              Get Started →
            </a>
            <a href="/guides/what-is-clawdbot-moltbot" className="border border-gray-700 text-gray-300 px-8 py-3 rounded-lg hover:border-accent hover:text-accent transition">
              What is Clawdbot?
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '50+', label: 'Skills & Integrations' },
            { value: '7', label: 'Messaging Channels' },
            { value: '24/7', label: 'Always On' },
            { value: 'Free', label: 'Open Source' },
          ].map(s => (
            <div key={s.label} className="bg-card border border-gray-800 rounded-xl p-6 text-center card-glow">
              <div className="text-3xl font-bold text-accent font-mono">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Guides */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">📖 Essential Guides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map(guide => (
            <a key={guide.slug} href={`/guides/${guide.slug}`} className="bg-card border border-gray-800 rounded-xl p-6 hover:border-accent/30 transition group">
              <div className="text-xs text-accent font-mono mb-2">{guide.category}</div>
              <h3 className="font-semibold text-white group-hover:text-accent transition mb-2">{guide.title}</h3>
              <p className="text-sm text-gray-500">{guide.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Skills by Category */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">⚡ Skills & Integrations</h2>
        {categories.map(cat => {
          const catSkills = skills.filter(s => s.category === cat.slug);
          if (catSkills.length === 0) return null;
          return (
            <div key={cat.slug} className="mb-10">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">{cat.icon} {cat.name}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {catSkills.map(skill => (
                  <a key={skill.slug} href={`/skills/${skill.slug}`} className="bg-card border border-gray-800 rounded-lg p-4 hover:border-accent/30 transition group">
                    <h4 className="font-semibold text-white group-hover:text-accent transition">{skill.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{skill.description}</p>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
        <div className="text-center mt-8">
          <a href="/skills" className="text-accent hover:underline">View all {skills.length} skills →</a>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-card border border-accent/20 rounded-2xl p-10 text-center card-glow">
          <h2 className="text-2xl font-bold text-white mb-4">Need Help Setting Up Clawdbot?</h2>
          <p className="text-gray-400 mb-6">We offer professional setup services — get your AI assistant running in under an hour.</p>
          <a href="mailto:io@manasexp.com" className="bg-accent text-bg font-semibold px-8 py-3 rounded-lg hover:bg-accent-dim transition inline-block">
            Get Setup Help — $299 →
          </a>
          <p className="text-xs text-gray-600 mt-3">Full setup, configuration, and training included</p>
        </div>
      </section>

      {/* SEO content */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-invert prose-sm">
          <h2 className="text-xl font-bold text-white mb-4">About This Resource</h2>
          <p className="text-gray-500 text-sm">
            Clawdbot Guide is the most comprehensive resource for Clawdbot (also known as Moltbot), the open-source personal AI assistant created by Peter Steinberger. 
            Whether you're setting up Clawdbot for the first time, looking for advanced configuration tips, or exploring the 50+ available skills and integrations, 
            this guide covers everything. We update our content regularly to reflect the latest features, security practices, and community discoveries. 
            Clawdbot runs locally on your Mac or Linux server and connects to Telegram, WhatsApp, Discord, Slack, iMessage, and more — 
            giving you a 24/7 AI assistant that actually takes actions on your behalf.
          </p>
        </div>
      </section>
    </div>
  );
}
