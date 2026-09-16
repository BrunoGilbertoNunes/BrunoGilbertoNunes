export const profile = {
  name: "Bruno Nunes",
  role: "Desenvolvedor Full Stack",
  headline: "Estudante de Engenharia de Software · Full Stack",
  location: "São Leopoldo, RS · Brasil",
  email: "brunogilberto.nunes@gmail.com",
  phoneDisplay: "+55 51 9 9919-2998",
  phoneWa: "5551999192998",
  github: "github.com/BrunoGilbertoNunes",
  linkedin: "linkedin.com/in/brunogilbertonunes",
  githubUrl: "https://github.com/BrunoGilbertoNunes",
  linkedinUrl: "https://linkedin.com/in/brunogilbertonunes",
  waUrl: "https://wa.me/5551999192998",
  about: [
    "Desenvolvedor Full Stack com vivência em ambientes reais de produção, integrações externas e problemas de arquitetura.",
    "Atuo de ponta a ponta: modelagem de dados, regras de negócio, APIs, filas assíncronas e deploy. Hoje curso Engenharia de Software (UniBF) para aliar formação acadêmica à prática já construída.",
  ],
};

export const skills = [
  { label: "React", level: 90, group: "front" },
  { label: "TypeScript", level: 88, group: "front" },
  { label: "JavaScript", level: 92, group: "front" },
  { label: "Inertia.js", level: 85, group: "front" },
  { label: "Tailwind CSS", level: 90, group: "front" },
  { label: "PHP / Laravel", level: 88, group: "back" },
  { label: "Node.js", level: 89, group: "back" },
  { label: "APIs RESTful", level: 92, group: "back" },
  { label: "MySQL / PostgreSQL", level: 85, group: "data" },
  { label: "Redis / BullMQ", level: 86, group: "data" },
  { label: "Docker / Linux", level: 84, group: "infra" },
  { label: "Nginx / Cloudflare", level: 80, group: "infra" },
];

export const skillGroups = [
  { id: "front", label: "Front-end", emoji: "🎨" },
  { id: "back", label: "Back-end", emoji: "⚙️" },
  { id: "data", label: "Filas & Dados", emoji: "🗄️" },
  { id: "infra", label: "Servidores & Infra", emoji: "🚀" },
];

