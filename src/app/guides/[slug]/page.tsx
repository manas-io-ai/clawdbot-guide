import { guides, getGuideBySlug } from '@/data/guides';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArticleSchema, FAQSchema, HowToSchema } from '@/components/StructuredData';

export function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.metaDescription,
    keywords: guide.tags,
    authors: [{ name: guide.author, url: 'https://manasexp.com' }],
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      type: 'article',
      publishedTime: guide.publishDate,
      modifiedTime: guide.lastModified,
      authors: [guide.author],
      siteName: 'Clawdbot Guide',
      url: `https://clawdbot.guide/guides/${guide.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.metaDescription,
    },
    other: {
      'article:author': guide.author,
      'article:published_time': guide.publishDate,
      'article:modified_time': guide.lastModified,
    },
  };
}

// Determine if guide is a tutorial/how-to
function isTutorialGuide(slug: string): boolean {
  return ['setup-clawdbot-complete-guide', 'clawdbot-mac-mini-setup', 'clawdbot-advanced-configuration'].includes(slug);
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  // Find related guides
  const related = guides.filter(g => g.slug !== guide.slug && g.tags.some(t => guide.tags.includes(t))).slice(0, 3);

  // Build FAQ HTML
  const faqHtml = guide.faqs.length > 0 ? `
    <h2>Frequently Asked Questions</h2>
    ${guide.faqs.map(faq => `
      <h3>${faq.question}</h3>
      <p>${faq.answer}</p>
    `).join('')}
  ` : '';

  const fullContent = guide.content + faqHtml;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Structured Data */}
      <ArticleSchema
        title={guide.title}
        description={guide.metaDescription}
        slug={guide.slug}
        publishDate={guide.publishDate}
        lastModified={guide.lastModified}
        tags={guide.tags}
      />
      {guide.faqs.length > 0 && <FAQSchema faqs={guide.faqs} />}
      {isTutorialGuide(guide.slug) && (
        <HowToSchema
          name={guide.title}
          description={guide.metaDescription}
          steps={guide.content.match(/## Step \d+:? .+/g)?.map(step => ({ text: step.replace(/^## /, '') })) || []}
        />
      )}

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <a href="/" className="hover:text-accent">Home</a>
        <span className="mx-2">›</span>
        <a href="/guides" className="hover:text-accent">Guides</a>
        <span className="mx-2">›</span>
        <span className="text-gray-400">{guide.category}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-accent font-mono bg-accent/10 px-2 py-0.5 rounded">{guide.category}</span>
          <span className="text-xs text-gray-600">Published {guide.publishDate}</span>
          {guide.lastModified !== guide.publishDate && (
            <span className="text-xs text-gray-600">· Updated {guide.lastModified}</span>
          )}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{guide.title}</h1>
        <p className="text-lg text-gray-400">{guide.description}</p>
        <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
          <span>Written by</span>
          <a href="https://manasexp.com" className="text-accent hover:underline">{guide.author}</a>
        </div>
      </div>

      {/* Content */}
      <article className="article-content prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: markdownToHtml(fullContent) }} />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-gray-800">
        {guide.tags.map(tag => (
          <span key={tag} className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-card border border-accent/20 rounded-xl p-8 mt-10 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Skip the DIY — Get a Fully Managed AI Employee</h3>
        <p className="text-gray-400 mb-4">We handle setup, configuration, and ongoing management so your AI assistant runs 24/7 without you lifting a finger.</p>
        <a href="https://clawd-agency.vercel.app" className="bg-accent text-bg font-semibold px-6 py-2 rounded-lg hover:bg-accent-dim transition inline-block">
          Deploy Your AI Assistant →
        </a>
        <p className="text-xs text-gray-600 mt-3">$5K setup + $500/mo · Done-for-you</p>
      </div>

      {/* Related Guides */}
      {related.length > 0 && (
        <div className="mt-16">
          <h3 className="text-xl font-bold text-white mb-6">Related Guides</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map(r => (
              <a key={r.slug} href={`/guides/${r.slug}`} className="bg-card border border-gray-800 rounded-lg p-4 hover:border-accent/30 transition group">
                <h4 className="font-semibold text-sm text-white group-hover:text-accent transition">{r.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{r.description}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Simple markdown-to-HTML (handles headers, code blocks, lists, links, bold, italic)
function markdownToHtml(md: string): string {
  return md
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-1.5 py-0.5 rounded text-accent text-sm">$1</code>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^(?!<[hluop])((?!<).+)$/gm, '<p>$1</p>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(Boolean).map(c => c.trim());
      if (cells.every(c => /^-+$/.test(c))) return '';
      const tag = 'td';
      return '<tr>' + cells.map(c => `<${tag} class="border border-gray-700 px-3 py-2">${c}</${tag}>`).join('') + '</tr>';
    })
    .replace(/(<tr>.*<\/tr>\n?)+/g, '<table class="w-full border-collapse border border-gray-700 my-4">$&</table>')
    .replace(/- ✅/g, '✅')
    .replace(/- ⚠️/g, '⚠️');
}
