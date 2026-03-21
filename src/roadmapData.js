// AI Learning Roadmap - Path Data
// Contains all 4 learning paths with weeks, tools, habits, and resources

export const PATHS = {};

PATHS['nocode'] = {
  name: 'No-Code AI', sub: 'The Integrator', badge: 'No-Code Path',
  desc: 'Master the most powerful AI tools without writing a single line of code. Perfect for maximizing productivity, automating workflows, and creating high-quality outputs using the best AI platforms available today.',
  hours: '5-7 hrs/week', outcome: 'Automate 10+ tasks',
  weeks: [
    {num:'W1', title:'AI Fundamentals and ChatGPT Mastery', tag:'Foundation', tc:'tf',
     what:'Understand what AI actually is — pattern recognition, not magic. Set up ChatGPT Plus and Claude. Learn the 5 core prompting principles: clarity, context, role, format, examples. Practice 30 prompts daily.',
     daily:'Spend 15 min rewriting 3 prompts you use at work. Compare results every day.',
     tools:['Claude.ai','ChatGPT Plus','Notion','Gemini'],
     res:[
       {t:'free',n:'Elements of AI',d:'Free university course — no maths required',u:'https://www.elementsofai.com'},
       {t:'free',n:'Anthropic Prompt Library',d:'100+ ready-to-use expert prompts',u:'https://docs.anthropic.com/en/prompt-library/library'},
       {t:'tool',n:'Claude.ai',d:'Your primary AI assistant',u:'https://claude.ai'},
       {t:'free',n:'Prompting Guide',d:'promptingguide.ai — comprehensive reference',u:'https://www.promptingguide.ai'},
       {t:'free',n:'Google AI Essentials',d:'Free course by Google on AI fundamentals',u:'https://grow.google/ai-essentials/'},
       {t:'free',n:'Microsoft AI Fundamentals',d:'Free learning path on AI concepts',u:'https://learn.microsoft.com/en-us/training/paths/get-started-with-artificial-intelligence-on-azure/'}
     ]},
    {num:'W2', title:'Writing, Editing and Research at 10x Speed', tag:'Foundation', tc:'tf',
     what:'Use AI to draft emails, reports, and documents. Learn chain-of-thought prompting for structured outputs. Build your Personal Prompt Library in Notion.',
     daily:'Draft one real email or document with AI, then edit it. Track the time saved.',
     tools:['Notion AI','Claude.ai','Grammarly','Jasper'],
     res:[
       {t:'free',n:'Notion AI Templates',d:'50 ready-made AI-enhanced workspaces',u:'https://www.notion.so/templates/category/ai'},
       {t:'course',n:'ChatGPT Prompt Engineering — Coursera',d:'DeepLearning.AI — free audit available',u:'https://www.coursera.org/learn/prompt-engineering'},
       {t:'tool',n:'Notion AI',d:'AI writing inside your knowledge base',u:'https://notion.so'},
       {t:'free',n:'Copy.ai',d:'AI copywriting — free tier available',u:'https://www.copy.ai'},
       {t:'tool',n:'Jasper AI',d:'Enterprise AI writing assistant',u:'https://www.jasper.ai'}
     ]},
    {num:'W3', title:'AI Image and Creative Generation', tag:'Build', tc:'tb',
     what:'Master Midjourney and DALL-E for professional visuals. Learn prompt anatomy: subject, style, mood, medium, lighting. Create a 10-image portfolio.',
     daily:'Generate 5 images for your work context. Refine and save the best 2 prompts.',
     tools:['Midjourney','Canva AI','Adobe Firefly','Leonardo.ai'],
     res:[
       {t:'tool',n:'Midjourney',d:'Best image quality — starts at $10/month',u:'https://www.midjourney.com'},
       {t:'free',n:'DALL-E 3 via ChatGPT',d:'Included in ChatGPT Plus subscription',u:'https://openai.com/dall-e-3'},
       {t:'free',n:'Canva AI',d:'AI design tools with a free tier',u:'https://www.canva.com/ai-image-generator'},
       {t:'free',n:'Midjourney Prompt Guide',d:'Official comprehensive documentation',u:'https://docs.midjourney.com'},
       {t:'tool',n:'Leonardo.ai',d:'AI art generation with fine-tuned models',u:'https://leonardo.ai'},
       {t:'free',n:'Ideogram',d:'AI image generation with excellent text rendering',u:'https://ideogram.ai'}
     ]},
    {num:'W4', title:'Voice AI and Meeting Automation', tag:'Build', tc:'tb',
     what:'Turn meetings into structured notes, action items, and follow-ups automatically. Set up AI transcription. Use voice-to-text to draft messages on mobile.',
     daily:'Transcribe your most important meeting of the day. Extract 3 action items automatically.',
     tools:['Otter.ai','Fireflies.ai','Notion','Granola'],
     res:[
       {t:'tool',n:'Otter.ai',d:'Meeting transcription and summaries — free tier',u:'https://otter.ai'},
       {t:'tool',n:'Fireflies.ai',d:'Auto-joins meetings and takes structured notes',u:'https://fireflies.ai'},
       {t:'free',n:'Krisp',d:'AI noise cancellation — free tier available',u:'https://krisp.ai'},
       {t:'free',n:'Whisper via ChatGPT',d:'Voice transcription included in Plus',u:'https://openai.com/research/whisper'},
       {t:'tool',n:'Granola',d:'AI notepad for meetings — captures context',u:'https://www.granola.ai'}
     ]},
    {num:'W5', title:'Workflow Automation with Zapier', tag:'Build', tc:'tb',
     what:'Build your first automated workflow connecting AI to your existing tools. Automate: email to summary to Slack notification. Set up 3 complete Zaps.',
     daily:'Find one repetitive task at work. Map out how AI could automate every step.',
     tools:['Zapier','Make.com','Google Workspace','Bardeen'],
     res:[
       {t:'free',n:'Zapier Learn',d:'Free automation school from Zapier team',u:'https://learn.zapier.com'},
       {t:'tool',n:'Zapier',d:'The no-code automation platform — free tier',u:'https://zapier.com'},
       {t:'tool',n:'Make.com',d:'More powerful visual automation builder',u:'https://www.make.com'},
       {t:'free',n:'n8n',d:'Open-source automation — self-hostable',u:'https://n8n.io'},
       {t:'tool',n:'Bardeen',d:'Browser automation with AI — free tier',u:'https://www.bardeen.ai'}
     ]},
    {num:'W6', title:'Custom GPTs and Personal AI Assistants', tag:'Build', tc:'tb',
     what:'Build your own Custom GPT tailored to your specific work. Give it your knowledge base, writing style, and context. Share it with your team.',
     daily:'Refine your Custom GPT with 3 new instructions based on the previous day\'s usage.',
     tools:['ChatGPT Plus','Claude Projects','Google Gems'],
     res:[
       {t:'free',n:'OpenAI GPT Builder',d:'Build custom GPTs — included in Plus plan',u:'https://chat.openai.com/gpts/editor'},
       {t:'free',n:'Claude Projects',d:'Persistent AI workspace with memory',u:'https://claude.ai'},
       {t:'free',n:'GPT Store',d:'Explore 3M+ existing custom GPTs for inspiration',u:'https://chatgpt.com/gpts'},
       {t:'course',n:'Build GPTs for Business — Udemy',d:'Practical GPT creation course',u:'https://www.udemy.com/topic/chatgpt/'},
       {t:'free',n:'Google Gems',d:'Custom Gemini personalities for specific tasks',u:'https://gemini.google.com'}
     ]},
    {num:'W7', title:'AI for Data and Spreadsheets', tag:'Master', tc:'tm',
     what:'Analyze complex datasets using plain English. Ask AI to interpret charts, find patterns, and create visualizations.',
     daily:'Upload one spreadsheet or dataset and ask 5 analytical questions in plain English.',
     tools:['ChatGPT Code Interpreter','Google Sheets','Julius AI','Rows'],
     res:[
       {t:'free',n:'ChatGPT Data Analysis',d:'Code Interpreter — included in Plus',u:'https://openai.com/chatgpt'},
       {t:'free',n:'Julius AI',d:'Dedicated data analysis AI — free tier',u:'https://julius.ai'},
       {t:'free',n:'Google Sheets + Gemini',d:'AI inside your existing spreadsheets',u:'https://workspace.google.com/ai'},
       {t:'free',n:'Rows.com',d:'AI-native spreadsheet platform',u:'https://rows.com'}
     ]},
    {num:'W8', title:'AI Research and Knowledge Management', tag:'Master', tc:'tm',
     what:'Build an AI-powered second brain. Use Perplexity for research. Create a structured knowledge base that AI can search.',
     daily:'Add 3 research sources to your AI knowledge base. Ask it one complex question.',
     tools:['Perplexity.ai','NotebookLM','Notion','Mem.ai'],
     res:[
       {t:'free',n:'Perplexity AI',d:'AI-powered research engine — free tier',u:'https://perplexity.ai'},
       {t:'tool',n:'NotebookLM',d:'AI research notebook by Google — free',u:'https://notebooklm.google.com'},
       {t:'free',n:'Obsidian + AI plugins',d:'Local knowledge base with AI integration',u:'https://obsidian.md'},
       {t:'course',n:'Building a Second Brain',d:'Tiago Forte — knowledge management framework',u:'https://www.buildingasecondbrain.com'},
       {t:'tool',n:'Mem.ai',d:'AI-first knowledge management tool',u:'https://mem.ai'}
     ]},
    {num:'W9', title:'AI for Video and Multimedia', tag:'Master', tc:'tm',
     what:'Create short-form videos from text prompts. Generate AI voiceovers. Use AI to create presentations from bullet points.',
     daily:'Convert one work topic into a short AI-generated slide deck or video explainer.',
     tools:['Runway ML','ElevenLabs','Gamma.app','HeyGen'],
     res:[
       {t:'tool',n:'Runway ML',d:'AI video generation and editing platform',u:'https://runwayml.com'},
       {t:'tool',n:'ElevenLabs',d:'Realistic AI voice cloning — free tier',u:'https://elevenlabs.io'},
       {t:'free',n:'Gamma.app',d:'AI presentation builder — free tier',u:'https://gamma.app'},
       {t:'tool',n:'Sora by OpenAI',d:'Text-to-video — access via ChatGPT',u:'https://openai.com/sora'},
       {t:'tool',n:'HeyGen',d:'AI video avatars for presentations',u:'https://www.heygen.com'},
       {t:'free',n:'Luma Dream Machine',d:'Text and image to video generation',u:'https://lumalabs.ai/dream-machine'}
     ]},
    {num:'W10', title:'Advanced Prompt Architecture', tag:'Master', tc:'tm',
     what:'Master multi-step prompting chains. Learn few-shot examples, role prompting, and constraint layering. Build a Personal Prompt Playbook of 20+ tested prompts.',
     daily:'Write one new advanced prompt. A/B test it vs a simpler version. Document the winner.',
     tools:['Claude.ai','ChatGPT Plus','Notion'],
     res:[
       {t:'free',n:'Prompt Engineering for Developers',d:'DeepLearning.AI — free short course',u:'https://learn.deeplearning.ai/prompt-engineering-for-developers'},
       {t:'free',n:'Learn Prompting',d:'Open-source comprehensive prompting guide',u:'https://learnprompting.org'},
       {t:'free',n:'Claude Prompt Library',d:'Expert-crafted example prompts from Anthropic',u:'https://docs.anthropic.com/en/prompt-library/library'},
       {t:'free',n:'FlowGPT',d:'Community-powered prompt library',u:'https://flowgpt.com'}
     ]},
    {num:'W11', title:'Build Your Complete AI Toolkit', tag:'Deploy', tc:'td',
     what:'Design a complete AI system for your professional role. Map every repetitive task to a specific AI tool. Calculate hours saved per week.',
     daily:'Document one completed AI workflow. Calculate the exact time it saves per week.',
     tools:['Zapier','Make.com','Notion AI'],
     res:[
       {t:'free',n:'There\'s An AI For That',d:'Database of 5000+ categorized AI tools',u:'https://theresanaiforthat.com'},
       {t:'free',n:'Futurepedia',d:'AI tools directory updated daily',u:'https://www.futurepedia.io'},
       {t:'free',n:'AI Tool Report',d:'Weekly newsletter on new AI tools',u:'https://aitoolreport.beehiiv.com'},
       {t:'free',n:'Ben\'s Bites Newsletter',d:'Daily AI news and practical tools',u:'https://bensbites.co'}
     ]},
    {num:'W12', title:'Share, Teach and Keep Learning', tag:'Deploy', tc:'td',
     what:'Teach your AI system to one other person. Create a LinkedIn post documenting a real result. Join an AI community.',
     daily:'Spend 10 min scanning AI news. Document one new tool or idea you could apply.',
     tools:['LinkedIn','Notion','YouTube'],
     res:[
       {t:'free',n:'AI Breakfast Community',d:'Active community of AI learners and builders',u:'https://www.skool.com/ai-breakfast'},
       {t:'free',n:'r/ChatGPT on Reddit',d:'Active community with real-world use cases',u:'https://reddit.com/r/ChatGPT'},
       {t:'free',n:'Latent Space Podcast',d:'AI for practitioners — new episodes weekly',u:'https://www.latent.space/podcast'},
       {t:'free',n:'TLDR AI Newsletter',d:'5-minute daily AI briefing — highly recommended',u:'https://tldr.tech/ai'}
     ]}
  ],
  tools: [
    {sec:'Core AI Assistants', items:[
      {ico:'🤖',n:'Claude.ai',d:'Best for writing, analysis, and complex reasoning',b:'Essential',u:'https://claude.ai'},
      {ico:'💬',n:'ChatGPT Plus',d:'Versatile assistant with GPT-4o and image generation',b:'$20/mo',u:'https://chat.openai.com'},
      {ico:'🔍',n:'Perplexity AI',d:'AI-powered search and research engine',b:'Free',u:'https://perplexity.ai'},
      {ico:'💎',n:'Google Gemini',d:'Multimodal AI with deep Google integration',b:'Free',u:'https://gemini.google.com'}
    ]},
    {sec:'Automation', items:[
      {ico:'⚡',n:'Zapier',d:'Connect 6000+ apps with AI-powered workflows',b:'Freemium',u:'https://zapier.com'},
      {ico:'🔧',n:'Make.com',d:'Visual workflow automation — more powerful',b:'Freemium',u:'https://make.com'},
      {ico:'📋',n:'Notion AI',d:'AI inside your knowledge base and docs',b:'$8/mo',u:'https://notion.so'}
    ]},
    {sec:'Creative Tools', items:[
      {ico:'🎨',n:'Midjourney',d:'Highest quality AI image generation',b:'$10/mo',u:'https://midjourney.com'},
      {ico:'🎬',n:'Runway ML',d:'AI video generation and editing',b:'Free Tier',u:'https://runwayml.com'},
      {ico:'🎙',n:'ElevenLabs',d:'Realistic AI voice synthesis and cloning',b:'Free Tier',u:'https://elevenlabs.io'}
    ]},
    {sec:'Productivity', items:[
      {ico:'🗣',n:'Otter.ai',d:'AI meeting transcription and summaries',b:'Free Tier',u:'https://otter.ai'},
      {ico:'📊',n:'Julius AI',d:'Data analysis in plain English',b:'Free Tier',u:'https://julius.ai'},
      {ico:'📓',n:'NotebookLM',d:'Google AI-powered research notebook',b:'Free',u:'https://notebooklm.google.com'}
    ]}
  ],
  habits: [
    {time:'Morning', items:['<strong>5 min:</strong> Scan one AI newsletter like TLDR AI or Ben\'s Bites with your morning coffee.','<strong>15 min:</strong> Delegate your first repetitive task of the day to AI before starting anything else.']},
    {time:'Work', items:['<strong>Before writing:</strong> Draft with AI first, then edit. Never stare at a blank page again.','<strong>Before research:</strong> Ask Claude or Perplexity for a starting framework before you search manually.','<strong>Before meetings:</strong> Prep agenda and talking points in 2 minutes using AI.']},
    {time:'Evening', items:['<strong>10 min:</strong> Document one new prompt or AI shortcut that worked today inside Notion.','<strong>Weekly:</strong> Calculate hours saved. Set a new automation target for next week.']}
  ]
};