export const projects = [
  {
    id: "omgflux",
    name: "OmgFlux",
    tagline:
      "SaaS de campanhas com QR Codes personalizados, short links e métricas em tempo real.",
    description:
      "Plataforma completa sob demanda: modelagem de dados, painel administrativo, geração e rastreamento de links, emissão de códigos de acesso e billing Stripe com webhooks validados por assinatura. Deploy em Docker + Nginx com SSL automático.",
    stack: ["Laravel", "React", "Inertia.js", "MySQL", "Stripe", "Docker"],
    year: "2026",
    accent: "from-violet-600 to-fuchsia-500",
    icon: "qrcode",
    featured: true,
    highlights: [
      "Gerador de QR Codes customizáveis",
      "Short link com tracking por campanha",
      "Métricas de país, cidade e último acesso",
      "Billing Stripe + rotinas de expiração",
    ],
    links: {
      repo: "https://github.com/BrunoGilbertoNunes",
      site: "https://omgflux.com",
    },
  },
  {
    id: "meltedsystems",
    name: "MeltedSystems",
    tagline:
      "CRM white-label multi-tenant com WhatsApp real (Baileys) e arquitetura orientada a eventos.",
    description:
      "Sistema distribuído em Docker com serviços independentes (core-api, consumer, workers, wa-server, websocket). Filas BullMQ com Redis, Postgres + TypeORM, IAM multi-tenant, billing Stripe e FlowBuilder de bots conversacionais.",
    stack: ["Node.js", "TypeScript", "Baileys", "BullMQ", "Redis", "Postgres", "Docker"],
    year: "2025",
    accent: "from-cyan-500 to-blue-600",
    icon: "server",
    featured: true,
    highlights: [
      "WhatsApp real com restore de sessão e webhooks",
      "Distribuição inteligente de tickets por skill",
      "5+ serviços escaláveis de forma independente",
      "FlowBuilder multi-tenant com nós e edges JSONB",
    ],
    links: {
      repo: "https://github.com/BrunoGilbertoNunes",
    },
  },
  {
    id: "ml-core",
    name: "ML Sync Core",
    tagline:
      "API B2B de sincronização de catálogo com Mercado Livre e Mercado Shops.",
    description:
      "Pipelines assíncronos em Node.js/TypeScript com BullMQ e Redis para sincronização de produtos e imagens. Retry com backoff exponencial e rate limiting respeitando as respostas da API externa, com rastreabilidade do processamento.",
    stack: ["Node.js", "TypeScript", "BullMQ", "Redis", "REST", "Sharp"],
    year: "2025",
    accent: "from-emerald-500 to-teal-600",
    icon: "refresh",
    featured: true,
    highlights: [
      "Sincronização de catálogo, produtos e imagens",
      "Retry + backoff + rate limit resilientes",
      "Trabalhadores assíncronos escaláveis",
      "Integração B2B com Mercado Livre",
    ],
    links: {
      repo: "https://github.com/BrunoGilbertoNunes",
    },
  },
  {
    id: "ml-manager",
    name: "ML Manager",
    tagline:
      "Dashboard de gerenciamento de importações do Mercado Livre.",
    description:
      "Painel que centraliza o gerenciamento de produtos sincronizados, com histórico e validação do processamento por produto. Integra diretamente com o pipeline de sincronização.",
    stack: ["WordPress", "PHP", "MySQL", "REST API"],
    year: "2025",
    accent: "from-amber-500 to-orange-600",
    icon: "layout",
    featured: false,
    links: {},
  },
  {
    id: "loja5-pix",
    name: "PIX Sicredi · Loja5",
    tagline:
      "Gateway de pagamento PIX Sicredi para WooCommerce.",
    description:
      "Plugin WordPress/WooCommerce de integração com a API Pix do Sicredi: emissão de cobranças, validadores de CPF/CNPJ, webhooks de notificação e atualização automática de pedidos.",
    stack: ["WordPress", "WooCommerce", "PHP", "PIX API"],
    year: "2024",
    accent: "from-rose-500 to-pink-600",
    icon: "credit-card",
    featured: false,
    links: {},
  },
  {
    id: "wp-guardian",
    name: "WP Guardian",
    tagline:
      "Plugin de segurança e auditoria para WordPress.",
    description:
      "Dashboard de monitoramento com botão de scan, estrutura preparada para scanners customizados e trilha de eventos de segurança. Projetado para crescer e integrar uma interface React/Vite.",
    stack: ["WordPress", "PHP", "Dashboard", "Scanner"],
    year: "2024",
    accent: "from-slate-600 to-slate-800",
    icon: "shield",
    featured: false,
    links: {},
  },
  {
    id: "for-my-love",
    name: "For My Love",
    tagline:
      "Carta digital interativa com timeline, galeria e música.",
    description:
      "Experiência web romântica single-page: contador de dias calculado automaticamente, linha do tempo, galeria de memórias, carta animada e música de fundo. Build estático com caminhos relativos, pronto para qualquer host.",
    stack: ["React", "TypeScript", "Framer Motion", "Tailwind", "Vite"],
    year: "2024",
    accent: "from-pink-500 to-red-500",
    icon: "heart",
    featured: false,
    links: {
      repo: "https://github.com/BrunoGilbertoNunes",
    },
  },
  {
    id: "tracking-core",
    name: "Tracking Core",
    tagline:
      "Core de rastreamento de campanhas e links.",
    description:
      "Backend Laravel + React/Inertia que alimenta a plataforma OmgFlux: modelagem de campanhas, eventos de acesso, agregação de métricas e capa de billing.",
    stack: ["Laravel", "React", "Inertia.js", "MySQL", "Docker"],
    year: "2025",
    accent: "from-indigo-500 to-purple-600",
    icon: "radar",
    featured: false,
    links: {},
  },
  {
    id: "darkz",
    name: "Darkz App",
    tagline:
      "Plataforma de gestão logística em Laravel + React.",
    description:
      "Aplicação com painel administrativo, autenticação e módulos de operação logística, construída com stack Laravel/Inertia/React e componentes Tailwind.",
    stack: ["Laravel", "React", "Inertia.js", "Tailwind", "MySQL"],
    year: "2025",
    accent: "from-blue-500 to-cyan-600",
    icon: "truck",
    featured: false,
    links: {},
  },
  {
    id: "my-gift-for-you",
    name: "My Gift For You",
    tagline:
      "Plataforma de presentes e cartas digitais.",
    description:
      "Sistema com autenticação, geração de cartas personalizadas e envio de presentes digitais, com rotas, migrations e infraestrutura Laravel completa.",
    stack: ["Laravel", "PHP", "MySQL", "Blade", "Vite"],
    year: "2023",
    accent: "from-fuchsia-500 to-rose-500",
    icon: "gift",
    featured: false,
    links: {},
  },
];

