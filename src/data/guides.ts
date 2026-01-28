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
  {
    slug: 'build-ai-agent-that-works-24-7',
    title: 'How to Build an AI Agent That Works 24/7 — The Complete Guide (2026)',
    description: 'Learn how to build and deploy an always-on AI agent using Clawdbot. From architecture to automation, this guide covers everything.',
    metaDescription: 'Step-by-step guide to building a 24/7 AI agent with Clawdbot. Architecture, deployment, monitoring, and real-world automation examples.',
    category: 'advanced',
    tags: ['ai-agent', '24/7', 'automation', 'deployment', 'always-on'],
    publishDate: '2026-01-29',
    lastModified: '2026-01-29',
    author: 'Manas AI',
    faqs: [
      {
        question: 'What does it mean to have an AI agent that works 24/7?',
        answer: 'A 24/7 AI agent is software that runs continuously on a dedicated machine — like a Mac mini or Linux server — performing tasks autonomously without human input. Unlike ChatGPT, which only responds when you open a browser tab, a 24/7 agent monitors your inbox, calendar, smart home, code deployments, and more around the clock, taking action proactively via cron jobs and heartbeat checks.',
      },
      {
        question: 'How do I keep my AI agent running without interruption?',
        answer: 'Use a launchd daemon (macOS) or systemd service (Linux) to ensure your agent restarts automatically after crashes or reboots. Configure power management to prevent sleep, enable auto-restart on power failure, and set up monitoring alerts so you know immediately if the agent goes down. Clawdbot handles all of this with its built-in daemon installer.',
      },
      {
        question: 'What hardware do I need for a 24/7 AI agent?',
        answer: 'A Mac mini M2 or newer is ideal — low power draw (15-30W), silent operation, and macOS compatibility. A Linux VPS or dedicated server also works. You need reliable internet, a Claude Max subscription ($100/month) for the LLM backend, and at least 8GB of RAM.',
      },
      {
        question: 'How much does it cost to run a 24/7 AI agent?',
        answer: 'Running a 24/7 AI agent with Clawdbot costs roughly $135 per month: $100 for Claude Max, ~$30 amortized hardware, and ~$5 electricity. This gives you an always-on assistant that handles email, scheduling, monitoring, automation, and more — significantly cheaper than hiring a human assistant.',
      },
      {
        question: 'Can a 24/7 AI agent handle tasks while I sleep?',
        answer: 'Yes. That is one of the primary benefits. You can configure your agent to check email overnight, respond to urgent messages, monitor server health, process data feeds, and queue summaries for your morning briefing. Clawdbot supports cron jobs and heartbeats specifically for this purpose.',
      },
    ],
    content: `
Building an AI agent that works 24/7 is the ultimate productivity unlock. Instead of opening ChatGPT when you remember to, you deploy an autonomous assistant that monitors, decides, and acts around the clock. This guide walks you through the architecture, tools, and deployment strategies to build a truly always-on AI agent using Clawdbot.

## Why 24/7 Matters

Most people interact with AI in sessions — you open a tab, ask a question, close the tab. That's like hiring an employee who only works when you're standing over their shoulder.

A 24/7 AI agent flips the model. It works while you sleep. It checks your email at 3 AM. It monitors your servers on weekends. It drafts responses to customer inquiries within minutes, not hours. The compounding value of an always-on agent is enormous.

## The Architecture of an Always-On Agent

A production-grade 24/7 AI agent has four layers:

### 1. The Runtime Layer
This is the software that keeps your agent alive. Clawdbot uses a **gateway daemon** that:
- Starts on boot via launchd (macOS) or systemd (Linux)
- Automatically restarts after crashes
- Manages connections to messaging channels
- Handles LLM provider routing and failover

\`\`\`bash
# Install the daemon
clawdbot onboard --install-daemon

# Check status anytime
clawdbot gateway status
\`\`\`

### 2. The Intelligence Layer
This is the LLM that powers your agent's reasoning. For 24/7 operation, you need:
- **Reliable API access** — Claude Max ($100/month) provides unlimited Sonnet and generous Opus quotas
- **Model fallback** — configure secondary models in case the primary is rate-limited
- **Thinking levels** — use low thinking for routine checks, high thinking for complex decisions

### 3. The Communication Layer
Your agent needs channels to receive instructions and deliver results:
- **Telegram** — best for mobile-first interaction, fast setup
- **Discord** — ideal for team environments and shared agents
- **WhatsApp** — familiar interface, end-to-end encryption
- **Slack** — enterprise-ready with rich integrations
- **Email** — the agent monitors your inbox directly

### 4. The Automation Layer
This is where the magic happens. Two key mechanisms:

**Heartbeats** — periodic check-ins (every 15-60 minutes) where the agent reviews a checklist:
\`\`\`markdown
<!-- HEARTBEAT.md -->
- Check email for urgent messages
- Review calendar for upcoming events (next 2 hours)
- Check GitHub notifications
- Monitor server uptime dashboard
\`\`\`

**Cron Jobs** — scheduled tasks at exact times:
\`\`\`yaml
cron:
  - schedule: "0 7 * * *"
    task: "Morning briefing: weather, calendar, top emails"
  - schedule: "0 22 * * *"
    task: "End-of-day summary: what happened today"
  - schedule: "*/30 * * * *"
    task: "Check for urgent customer support tickets"
\`\`\`

## Step-by-Step: Building Your 24/7 Agent

### Step 1: Choose Your Hardware
A **Mac mini M4** is the gold standard — silent, efficient, and always-on. Alternatively, use any Linux server or VPS with at least 4GB RAM. The agent itself is lightweight; the LLM runs in the cloud.

### Step 2: Install and Configure Clawdbot
\`\`\`bash
npm install -g clawdbot@latest
clawdbot onboard --install-daemon
\`\`\`

Follow the setup wizard to configure your LLM provider, messaging channel, and persona files.

### Step 3: Define Your Agent's Personality
Edit **SOUL.md** to define behavior boundaries:
- What the agent should do proactively vs. only when asked
- Tone and communication style
- Safety guardrails (e.g., never send money, always confirm before posting publicly)

### Step 4: Set Up Proactive Behaviors
Create **HEARTBEAT.md** with a rotating checklist. Configure cron jobs for time-sensitive tasks. Start conservative — a few checks per day — and expand as you build trust.

### Step 5: Build the Memory System
Your agent needs persistent context:
- **MEMORY.md** — curated long-term knowledge (preferences, relationships, ongoing projects)
- **USER.md** — facts about you (timezone, job, communication preferences)
- **Daily logs** — memory/YYYY-MM-DD.md files for granular recall

### Step 6: Add Skills and Integrations
Install skills that connect your agent to the real world:
\`\`\`bash
clawdhub install gmail
clawdhub install calendar
clawdhub install github
clawdhub install weather
clawdhub install smart-home
\`\`\`

### Step 7: Monitor and Iterate
A 24/7 agent is a living system. Review logs regularly:
\`\`\`bash
clawdbot gateway logs --tail 100
\`\`\`

Check what your agent did overnight. Adjust heartbeat frequency. Refine SOUL.md boundaries. The first week is calibration — after that, it runs itself.

## Real-World 24/7 Agent Workflows

Here are workflows that real Clawdbot users have deployed:

- **Morning Briefing Agent** — every day at 7 AM, delivers weather, calendar, top emails, and news
- **Customer Support Monitor** — checks support inbox every 30 minutes, drafts responses, flags urgent issues
- **Code Deployment Watcher** — monitors CI/CD pipelines, alerts on failures, can auto-rollback
- **Social Media Manager** — posts scheduled content, monitors mentions, drafts replies
- **Smart Home Controller** — adjusts lights and thermostat based on time, weather, and calendar

## Common Pitfalls

1. **Over-automation too early** — start with read-only tasks before giving write access
2. **No safety rails** — always set boundaries in SOUL.md for financial, public, and destructive actions
3. **Ignoring logs** — review what your agent does daily for the first week
4. **Poor memory hygiene** — curate MEMORY.md regularly; stale context leads to bad decisions

## The Bottom Line

Building a 24/7 AI agent isn't science fiction — it's a weekend project. With Clawdbot, a Mac mini, and Claude Max, you can deploy an always-on assistant that handles the tedious parts of your life while you focus on what matters. Start small, iterate fast, and let the agent earn your trust.

*Written by [Manas AI](https://manasexp.com) · Published January 29, 2026 · Last updated January 29, 2026*
    `,
  },
  {
    slug: 'clawdbot-vs-autogpt-vs-babyagi',
    title: 'Clawdbot vs AutoGPT vs BabyAGI: Which AI Agent Framework Wins in 2026?',
    description: 'Head-to-head comparison of the top AI agent frameworks. Clawdbot, AutoGPT, and BabyAGI compared on reliability, features, and real-world usefulness.',
    metaDescription: 'Clawdbot vs AutoGPT vs BabyAGI comparison for 2026. See which AI agent framework is most reliable, practical, and feature-rich for real-world automation.',
    category: 'comparison',
    tags: ['comparison', 'autogpt', 'babyagi', 'ai-agent', 'framework'],
    publishDate: '2026-01-29',
    lastModified: '2026-01-29',
    author: 'Manas AI',
    faqs: [
      {
        question: 'What is the best AI agent framework in 2026?',
        answer: 'Clawdbot (Moltbot) is the best AI agent framework for personal productivity in 2026. Unlike AutoGPT and BabyAGI, which were experimental proof-of-concepts from 2023, Clawdbot is a production-grade system with 50+ integrations, persistent memory, messaging app support, and reliable 24/7 operation. AutoGPT is better for open-ended research tasks, while BabyAGI is primarily an academic reference.',
      },
      {
        question: 'Is AutoGPT still relevant in 2026?',
        answer: 'AutoGPT has evolved significantly since its 2023 launch but still struggles with reliability for production use. It excels at open-ended research and exploration tasks but lacks the messaging app integration, persistent memory system, and 24/7 daemon architecture that make Clawdbot practical for daily use as a personal assistant.',
      },
      {
        question: 'What happened to BabyAGI?',
        answer: 'BabyAGI was a minimalist AI agent experiment created by Yohei Nakajima in 2023. It demonstrated autonomous task management using LLMs but was never designed for production use. In 2026, it remains an influential academic reference but is not actively maintained as a consumer product. Most of its ideas have been absorbed into more complete frameworks like Clawdbot.',
      },
      {
        question: 'Can I use Clawdbot and AutoGPT together?',
        answer: 'Yes. Some advanced users run AutoGPT as a sub-agent within Clawdbot for specific research tasks. Clawdbot handles the daily assistant duties (email, calendar, messaging) while AutoGPT tackles long-running research projects. However, most users find Clawdbot sufficient for all their needs.',
      },
    ],
    content: `
The AI agent space has exploded since 2023, but three names dominate the conversation: Clawdbot (Moltbot), AutoGPT, and BabyAGI. Each took a radically different approach to autonomous AI, and by 2026, the results are clear. This guide breaks down exactly where each framework stands, what it's best at, and which one you should use.

## The Quick Verdict

- **Clawdbot** — Best for personal productivity and daily use. Production-grade, reliable, extensible.
- **AutoGPT** — Best for autonomous research and exploration. Powerful but unpredictable.
- **BabyAGI** — Best as a learning tool and academic reference. Not actively maintained for consumers.

## Head-to-Head Comparison

### Reliability

**Clawdbot: 9/10** — Runs as a managed daemon with auto-restart, crash recovery, and clean session management. Users report weeks of uninterrupted uptime. The gateway architecture ensures stability even when individual tasks fail.

**AutoGPT: 5/10** — Improved dramatically since 2023 but still prone to loops, hallucinated tool calls, and runaway token consumption. Requires babysitting for important tasks. The autonomous goal-chasing architecture means it sometimes wanders off-track.

**BabyAGI: 3/10** — A proof-of-concept that was never hardened for production. Task queues can spiral, and there is no built-in error recovery or session management.

### Real-World Integrations

**Clawdbot: 50+ skills** — Gmail, Calendar, GitHub, smart home (HomeKit, Home Assistant), Telegram, WhatsApp, Discord, Slack, browser automation, voice (ElevenLabs), image generation, web search, file management, and more. New skills are published on ClawdHub regularly.

**AutoGPT: 15-20 plugins** — Web browsing, code execution, file operations, and select API integrations. The plugin ecosystem exists but is smaller and less polished. Many community plugins are unmaintained.

**BabyAGI: Minimal** — Primarily LLM reasoning and task list management. Integrations require custom development.

### Communication Channels

**Clawdbot: Telegram, WhatsApp, Discord, Slack, webchat** — Message your AI from any device, any app. This is a killer feature — your agent is reachable from your phone at all times.

**AutoGPT: Web UI / CLI** — Interact through a web dashboard or terminal. No native messaging app integration.

**BabyAGI: CLI only** — Terminal-based interaction. No built-in chat or messaging support.

### Memory and Persistence

**Clawdbot: File-based persistent memory** — MEMORY.md for long-term knowledge, daily markdown logs, SOUL.md for personality, USER.md for personal context. Memory survives reboots, updates, and even machine migrations. Simple, transparent, human-readable.

**AutoGPT: Vector database memory** — Uses embeddings and vector stores (Pinecone, ChromaDB) for memory retrieval. More sophisticated in theory but harder to inspect, debug, and curate. Memory quality degrades over time without maintenance.

**BabyAGI: In-memory task lists** — No persistent memory system. State is lost between runs unless you add custom persistence.

### Proactive Behaviors

**Clawdbot: Heartbeats + cron jobs** — Schedule periodic check-ins and exact-time tasks. Your agent can check email every 30 minutes, deliver a morning briefing at 7 AM, and monitor deployments overnight — all without prompting.

**AutoGPT: Continuous mode** — Can run autonomously toward a goal, but this is a one-shot process, not a scheduled system. No built-in recurring task support.

**BabyAGI: Task loop** — Runs a continuous task generation loop but without scheduling, timing, or real-world triggers.

### Cost

**Clawdbot: ~$135/month** — Claude Max ($100) + hardware amortized ($30) + electricity ($5). Unlimited Sonnet usage means no per-token surprises.

**AutoGPT: Variable, $50-$500+/month** — Uses OpenAI API with per-token billing. Autonomous mode can burn through tokens quickly. A complex research task might cost $20-$50 in API calls alone. Costs are unpredictable.

**BabyAGI: Variable, $20-$200+/month** — Similar token-based pricing through OpenAI. Task loop spirals can cause unexpected costs.

### Setup Difficulty

**Clawdbot: Medium** — Interactive setup wizard handles most configuration. Requires basic terminal comfort. Fully operational in 30 minutes.

**AutoGPT: Medium-High** — Docker-based setup, API key configuration, plugin installation. Expect 1-2 hours for a complete setup with all features.

**BabyAGI: High** — Requires Python environment, API keys, and potentially vector database setup. Meant for developers comfortable with code.

## When to Choose Each Framework

### Choose Clawdbot When:
- You want a **daily-driver AI assistant** that's always available
- You need **messaging app access** (Telegram, WhatsApp, Discord)
- **Reliability** matters more than autonomy
- You want **proactive scheduling** (heartbeats, cron)
- You prefer **transparent memory** you can read and edit
- You want a growing **skill ecosystem** with plug-and-play integrations

### Choose AutoGPT When:
- You need **deep autonomous research** — multi-step investigation with minimal guidance
- You're comfortable with **unpredictable costs** and occasional failures
- You want the agent to **figure out the plan itself** rather than follow your instructions
- You're building a **custom AI research tool** and want maximum flexibility

### Choose BabyAGI When:
- You're **learning about AI agents** and want to understand the fundamentals
- You want a **minimal codebase** to study and extend
- You're building a **custom framework** and want BabyAGI as a starting point
- You're doing **academic research** on autonomous AI task management

## The Evolution of AI Agents (2023-2026)

In 2023, AutoGPT and BabyAGI captured the world's imagination by showing that LLMs could do more than chat — they could plan, execute, and iterate. But they were prototypes. They looped endlessly, burned through API credits, and rarely completed complex tasks reliably.

Clawdbot took a different philosophy: **practical agency over theoretical autonomy.** Instead of trying to solve arbitrary goals, it focused on being the best possible personal assistant — reliable, always-on, deeply integrated with the tools people actually use.

By 2026, that pragmatic approach won. Clawdbot has tens of thousands of active users running it daily. AutoGPT remains impressive for research use cases. BabyAGI is a respected ancestor.

## Conclusion

If you want an AI agent that actually improves your daily life — one you can message from your phone, that checks your email, manages your calendar, and runs 24/7 without babysitting — **Clawdbot is the clear winner in 2026.** AutoGPT is a powerful tool for specific research needs, and BabyAGI is a great learning resource, but neither matches Clawdbot's combination of reliability, integrations, and everyday usefulness.

*Written by [Manas AI](https://manasexp.com) · Published January 29, 2026 · Last updated January 29, 2026*
    `,
  },
  {
    slug: 'automate-business-with-claude-code',
    title: 'How to Automate Your Business with Claude Code and Clawdbot (2026)',
    description: 'Practical guide to automating business processes with Claude Code and Clawdbot. Email, customer support, invoicing, reporting, and more.',
    metaDescription: 'Automate your business with Claude Code and Clawdbot. Step-by-step guide to AI-powered email management, customer support, invoicing, and reporting.',
    category: 'business',
    tags: ['business', 'automation', 'claude-code', 'productivity', 'workflow'],
    publishDate: '2026-01-29',
    lastModified: '2026-01-29',
    author: 'Manas AI',
    faqs: [
      {
        question: 'What is Claude Code?',
        answer: 'Claude Code is Anthropic\'s official CLI tool for Claude that gives the AI model direct access to your terminal, file system, and development tools. When combined with Clawdbot, Claude Code becomes the execution engine for an always-on business automation system — writing scripts, managing files, executing commands, and building integrations on demand.',
      },
      {
        question: 'What business processes can I automate with Clawdbot?',
        answer: 'You can automate email triage and response drafting, customer support ticket routing, invoice generation and tracking, daily/weekly business reports, social media management, lead qualification, meeting scheduling, data entry and CRM updates, competitor monitoring, and content creation. Most businesses start with email automation and expand from there.',
      },
      {
        question: 'How much time can business automation with Clawdbot save?',
        answer: 'Early adopters report saving 10-20 hours per week by automating email management, scheduling, reporting, and routine customer communications. A solopreneur or small business owner can effectively add a half-time virtual assistant for $135/month instead of $2,000-$4,000/month for a human equivalent.',
      },
      {
        question: 'Is Clawdbot secure enough for business use?',
        answer: 'Yes, when properly configured. Clawdbot runs locally on your machine, so sensitive business data never leaves your network unless sent to an LLM provider. Configure authorized users, keep API keys in environment variables, set strict SOUL.md boundaries for financial actions, and review logs regularly. Many small businesses and freelancers use Clawdbot for daily operations.',
      },
    ],
    content: `
Business automation with AI used to require expensive enterprise software, custom development teams, and months of implementation. In 2026, a solopreneur with a Mac mini, Clawdbot, and Claude Code can automate most of their business operations in a weekend. This guide shows you exactly how.

## What Makes This Different

Traditional automation tools like Zapier or Make connect apps with simple triggers and actions. They're powerful but rigid — you define exact workflows, and they execute them mechanically.

Clawdbot with Claude Code is fundamentally different. It **understands context**. When a customer email arrives, it doesn't just forward it to a folder — it reads the email, understands the customer's issue, checks your knowledge base, drafts an appropriate response, and flags anything that needs your personal attention. It thinks, then acts.

## The Business Automation Stack

Here's what you need:

- **Clawdbot** — the always-on AI agent framework
- **Claude Code** — the execution engine for terminal and file operations
- **Claude Max** ($100/month) — unlimited LLM access
- **Gmail/Calendar skills** — email and scheduling integration
- **Mac mini or server** — 24/7 operation

Total cost: ~$135/month. Compare that to a virtual assistant at $2,000-$4,000/month.

## Automation #1: Email Triage and Response

The highest-ROI automation for most businesses. Here's how to set it up:

### Configure Email Monitoring
Install the Gmail skill and set up a heartbeat check:

\`\`\`markdown
<!-- HEARTBEAT.md -->
- Check email inbox for new messages
- Categorize: urgent, needs-response, FYI, spam
- Draft responses for routine inquiries
- Flag urgent items and notify me via Telegram
\`\`\`

### Define Response Templates in SOUL.md
\`\`\`markdown
When responding to business emails:
- Professional but warm tone
- Reference the customer by name
- Address their specific question
- Include a clear next step
- Never promise timelines without checking with me
- Always draft — never auto-send without my review (for now)
\`\`\`

### The Result
Every 30 minutes, your AI checks your inbox. Routine inquiries get draft responses queued for your review. Urgent messages trigger an immediate Telegram notification. Spam gets archived. You wake up to a sorted inbox with pre-drafted replies.

## Automation #2: Customer Support

For businesses with recurring customer questions:

1. **Create a knowledge base** — a markdown file with common questions and answers
2. **Configure the agent** to check support channels (email, Discord, or a web form)
3. **Set response boundaries** — what it can answer directly vs. what needs escalation

\`\`\`markdown
<!-- SUPPORT-RULES.md -->
You can answer directly:
- Pricing questions (refer to pricing page)
- Feature questions (refer to documentation)
- Account setup help (walk through steps)

Escalate to me:
- Refund requests
- Bug reports
- Partnership inquiries
- Anything involving money or legal
\`\`\`

## Automation #3: Daily Business Reports

Schedule a morning briefing that aggregates key business metrics:

\`\`\`yaml
cron:
  - schedule: "0 7 * * 1-5"  # 7 AM weekdays
    task: |
      Generate my morning business briefing:
      1. Unread emails summary (count, urgent items)
      2. Today's calendar events
      3. Any GitHub issues or PRs needing attention
      4. Revenue dashboard snapshot (check Stripe)
      5. Social media mentions overnight
      Deliver via Telegram.
\`\`\`

## Automation #4: Invoice and Payment Tracking

Use Claude Code to build and maintain a simple invoicing system:

- Track outstanding invoices in a markdown or spreadsheet file
- Send payment reminders on schedule
- Log payments when received
- Generate monthly revenue reports

The AI maintains the system and you approve actions through Telegram.

## Automation #5: Content Creation Pipeline

For businesses that rely on content marketing:

1. **Research phase** — the agent monitors competitors, industry news, and trending topics
2. **Drafting phase** — generates blog posts, social media content, or email newsletters
3. **Review phase** — sends drafts to you via Telegram for approval
4. **Publishing phase** — posts approved content to your platforms

\`\`\`yaml
cron:
  - schedule: "0 9 * * 1"  # Monday 9 AM
    task: |
      Research trending topics in [your industry].
      Draft 3 blog post outlines and 5 social media posts.
      Save to ~/content/drafts/ and notify me.
\`\`\`

## Automation #6: Meeting Prep and Follow-Up

Before every meeting, your agent can:
- Review the attendee's recent emails and communication history
- Summarize the meeting topic and any open items
- Prepare talking points and questions
- Deliver a briefing document 30 minutes before the meeting

After the meeting:
- Process any notes you dictate via voice message
- Draft follow-up emails to attendees
- Create action items and add them to your task list

## Getting Started: The 80/20 Approach

Don't try to automate everything at once. Here's the fastest path to value:

**Week 1:** Set up email triage. This alone saves 5-10 hours per week.

**Week 2:** Add daily briefings and calendar management.

**Week 3:** Implement customer support automation for your most common inquiries.

**Week 4:** Build out content creation or reporting workflows based on your business needs.

## Security Considerations for Business Use

- **Never auto-send** emails or messages without review until you've built trust in the system
- **Set financial guardrails** — the agent should never initiate payments or transfers without explicit approval
- **Review logs weekly** — check what your agent has been doing
- **Use separate accounts** where possible — a dedicated email for the agent to manage
- **Keep secrets secure** — API keys in environment variables, not in files

## ROI Calculation

For a typical small business owner or freelancer:

| Task | Hours/Week Saved | Value (at $50/hr) |
|------|------------------|--------------------|
| Email management | 5-8 hours | $250-$400 |
| Meeting prep/follow-up | 2-3 hours | $100-$150 |
| Reporting | 2-4 hours | $100-$200 |
| Customer support | 3-5 hours | $150-$250 |
| Content creation | 3-5 hours | $150-$250 |
| **Total** | **15-25 hours** | **$750-$1,250/week** |

Cost: $135/month. ROI: 20-40x in the first month.

## Conclusion

The era of AI-powered business automation is here, and it's accessible to everyone — not just enterprises with six-figure software budgets. With Clawdbot, Claude Code, and a $135/month investment, you can build an AI-powered business operation that rivals companies ten times your size. Start with email. Expand from there. The leverage is extraordinary.

*Written by [Manas AI](https://manasexp.com) · Published January 29, 2026 · Last updated January 29, 2026*
    `,
  },
  {
    slug: 'best-ai-agent-skills-plugins-2026',
    title: 'Best AI Agent Skills and Plugins in 2026 — The Ultimate Clawdbot Skill Guide',
    description: 'Complete guide to the best Clawdbot skills and plugins. From email to smart home to voice, discover the top integrations for your AI agent.',
    metaDescription: 'Discover the best Clawdbot skills and plugins for 2026. Top-rated integrations for email, calendar, smart home, voice, coding, and business automation.',
    category: 'skills',
    tags: ['skills', 'plugins', 'integrations', 'clawdhub', 'tools'],
    publishDate: '2026-01-29',
    lastModified: '2026-01-29',
    author: 'Manas AI',
    faqs: [
      {
        question: 'What are Clawdbot skills?',
        answer: 'Clawdbot skills are modular plugins that give your AI agent specific capabilities. Each skill connects Clawdbot to an external service or tool — like Gmail, GitHub, smart home devices, or voice synthesis. Skills are installed via ClawdHub and configured through simple markdown files. There are currently 50+ skills available, with new ones added weekly.',
      },
      {
        question: 'How do I install Clawdbot skills?',
        answer: 'Install skills using the ClawdHub CLI: "clawdhub install gmail" or "clawdhub install smart-home". Each skill includes a SKILL.md file with setup instructions, configuration options, and usage examples. Browse all available skills at clawdhub.com.',
      },
      {
        question: 'What are the must-have Clawdbot skills?',
        answer: 'The top 5 must-have skills are: Gmail (email management), Calendar (scheduling and events), GitHub (code and repository management), Browser (web automation and research), and Voice/TTS (text-to-speech via ElevenLabs). These five skills cover the core productivity needs of most users.',
      },
      {
        question: 'Can I build my own Clawdbot skills?',
        answer: 'Yes. Clawdbot skills are defined by a SKILL.md file that describes the skill\'s capabilities, configuration, and tool definitions. You can create custom skills for any API or workflow, publish them on ClawdHub for others to use, and even monetize them. The skill development documentation is available at clawdhub.com/docs.',
      },
      {
        question: 'Are Clawdbot skills free?',
        answer: 'Most Clawdbot skills are free and open-source. Some premium skills developed by third parties may have a one-time or subscription fee. The core skills (Gmail, Calendar, GitHub, Browser, Voice) are all free. External service costs (like ElevenLabs for voice) are separate from the skill itself.',
      },
    ],
    content: `
Clawdbot's power comes from its skill ecosystem — modular plugins that connect your AI agent to the real world. In 2026, there are over 50 skills available on ClawdHub, covering everything from email management to smart home control to voice synthesis. This guide covers the best skills in every category, how to install them, and how to get the most out of each one.

## How Skills Work

A Clawdbot skill is a self-contained plugin defined by a **SKILL.md** file. This file tells the AI:
- What the skill can do
- How to configure it
- What tools are available
- Usage examples and best practices

Install any skill with one command:
\`\`\`bash
clawdhub install <skill-name>
\`\`\`

## Tier 1: Essential Skills (Install These First)

### 📧 Gmail
**What it does:** Read, search, compose, send, label, and archive emails. The single highest-value skill for most users.

**Key capabilities:**
- Search inbox with natural language ("emails from clients this week")
- Draft and send responses
- Bulk label and archive
- Monitor for urgent messages via heartbeat

**Setup:** Requires Google OAuth credentials. The skill walks you through the process.

\`\`\`bash
clawdhub install gmail
\`\`\`

### 📅 Calendar
**What it does:** View, create, update, and delete calendar events. Check availability and schedule meetings.

**Key capabilities:**
- Natural language event creation ("Schedule lunch with Sarah next Tuesday at noon")
- Availability checking across multiple calendars
- Meeting conflict detection
- Daily agenda delivery via heartbeat

\`\`\`bash
clawdhub install calendar
\`\`\`

### 🐙 GitHub
**What it does:** Manage repositories, issues, pull requests, and notifications.

**Key capabilities:**
- Create and review pull requests
- Manage issues and project boards
- Monitor CI/CD pipeline status
- Code review assistance

\`\`\`bash
clawdhub install github
\`\`\`

### 🌐 Browser
**What it does:** Full web browser automation — navigate, click, type, screenshot, and extract data.

**Key capabilities:**
- Web research and data extraction
- Form filling and automation
- Screenshot capture for visual context
- Multi-tab session management

\`\`\`bash
clawdhub install browser
\`\`\`

### 🎙️ Voice (ElevenLabs TTS)
**What it does:** Convert text to natural-sounding speech. Transform your AI agent's responses into audio.

**Key capabilities:**
- Multiple voice options with distinct personalities
- Story narration and content reading
- Voice messages via Telegram or Discord
- Audio file generation for content creation

\`\`\`bash
clawdhub install voice
\`\`\`

## Tier 2: Productivity Power-Ups

### 🔍 Web Search
Search the web using Brave Search API and get structured results. Essential for research tasks and staying current.

### 📁 File Management
Advanced file operations — search, organize, convert, and process documents. Great for keeping your workspace tidy.

### 📝 Notes & Writing
Integration with note-taking apps and writing tools. Draft documents, blog posts, and long-form content.

### ⏰ Reminders & Tasks
Set reminders, manage to-do lists, and track tasks across sessions. Works with Apple Reminders on macOS.

### 🌤️ Weather
Current conditions and forecasts. Useful for morning briefings and travel planning.

## Tier 3: Smart Home & IoT

### 🏠 HomeKit
Control Apple HomeKit devices — lights, thermostats, locks, cameras, and more. Requires macOS with Home app configured.

### 🏡 Home Assistant
Connect to Home Assistant for broader smart home control. Supports thousands of device types across all ecosystems.

### 📷 Camera
Access connected cameras for snapshots and monitoring. Works with HomeKit cameras, IP cameras, and mobile devices paired through Clawdbot's node system.

### 🔊 Speakers
Control AirPlay, Sonos, and other speaker systems. Play music, set volumes, announce messages.

## Tier 4: Developer Tools

### 🖥️ SSH
Remote server management through SSH connections. Execute commands, transfer files, and monitor systems on remote machines.

### 🐳 Docker
Manage Docker containers, images, and compose stacks. Deploy, monitor, and troubleshoot containerized applications.

### 📊 Database
Query and manage databases (PostgreSQL, MySQL, SQLite). Run reports, check data integrity, and perform maintenance.

### 🚀 CI/CD
Monitor and trigger deployment pipelines. Works with GitHub Actions, GitLab CI, and other CI/CD systems.

## Tier 5: Business & Communication

### 💬 Telegram
The most popular messaging channel. Rich features including inline keyboards, file sharing, voice messages, and group chat support.

### 💬 Discord
Full Discord bot integration with server management, channel creation, role management, and rich embeds.

### 💬 WhatsApp
WhatsApp Business API integration for personal and business messaging.

### 💬 Slack
Workspace integration with channel management, thread replies, and slash commands.

### 🐦 Twitter/X
Post tweets, monitor mentions, engage with followers, and track trending topics.

## Building Your Own Skills

Creating a custom skill is straightforward:

1. **Create a SKILL.md file** that describes the skill's capabilities
2. **Define tool functions** the AI can call
3. **Add configuration** for API keys and settings
4. **Test locally** with your Clawdbot instance
5. **Publish to ClawdHub** for others to use

The skill format is designed to be LLM-friendly — the AI reads SKILL.md to understand what it can do, just like a human would read documentation.

## Skill Stacking: Powerful Combinations

The real magic happens when skills work together:

- **Gmail + Calendar + Voice** = "Read my morning schedule and email summary out loud"
- **GitHub + Browser + Telegram** = "Monitor PRs, run tests, notify me of failures on Telegram"
- **Smart Home + Weather + Calendar** = "Turn on lights when I have an early meeting and it's still dark"
- **Web Search + Notes + Twitter** = "Research trending topics, draft a thread, save notes for a blog post"

## Recommended Skill Stack by Use Case

**For Freelancers:** Gmail, Calendar, GitHub, Browser, Invoice tracking
**For Developers:** GitHub, SSH, Docker, CI/CD, Browser
**For Content Creators:** Voice, Twitter, Browser, Web Search, Notes
**For Business Owners:** Gmail, Calendar, CRM, Customer Support, Reporting
**For Smart Home Enthusiasts:** HomeKit, Home Assistant, Camera, Speakers, Weather

## Conclusion

The skill ecosystem is what transforms Clawdbot from a chatbot into a genuine AI agent. Start with the Tier 1 essentials — Gmail, Calendar, GitHub, Browser, and Voice — and expand based on your needs. Each skill you add multiplies the agent's usefulness, and the combinations unlock workflows that would be impossible with any single tool.

Browse all available skills at [ClawdHub](https://clawdhub.com) and start building your perfect AI assistant.

*Written by [Manas AI](https://manasexp.com) · Published January 29, 2026 · Last updated January 29, 2026*
    `,
  },
  {
    slug: 'setup-ai-email-monitoring-auto-reply',
    title: 'How to Set Up AI Email Monitoring and Auto-Reply with Clawdbot (2026)',
    description: 'Step-by-step guide to building an AI-powered email monitoring and auto-reply system using Clawdbot and Gmail.',
    metaDescription: 'Set up AI email monitoring and smart auto-reply with Clawdbot. Triage, draft, and send responses automatically using Claude AI and Gmail integration.',
    category: 'tutorials',
    tags: ['email', 'automation', 'gmail', 'auto-reply', 'tutorial', 'monitoring'],
    publishDate: '2026-01-29',
    lastModified: '2026-01-29',
    author: 'Manas AI',
    faqs: [
      {
        question: 'Can Clawdbot automatically reply to my emails?',
        answer: 'Yes. Clawdbot can monitor your Gmail inbox, read new messages, categorize them by urgency and type, draft contextually appropriate responses, and either send them automatically or queue them for your approval. Most users start with draft-and-review mode and graduate to auto-send for routine messages once they trust the system.',
      },
      {
        question: 'Is it safe to let an AI manage my email?',
        answer: 'Yes, when configured with proper safeguards. Clawdbot runs locally so your email data stays on your machine. Start with read-only monitoring, then enable draft mode (AI writes responses, you approve before sending), and only enable auto-send for specific categories you\'re comfortable with. Set strict boundaries in SOUL.md for what the AI can and cannot do with email.',
      },
      {
        question: 'How does Clawdbot decide how to respond to emails?',
        answer: 'Clawdbot uses Claude\'s language understanding to read the email content, understand the sender\'s intent, check your conversation history and memory files for context, and generate an appropriate response in your communication style. You define response guidelines, tone, and boundaries in SOUL.md and can provide templates for common scenarios.',
      },
      {
        question: 'What emails should I NOT auto-reply to?',
        answer: 'Never auto-reply to emails involving financial transactions, legal matters, HR issues, sensitive negotiations, emotional or personal conversations, or anything where nuance and human judgment are critical. Configure these as escalation categories in your agent\'s rules so they always get flagged for your personal attention.',
      },
      {
        question: 'How often does Clawdbot check for new emails?',
        answer: 'You configure the frequency. Most users set heartbeat checks every 15-30 minutes during business hours and every 1-2 hours overnight. You can also set up cron jobs for specific check times, like "check email at 8 AM, noon, and 5 PM" for a more structured approach.',
      },
    ],
    content: `
Email is the biggest time sink in most professionals' days. The average knowledge worker spends 2.5 hours per day on email — that's 13 hours per week, 650 hours per year. What if your AI agent could handle 80% of it? This guide shows you exactly how to set up AI-powered email monitoring and smart auto-reply using Clawdbot and Gmail.

## What You'll Build

By the end of this guide, you'll have an AI system that:

1. **Monitors** your inbox continuously (every 15-30 minutes)
2. **Categorizes** every email by urgency and type
3. **Drafts** responses for routine messages
4. **Auto-sends** replies for categories you pre-approve
5. **Escalates** important emails with a Telegram notification
6. **Summarizes** your inbox in a daily briefing

## Prerequisites

- Clawdbot installed and running ([setup guide](/guides/setup-clawdbot-complete-guide))
- Gmail skill installed (\`clawdhub install gmail\`)
- Google OAuth credentials configured
- Telegram channel set up for notifications

## Step 1: Install and Configure the Gmail Skill

\`\`\`bash
clawdhub install gmail
\`\`\`

Follow the OAuth setup flow to grant Clawdbot access to your Gmail account. The skill needs permissions to read, compose, and send emails on your behalf.

Verify the connection:
\`\`\`
# In your Telegram chat with Clawdbot:
"Check my email — how many unread messages do I have?"
\`\`\`

If you get a count back, you're connected.

## Step 2: Define Your Email Categories

Create a file called **EMAIL-RULES.md** in your Clawdbot workspace:

\`\`\`markdown
# Email Handling Rules

## Categories

### 🔴 URGENT — Notify immediately via Telegram
- Emails from: [list VIP contacts]
- Keywords: "urgent", "ASAP", "emergency", "deadline today"
- Client emails about active projects

### 🟡 NEEDS RESPONSE — Draft reply for my review
- Client inquiries and questions
- Meeting requests and scheduling
- Business proposals
- Any email that asks a direct question

### 🟢 AUTO-REPLY — Send response automatically
- Meeting confirmations ("Thanks, confirmed!")
- Newsletter subscription confirmations
- Automated receipts and invoices (archive, no reply)
- Out-of-office acknowledgments

### ⚪ FYI — Archive silently
- Marketing emails and promotions
- Automated notifications I don't need to act on
- CC'd emails where I'm not the primary recipient
- Internal system alerts (unless error/failure)

## Response Guidelines
- Use my name in the signature
- Professional but warm tone
- Keep responses concise
- Never commit to deadlines without checking with me
- Never discuss pricing or contracts without my approval
\`\`\`

## Step 3: Configure the Monitoring Heartbeat

Add email monitoring to your **HEARTBEAT.md**:

\`\`\`markdown
## Email Monitoring
- Check Gmail inbox for new messages since last check
- Apply EMAIL-RULES.md categories to each message
- For URGENT: send me a Telegram alert with sender, subject, and summary
- For NEEDS RESPONSE: draft a reply and save it (don't send)
- For AUTO-REPLY: send the response (approved categories only)
- For FYI: archive the message
- Log all actions to memory/email-log.md
\`\`\`

Set your heartbeat interval to check every 15-30 minutes:
\`\`\`yaml
heartbeat:
  interval: 900  # 15 minutes
\`\`\`

## Step 4: Set Up the Morning Email Briefing

Add a cron job for a daily email summary:

\`\`\`yaml
cron:
  - schedule: "0 7 * * 1-5"  # 7 AM weekdays
    task: |
      Generate my morning email briefing:
      - Total unread: count
      - Urgent items: list with summaries
      - Pending drafts: list what you've drafted for my review
      - Action needed: emails requiring my personal response
      - FYI digest: one-line summaries of informational emails
      Deliver via Telegram.
\`\`\`

## Step 5: Train Your Agent on Your Writing Style

The best auto-replies sound like you wrote them. Help your AI learn your style:

### Option A: Provide Examples
Add to SOUL.md:
\`\`\`markdown
## My Email Style
- I start emails with "Hey [Name]," (informal) or "Hi [Name]," (formal)
- I keep paragraphs to 2-3 sentences max
- I use em dashes and occasional parentheticals
- I sign off with "Best," or "Thanks," followed by my first name
- I'm direct but friendly — no corporate fluff
\`\`\`

### Option B: Let It Learn
Tell your agent: "Read my last 20 sent emails and learn my writing style. Summarize the patterns you notice and save them to SOUL.md."

## Step 6: Set Up the Review Workflow

For emails in the NEEDS RESPONSE category, you want a smooth review process:

1. Agent drafts the reply
2. Agent sends you the draft via Telegram: "📧 Draft reply to [Sender] re: [Subject] — [draft text]. Send, edit, or skip?"
3. You reply:
   - **"Send"** — agent sends the draft as-is
   - **"Edit: [your changes]"** — agent modifies and sends
   - **"Skip"** — you'll handle it manually

This gives you final approval while saving 90% of the effort.

## Step 7: Gradual Trust Escalation

Start conservative and expand automation as you build confidence:

**Week 1: Monitor Only**
- Agent reads and categorizes emails
- All responses are drafts for your review
- Daily briefing via Telegram

**Week 2: Auto-Reply for Safe Categories**
- Enable auto-send for meeting confirmations and simple acknowledgments
- Continue drafting for everything else

**Week 3: Expand Auto-Reply**
- Add FAQ-style customer responses to auto-send
- Enable auto-archiving of FYI emails

**Week 4: Full Operation**
- Auto-reply handles 60-80% of routine email
- You personally handle only complex, sensitive, or high-value messages
- Review weekly logs to fine-tune categories

## Advanced: Multi-Account Email Management

If you manage multiple email accounts (personal, business, side project), configure each one:

\`\`\`markdown
## Account: work@company.com
- Check every 15 minutes during business hours
- Strict professional tone
- Always draft, never auto-send

## Account: personal@gmail.com
- Check every hour
- Casual tone
- Auto-reply to known contacts

## Account: support@mybusiness.com
- Check every 30 minutes
- Use support templates
- Auto-reply for common questions
\`\`\`

## Measuring Impact

After one month, check your metrics:

- **Time saved:** Track how many emails the agent handled vs. you
- **Response time:** Average time from receipt to reply (should drop dramatically)
- **Quality:** Review a random sample of auto-sent replies for accuracy
- **Misses:** Any emails that should have been escalated but weren't?

Most users report saving **5-10 hours per week** on email management within the first month.

## Common Issues and Fixes

**Agent sends too many Telegram alerts:**
Tighten your URGENT criteria. Most emails aren't actually urgent.

**Drafts don't sound like me:**
Provide more writing examples. The agent learns from explicit style guidance.

**Important emails getting auto-archived:**
Review your FYI rules. Add exceptions for specific senders or keywords.

**Agent keeps asking for clarification:**
Add more context to EMAIL-RULES.md. The more specific your rules, the more autonomous the agent becomes.

## Conclusion

AI email monitoring and auto-reply is the single highest-ROI automation you can build with Clawdbot. It saves hours per week, ensures faster response times, and frees you to focus on work that actually requires human judgment. Start with monitoring, graduate to drafts, and eventually trust the system with auto-replies for routine messages. Your inbox will never be the same.

*Written by [Manas AI](https://manasexp.com) · Published January 29, 2026 · Last updated January 29, 2026*
    `,
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}

export function getGuidesByCategory(category: string): Guide[] {
  return guides.filter(g => g.category === category);
}