PATHS['vibe'] = {
  name: 'Vibe Coding', sub: 'The Director', badge: 'Vibe Coding Path',
  desc: 'Build real apps, tools, and products using natural language — directing AI agents to write the code for you. No computer science degree required. Just clear thinking and creative vision.',
  hours: '8-10 hrs/week', outcome: 'Ship your first app',
  weeks: [
    {num:'W1', title:'Your Dev Environment with Cursor', tag:'Foundation', tc:'tf',
     what:'Install Cursor IDE and connect Claude. Understand the vibe coding paradigm: you describe, AI writes. Set up your first project folder. Generate a simple HTML page from a text description.',
     daily:'Generate one small thing with Cursor every day. A button, a form, a page — keep it tiny.',
     tools:['Cursor IDE','Claude.ai','VS Code','Windsurf'],
     res:[
       {t:'tool',n:'Cursor IDE',d:'AI-first code editor — free tier available',u:'https://cursor.com'},
       {t:'free',n:'Cursor Documentation',d:'Official getting started guide',u:'https://docs.cursor.com'},
       {t:'free',n:'Claude.ai',d:'Use for design discussions and planning',u:'https://claude.ai'},
       {t:'free',n:'Cursor Community Reddit',d:'Tips, showcases, and help from builders',u:'https://reddit.com/r/cursor'},
       {t:'tool',n:'Windsurf IDE',d:'AI-powered IDE alternative by Codeium',u:'https://codeium.com/windsurf'}
     ]},
    {num:'W2', title:'HTML and CSS Without Memorizing Them', tag:'Foundation', tc:'tf',
     what:'Learn to read and understand HTML and CSS — not memorize them. Use Claude to explain any code you see. Build a personal bio page, a landing page, and a product card.',
     daily:'Clone the layout of one website you admire using only natural language prompts.',
     tools:['Cursor','Browser DevTools','Codepen'],
     res:[
       {t:'free',n:'web.dev by Google',d:'Modern web fundamentals — beginner friendly',u:'https://web.dev/learn'},
       {t:'free',n:'Scrimba Interactive CSS',d:'Learn by playing with live code — free',u:'https://scrimba.com/learn/css'},
       {t:'free',n:'CSS Tricks',d:'Reference when Cursor generates CSS you want to understand',u:'https://css-tricks.com'},
       {t:'free',n:'Codepen',d:'Share and experiment with HTML and CSS snippets',u:'https://codepen.io'}
     ]},
    {num:'W3', title:'JavaScript Basics for Directors', tag:'Foundation', tc:'tf',
     what:'Understand variables, functions, events, and the DOM without becoming a developer. Learn to read JavaScript so you can debug AI-generated code.',
     daily:'Add one interactive behavior to your project each day. Ask Cursor to explain why the code works.',
     tools:['Cursor','Browser Console','Codepen'],
     res:[
       {t:'free',n:'javascript.info',d:'The best free JavaScript tutorial on the internet',u:'https://javascript.info'},
       {t:'free',n:'The Odin Project — JS Basics',d:'Project-based learning, completely free',u:'https://www.theodinproject.com'},
       {t:'free',n:'Eloquent JavaScript',d:'Free book — read chapters 1-3 as a start',u:'https://eloquentjavascript.net'},
       {t:'tool',n:'Cursor AI',d:'Ask it to explain every line of JS you do not understand',u:'https://cursor.com'}
     ]},
    {num:'W4', title:'React and Component Thinking', tag:'Build', tc:'tb',
     what:'Build your first React app using Cursor. Understand components, props, and state at a conceptual level. Create a simple task manager or note-taking app.',
     daily:'Add one new component to your app. Keep it functional before making it beautiful.',
     tools:['Cursor','React','Vercel','Bolt.new'],
     res:[
       {t:'free',n:'React.dev Quick Start',d:'Official React docs — just the first 3 pages',u:'https://react.dev/learn'},
       {t:'free',n:'Scrimba React Course',d:'Interactive exercises — completely free',u:'https://scrimba.com/learn/learnreact'},
       {t:'free',n:'Next.js Docs',d:'The framework most vibe coders use',u:'https://nextjs.org/docs'},
       {t:'free',n:'Vercel',d:'One-click free deployment for React apps',u:'https://vercel.com'},
       {t:'tool',n:'Bolt.new',d:'AI full-stack app builder in the browser',u:'https://bolt.new'}
     ]},
    {num:'W5', title:'Connect APIs and Bring in Live Data', tag:'Build', tc:'tb',
     what:'Use AI to fetch real data — weather, news, prices, social posts. Learn what an API is by actually using one.',
     daily:'Integrate one new API into your app. Ask Claude to write the fetch request for you.',
     tools:['Cursor','Postman','RapidAPI'],
     res:[
       {t:'free',n:'Public APIs List',d:'Huge curated database of free APIs on GitHub',u:'https://github.com/public-apis/public-apis'},
       {t:'free',n:'RapidAPI Marketplace',d:'Marketplace for 10,000+ APIs',u:'https://rapidapi.com'},
       {t:'free',n:'Open Weather API',d:'Free weather data API — beginner friendly',u:'https://openweathermap.org/api'},
       {t:'free',n:'Postman',d:'Test APIs visually before connecting them',u:'https://postman.com'}
     ]},
    {num:'W6', title:'Add AI Features to Your App', tag:'Build', tc:'tb',
     what:'Integrate the Claude or OpenAI API into your own app. Build a custom chatbot, a text summarizer, or a content generator powered by AI.',
     daily:'Add one AI-powered feature to your app and test it with 5 different inputs.',
     tools:['Claude API','Cursor','Vercel','Replicate'],
     res:[
       {t:'free',n:'Anthropic API Docs',d:'Get started with Claude API — very clear documentation',u:'https://docs.anthropic.com'},
       {t:'free',n:'OpenAI API Quickstart',d:'Add GPT to any app in minutes',u:'https://platform.openai.com/docs/quickstart'},
       {t:'free',n:'Vercel AI SDK',d:'Build AI apps in Next.js without the boilerplate',u:'https://sdk.vercel.ai'},
       {t:'free',n:'Ollama',d:'Run local AI models on your own machine for free',u:'https://ollama.com'},
       {t:'tool',n:'Replicate',d:'Run ML models via API — generous free tier',u:'https://replicate.com'}
     ]},
    {num:'W7', title:'Databases — Store Real User Data', tag:'Build', tc:'tb',
     what:'Add a simple database to save and retrieve data. Use Supabase or Firebase. Learn CRUD: Create, Read, Update, Delete.',
     daily:'Write one database query using natural language in Cursor. Verify it works correctly.',
     tools:['Supabase','Cursor','Postman'],
     res:[
       {t:'free',n:'Supabase',d:'Postgres database with a very generous free tier',u:'https://supabase.com'},
       {t:'free',n:'Supabase Quickstart Docs',d:'Connect your app in under 5 minutes',u:'https://supabase.com/docs/guides/getting-started'},
       {t:'free',n:'Firebase by Google',d:'Real-time database with a free tier',u:'https://firebase.google.com'},
       {t:'free',n:'PlanetScale',d:'Serverless MySQL — free hobby tier available',u:'https://planetscale.com'}
     ]},
    {num:'W8', title:'User Authentication and Accounts', tag:'Master', tc:'tm',
     what:'Add login, signup, and user sessions to your app. Use pre-built auth services — never build this yourself from scratch.',
     daily:'Test your auth flow by creating 3 test accounts. Find and fix one bug.',
     tools:['Clerk','Cursor','Vercel'],
     res:[
       {t:'tool',n:'Clerk',d:'Drop-in authentication for Next.js — generous free tier',u:'https://clerk.com'},
       {t:'free',n:'Supabase Auth',d:'Authentication built into your existing Supabase setup',u:'https://supabase.com/docs/guides/auth'},
       {t:'free',n:'NextAuth.js',d:'Open-source authentication for Next.js apps',u:'https://next-auth.js.org'},
       {t:'free',n:'Auth0',d:'Enterprise auth — free up to 7,500 monthly users',u:'https://auth0.com'}
     ]},
    {num:'W9', title:'Polish — UI and UX with shadcn and Tailwind', tag:'Master', tc:'tm',
     what:'Make your app look professional with pre-built UI components. Use Tailwind CSS and shadcn/ui for a polished design system.',
     daily:'Replace one ugly UI element with a polished shadcn component from the library.',
     tools:['shadcn/ui','Tailwind','v0.dev'],
     res:[
       {t:'free',n:'shadcn/ui',d:'Copy-paste React components with gorgeous defaults',u:'https://ui.shadcn.com'},
       {t:'free',n:'Tailwind CSS Docs',d:'Utility-first CSS — focus on the basics section first',u:'https://tailwindcss.com/docs'},
       {t:'free',n:'v0.dev by Vercel',d:'AI that generates UI components from descriptions',u:'https://v0.dev'},
       {t:'free',n:'Radix UI',d:'Accessible component primitives — free and open source',u:'https://www.radix-ui.com'}
     ]},
    {num:'W10', title:'Payments and Monetization', tag:'Master', tc:'tm',
     what:'Add a subscription or one-time payment to your app. Use Stripe — the industry standard. Implement in sandbox mode first.',
     daily:'Go through your Stripe integration end-to-end. Make one real test purchase.',
     tools:['Stripe','Cursor','Vercel'],
     res:[
       {t:'tool',n:'Stripe',d:'Payment processing — zero cost until you earn revenue',u:'https://stripe.com'},
       {t:'free',n:'Stripe Docs Quickstart',d:'Add payments to your app in one afternoon',u:'https://stripe.com/docs/payments/quickstart'},
       {t:'free',n:'LemonSqueezy',d:'Simpler Stripe alternative with built-in SaaS features',u:'https://lemonsqueezy.com'},
       {t:'free',n:'Stripe Testing Guide',d:'How to test payments before going live',u:'https://stripe.com/docs/testing'}
     ]},
    {num:'W11', title:'Ship v1 — Real Users and Real Feedback', tag:'Deploy', tc:'td',
     what:'Launch your app publicly. Submit to Product Hunt. Get your first 10 real users. Collect structured feedback.',
     daily:'Respond to every piece of user feedback you receive. Ship one small improvement.',
     tools:['Vercel','Product Hunt','PostHog'],
     res:[
       {t:'free',n:'Product Hunt',d:'Launch platform — submit your product for free',u:'https://producthunt.com'},
       {t:'free',n:'Indie Hackers',d:'Community for builders — share your launch story',u:'https://indiehackers.com'},
       {t:'free',n:'Typeform',d:'Beautiful user feedback forms — free tier',u:'https://typeform.com'},
       {t:'free',n:'PostHog',d:'Privacy-friendly product analytics — generous free tier',u:'https://posthog.com'}
     ]},
    {num:'W12', title:'Scale, Improve and Build the Next One', tag:'Deploy', tc:'td',
     what:'Analyze your first 30 days of user data. Prioritize the top 3 feature requests. Set up error tracking. Start v2.',
     daily:'Spend 30 minutes planning your next project. Good builders are always building.',
     tools:['Sentry','Linear','Vercel Analytics'],
     res:[
       {t:'free',n:'Sentry',d:'Error tracking and monitoring — free for small apps',u:'https://sentry.io'},
       {t:'free',n:'Linear',d:'Issue tracker built for indie builders — free plan',u:'https://linear.app'},
       {t:'free',n:'Indie Hackers Products',d:'Monetization benchmarks from real builders',u:'https://indiehackers.com/products'},
       {t:'free',n:'Pieter Levels on X',d:'The blueprint for solo SaaS builders',u:'https://x.com/levelsio'}
     ]}
  ],
  tools: [
    {sec:'Build', items:[
      {ico:'⌨️',n:'Cursor IDE',d:'AI-first code editor — the vibe coder\'s home base',b:'Essential',u:'https://cursor.com'},
      {ico:'▲',n:'Vercel',d:'Deploy React and Next.js apps in seconds — free tier',b:'Essential',u:'https://vercel.com'},
      {ico:'🎨',n:'v0.dev',d:'Describe your UI and get React code instantly',b:'Free',u:'https://v0.dev'},
      {ico:'⚡',n:'Bolt.new',d:'AI full-stack app builder — prototype in minutes',b:'Free Tier',u:'https://bolt.new'}
    ]},
    {sec:'Backend and Data', items:[
      {ico:'🔋',n:'Supabase',d:'Database, auth, and storage — very generous free tier',b:'Freemium',u:'https://supabase.com'},
      {ico:'🔑',n:'Clerk',d:'Drop-in user authentication for Next.js apps',b:'Freemium',u:'https://clerk.com'},
      {ico:'💳',n:'Stripe',d:'Payments, subscriptions, invoices — zero cost to start',b:'Free to Start',u:'https://stripe.com'}
    ]},
    {sec:'AI Integration', items:[
      {ico:'🤖',n:'Anthropic API',d:'Add Claude reasoning to your app — best quality',b:'Pay-as-you-go',u:'https://anthropic.com/api'},
      {ico:'🧠',n:'OpenAI API',d:'GPT-4o plus image generation in your app',b:'Pay-as-you-go',u:'https://platform.openai.com'},
      {ico:'⚡',n:'Vercel AI SDK',d:'Pre-built AI hooks and helpers for React',b:'Free',u:'https://sdk.vercel.ai'}
    ]},
    {sec:'Ship and Grow', items:[
      {ico:'📊',n:'PostHog',d:'Product analytics and session recording — free tier',b:'Free',u:'https://posthog.com'},
      {ico:'🚀',n:'Product Hunt',d:'Launch platform to reach thousands of early adopters',b:'Free',u:'https://producthunt.com'},
      {ico:'🐛',n:'Sentry',d:'Error tracking before your users have to tell you',b:'Free',u:'https://sentry.io'}
    ]}
  ],
  habits: [
    {time:'Morning', items:['<strong>30 min:</strong> Code session before checking email or messages. Ship one small thing first.','<strong>Read:</strong> One post from a builder you admire. Study their decision-making, not just their results.']},
    {time:'Build', items:['<strong>Rule:</strong> Describe before you code. Write the feature in plain English first, then prompt Cursor.','<strong>Rule:</strong> Never spend more than 20 minutes stuck on one problem. Ask Claude, then Google, then Reddit.','<strong>Rule:</strong> Commit your code every single day, even if you only made a tiny change.']},
    {time:'Evening', items:['<strong>10 min:</strong> Write in your build journal: what you shipped, what broke, what you learned today.','<strong>Weekly:</strong> Share your progress publicly with one person. Accountability accelerates shipping.']}
  ]
};