export const experience = [
  {
    company: "OmgFlux",
    role: "Software Engineer Full Stack",
    place: "Charleston/SC · EUA",
    period: "fev/2026 — atual",
    items: [
      "Concepção, arquitetura e desenvolvimento completo de plataforma web sob demanda — do levantamento de requisitos à produção.",
      "Full stack com Laravel (backend) e React/Inertia.js (frontend): painel administrativo, autenticação, geração e rastreamento de links e emissão de códigos de acesso.",
      "Integração de pagamentos via Stripe com webhooks validados, idempotência e rotinas automáticas de expiração.",
      "Deploy e sustento em produção com Docker e Nginx, SSL automático e rotinas agendadas.",
    ],
  },
  {
    company: "TIQuality",
    role: "Software Engineer · Sync de Produtos",
    place: "Porto Alegre/RS",
    period: "jun/2025 — atual",
    items: [
      "Integrações com Mercado Livre e Mercado Shops: sincronização de catálogo, produtos e imagens.",
      "Pipelines assíncronos em Node.js/TypeScript com BullMQ e Redis, aplicando retry, backoff e rate limiting.",
      "Colaboração na definição de arquitetura e padrões técnicos do pipeline.",
    ],
  },
  {
    company: "LouzLabs",
    role: "Software Engineer · Integrações & Automação",
    place: "Porto Alegre/RS",
    period: "mar/2025 — jun/2025",
    items: [
      "APIs em Laravel com integração segura a sistemas externos.",
      "API de automação em Node.js e contribuições em React para manter consistência entre frontend e backend.",
    ],
  },
  {
    company: "Agência Weber",
    role: "Software Engineer · Plataformas Web",
    place: "Santo Amaro/SP",
    period: "ago/2024 — mar/2025",
    items: [
      "Evolução de plataformas WordPress, manutenção de projetos, correção de incidentes e melhoria de processos técnicos.",
      "Correção de incidentes críticos e performance em sistemas legados com refatoração aplicando Clean Code.",
    ],
  },
  {
    company: "TIQuality",
    role: "Software Engineer · Integração de Dados",
    place: "Porto Alegre/RS",
    period: "jun/2023 — ago/2024",
    items: [
      "Sistema de importação e sincronização de produtos a partir de APIs externas, integrando direto ao WooCommerce.",
      "Persistência de estado e histórico de sincronização por produto, com validação e rastreabilidade.",
    ],
  },
  {
    company: "Agência Weber",
    role: "Software Engineer · E-commerce",
    place: "Santo Amaro/SP",
    period: "fev/2022 — jun/2023",
    items: [
      "Sustento de plataformas WordPress/WooCommerce em produção: plugins, temas e integrações.",
      "Investigação de incidentes críticos e otimização de performance em sistemas legados.",
    ],
  },
  {
    company: "Secrets LTDA",
    role: "Backend Engineer · Live Streaming",
    place: "Porto Alegre/RS",
    period: "jan/2020 — fev/2022",
    items: [
      "Backend em Laravel 8 para plataforma de mídia em tempo real, com infraestrutura de live streaming (Linux, Nginx, FFmpeg).",
      "Comunicação real time via WebSockets para reações, comentários e confirmação de eventos durante transmissões ao vivo.",
    ],
  },
];

export const stats = [
  { value: "7+", label: "anos de experiência" },
  { value: "10+", label: "projetos em produção" },
  { value: "4", label: "stacks dominadas" },
  { value: "2", label: "países atendidos" },
];