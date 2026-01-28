import { skills, getSkillBySlug, categories } from '@/data/skills';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return skills.map(s => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const skill = getSkillBySlug(params.slug);
  if (!skill) return {};
  return {
    title: `${skill.name} — Clawdbot Skill Guide & Setup Tutorial`,
    description: `How to set up and use the ${skill.name} skill in Clawdbot (Moltbot). ${skill.description}`,
    keywords: [...skill.tags, 'clawdbot', 'moltbot', 'skill', 'tutorial'],
  };
}

export default function SkillPage({ params }: { params: { slug: string } }) {
  const skill = getSkillBySlug(params.slug);
  if (!skill) notFound();

  const cat = categories.find(c => c.slug === skill.category);
  const related = skills.filter(s => s.slug !== skill.slug && s.category === skill.category).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <a href="/" className="hover:text-accent">Home</a>
        <span className="mx-2">›</span>
        <a href="/skills" className="hover:text-accent">Skills</a>
        <span className="mx-2">›</span>
        <span className="text-gray-400">{skill.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-accent font-mono bg-accent/10 px-2 py-0.5 rounded">{cat?.icon} {cat?.name}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{skill.name}</h1>
        <p className="text-lg text-gray-400">{skill.description}</p>
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
        <p className="text-gray-300 leading-relaxed">{skill.longDescription}</p>
      </section>

      {/* Use Cases */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">What Can You Do With It?</h2>
        <div className="grid gap-3">
          {skill.useCases.map((uc, i) => (
            <div key={i} className="bg-card border border-gray-800 rounded-lg p-4 flex items-start gap-3">
              <span className="text-accent mt-0.5">✦</span>
              <span className="text-gray-300">{uc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Setup */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Setup Steps</h2>
        <div className="space-y-4">
          {skill.setupSteps.map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-mono text-sm shrink-0">
                {i + 1}
              </div>
              <p className="text-gray-300 pt-1">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-800">
        {skill.tags.map(tag => (
          <span key={tag} className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-card border border-accent/20 rounded-xl p-8 mt-10 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Want {skill.name} Set Up and Managed For You?</h3>
        <p className="text-gray-400 mb-4">We deploy fully managed AI assistants with {skill.name} and 50+ other skills — always on, always working.</p>
        <a href="https://clawd-agency.vercel.app" className="bg-accent text-bg font-semibold px-6 py-2 rounded-lg hover:bg-accent-dim transition inline-block">
          Get Your AI Employee →
        </a>
        <p className="text-xs text-gray-600 mt-3">$5K setup + $500/mo · Fully managed</p>
      </div>

      {/* Related Skills */}
      {related.length > 0 && (
        <div className="mt-16">
          <h3 className="text-xl font-bold text-white mb-6">Related Skills</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map(r => (
              <a key={r.slug} href={`/skills/${r.slug}`} className="bg-card border border-gray-800 rounded-lg p-4 hover:border-accent/30 transition group">
                <h4 className="font-semibold text-sm text-white group-hover:text-accent transition">{r.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{r.description}</p>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: `How to set up ${skill.name} in Clawdbot`,
            description: skill.description,
            step: skill.setupSteps.map((text, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              text,
            })),
          }),
        }}
      />
    </div>
  );
}