PATHS['production'] = {
  name: 'End-to-End Production', sub: 'The Engineer', badge: 'Engineering Path',
  desc: 'Build secure, scalable AI applications from scratch — APIs, vector databases, RAG pipelines, and cloud deployments. Real software engineering, supercharged by modern AI tools.',
  hours: '12-15 hrs/week', outcome: 'Production AI app',
  weeks: [
    {num:'W1', title:'Python Fundamentals for AI Engineers', tag:'Foundation', tc:'tf',
     what:'Master Python syntax, data types, functions, classes, and list comprehensions. Set up a professional environment with pyenv, pip, and virtual environments.',
     daily:'Write 50 lines of Python solving a real problem you have. No copying from tutorials.',
     tools:['Python 3.11+','VS Code + Pylance','pyenv','uv'],
     res:[
       {t:'free',n:'Python.org Official Tutorial',d:'The authoritative starting point for Python',u:'https://docs.python.org/3/tutorial'},
       {t:'course',n:'CS50P — Python from Harvard',d:'Free, certificate-bearing, and rigorous',u:'https://cs50.harvard.edu/python'},
       {t:'free',n:'Real Python Tutorials',d:'Practical Python patterns — free articles daily',u:'https://realpython.com'},
       {t:'free',n:'LeetCode',d:'Python problem solving — focus only on Easy problems',u:'https://leetcode.com'},
       {t:'free',n:'uv Package Manager',d:'Blazing-fast Python package manager by Astral',u:'https://github.com/astral-sh/uv'}
     ]},
    {num:'W2', title:'APIs, HTTP and FastAPI', tag:'Foundation', tc:'tf',
     what:'Understand REST, HTTP methods, JSON, and status codes. Build your first API with FastAPI. Document it with automatic Swagger docs.',
     daily:'Add one new endpoint to your API each day. Document it. Test it with Postman.',
     tools:['FastAPI','Uvicorn','Postman'],
     res:[
       {t:'free',n:'FastAPI Official Docs',d:'The clearest framework documentation in Python',u:'https://fastapi.tiangolo.com'},
       {t:'free',n:'REST API Tutorial',d:'restapitutorial.com — patterns and best practices',u:'https://restapitutorial.com'},
       {t:'free',n:'Postman',d:'API testing and documentation tool — free',u:'https://postman.com'},
       {t:'free',n:'HTTP Status Reference',d:'Quick reference for all HTTP status codes',u:'https://httpstatusdogs.com'}
     ]},
    {num:'W3', title:'OpenAI and Anthropic API Integration', tag:'Foundation', tc:'tf',
     what:'Call LLM APIs programmatically in Python. Handle streaming responses. Implement retry logic and proper error handling.',
     daily:'Call one new API feature or parameter. Read the SDK source code for the method you are using.',
     tools:['anthropic SDK','openai SDK','python-dotenv','litellm'],
     res:[
       {t:'free',n:'Anthropic Python SDK',d:'Official SDK — pip install anthropic',u:'https://github.com/anthropic-ai/anthropic-sdk-python'},
       {t:'free',n:'Anthropic API Documentation',d:'Comprehensive reference with clear examples',u:'https://docs.anthropic.com'},
       {t:'free',n:'OpenAI Python Library',d:'pip install openai — battle-tested and reliable',u:'https://github.com/openai/openai-python'},
       {t:'course',n:'Building Systems with LLMs',d:'DeepLearning.AI — free short course',u:'https://learn.deeplearning.ai/building-systems-with-chatgpt'},
       {t:'free',n:'LiteLLM',d:'Unified API for 100+ LLM providers',u:'https://github.com/BerriAI/litellm'}
     ]},
    {num:'W4', title:'Databases — PostgreSQL and SQLAlchemy', tag:'Foundation', tc:'tf',
     what:'Design a normalized database schema. Write SQL queries, joins, and indexes. Use SQLAlchemy ORM with FastAPI.',
     daily:'Write 5 SQL queries against your schema daily. Include at least one JOIN and one aggregate.',
     tools:['PostgreSQL','SQLAlchemy','Alembic','DBeaver'],
     res:[
       {t:'free',n:'PostgreSQL Tutorial',d:'postgresqltutorial.com — comprehensive and free',u:'https://www.postgresqltutorial.com'},
       {t:'free',n:'SQLAlchemy Documentation',d:'ORM and core query interface',u:'https://docs.sqlalchemy.org'},
       {t:'free',n:'Supabase with Python',d:'Managed Postgres with a free tier',u:'https://supabase.com/docs/reference/python/introduction'},
       {t:'free',n:'Neon DB',d:'Serverless Postgres — generous free tier',u:'https://neon.tech'}
     ]},
    {num:'W5', title:'Embeddings and Vector Databases', tag:'Build', tc:'tb',
     what:'Convert text to vector embeddings. Understand cosine similarity and semantic search. Set up a Pinecone or Chroma vector database.',
     daily:'Embed 100 text samples. Run 10 semantic queries. Carefully evaluate result quality.',
     tools:['Pinecone','Chroma','Sentence Transformers','numpy'],
     res:[
       {t:'free',n:'Pinecone Learning Center',d:'Best vector DB with excellent free documentation',u:'https://docs.pinecone.io/guides/getting-started/quickstart'},
       {t:'free',n:'Chroma Documentation',d:'Local vector database — zero infrastructure needed',u:'https://docs.trychroma.com'},
       {t:'course',n:'Vector Databases — DeepLearning.AI',d:'Free short course with Pinecone integration',u:'https://learn.deeplearning.ai/vector-databases-embeddings-applications'},
       {t:'free',n:'Sentence Transformers',d:'State-of-the-art embedding models for Python',u:'https://sbert.net'},
       {t:'free',n:'Qdrant',d:'Open-source vector database with rich filtering',u:'https://qdrant.tech'}
     ]},
    {num:'W6', title:'RAG — Retrieval-Augmented Generation', tag:'Build', tc:'tb',
     what:'Build a document Q&A system from scratch. Implement the full RAG pipeline: ingest, chunk, embed, retrieve, generate.',
     daily:'Improve your RAG pipeline retrieval precision by 5% each day. Log all experiments.',
     tools:['LangChain','LlamaIndex','Chroma','FastAPI'],
     res:[
       {t:'free',n:'LangChain Documentation',d:'Most popular RAG framework — Python and JS',u:'https://docs.langchain.com'},
       {t:'free',n:'LlamaIndex Documentation',d:'Data-focused RAG framework for complex use cases',u:'https://docs.llamaindex.ai'},
       {t:'course',n:'RAG Course — DeepLearning.AI',d:'Free — 1 hour practical deep dive into RAG',u:'https://learn.deeplearning.ai/building-evaluating-advanced-rag'},
       {t:'free',n:'LangChain RAG Tutorial',d:'Step-by-step from documents to working Q&A',u:'https://python.langchain.com/docs/use_cases/question_answering'}
     ]},
    {num:'W7', title:'AI Agents and Tool Use', tag:'Build', tc:'tb',
     what:'Give LLMs tools: web search, code execution, database queries. Build a ReAct agent that can autonomously break down multi-step tasks.',
     daily:'Add one new tool to your agent. Test it with 10 edge case inputs to find failure modes.',
     tools:['LangGraph','Anthropic API','FastAPI','CrewAI'],
     res:[
       {t:'free',n:'Anthropic Tool Use Guide',d:'Official guide to Claude tool use with examples',u:'https://docs.anthropic.com/en/docs/build-with-claude/tool-use'},
       {t:'free',n:'LangGraph Documentation',d:'Stateful agent workflows and graph-based pipelines',u:'https://langchain-ai.github.io/langgraph'},
       {t:'free',n:'OpenAI Assistants API',d:'Built-in code interpreter and retrieval tools',u:'https://platform.openai.com/docs/assistants/overview'},
       {t:'course',n:'AI Agents in LangGraph',d:'DeepLearning.AI — free course on stateful agents',u:'https://learn.deeplearning.ai/agents-in-langgraph'},
       {t:'free',n:'CrewAI',d:'Multi-agent orchestration framework',u:'https://www.crewai.com'}
     ]},
    {num:'W8', title:'Docker and Containerization', tag:'Master', tc:'tm',
     what:'Containerize your FastAPI application with Docker. Write a production Dockerfile. Use docker-compose for multi-service setups.',
     daily:'Build and run your app in Docker. Work to reduce the image size by at least 20%.',
     tools:['Docker','Docker Compose','FastAPI'],
     res:[
       {t:'free',n:'Docker Official Docs — Get Started',d:'The official and surprisingly readable tutorial',u:'https://docs.docker.com/get-started'},
       {t:'free',n:'Docker for Python Devs',d:'FastAPI with Docker — TestDriven.io walkthrough',u:'https://testdriven.io/blog/fastapi-docker'},
       {t:'free',n:'Docker Hub',d:'Pre-built images for Postgres, Redis, and more',u:'https://hub.docker.com'},
       {t:'free',n:'Dive Tool',d:'CLI tool to inspect and optimize Docker image layers',u:'https://github.com/wagoodman/dive'}
     ]},
    {num:'W9', title:'Cloud Deployment — Railway and AWS', tag:'Master', tc:'tm',
     what:'Deploy your API to the cloud. Start with Railway for simplicity, then learn AWS EC2 basics. Set up CI/CD with GitHub Actions.',
     daily:'Check your deployment logs every day. Fix one warning or inefficiency you find.',
     tools:['Railway','GitHub Actions','Loguru','AWS'],
     res:[
       {t:'free',n:'Railway Documentation',d:'Easiest cloud deployment — generous free tier',u:'https://docs.railway.app'},
       {t:'free',n:'Fly.io Documentation',d:'Excellent for containerized apps — free tier',u:'https://fly.io/docs'},
       {t:'free',n:'GitHub Actions Documentation',d:'CI/CD automation built directly into GitHub',u:'https://docs.github.com/en/actions'},
       {t:'course',n:'AWS Cloud Practitioner — Free',d:'AWS free training with certification path',u:'https://aws.amazon.com/training/learn-about/cloud-practitioner'}
     ]},
    {num:'W10', title:'Security, Auth and Production Hardening', tag:'Master', tc:'tm',
     what:'Implement JWT authentication properly. Add rate limiting. Validate all inputs with Pydantic V2. Run an OWASP checklist against your API.',
     daily:'Run one security check on your API. Fix one vulnerability or harden one endpoint.',
     tools:['PyJWT','Pydantic','SlowAPI','python-dotenv'],
     res:[
       {t:'free',n:'OWASP API Security Top 10',d:'The checklist every production API needs',u:'https://owasp.org/www-project-api-security'},
       {t:'free',n:'FastAPI Security Documentation',d:'OAuth2, JWT, and API Keys in FastAPI',u:'https://fastapi.tiangolo.com/tutorial/security'},
       {t:'free',n:'Pydantic V2 Documentation',d:'Data validation and serialization for Python',u:'https://docs.pydantic.dev'},
       {t:'free',n:'SlowAPI',d:'Rate limiting middleware for FastAPI apps',u:'https://github.com/laurentS/slowapi'}
     ]},
    {num:'W11', title:'Monitoring, MLOps and Cost Management', tag:'Deploy', tc:'td',
     what:'Track LLM API costs per request. Implement tracing with LangSmith or Helicone. Set up Prometheus metrics. Build a cost dashboard.',
     daily:'Check your LLM cost dashboard. Find the most expensive query and optimize it.',
     tools:['LangSmith','Redis','Prometheus','Helicone'],
     res:[
       {t:'free',n:'LangSmith',d:'LLM observability and request tracing — free tier',u:'https://smith.langchain.com'},
       {t:'free',n:'Helicone',d:'LLM cost and performance monitoring platform',u:'https://helicone.ai'},
       {t:'free',n:'Prometheus and Grafana',d:'Industry-standard metrics stack — fully open source',u:'https://prometheus.io'},
       {t:'free',n:'Redis Documentation',d:'In-memory caching that drastically cuts API costs',u:'https://redis.io/docs'}
     ]},
    {num:'W12', title:'Build and Open-Source Your Capstone', tag:'Deploy', tc:'td',
     what:'Finalize your production AI application end-to-end. Write a thorough technical README. Publish it on GitHub. Write a blog post documenting your architecture.',
     daily:'Write documentation. Good engineers document as they build — not at the end.',
     tools:['GitHub','dev.to','HuggingFace Spaces'],
     res:[
       {t:'free',n:'dev.to Developer Blog',d:'Developer blogging platform with a wide audience',u:'https://dev.to'},
       {t:'free',n:'GitHub',d:'Showcase your work publicly for employers to see',u:'https://github.com'},
       {t:'free',n:'Hugging Face Spaces',d:'Host AI demos and applications for free',u:'https://huggingface.co/spaces'},
       {t:'free',n:'Awesome LLM Apps on GitHub',d:'Submit your app to this curated community list',u:'https://github.com/Shubhamsaboo/awesome-llm-apps'}
     ]}
  ],
  tools: [
    {sec:'Core Stack', items:[
      {ico:'🐍',n:'Python 3.11+',d:'The language of AI engineering worldwide',b:'Essential',u:'https://python.org'},
      {ico:'⚡',n:'FastAPI',d:'Modern async API framework — type-safe and fast',b:'Essential',u:'https://fastapi.tiangolo.com'},
      {ico:'🤖',n:'Anthropic SDK',d:'Claude API — best reasoning for complex tasks',b:'Pay-per-use',u:'https://docs.anthropic.com'}
    ]},
    {sec:'AI and ML Stack', items:[
      {ico:'🦜',n:'LangChain',d:'LLM orchestration and RAG pipeline framework',b:'Open Source',u:'https://langchain.com'},
      {ico:'🗂️',n:'Chroma / Pinecone',d:'Vector database for semantic search capabilities',b:'Free Tier',u:'https://trychroma.com'},
      {ico:'🧪',n:'LangSmith',d:'LLM observability, evaluation, and request tracing',b:'Free Tier',u:'https://smith.langchain.com'}
    ]},
    {sec:'Infrastructure', items:[
      {ico:'🐳',n:'Docker',d:'Containerize your apps for consistent deployment',b:'Essential',u:'https://docker.com'},
      {ico:'🚂',n:'Railway / Fly.io',d:'Simple cloud deployment with free tiers available',b:'Free Tier',u:'https://railway.app'},
      {ico:'⚡',n:'Redis',d:'Caching layer that reduces LLM costs by 40% or more',b:'Open Source',u:'https://redis.io'}
    ]},
    {sec:'Data', items:[
      {ico:'🐘',n:'PostgreSQL',d:'The production database of choice for AI apps',b:'Essential',u:'https://postgresql.org'},
      {ico:'🔋',n:'Supabase',d:'Managed Postgres with auth — free tier included',b:'Freemium',u:'https://supabase.com'},
      {ico:'📊',n:'Pydantic V2',d:'Data validation that catches bugs before production',b:'Open Source',u:'https://docs.pydantic.dev'}
    ]}
  ],
  habits: [
    {time:'Morning', items:['<strong>30 min:</strong> Read one AI engineering blog post — Scale AI, Anthropic, or OpenAI engineering blogs.','<strong>LeetCode:</strong> One Easy or Medium Python problem every single morning — non-negotiable.']},
    {time:'Build', items:['<strong>TDD mindset:</strong> Write the test before writing the feature every single time.','<strong>Document as you build:</strong> Add docstrings, README sections, and comments in real time as you code.','<strong>Commit hygiene:</strong> Atomic commits with clear descriptive messages. Your future self will thank you.']},
    {time:'Evening', items:['<strong>30 min:</strong> Read the source code of one library you used today. Understand exactly how it works.','<strong>Weekly:</strong> Check your LLM API cost breakdown. Optimize the single most expensive call.']}
  ]
};

