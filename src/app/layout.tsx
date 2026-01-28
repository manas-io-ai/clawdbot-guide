import type { Metadata } from 'next';
import { OrganizationSchema, WebSiteSchema } from '@/components/StructuredData';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Clawdbot Guide — The Complete Resource for Clawdbot (Moltbot)',
    template: '%s | Clawdbot Guide',
  },
  description: 'The definitive resource for Clawdbot (Moltbot) — setup guides, skill tutorials, troubleshooting, and tips for your personal AI assistant.',
  keywords: ['clawdbot', 'moltbot', 'ai assistant', 'personal ai', 'claude', 'setup guide', 'tutorial', 'skills', 'ai agent', 'autonomous ai'],
  authors: [{ name: 'Manas AI', url: 'https://manasexp.com' }],
  creator: 'Manas AI',
  publisher: 'Manas AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Clawdbot Guide',
    title: 'Clawdbot Guide — The Complete Resource for Clawdbot (Moltbot)',
    description: 'The #1 resource for Clawdbot (Moltbot). Setup guides, 50+ skill tutorials, security hardening, and professional setup services.',
    url: 'https://clawdbot.guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clawdbot Guide — Setup, Skills & Tutorials',
    description: 'The definitive resource for Clawdbot (Moltbot) AI assistant. Guides, tutorials, and professional setup services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    'article:author': 'Manas AI',
    'article:publisher': 'https://manasexp.com',
  },
};

function Nav() {
  return (
    <nav className="border-b border-gray-800 bg-bg/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-accent font-mono font-bold text-lg">⚡</span>
          <span className="font-bold text-white text-lg">Clawdbot Guide</span>
        </a>
        <div className="flex gap-6 text-sm">
          <a href="/guides" className="text-gray-400 hover:text-accent transition">Guides</a>
          <a href="/skills" className="text-gray-400 hover:text-accent transition">Skills</a>
          <a href="/guides/setup-clawdbot-complete-guide" className="bg-accent/10 text-accent px-3 py-1 rounded-full hover:bg-accent/20 transition">Get Started</a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-white mb-3">Clawdbot Guide</h3>
            <p className="text-gray-500 text-sm">The definitive resource for setting up and mastering your personal AI assistant.</p>
            <p className="text-gray-600 text-xs mt-2">Built by <a href="https://manasexp.com" className="text-accent hover:underline">Manas AI</a></p>
            <p className="text-gray-700 text-xs mt-1">© {new Date().getFullYear()} Manas AI. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/guides/what-is-clawdbot-moltbot" className="text-gray-500 hover:text-accent">What is Clawdbot?</a></li>
              <li><a href="/guides/setup-clawdbot-complete-guide" className="text-gray-500 hover:text-accent">Setup Guide</a></li>
              <li><a href="/skills" className="text-gray-500 hover:text-accent">All Skills</a></li>
              <li><a href="/guides/clawdbot-security-best-practices" className="text-gray-500 hover:text-accent">Security Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300 mb-3">Official Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://clawd.bot" className="text-gray-500 hover:text-accent">clawd.bot ↗</a></li>
              <li><a href="https://docs.clawd.bot" className="text-gray-500 hover:text-accent">Documentation ↗</a></li>
              <li><a href="https://clawdhub.com" className="text-gray-500 hover:text-accent">ClawdHub Skills ↗</a></li>
              <li><a href="https://discord.com/invite/clawd" className="text-gray-500 hover:text-accent">Discord Community ↗</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <OrganizationSchema />
        <WebSiteSchema />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
