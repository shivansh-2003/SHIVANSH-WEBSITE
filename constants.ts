

import { 
  Brain, 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Cpu, 
  Bot,
  Terminal,
  Mic,
  Shield,
  FileText,
  BarChart,
  Layout
} from 'lucide-react';

export const SOCIALS = {
  email: "shivansh.m2003@gmail.com",
  phone: "+91 9798940184",
  location: "Patna, India",
  linkedin: "LinkedIn",
  github: "GitHub",
  leetcode: "LeetCode"
};

export const SKILLS = [
  {
    category: "Generative AI & LLM Frameworks",
    icon: Brain,
    items: ["LangChain", "LangGraph", "Agno", "Crew AI", "Hugging Face", "Google ADK", "LlamaIndex", "Guardrails", "MCP Protocol", "A2A Protocol"]
  },
  {
    category: "Cloud & Databases",
    icon: Database,
    items: ["AWS (EC2, S3, SageMaker, Bedrock, Lambda)", "Supabase", "MongoDB", "Redis", "Pinecone", "Chroma DB", "Snowflake"]
  },
  {
    category: "AI/ML Technologies",
    icon: Cpu,
    items: ["Generative AI", "NLP", "Deep Learning", "LLM Fine Tuning", "RAG Techniques", "Machine Learning", "Data Analysis", "AI Agents", "LLM Monitoring", "CI/CD"]
  },
  {
    category: "Python Libraries & Frameworks",
    icon: Code2,
    items: ["Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "PyTorch", "FastAPI", "NLTK", "Spacy", "Beautiful Soup", "Selenium", "FastMCP", "Graphiti", "Crawl4AI", "Plotly", "Streamlit", "Pydantic"]
  },
  {
    category: "Tools & Software",
    icon: Layout,
    items: ["Tableau", "GitHub", "Docker", "MLFlow", "GitHub Actions", "LangFlow", "LangSmith", "LiveKit", "Streamlit"]
  }
];

export const TECH_STACK_LOGOS = [
  { name: "OpenAI", slug: "openai" },
  { name: "Hugging Face", slug: "huggingface" },
  { name: "LangChain", slug: "langchain" },
  { name: "NVIDIA", slug: "nvidia" },
  { name: "Meta", slug: "meta" },
  { name: "Google", slug: "google" },
  { name: "AWS", slug: "amazonaws", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" },
  { name: "Python", slug: "python" },
  { name: "PyTorch", slug: "pytorch" },
  { name: "TensorFlow", slug: "tensorflow" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Docker", slug: "docker" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Vercel", slug: "vercel" },
  { name: "Supabase", slug: "supabase" },
  { name: "Firebase", slug: "firebase" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Redis", slug: "redis" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "GitHub", slug: "github" },
  { name: "Git", slug: "git" },
  { name: "Figma", slug: "figma" },
  { name: "Notion", slug: "notion" },
  { name: "Linear", slug: "linear" },
  { name: "Linux", slug: "linux" },
  { name: "Nginx", slug: "nginx" },
  { name: "Grafana", slug: "grafana" },
  { name: "Prometheus", slug: "prometheus" },
  { name: "Jenkins", slug: "jenkins" },
  { name: "GitLab", slug: "gitlab" },
  { name: "Bitbucket", slug: "bitbucket" },
  { name: "Jira", slug: "jira" },
  { name: "Slack", slug: "slack" },
  { name: "Discord", slug: "discord" },
  { name: "Streamlit", slug: "streamlit" },
  { name: "Pandas", slug: "pandas" },
  { name: "NumPy", slug: "numpy" }
];

export const EXPERIENCE = [
  {
    company: "Zeron",
    role: "AI Intern",
    period: "Present",
    focus: "Multi-agent workflows, RAG pipeline optimization, autonomous AI agents",
    achievements: [
      "Architected 2 multi-agent workflows and 2 RAG pipelines (corrective & agent-based) that lifted retrieval accuracy from 71% → 93% using hybrid search, ranking, and MMR",
      "Built custom MCP servers on Render and 3 LangFlow AI workflows; launched ZIN AI, an autonomous chatbot serving as single AI assistant across all Zeron client products",
      "Presented bi-weekly demos to CTO and senior engineers—translated technical trade-offs into ROI metrics, securing production launch approval",
      "Collaborated with cross-functional teams resulting in 30% increase in operational efficiency across projects",
      "Spearheaded AI model research and optimization, improving model accuracy by 25% through iterative testing",
      "Built efficient AI-powered SCP mapping with frameworks like NIST and SEBI"
    ],
    tech: ["LangFlow", "RAG", "MMR", "MCP Servers", "NIST", "SEBI"]
  },
  {
    company: "Stremly",
    role: "AI Software Development Intern",
    period: "April 14 – June 14, 2025",
    focus: "Web automation, AI agents, production systems",
    achievements: [
      "Co-engineered production-grade agent-based web-automation platform with 4 interns and CTO within 8-week sprint",
      "Refactored single-threaded prototype into 4 autonomous agents (Crawler, Extractor, Validator, Critique) leveraging Graph-RAG for DOM element pinpointing",
      "Designed and implemented components for AI agent workflows with LLMs, vector stores, and prompt engineering",
      "Integrated automation flows involving browser and system-level interactions using Playwright"
    ],
    tech: ["LangGraph", "Playwright", "LangChain", "Pinecone", "FastAPI", "Pydantic"]
  }
];

export const EDUCATION = [
  {
    institution: "Jaypee University of Engineering Technology (JUET)",
    degree: "B.Tech in Computer Science",
    location: "Guna, Madhya Pradesh",
    period: "Sep 2022 – May 2026",
    details: "CGPA: 7.1/10"
  },
  {
    institution: "Kautilya Senior Secondary School",
    degree: "12th Grade",
    location: "Kota",
    period: "2019-2021",
    details: "78%"
  },
  {
    institution: "Don Bosco Academy",
    degree: "10th Grade",
    location: "Patna",
    period: "2019",
    details: "90%"
  }
];

export const PROJECTS = [
  {
    title: "Voice-Activated Portfolio Assistant",
    category: "Generative AI",
    description: "Real-time voice-activated AI interview assistant using LiveKit's agent framework for technical interview preparation.",
    details: [
      "Real-time voice-activated AI interview assistant using LiveKit's agent framework for technical interview preparation",
      "Speech-to-Text (STT): Deepgram Nova-3 with real-time interim results",
      "LLM: OpenAI GPT-4.1-mini for context-aware responses",
      "Text-to-Speech (TTS): OpenAI TTS with natural voice output",
      "VAD: Silero VAD with optimized thresholds (300ms min speech, 500ms silence, 0.5 activation)",
      "RAG Pipeline: Pinecone vector DB + OpenAI embeddings for semantic search over personal knowledge base",
      "Sub-2 second latency, mock interview capabilities, hands-free operation for commuting scenarios",
      "Production-ready Docker deployment with comprehensive logging and error handling"
    ],
    icon: Mic,
    tech: ["OpenAI GPT-4o", "Deepgram", "Silero VAD", "Pinecone", "LiveKit"],
    color: "#00f0ff",
    github: "https://github.com",
    demo: "#"
  },
  {
    title: "Fraud Detection System",
    category: "Deep Learning",
    description: "ML-based fraud detection API predicting fraudulent financial transactions using deep neural networks.",
    details: [
      "ML-based fraud detection API predicting fraudulent financial transactions using deep neural networks",
      "Deep Neural Network: 4 hidden layers with batch normalization and dropout regularization",
      "Input: 12 engineered features (transaction amount, frequency, distance, credit score, etc.)",
      "SMOTE-based class imbalance handling; 5-fold Stratified K-Fold CV",
      "Metrics: ~8-11ms prediction latency, ~100 transactions/second throughput",
      "REST API: Flask + CORS support with comprehensive error handling",
      "Deployment: Gunicorn production WSGI server, Docker containerization ready"
    ],
    icon: Shield,
    tech: ["Python", "Flask", "Docker", "TensorFlow", "SMOTE"],
    color: "#ff0055",
    github: "https://github.com",
    demo: "#"
  },
  {
    title: "LinkedIn Blog Agent",
    category: "AI Agents",
    description: "AI assistant transforming multi-format content into engaging LinkedIn posts using vision and language models.",
    details: [
      "AI-powered assistant transforming multi-format content into engaging LinkedIn posts using vision and language models",
      "Multi-format support: PDFs, images, code files (20+ languages), presentations, text",
      "Vision Analysis: Google Gemini Flash 1.5 for visual content understanding",
      "Code Analysis: Anthropic Claude for technical content extraction",
      "LLM: Anthropic Claude Opus for high-quality blog generation",
      "Advanced presentation processing: PowerPoint/PDF extraction with speaker notes",
      "Human-in-the-loop generation: LangGraph-based interactive refinement with regeneration options",
      "LinkedIn optimization: Viral hooks, hashtags, CTAs, emoji usage, posting best practices"
    ],
    icon: Bot,
    tech: ["Gemini Flash 1.5", "Claude Opus", "LangGraph", "LangChain"],
    color: "#0077b5",
    github: "https://github.com",
    demo: "#"
  },
  {
    title: "Interactive Storytelling API",
    category: "Backend API",
    description: "Dynamic AI-powered story creation backend with advanced character development and professional exports.",
    details: [
      "Dynamic AI-powered story creation backend with advanced character development and professional exports",
      "Multi-dimensional character profiles: Up to 10 characters with relationships and AI-generated backstories",
      "6 theme-based story creation: Fantasy, Mystery, Adventure, Sci-Fi, Horror, Romance",
      "Dual-mode generation: User-guided choices or AI auto-continuation",
      "Real-time paragraph editing with natural language instructions",
      "Professional exports: High-quality PDF generation, multi-language audio narration (10+ languages)",
      "100% test coverage (18/18 tests passing), 8ms average response time"
    ],
    icon: Terminal,
    tech: ["FastAPI", "Groq API", "gTTS", "FPDF", "Pydantic"],
    color: "#a855f7",
    github: "https://github.com",
    demo: "#"
  },
  {
    title: "Ultimate Summarization API",
    category: "Multi-format Processing",
    description: "Comprehensive backend processing and summarizing legal docs, audio, video, and websites.",
    details: [
      "Comprehensive backend processing and summarizing legal documents, general docs, resumes, audio, video, and websites",
      "Legal Document Module: Document type detection, map-reduce summarization, Tavily legal context enrichment",
      "General Documents: Dynamic strategy (short vs long), section importance scoring, configurable summaries",
      "Resume Analysis: Structured data extraction, ATS compatibility analysis, job description comparison",
      "Audio Processing: AssemblyAI transcription, recursive chunking, map-reduce summarization",
      "Video Processing: YouTube and uploaded video analysis with multi-model integration",
      "Website Processing: Async crawling via crawl4ai, customizable summary lengths, Groq Gemma2 model"
    ],
    icon: FileText,
    tech: ["AssemblyAI", "Crawl4AI", "Gemma2", "Tavily"],
    color: "#22c55e",
    github: "https://github.com",
    demo: "#"
  },
  {
    title: "Data Analyst AI Assistant",
    category: "Data Analysis",
    description: "Intelligent data analysis platform with interactive visualizations and natural language Q&A.",
    details: [
      "Intelligent data analysis platform with interactive visualizations and natural language Q&A interface",
      "LangChain agents with specialized DataFrame and visualization tools",
      "Multi-format support: CSV, Excel, PDF, images",
      "Auto-generates 20+ Plotly charts (numerical, categorical, mixed) on demand",
      "Conversation-buffer memory: Natural language Q&A; up to 20 human messages",
      "Dual agent implementations: LangChain and LangGraph architectures",
      "Statistical analysis, time series analysis, relationship discovery, anomaly detection"
    ],
    icon: BarChart,
    tech: ["Streamlit", "LangChain", "Plotly", "Pandas", "GPT-4o"],
    color: "#eab308",
    github: "https://github.com",
    demo: "#"
  }
];

export const HACKATHONS = [
  { 
    name: "InnovateX Delhi", 
    org: "DTU", 
    project: "Fraud Detection System", 
    result: "Participated & Showcased",
    details: [
      "Organization: Delhi Technological University (DTU)",
      "Achievement: Participated & Showcased",
      "Project: Fraud Detection System"
    ]
  },
  { 
    name: "Hackout Hackathon", 
    org: "DA-IICT", 
    project: "Agriculture-based AI Project", 
    result: "Finalist - Top 10/450",
    details: [
      "Organization: Dhirubhai Ambani University (DA-IICT)",
      "Achievement: Finalist - Top 10 out of 450 teams",
      "Project: Agriculture-based AI Project"
    ]
  },
  { 
    name: "CraveFeed - Phase 2", 
    org: "JIIT Noida", 
    project: "CraveFeed", 
    result: "1st Runner-Up",
    details: [
      "Organization: JIIT Noida",
      "Achievement: 1st Runner-Up",
      "Project: CraveFeed"
    ]
  },
  { 
    name: "Hack The Mountains", 
    org: "MLH", 
    project: "AI Meeting Platform", 
    result: "Selected & Participated",
    details: [
      "Organization: Major League Hacking (MLH)",
      "Achievement: Selected & Participated",
      "Project: AI Meeting Platform"
    ]
  }
];
