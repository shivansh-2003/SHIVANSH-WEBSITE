

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
    category: "Generative AI",
    icon: Brain,
    items: ["LangChain", "LangGraph", "Agno", "Crew AI", "Hugging Face", "Google ADK", "LlamaIndex", "Guardrails"]
  },
  {
    category: "Cloud & Databases",
    icon: Database,
    items: ["Supabase", "Mongo DB", "Redis", "Pinecone", "Chroma DB", "AWS (EC2, S3, Sagemaker, Bedrock, Lambda)"]
  },
  {
    category: "AI/ML Technologies",
    icon: Cpu,
    items: ["Generative AI", "Natural Language Processing", "Deep Learning", "LLM Fine Tuning", "RAG Techniques", "MCP Protocol", "A2A Protocol", "Machine Learning", "Data Analysis", "AI Agents", "LLM Observability", "CI/CD"]
  },
  {
    category: "Python Libraries & Frameworks",
    icon: Code2,
    items: ["Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "PyTorch", "FastAPI", "NLTK", "Spacy", "Beautiful Soup", "Selenium", "Fast MCP", "Graphiti", "Crawl4AI", "Plotly", "Streamlit", "Pydantic", "Django"]
  },
  {
    category: "Tools & Software",
    icon: Layout,
    items: ["Tableau", "GitHub", "Docker", "ML Flow", "GitHub Actions", "LangFlow", "LangSmith", "Livekit", "LangFuse"]
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
    company: "Bajaj Finserv Direct Limited",
    role: "Gen-AI Intern",
    period: "December 2025 – June 2026",
    focus: "Analytics dashboard, AI performance metrics, legacy codebase refactoring",
    achievements: [
      "Collaborated with Tech Lead to design and implement a centralized analytics dashboard for 3 major products, consolidating and visualizing 50+ AI-driven performance metrics for real-time insights and decision-making",
      "Refactored legacy codebase to improve modularity, maintainability, and scalability; identified and resolved 30+ critical bugs, enhancing overall system stability and developer productivity"
    ],
    tech: ["Analytics", "Dashboard", "AI Metrics", "Refactoring", "Performance Optimization"],
    certificate: null
  },
  {
    company: "Zeron",
    role: "AI Intern",
    period: "June 2025 – November 2025",
    focus: "Multi-agent workflows, RAG pipeline optimization, autonomous AI agents",
    achievements: [
      "Architected 2 multi-agent workflows & 2 RAG (corrective and agent based) pipelines that lifted retrieval accuracy from 71% → 93% with help of mechanism like hybrid search, ranking retrieved docs and MMR",
      "Built custom MCP servers on Render and 3 Lang Flow AI workflows and launched ZIN AI, an autonomous chatbot that now serves as the single AI assistant across all Zeron client products",
      "Presented bi-weekly demos to CTO, senior SWE & AI engineer—translated technical trade-offs into ROI metrics"
    ],
    tech: ["LangFlow", "RAG", "MMR", "MCP Servers", "Multi-agent Workflows"],
    certificate: "/assests/1750518668825.pdf"
  },
  {
    company: "Stremly",
    role: "AI Software Developer Intern",
    period: "April 2025 – June 2025",
    focus: "Web automation, AI agents, production systems",
    achievements: [
      "Co-engineered production-grade, Agent based web-automation platform alongside 4 interns and CTO within 8-week",
      "Refactored single-threaded prototype into 4 autonomous agents (Crawler, Extractor, Validator, Critique)"
    ],
    tech: ["LangGraph", "Playwright", "LangChain", "Pinecone", "FastAPI", "Pydantic"],
    certificate: "/assests/1768408227545.pdf"
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
    github: "https://github.com/shivansh-2003/Candidate-ai",
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
    github: "https://github.com/shivansh-2003/Fraud_detection",
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
    github: "https://github.com/shivansh-2003/Linkedin_blog_agent",
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
    github: "https://github.com/shivansh-2003/Story_Assistant",
    demo: "#"
  },
  {
    title: "Workflowz.ai",
    category: "Enterprise AI Platform",
    description: "Intelligent multi-tenant project execution platform with AI-driven task generation and constraint-aware team assignment.",
    details: [
      "Multi-tenant SaaS platform with secure RBAC and complete organizational isolation",
      "7-agent AI workflow engine: Input Ingestion → Architecture Context → Clarification → Task Decomposition → Role Matching → Validation → Human Approval",
      "Intelligent task generation that analyzes project requirements and automatically assigns work based on real team capabilities, workload, and seniority",
      "Human-in-the-loop clarification: AI asks risk-based questions to eliminate implementation uncertainty before generating tasks",
      "Capability-aware planning: Adapts scope for small teams, flags missing capabilities, avoids impossible assignments",
      "Weighted progress tracking: High-priority tasks impact project completion more than minor ones for accurate execution visibility",
      "Explainable assignments: Every task includes why it exists, why it was assigned to that person, and what assumptions it depends on",
      "Multi-level hierarchy: Superuser manages organizations, Organization Heads approve AI plans and oversee projects, Team Members execute assigned tasks"
    ],
    icon: Layers,
    tech: ["LangGraph", "Multi-agent AI", "FastAPI", "PostgreSQL", "JWT Auth", "RBAC"],
    color: "#8b5cf6",
    github: "https://github.com/shivansh-2003/Workflowz.ai",
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
    github: "https://github.com/shivansh-2003/Data-Assistant",
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
    ],
    certificate: "/assests/certificate_Shivansh Mahajan.jpg"
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
    ],
    certificate: "/assests/00a460ec-968b-4fbb-b87f-305192fcd51e.png"
  },
  { 
    name: "Ride Hacks Phase 2", 
    org: "JIIT Noida", 
    project: "Ride Hacks", 
    result: "1st Runner-Up",
    details: [
      "Organization: JIIT Noida",
      "Achievement: 1st Runner-Up",
      "Project: Ride Hacks"
    ],
    certificate: null
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
    ],
    certificate: "/assests/hackthemountain.jpeg"
  }
];
