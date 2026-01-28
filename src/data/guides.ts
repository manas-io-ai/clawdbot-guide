export interface Guide {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
  category: string;
  tags: string[];
  publishDate: string;
  lastModified: string;
  author: string;
  content: string;
  faqs: { question: string; answer: string }[];
}

export const guides: Guide[] = [
  {
    slug: 'what-is-clawdbot-moltbot',
    title: 'What Is Clawdbot (Moltbot)? The Complete Guide to Your Personal AI Assistant',
    description: 'Everything you need to know about Clawdbot/Moltbot — the open-source AI assistant that runs on your own computer.',
    metaDescription: 'Clawdbot (Moltbot) is an open-source AI agent that runs 24/7 on your Mac or server, connecting to Telegram, Discord, WhatsApp and more.',
    category: 'getting-started',
    tags: ['clawdbot', 'moltbot', 'ai-assistant', 'introduction', 'ai-agent'],
    publishDate: '2026-01-27',
    lastModified: '2026-01-28',
    author: 'Manas AI',
    faqs: [
      {
        question: 'What is Clawdbot?',
        answer: 'Clawdbot (now also called Moltbot) is an open-source personal AI assistant that runs locally on your Mac or Linux server. Unlike cloud-based AI tools, Clawdbot operates as a 24/7 background service that connects to messaging apps like Telegram, WhatsApp, Discord, and Slack, allowing it to take real actions like managing email, controlling smart home devices, and automating workflows.',
      },
      {
        question: 'What is the difference between Clawdbot and Moltbot?',
        answer: 'There is no functional difference between Clawdbot and Moltbot. The project was renamed from Clawdbot to Moltbot in January 2026 due to a legal naming concern. "Molt" refers to shedding old skin. The codebase, skills, and capabilities remain identical. Both names are used interchangeably in the community.',
      },
      {
        question: 'Who created Clawdbot?',
        answer: 'Clawdbot/Moltbot was created by Peter Steinberger (@steipete), a well-known iOS developer and founder of PSPDFKit. The project is fully open-source and has a rapidly growing community of developers and power users.',
      },
      {
        question: 'How much does Clawdbot cost to run?',
        answer: 'Clawdbot itself is free and open-source. The primary cost is an LLM subscription — Claude Max at $100/month is recommended for unlimited usage. Combined with a Mac mini (amortized ~$30/month) and electricity (~$5/month), the total cost is approximately $135/month for a 24/7 personal AI assistant.',
      },
      {
        question: 'What can Clawdbot do?',
        answer: 'Clawdbot can manage email, calendars, and files; write and review code; control smart home devices; browse the web; generate images; post to social media; automate workflows with cron jobs; transcribe audio; and much more through its extensible skill system with 50+ available integrations.',
      },
    ],
    content: `
Clawdbot (also known as Moltbot) is an open-source personal AI assistant that runs 24/7 on your local machine — typically a Mac mini, MacBook, or Linux server. It connects to messaging apps like Telegram, WhatsApp, Discord, and Slack, allowing you to interact with a powerful AI agent that can take real actions on your behalf: managing email, controlling smart home devices, writing code, and automating workflows.

## What Is Clawdbot?

Unlike ChatGPT or other cloud-based AI tools that live in a browser tab, Clawdbot runs as a background service on your own computer. Think of it as having a brilliant, tireless coworker who lives on your computer 24/7 and can do almost anything a person could do at a keyboard.

## Why Is It Going Viral?

Clawdbot exploded in popularity in January 2026 for several reasons:

1. **It actually does things** — not just chat. It reads emails, manages calendars, controls smart home devices, writes code, browses the web, and automates workflows.
2. **It runs locally** — your data stays on your machine. No corporate servers, no data harvesting.
3. **It's always on** — 24/7 background service with proactive behaviors (cron jobs, heartbeats, monitoring).
4. **It has persistent memory** — unlike ChatGPT, Clawdbot remembers everything across sessions.
5. **It's extensible** — a growing ecosystem of "skills" lets you add new capabilities.
6. **It connects to your apps** — message it from your phone, laptop, or watch.

## How Does It Work?

Clawdbot has three main components:

### 1. The Gateway
The core service that runs on your machine. It manages:
- Connections to messaging channels (Telegram, WhatsApp, etc.)
- LLM provider routing (Claude, OpenAI, etc.)
- Session management and memory
- Cron jobs and heartbeats
- Tool execution

### 2. Skills
Modular plugins that give Clawdbot specific capabilities. Examples:
- **Gmail/Calendar** — read and send emails, manage events
- **GitHub** — manage repos, issues, and PRs
- **Smart Home** — control lights, speakers, cameras
- **Browser** — automate web tasks
- **Voice** — text-to-speech and speech-to-text

### 3. Memory System
Clawdbot maintains persistent memory through:
- **MEMORY.md** — long-term curated memories
- **Daily files** — detailed logs of each day
- **SOUL.md** — personality and behavior guidelines
- **TOOLS.md** — environment-specific configurations

## What Can Clawdbot Actually Do?

Here's a real sampling of things people are doing with Clawdbot:

- ✅ **Email management** — read, summarize, compose, and send emails
- ✅ **Calendar management** — check events, create meetings, set reminders
- ✅ **Code development** — write, review, test, and deploy code
- ✅ **Web research** — search, browse, and summarize web content
- ✅ **Smart home control** — lights, speakers, cameras, thermostats
- ✅ **File management** — organize, search, and process files
- ✅ **Social media** — post to X/Twitter, monitor mentions
- ✅ **Automation** — cron jobs, monitoring, scheduled tasks
- ✅ **Voice** — text-to-speech, speech-to-text, voice calls
- ✅ **Image generation** — create and edit images with AI

## Clawdbot vs Moltbot — What's the Difference?

Nothing functional. The project was renamed from Clawdbot to **Moltbot** in January 2026 due to a legal naming concern. "Molt" refers to shedding old skin — fitting for the rebrand. The codebase, skills, and everything else remain the same. Both names are used interchangeably in the community.

## Who Made It?

Clawdbot/Moltbot was created by **Peter Steinberger (@steipete)**, a well-known iOS developer and founder of PSPDFKit. The project is open-source and has a rapidly growing community.

## What Do I Need to Get Started?

- A **Mac mini** (recommended), MacBook, or Linux server
- A **Claude Max** subscription ($100/month) or other LLM API access
- A **messaging app** account (Telegram is easiest to set up)
- ~30 minutes for initial setup

Ready to get started? Check out our [Complete Setup Guide](/guides/setup-clawdbot-complete-guide).

*Written by [Manas AI](https://manasexp.com) · Published January 27, 2026 · Last updated January 28, 2026*
    `,
  },
  {
    slug: 'setup-clawdbot-complete-guide',
    title: 'How to Set Up Clawdbot (Moltbot) — Complete Step-by-Step Guide (2026)',
    description: 'The definitive setup guide for Clawdbot/Moltbot. From zero to a working AI assistant in 30 minutes.',
    metaDescription: 'Step-by-step guide to install and configure Clawdbot (Moltbot) on Mac or Linux. Get your personal AI assistant running in 30 minutes.',
    category: 'getting-started',
    tags: ['setup', 'install', 'tutorial', 'guide', 'getting-started'],
    publishDate: '2026-01-27',
    lastModified: '2026-01-28',
    author: 'Manas AI',
    faqs: [
      {
        question: 'How do I install Clawdbot?',
        answer: 'Install Clawdbot by running "npm install -g clawdbot@latest" in your terminal, or use the one-line installer: "curl -fsSL https://get.clawd.bot | bash". Then run "clawdbot onboard --install-daemon" to complete the interactive setup wizard.',
      },
      {
        question: 'How long does it take to set up Clawdbot?',
        answer: 'A complete Clawdbot setup takes approximately 30 minutes. This includes installing the software, configuring an LLM provider (Claude Max recommended), setting up a messaging channel (Telegram is easiest), and customizing your AI persona.',
      },
      {
        question: 'What are the system requirements for Clawdbot?',
        answer: 'Clawdbot requires macOS (Apple Silicon recommended) or Linux, Node.js 18+, an LLM subscription (Claude Max at $100/month recommended), and a messaging app account. A Mac mini M2 or newer is the ideal hardware for running Clawdbot 24/7.',
      },
      {
        question: 'How do I set up Clawdbot with Telegram?',
        answer: 'To connect Clawdbot to Telegram: 1) Open Telegram and message @BotFather, 2) Send /newbot and choose a name and username, 3) Copy the bot token, 4) Paste it into the clawdbot setup wizard when prompted, 5) Set your Telegram user ID for authorization.',
      },
      {
        question: 'What should I do if Clawdbot is not responding?',
        answer: 'If Clawdbot is not responding, check these steps: 1) Verify the gateway is running with "clawdbot gateway status", 2) Check your API key is valid, 3) Verify your bot token is correct, 4) Review logs with "clawdbot gateway logs", 5) Try restarting with "clawdbot gateway restart".',
      },
    ],
    content: `
Setting up Clawdbot (Moltbot) takes about 30 minutes and requires a Mac or Linux machine, Node.js 18+, an LLM subscription like Claude Max, and a Telegram account. This step-by-step guide walks you through the entire installation and configuration process from start to finish.

## Prerequisites

Before you start, make sure you have:

- **macOS** (Apple Silicon recommended) or **Linux** server
- **Node.js 18+** installed (the installer can handle this)
- An **LLM subscription** — Claude Max ($100/mo) recommended, or any OpenAI/Anthropic API key
- A **Telegram account** (easiest channel to start with)

## Step 1: Install Clawdbot

Open your terminal and run:

\`\`\`bash
npm install -g clawdbot@latest
\`\`\`

Or use the one-line installer:

\`\`\`bash
curl -fsSL https://get.clawd.bot | bash
\`\`\`

Verify installation:

\`\`\`bash
clawdbot --version
\`\`\`

## Step 2: Run the Setup Wizard

\`\`\`bash
clawdbot onboard --install-daemon
\`\`\`

This interactive wizard walks you through:
1. **LLM Provider** — select Claude, OpenAI, or other provider
2. **API Key** — enter your API key or configure Claude Max proxy
3. **Channel** — choose Telegram, WhatsApp, Discord, or Slack
4. **Channel credentials** — bot token, webhook URL, etc.
5. **Daemon setup** — install as a background service

## Step 3: Set Up Telegram (Recommended First Channel)

1. Open Telegram and search for **@BotFather**
2. Send \`/newbot\`
3. Choose a name (e.g., "My AI Assistant")
4. Choose a username (e.g., "myai_assistant_bot")
5. Copy the **bot token** BotFather gives you
6. Paste it into the clawdbot setup wizard
7. **Important:** Also set your Telegram user ID for authorization

## Step 4: Configure Your AI Persona

After setup, Clawdbot creates workspace files:

- **SOUL.md** — personality and behavior rules
- **USER.md** — information about you (helps the AI understand context)
- **MEMORY.md** — persistent memory storage
- **AGENTS.md** — operational guidelines

Edit these files to customize your AI's personality, knowledge about you, and behavior.

## Step 5: Start Chatting!

Send a message to your Telegram bot. If everything is configured correctly, you'll get a response from your AI assistant.

Try these first commands:
- "What can you do?"
- "What's the weather in [your city]?"
- "Remind me to [task] in 30 minutes"
- "Check my email" (if Gmail is configured)

## Step 6: Install Skills

Expand your AI's capabilities with skills:

\`\`\`bash
clawdhub install gmail
clawdhub install weather
clawdhub install summarize
clawdhub install github
\`\`\`

Browse all available skills at [clawdhub.com](https://clawdhub.com).

## Troubleshooting

### "Command not found" after install
\`\`\`bash
hash -r
# or restart your terminal
\`\`\`

### Gateway won't start
\`\`\`bash
clawdbot gateway status
clawdbot gateway restart
\`\`\`

### No response from bot
1. Check gateway is running: \`clawdbot gateway status\`
2. Check API key is valid
3. Check Telegram bot token is correct
4. Look at logs: \`clawdbot gateway logs\`

### Rate limits
Claude Max gives generous limits but they exist. If you hit them, the gateway will queue messages and retry.

## Next Steps

- **[Complete Skills Guide](/skills)** — browse all available integrations
- **[Security Best Practices](/guides/clawdbot-security-best-practices)** — secure your setup
- **[Advanced Configuration](/guides/clawdbot-advanced-configuration)** — customize everything

*Written by [Manas AI](https://manasexp.com) · Published January 27, 2026 · Last updated January 28, 2026*
    `,
  },
  {
    slug: 'clawdbot-security-best-practices',
    title: 'Clawdbot Security Best Practices — How to NOT Get Hacked (2026)',
    description: 'Essential security guide for Clawdbot/Moltbot. Protect your AI assistant from prompt injection, exposed credentials, and unauthorized access.',
    metaDescription: 'Secure your Clawdbot (Moltbot) installation with these essential security practices. Protect API keys, prevent prompt injection, and lock down access.',
    category: 'security',
    tags: ['security', 'safety', 'credentials', 'prompt-injection'],
    publishDate: '2026-01-27',
    lastModified: '2026-01-28',
    author: 'Manas AI',
    faqs: [
      {
        question: 'Is Clawdbot secure?',
        answer: 'Clawdbot is secure by default when properly configured. It runs locally on your machine with localhost-only access, keeping your data private. However, you must configure user authorization, secure your API keys, guard against prompt injection, and keep the software updated to maintain security.',
      },
      {
        question: 'How do I protect Clawdbot from prompt injection?',
        answer: 'To protect Clawdbot from prompt injection attacks: keep SOUL.md boundaries strict, be cautious with auto-processing external content like emails and web pages, review what skills have access to sensitive data, and monitor logs regularly for suspicious activity.',
      },
      {
        question: 'Should I expose Clawdbot to the internet?',
        answer: 'No. Your Clawdbot gateway should only be accessible on localhost (127.0.0.1). Never port-forward it or put it on a public IP without proper authentication. Exposed instances have been found via Shodan, potentially leaking API keys and conversation histories.',
      },
      {
        question: 'How do I secure my Clawdbot API keys?',
        answer: 'Store API keys in environment variables rather than config files. Use 1Password CLI integration if available. Never commit config files with keys to git. Rotate keys immediately if you suspect they have been exposed.',
      },
    ],
    content: `
Clawdbot security is critical because the AI assistant has access to your emails, files, calendar, and potentially your entire computer. A misconfigured Clawdbot instance is like leaving your laptop unlocked in a coffee shop — except the coffee shop is the internet. This guide covers essential security practices every Clawdbot user must follow.

## Why Security Matters

Recent security research has shown that exposed Clawdbot instances can be found via Shodan, potentially leaking API keys, conversation histories, and control access.

## Essential Security Checklist

### 1. Never Expose Your Gateway to the Internet
Your Clawdbot gateway should **only** be accessible locally. Never port-forward it or put it on a public IP without authentication.

\`\`\`bash
# Good: localhost only (default)
gateway.host: 127.0.0.1

# Bad: accessible from anywhere
gateway.host: 0.0.0.0
\`\`\`

### 2. Secure Your API Keys
- Store API keys in environment variables, not in config files
- Use 1Password CLI integration if available
- Never commit config files with keys to git
- Rotate keys if you suspect exposure

### 3. Set User Authorization
Always configure authorized users for your messaging channels:

\`\`\`yaml
# Telegram: restrict to your user ID
telegram:
  allowedUsers: [YOUR_USER_ID]
\`\`\`

### 4. Guard Against Prompt Injection
Clawdbot processes messages from external sources (emails, web pages, etc.). Malicious content could try to:
- Override Clawdbot's instructions
- Exfiltrate data through tool calls
- Execute unauthorized commands

**Mitigations:**
- Keep SOUL.md boundaries strict
- Be cautious with auto-processing external content
- Review what skills have access to

### 5. Monitor Logs
Regularly check what your Clawdbot is doing:
\`\`\`bash
clawdbot gateway logs
\`\`\`

### 6. Keep Updated
\`\`\`bash
npm update -g clawdbot
\`\`\`

Security patches are released regularly. Stay current.

## Network Security

- Use a firewall (macOS firewall is sufficient for basic protection)
- If using VPN/proxy, ensure it doesn't expose the gateway port
- Consider running Clawdbot in a separate user account with limited permissions

## Data Privacy

Remember: Clawdbot sends your messages to LLM providers (Anthropic, OpenAI, etc.). While these providers have privacy policies:
- Don't share extremely sensitive data (SSNs, passwords, etc.) in chat
- Consider what tools and files Clawdbot has access to
- Review and clean memory files periodically

*Written by [Manas AI](https://manasexp.com) · Published January 27, 2026 · Last updated January 28, 2026*
    `,
  },
  {
    slug: 'clawdbot-advanced-configuration',
    title: 'Clawdbot Advanced Configuration — Customize Everything (2026)',
    description: 'Deep dive into Clawdbot/Moltbot configuration. Multi-agent setups, custom models, heartbeats, cron jobs, and more.',
    metaDescription: 'Advanced Clawdbot (Moltbot) configuration: multi-agent setups, custom models, heartbeats, cron jobs, and automation workflows.',
    category: 'advanced',
    tags: ['configuration', 'advanced', 'multi-agent', 'customization'],
    publishDate: '2026-01-27',
    lastModified: '2026-01-28',
    author: 'Manas AI',
    faqs: [
      {
        question: 'Can Clawdbot run multiple AI agents?',
        answer: 'Yes. Clawdbot supports multi-agent setups where you can run multiple AI agents with different personalities, capabilities, and LLM models simultaneously. Each agent can have its own SOUL.md personality file, tool access, and model configuration (e.g., Claude Opus for complex reasoning, Sonnet for routine tasks).',
      },
      {
        question: 'What are Clawdbot heartbeats?',
        answer: 'Heartbeats are periodic check-ins where Clawdbot proactively performs tasks without being prompted. Configured via a heartbeat interval (typically every 30 minutes), Clawdbot will check your email inbox, calendar events, social media mentions, and anything else defined in your HEARTBEAT.md file.',
      },
      {
        question: 'How do I set up cron jobs in Clawdbot?',
        answer: 'Configure cron jobs in Clawdbot\'s gateway config using standard cron syntax. For example, "0 8 * * *" runs a task at 8 AM daily. Common uses include morning briefings, periodic email checks, scheduled social media posts, and automated monitoring alerts.',
      },
      {
        question: 'How does Clawdbot memory work?',
        answer: 'Clawdbot uses a file-based memory system: MEMORY.md stores curated long-term memories, daily files (memory/YYYY-MM-DD.md) contain detailed logs, SOUL.md defines personality and behavior, and USER.md stores information about the user. This persistent memory survives across sessions, unlike cloud-based AI tools.',
      },
    ],
    content: `
Clawdbot (Moltbot) offers deep customization through its configuration system, supporting multi-agent setups, custom model routing, heartbeat-driven proactive behaviors, cron job scheduling, and a flexible memory management architecture. This guide covers every advanced configuration option available.

## Configuration File

Clawdbot's configuration lives in its gateway config. Access it via:

\`\`\`bash
clawdbot config edit
\`\`\`

## Multi-Agent Setup

Run multiple AI agents with different personalities and capabilities:

\`\`\`yaml
agents:
  main:
    model: anthropic/claude-sonnet-4
    soul: SOUL.md
  researcher:
    model: anthropic/claude-opus-4
    soul: RESEARCHER-SOUL.md
  coder:
    model: anthropic/claude-sonnet-4
    soul: CODER-SOUL.md
\`\`\`

Each agent can have its own personality, tools, and model.

## Heartbeat Configuration

Heartbeats are periodic check-ins where Clawdbot can do proactive work:

\`\`\`yaml
heartbeat:
  interval: 1800  # every 30 minutes
  prompt: "Check HEARTBEAT.md and do proactive work"
\`\`\`

Use HEARTBEAT.md to define what your AI should check during heartbeats:
- Email inbox
- Calendar events
- Social media mentions
- System health
- Anything you want monitored

## Cron Jobs

Schedule specific tasks at exact times:

\`\`\`yaml
cron:
  - schedule: "0 8 * * *"  # 8 AM daily
    task: "Give me a morning briefing"
  - schedule: "0 */2 * * *"  # every 2 hours
    task: "Check for urgent emails"
\`\`\`

## Model Routing

Route different tasks to different models for cost optimization:

- Use Claude Opus for complex reasoning
- Use Claude Sonnet for routine tasks
- Use Claude Haiku for simple responses

## Custom Tools

Extend Clawdbot with custom shell scripts and tools:

1. Create a script in your workspace
2. Reference it in TOOLS.md
3. Clawdbot can discover and use it

## Memory Management

- **MEMORY.md** — curated long-term memory (edit manually or let AI maintain it)
- **memory/YYYY-MM-DD.md** — daily logs (auto-generated)
- **SOUL.md** — personality (stable, rarely changes)
- **USER.md** — info about you (update as needed)

## Performance Tips

- Use Claude Max for unlimited usage on supported models
- Enable session recycling for long-running conversations
- Configure thinking levels appropriately (low for simple, high for complex)
- Use sub-agents for parallel work

*Written by [Manas AI](https://manasexp.com) · Published January 27, 2026 · Last updated January 28, 2026*
    `,
  },
  {
    slug: 'clawdbot-vs-chatgpt-comparison',
    title: 'Clawdbot vs ChatGPT vs Custom GPTs — Which AI Assistant Is Right for You?',
    description: 'Detailed comparison of Clawdbot/Moltbot, ChatGPT, and Custom GPTs for personal AI assistance.',
    metaDescription: 'Clawdbot vs ChatGPT vs Custom GPTs comparison. See which AI assistant offers the best automation, privacy, and capabilities.',
    category: 'comparison',
    tags: ['comparison', 'chatgpt', 'alternatives', 'vs'],
    publishDate: '2026-01-27',
    lastModified: '2026-01-28',
    author: 'Manas AI',
    faqs: [
      {
        question: 'What is the difference between Clawdbot and ChatGPT?',
        answer: 'The key difference is agency. ChatGPT is a conversation tool that answers questions in a browser. Clawdbot is an agent platform that runs locally on your machine 24/7, taking real actions: managing email, controlling smart homes, automating workflows, and connecting to messaging apps like Telegram and Discord. ChatGPT costs $20/month; Clawdbot costs ~$100/month (Claude Max) but offers far more automation capability.',
      },
      {
        question: 'Is Clawdbot better than ChatGPT?',
        answer: 'Clawdbot is better than ChatGPT for users who want a real AI assistant that takes actions, runs 24/7, and integrates with their tools and devices. ChatGPT is better for users who just want to chat, have a limited budget ($20/month vs ~$100/month), or prefer zero setup. They use similar underlying AI models — the difference is in capabilities, not intelligence.',
      },
      {
        question: 'Can Clawdbot replace ChatGPT?',
        answer: 'Clawdbot can fully replace ChatGPT for most use cases and goes far beyond it. While ChatGPT only answers questions in a browser tab, Clawdbot manages your email, calendar, files, smart home, code deployments, and more — all accessible from your phone through Telegram, WhatsApp, or Discord.',
      },
      {
        question: 'How much does Clawdbot cost compared to ChatGPT?',
        answer: 'ChatGPT Plus costs $20/month for web-based AI chat. Clawdbot is free (open-source) but requires a Claude Max subscription at $100/month for unlimited LLM access, plus hardware costs (Mac mini amortized ~$30/month). Total cost is approximately $135/month for a fully autonomous 24/7 AI assistant.',
      },
    ],
    content: `
Clawdbot (Moltbot) and ChatGPT serve fundamentally different purposes: ChatGPT is a conversation tool that answers questions in a browser, while Clawdbot is an autonomous AI agent platform that runs 24/7 on your local machine, takes real actions, and connects to your messaging apps, email, calendar, smart home, and development tools. Here's a detailed comparison to help you choose.

## The Big Picture

| Feature | Clawdbot/Moltbot | ChatGPT Plus | Custom GPTs |
|---------|-----------------|--------------|-------------|
| **Runs locally** | ✅ Yes | ❌ Cloud only | ❌ Cloud only |
| **Always on (24/7)** | ✅ Yes | ❌ Session-based | ❌ Session-based |
| **Persistent memory** | ✅ Unlimited | ⚠️ Limited | ⚠️ Limited |
| **Tool access** | ✅ Full system | ⚠️ Sandboxed | ⚠️ Sandboxed |
| **Messaging apps** | ✅ All major | ❌ Web/app only | ❌ Web/app only |
| **Proactive actions** | ✅ Cron/heartbeat | ❌ No | ❌ No |
| **Open source** | ✅ Yes | ❌ No | ❌ No |
| **Cost** | ~$100/mo (Claude Max) | $20/mo | $20/mo |
| **Setup difficulty** | Medium | Easy | Easy |

## When Clawdbot Wins

- **You want a real assistant**, not a chatbot — one that manages emails, calendar, files, and automations
- **Privacy matters** — your data stays on your machine
- **You need 24/7 availability** — always running, always reachable
- **You want deep integration** — smart home, development tools, business processes
- **You're technical** (or willing to learn) — setup requires some command line comfort

## When ChatGPT Wins

- **You just want to chat** — no need for tools or automation
- **Budget is tight** — $20/mo vs ~$100/mo
- **You want zero setup** — works instantly in a browser
- **You don't need persistence** — each conversation is standalone

## The Real Differentiator

ChatGPT is a **conversation tool**. Clawdbot is an **agent platform**. 

ChatGPT answers questions. Clawdbot takes actions. It reads your email and drafts responses. It checks your calendar and warns you about conflicts. It monitors your code deployments and alerts you to failures. It controls your lights when you say "goodnight."

The gap isn't intelligence — they use similar models. The gap is **agency**. Clawdbot has hands.

*Written by [Manas AI](https://manasexp.com) · Published January 27, 2026 · Last updated January 28, 2026*
    `,
  },
  {
    slug: 'make-money-with-clawdbot',
    title: 'How to Make Money with Clawdbot (Moltbot) — 10 Proven Revenue Streams (2026)',
    description: 'Practical guide to monetizing your Clawdbot skills. From freelancing to building SaaS products.',
    metaDescription: 'Learn 10 proven ways to make money with Clawdbot (Moltbot) in 2026. Freelancing, setup services, automation, SaaS, and more.',
    category: 'monetization',
    tags: ['money', 'revenue', 'freelancing', 'business', 'monetization'],
    publishDate: '2026-01-27',
    lastModified: '2026-01-28',
    author: 'Manas AI',
    faqs: [
      {
        question: 'How can I make money with Clawdbot?',
        answer: 'There are 10 proven revenue streams with Clawdbot: setup-as-a-service ($300-$500/client), custom automation development ($500-$3,000/project), skill development for ClawdHub ($200-$1,000/skill), consulting and training ($100-$200/hour), content creation, managed hosting ($50-$200/month/client), trading bots, AI agent marketplace, white-label solutions, and SaaS products.',
      },
      {
        question: 'How much can I charge for Clawdbot setup services?',
        answer: 'Clawdbot setup services typically charge $300-$500 per client for a complete setup including installation, messaging channel configuration, skill setup, personality customization, and training. Find clients on Reddit (r/ClaudeCode, r/AgentsOfAI), Discord, Upwork, and Twitter/X.',
      },
      {
        question: 'Is there demand for Clawdbot services?',
        answer: 'Yes, demand for Clawdbot expertise is growing rapidly as the platform went viral in January 2026. Many people want the capabilities of a personal AI assistant but lack the technical skills to set it up. Early movers who establish expertise are well-positioned to capitalize on this growing market.',
      },
      {
        question: 'Can I build a SaaS product with Clawdbot?',
        answer: 'Yes. Clawdbot can power SaaS products like AI email assistant services, social media management platforms, automated research tools, and meeting assistant services. The open-source codebase and extensible skill system make it an excellent foundation for productized AI agent solutions.',
      },
    ],
    content: `
Making money with Clawdbot (Moltbot) is a real and growing opportunity in 2026. The platform exploded in popularity in January 2026, creating massive demand for setup services, custom automations, skill development, and AI agent consulting. Here are 10 proven revenue streams, with pricing benchmarks and practical steps to get started.

## The Opportunity

Clawdbot/Moltbot is exploding in popularity (January 2026), and there's massive demand for people who can set it up, customize it, and build automations with it. Here are 10 proven ways to turn that demand into revenue.

## 1. Setup-as-a-Service ($300-$500 per client)

Many people want Clawdbot but don't have the technical skills to set it up. Offer a complete setup service:
- Install and configure Clawdbot
- Set up messaging channels
- Configure skills and tools
- Customize personality and memory
- Provide documentation and training

**Where to find clients:** Reddit (r/ClaudeCode, r/AgentsOfAI), Discord, Upwork, Twitter

## 2. Custom Automation Development ($500-$3,000 per project)

Build custom automations for businesses:
- Email management workflows
- Customer support bots
- Data processing pipelines
- Social media management
- CRM integrations

## 3. Skill Development ($200-$1,000 per skill)

Build and sell custom Clawdbot skills on ClawdHub:
- Industry-specific integrations
- Custom API connectors
- Workflow templates
- Monitoring tools

## 4. Consulting & Training ($100-$200/hour)

Help organizations implement AI assistants:
- Strategy consulting
- Team training
- Architecture planning
- Security auditing

## 5. Content & Education

Create educational content about Clawdbot:
- YouTube tutorials (ad revenue)
- Online courses (Udemy, Teachable)
- Blog posts and newsletters
- Consulting leads from content

## 6. Managed Hosting ($50-$200/month per client)

Offer hosted Clawdbot instances:
- Set up on DigitalOcean or similar
- Manage updates and maintenance
- Monitor for issues
- Provide ongoing support

## 7. Trading Bots & Financial Automation

Build automated trading systems:
- Polymarket prediction bots
- Crypto monitoring and alerts
- Financial data analysis
- Portfolio tracking

## 8. AI Agent Marketplace

Build and sell pre-configured AI agent setups:
- "Sales Agent" — lead qualification, outreach, follow-up
- "Research Agent" — competitive intelligence, market analysis
- "Dev Agent" — code review, bug fixing, deployment

## 9. White-Label Solutions

Build Clawdbot-based solutions for agencies:
- Customer service automation
- Internal team assistants
- Process automation
- Branded AI experiences

## 10. SaaS Products

Build SaaS products powered by Clawdbot:
- AI email assistant service
- Social media management platform
- Automated research tool
- Meeting assistant service

## Getting Started

1. **Master the platform** — set up your own Clawdbot and use it daily
2. **Build a portfolio** — document your setups and automations
3. **Establish presence** — post in Reddit communities, Discord servers
4. **Start small** — first client at $300, scale from there
5. **Automate your own marketing** — use Clawdbot to find and reach clients

The AI agent market is nascent. Early movers who establish expertise now will dominate as the space grows.

*Written by [Manas AI](https://manasexp.com) · Published January 27, 2026 · Last updated January 28, 2026*
    `,
  },
  {
    slug: 'clawdbot-mac-mini-setup',
    title: 'The Ultimate Mac Mini AI Server Setup — Clawdbot + Claude Max (2026)',
    description: 'How to turn a Mac mini into a 24/7 AI assistant server running Clawdbot with Claude Max.',
    metaDescription: 'Turn your Mac mini into a 24/7 AI server with Clawdbot and Claude Max. Complete hardware and software setup guide for always-on AI.',
    category: 'getting-started',
    tags: ['mac-mini', 'hardware', 'server', 'setup', '24/7'],
    publishDate: '2026-01-27',
    lastModified: '2026-01-28',
    author: 'Manas AI',
    faqs: [
      {
        question: 'What is the best hardware for running Clawdbot?',
        answer: 'The Mac mini (M2 or newer) is the ideal hardware for running Clawdbot 24/7. It is designed for always-on operation, uses only 15-30W of power, offers excellent Apple Silicon performance, and provides access to macOS-exclusive features like iMessage and Apple Reminders. The recommended configuration is a Mac mini M4 with 16GB RAM and 512GB SSD ($800-$1,200).',
      },
      {
        question: 'How much does it cost to run Clawdbot on a Mac mini?',
        answer: 'The total monthly cost to run Clawdbot on a Mac mini is approximately $135: Mac mini amortized over 3 years (~$30/month), Claude Max subscription ($100/month), and electricity (~$5/month). This provides a 24/7 AI assistant that manages email, calendar, smart home, code, and more.',
      },
      {
        question: 'Can I run Clawdbot on a Mac mini headless?',
        answer: 'Yes. Clawdbot installs as a launchd daemon that starts automatically on boot, restarts on crash, and runs in the background without requiring login. You can manage it remotely via SSH, VNC/Screen Sharing, Tailscale VPN, or simply by messaging the AI through Telegram from your phone.',
      },
      {
        question: 'What Mac mini specs do I need for Clawdbot?',
        answer: 'Entry level: Mac mini M2 with 8GB RAM (~$600) for a single Clawdbot instance. Recommended: Mac mini M4 with 16GB RAM and 512GB SSD (~$800-$1,200) for Clawdbot plus Claude Code. Power user: Mac mini M4 Pro with 24GB+ RAM (~$1,600+) for multiple agents and local LLMs.',
      },
    ],
    content: `
The Mac mini is the best hardware for running Clawdbot (Moltbot) as a 24/7 AI server. It is designed for always-on operation, draws only 15-30 watts under load, and provides access to Apple-exclusive integrations like iMessage and Apple Reminders. This guide covers the complete hardware selection and software setup process to turn your Mac mini into an autonomous AI assistant server.

## Why Mac Mini?

The Mac mini (especially M-series) is the ideal Clawdbot host:
- **Always-on** — designed to run 24/7 as a server
- **Low power** — ~15-30W under load
- **Fast** — Apple Silicon is excellent for local AI tasks
- **macOS** — access to iMessage, Apple Reminders, Shortcuts, etc.
- **Compact** — tucks away anywhere

## Recommended Hardware

### Entry Level (~$600)
- Mac mini M2 (base model)
- 8GB RAM, 256GB SSD
- Good for: single Clawdbot instance, basic skills

### Recommended (~$800-1,200)
- Mac mini M4 (2024/2025 model)
- 16GB RAM, 512GB SSD
- Good for: Clawdbot + Claude Code + local models

### Power User (~$1,600+)
- Mac mini M4 Pro
- 24GB+ RAM, 1TB SSD
- Good for: multiple agents, local LLMs, heavy automation

## Software Setup

### 1. Initial macOS Configuration

\`\`\`bash
# Enable SSH for remote access
sudo systemsetup -setremotelogin on

# Prevent sleep
sudo pmset -a sleep 0
sudo pmset -a disksleep 0
sudo pmset -a displaysleep 0

# Auto-restart on power failure
sudo pmset -a autorestart 1
\`\`\`

### 2. Install Dependencies

\`\`\`bash
# Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Node.js
brew install node

# Git
brew install git

# Useful tools
brew install gh jq ffmpeg
\`\`\`

### 3. Install Clawdbot

\`\`\`bash
npm install -g clawdbot@latest
clawdbot onboard --install-daemon
\`\`\`

### 4. Configure Claude Max

Claude Max ($100/month) gives you:
- Unlimited Claude Sonnet usage
- Generous Claude Opus quota
- No per-token billing
- Best value for always-on AI

### 5. Set Up Remote Access

Options for managing your Mac mini remotely:
- **SSH** — command line access from anywhere
- **VNC/Screen Sharing** — visual access built into macOS
- **Tailscale** — secure mesh VPN (recommended)
- **Telegram** — message Clawdbot from your phone

## Running 24/7

Clawdbot installs as a launchd daemon that:
- Starts automatically on boot
- Restarts on crash
- Runs in background without login

Check status:
\`\`\`bash
clawdbot gateway status
\`\`\`

## Cost Breakdown

| Item | Monthly Cost |
|------|-------------|
| Mac mini (amortized over 3 years) | ~$30/mo |
| Claude Max subscription | $100/mo |
| Electricity | ~$5/mo |
| Internet (existing) | $0 |
| **Total** | **~$135/mo** |

For a 24/7 AI assistant that manages your email, calendar, smart home, code, and more — that's a bargain.

*Written by [Manas AI](https://manasexp.com) · Published January 27, 2026 · Last updated January 28, 2026*
    `,
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}

export function getGuidesByCategory(category: string): Guide[] {
  return guides.filter(g => g.category === category);
}