PATHS['research'] = {
  name: 'Research and Architecture', sub: 'The Scientist', badge: 'Research Path',
  desc: 'Go deep into the mathematics, algorithms, and theory behind modern AI. From linear algebra to training transformers from scratch — this is the path for those who want to push the frontier.',
  hours: '15-20 hrs/week', outcome: 'Train your first model',
  weeks: [
    {num:'W1', title:'Linear Algebra for Deep Learning', tag:'Foundation', tc:'tf',
     what:'Master vectors, matrices, matrix multiplication, eigenvalues, and SVD. Understand why these are the backbone of every neural network.',
     daily:'Derive one theorem by hand. Then implement it in NumPy and verify the result is correct.',
     tools:['Python','NumPy','Jupyter Notebook'],
     res:[
       {t:'free',n:'3Blue1Brown — Essence of Linear Algebra',d:'YouTube series — the best visual intuition ever made',u:'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab'},
       {t:'free',n:'MIT 18.06 — Gilbert Strang',d:'Free full course on MIT OpenCourseWare',u:'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010'},
       {t:'free',n:'Khan Academy Linear Algebra',d:'Self-paced with exercises and instant feedback',u:'https://www.khanacademy.org/math/linear-algebra'},
       {t:'free',n:'NumPy Documentation',d:'Implement everything you learn using NumPy arrays',u:'https://numpy.org/doc/stable'}
     ]},
    {num:'W2', title:'Calculus and Optimization', tag:'Foundation', tc:'tf',
     what:'Master derivatives, chain rule, partial derivatives, and gradient descent. Understand why gradient descent is how AI learns.',
     daily:'Implement one optimizer variant — SGD, momentum, or Adam — from scratch in NumPy.',
     tools:['Python','NumPy','Matplotlib','Jupyter'],
     res:[
       {t:'free',n:'3Blue1Brown — Essence of Calculus',d:'YouTube series — beautiful visual derivations',u:'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr'},
       {t:'free',n:'Khan Academy Calculus',d:'Derivatives through multivariable calculus',u:'https://www.khanacademy.org/math/calculus-1'},
       {t:'free',n:'Andrej Karpathy — micrograd',d:'Build backpropagation from scratch in 100 lines',u:'https://github.com/karpathy/micrograd'},
       {t:'free',n:'Matrix Calculus for Deep Learning',d:'Parr and Howard — free PDF, essential reading',u:'https://explained.ai/matrix-calculus'}
     ]},
    {num:'W3', title:'Statistics and Probability', tag:'Foundation', tc:'tf',
     what:'Study probability distributions, Bayes theorem, MLE, MAP estimation, and information theory including entropy and cross-entropy.',
     daily:'Work through one proof in Bayes theorem applications. Simulate the result in Python.',
     tools:['Python','SciPy','Matplotlib','seaborn'],
     res:[
       {t:'free',n:'Seeing Theory',d:'Visual introduction to probability from Brown University',u:'https://seeing-theory.brown.edu'},
       {t:'free',n:'StatQuest with Josh Starmer',d:'YouTube channel — the best stats intuition available',u:'https://www.youtube.com/c/joshstarmer'},
       {t:'free',n:'Think Stats — Allen Downey',d:'Free PDF book using Python throughout',u:'https://greenteapress.com/thinkstats2'},
       {t:'free',n:'Information Theory — Khan Academy',d:'Entropy and cross-entropy clearly explained',u:'https://www.khanacademy.org/computing/information-theory'}
     ]},
    {num:'W4', title:'Neural Networks from Scratch', tag:'Foundation', tc:'tf',
     what:'Build a neural network using only NumPy — no PyTorch, no TensorFlow shortcuts. Implement forward pass, backpropagation, weight initialization.',
     daily:'Implement one component of backpropagation from scratch. Verify gradients numerically.',
     tools:['Python','NumPy','Matplotlib'],
     res:[
       {t:'free',n:'Karpathy — Neural Networks Zero to Hero',d:'The best YouTube series on building neural networks',u:'https://karpathy.ai/zero-to-hero.html'},
       {t:'free',n:'CS231n — Stanford Notes',d:'The legendary Stanford course notes — completely free',u:'https://cs231n.github.io'},
       {t:'free',n:'Neural Networks and Deep Learning',d:'Michael Nielsen — free online book, beautifully written',u:'http://neuralnetworksanddeeplearning.com'},
       {t:'free',n:'3Blue1Brown — Neural Networks Series',d:'4 videos that build perfect conceptual intuition',u:'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi'}
     ]},
    {num:'W5', title:'PyTorch Fundamentals', tag:'Build', tc:'tb',
     what:'Move from NumPy to PyTorch. Understand tensors, autograd, and the computation graph. Implement the same MNIST network in PyTorch.',
     daily:'Run one experiment per day. Log everything to Weights and Biases. Compare with yesterday.',
     tools:['PyTorch','CUDA','Jupyter','Weights and Biases'],
     res:[
       {t:'free',n:'PyTorch Official Tutorials',d:'Tensor basics all the way to full training loops',u:'https://pytorch.org/tutorials'},
       {t:'free',n:'Fast.ai Practical Deep Learning',d:'Top-down approach — build first, then understand theory',u:'https://course.fast.ai'},
       {t:'free',n:'Deep Learning with PyTorch',d:'Free PDF book written by the PyTorch team',u:'https://pytorch.org/assets/deep-learning/Deep-Learning-with-PyTorch.pdf'},
       {t:'free',n:'PyTorch Lightning',d:'Clean PyTorch boilerplate removal framework',u:'https://lightning.ai/docs/pytorch/stable'}
     ]},
    {num:'W6', title:'CNNs and Computer Vision', tag:'Build', tc:'tb',
     what:'Understand convolutions, pooling, and the architecture behind ResNet, VGG, and EfficientNet. Fine-tune a pre-trained ResNet on a custom image dataset.',
     daily:'Train one experiment with a different augmentation strategy. Compare validation accuracy.',
     tools:['PyTorch','torchvision','OpenCV','albumentations'],
     res:[
       {t:'free',n:'CS231n — Convolution Notes',d:'Stanford legendary computer vision course notes',u:'https://cs231n.github.io/convolutional-networks'},
       {t:'free',n:'Torchvision Pre-trained Models',d:'Pre-trained CNNs ready for transfer learning',u:'https://pytorch.org/vision/stable/models.html'},
       {t:'free',n:'Papers With Code — Image Classification',d:'State-of-the-art methods with reproducible code',u:'https://paperswithcode.com/task/image-classification'},
       {t:'course',n:'Fast.ai Part 1 — Chapters 1-4',d:'CNNs with immediate practical application',u:'https://course.fast.ai'}
     ]},
    {num:'W7', title:'Transformers and the Attention Mechanism', tag:'Build', tc:'tb',
     what:'Read the original Attention Is All You Need paper. Implement multi-head self-attention from scratch. Understand positional encodings.',
     daily:'Read one section of the attention paper carefully. Implement the corresponding code.',
     tools:['PyTorch','Hugging Face Transformers','tokenizers'],
     res:[
       {t:'free',n:'Attention Is All You Need Paper',d:'Vaswani et al. 2017 — read every single word',u:'https://arxiv.org/abs/1706.03762'},
       {t:'free',n:'The Illustrated Transformer',d:'Jay Alammar — the best visual explanation of transformers',u:'https://jalammar.github.io/illustrated-transformer'},
       {t:'free',n:'Karpathy — Build GPT from Scratch',d:'Code a transformer from scratch in 2 hours',u:'https://www.youtube.com/watch?v=kCc8FmEb1nY'},
       {t:'free',n:'Hugging Face NLP Course',d:'Transformers from theory through real practice',u:'https://huggingface.co/learn/nlp-course'}
     ]},
    {num:'W8', title:'Pre-Training and Fine-Tuning LLMs', tag:'Master', tc:'tm',
     what:'Fine-tune an open-source LLM like Mistral or Llama on a custom dataset using LoRA and QLoRA. Understand PEFT.',
     daily:'Monitor your training run closely. Track loss curves and identify points of divergence.',
     tools:['Hugging Face','PEFT','Unsloth','Google Colab'],
     res:[
       {t:'free',n:'Hugging Face PEFT Documentation',d:'LoRA, QLoRA, prefix tuning — free open-source library',u:'https://huggingface.co/docs/peft'},
       {t:'free',n:'Fine-Tuning Llama — HF Blog',d:'Step-by-step QLoRA fine-tuning guide',u:'https://huggingface.co/blog/llama2'},
       {t:'free',n:'Sebastian Raschka — LLM Finetuning',d:'Detailed and accurate blog post series',u:'https://magazine.sebastianraschka.com'},
       {t:'free',n:'Unsloth',d:'5x faster fine-tuning using 80 percent less VRAM',u:'https://github.com/unslothai/unsloth'}
     ]},
    {num:'W9', title:'RLHF and Alignment Techniques', tag:'Master', tc:'tm',
     what:'Understand RLHF, DPO, and Constitutional AI. Implement DPO fine-tuning on a preference dataset. Read the key alignment papers.',
     daily:'Read one alignment paper abstract. Ask Claude to argue against its main conclusions.',
     tools:['TRL','Hugging Face','PyTorch','WandB'],
     res:[
       {t:'free',n:'InstructGPT Paper — OpenAI',d:'The RLHF paper that changed the entire industry',u:'https://arxiv.org/abs/2203.02155'},
       {t:'free',n:'DPO Paper — Rafailov et al.',d:'A simpler and more stable RLHF alternative',u:'https://arxiv.org/abs/2305.18290'},
       {t:'free',n:'Constitutional AI — Anthropic',d:'The alignment approach behind Claude',u:'https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback'},
       {t:'free',n:'TRL Library — Hugging Face',d:'RLHF and DPO implementation ready to use',u:'https://github.com/huggingface/trl'}
     ]},
    {num:'W10', title:'Evaluation, Evals and Benchmarking', tag:'Master', tc:'tm',
     what:'Learn to rigorously evaluate LLMs. Understand MMLU, HellaSwag, and HumanEval benchmarks. Design custom evals for your use case.',
     daily:'Run one evaluation. Compare two model variants. Document what changed and why.',
     tools:['lm-evaluation-harness','Inspect AI','WandB'],
     res:[
       {t:'free',n:'LMSYS Chatbot Arena',d:'ELO-based model comparison from real user votes',u:'https://chat.lmsys.org'},
       {t:'free',n:'EleutherAI LM Evaluation Harness',d:'Run standardized benchmarks on any model',u:'https://github.com/EleutherAI/lm-evaluation-harness'},
       {t:'free',n:'LLM-as-Judge Guide by Hamel',d:'Detailed guide to automated evaluation using LLMs',u:'https://hamel.dev/blog/posts/evals'},
       {t:'free',n:'Inspect AI Framework',d:'UK AI Safety Institute evaluation framework',u:'https://inspect.ai-safety-institute.org.uk'}
     ]},
    {num:'W11', title:'Scaling Laws and Efficient Training', tag:'Deploy', tc:'td',
     what:'Study Chinchilla scaling laws deeply. Understand compute-optimal training budgets. Learn gradient checkpointing, mixed precision training.',
     daily:'Profile your training loop carefully. Find and eliminate one concrete bottleneck.',
     tools:['PyTorch DDP','Accelerate','FSDP'],
     res:[
       {t:'free',n:'Chinchilla Paper — Hoffmann et al.',d:'The training compute scaling laws paper',u:'https://arxiv.org/abs/2203.15556'},
       {t:'free',n:'Scaling Laws — Kaplan et al.',d:'OpenAI original scaling laws research paper',u:'https://arxiv.org/abs/2001.08361'},
       {t:'free',n:'PyTorch DDP Tutorial',d:'Distributed Data Parallel training walkthrough',u:'https://pytorch.org/tutorials/intermediate/ddp_tutorial.html'},
       {t:'free',n:'Hugging Face Accelerate',d:'Multi-GPU and TPU training made accessible',u:'https://huggingface.co/docs/accelerate'}
     ]},
    {num:'W12', title:'Publish and Contribute to the Field', tag:'Deploy', tc:'td',
     what:'Write a technical blog post, a detailed model card, or a research preprint. Submit to arXiv or Hugging Face Hub. Contribute to open-source.',
     daily:'Write 500 words clearly. Good researchers communicate their findings well.',
     tools:['Hugging Face Hub','arXiv','LaTeX'],
     res:[
       {t:'free',n:'arXiv — Submit a Preprint',d:'Free pre-publication server used by all researchers',u:'https://arxiv.org/submit'},
       {t:'free',n:'Hugging Face Hub',d:'Publish your models and datasets publicly',u:'https://huggingface.co/models'},
       {t:'free',n:'Papers With Code',d:'Link your paper to fully reproducible code',u:'https://paperswithcode.com'},
       {t:'free',n:'AI Safety Newsletter',d:'Stay current on the latest alignment research',u:'https://www.aisafety.com/newsletter'}
     ]}
  ],
  tools: [
    {sec:'Core ML', items:[
      {ico:'🔥',n:'PyTorch',d:'The dominant deep learning framework worldwide',b:'Essential',u:'https://pytorch.org'},
      {ico:'🤗',n:'Hugging Face',d:'Model hub, datasets, and transformers library',b:'Essential',u:'https://huggingface.co'},
      {ico:'📔',n:'Jupyter Lab',d:'Interactive research environment for experimentation',b:'Open Source',u:'https://jupyter.org'}
    ]},
    {sec:'Training', items:[
      {ico:'📊',n:'Weights and Biases',d:'Experiment tracking and visualization — free for researchers',b:'Free',u:'https://wandb.ai'},
      {ico:'⚡',n:'Unsloth',d:'5x faster fine-tuning using 80% less memory',b:'Open Source',u:'https://github.com/unslothai/unsloth'},
      {ico:'🚀',n:'HF Accelerate',d:'Multi-GPU and TPU training abstraction layer',b:'Open Source',u:'https://huggingface.co/docs/accelerate'}
    ]},
    {sec:'Evaluation', items:[
      {ico:'📏',n:'LM Evaluation Harness',d:'Standardized LLM benchmarking from EleutherAI',b:'Open Source',u:'https://github.com/EleutherAI/lm-evaluation-harness'},
      {ico:'🧪',n:'Inspect AI',d:'Systematic AI evaluation framework from UK AISI',b:'Open Source',u:'https://inspect.ai-safety-institute.org.uk'},
      {ico:'🏆',n:'LMSYS Arena',d:'Community ELO ranking system for language models',b:'Free',u:'https://chat.lmsys.org'}
    ]},
    {sec:'Compute', items:[
      {ico:'☁️',n:'Google Colab Pro',d:'GPU access for researchers — $10 per month',b:'$10/mo',u:'https://colab.research.google.com'},
      {ico:'📟',n:'Paperspace Gradient',d:'ML-focused cloud GPUs — free tier available',b:'Free Tier',u:'https://gradient.run'},
      {ico:'🖥',n:'Vast.ai',d:'Rent affordable GPUs from community providers',b:'Pay-per-hour',u:'https://vast.ai'}
    ]}
  ],
  habits: [
    {time:'Morning', items:['<strong>45 min:</strong> Read one paper on arXiv in cs.LG, cs.AI, or stat.ML — use Semantic Scholar for discovery.','<strong>Implement first:</strong> Write code from the paper core algorithm before reading the full methods section.']},
    {time:'Research', items:['<strong>Log everything:</strong> Every experiment goes in Weights and Biases. Bad results are data, not failures.','<strong>Rubber duck debug:</strong> Explain your current problem to Claude. Articulating it often reveals the solution.','<strong>Deep work blocks:</strong> 90-minute uninterrupted sessions with no notifications. Research needs sustained focus.']},
    {time:'Evening', items:['<strong>30 min:</strong> Write in your research journal. What did you find? What remains unexplained?','<strong>Weekly:</strong> Present your work to someone who does not know ML. If you cannot explain it, you do not understand it.']}
  ]
};

// Path selection logic
export function getPath(answers) {
  const { age, role, goal } = answers;
  if(age==='child' || age==='senior') return 'nocode';
  if(age==='teen') return (goal==='build'||goal==='understand') ? 'vibe' : 'nocode';
  if(goal==='understand') return (role==='developer'||role==='student') ? 'research' : 'production';
  if(goal==='build') return role==='developer' ? 'production' : 'vibe';
  if(goal==='career') return role==='developer' ? 'production' : (role==='entrepreneur'||role==='student') ? 'vibe' : 'nocode';
  return 'nocode';
}
