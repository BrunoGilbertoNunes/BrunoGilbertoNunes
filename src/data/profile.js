export const profile = {
  name: "Bruno Nunes",
  role: "Desenvolvedor Full Stack",
  headline: "Estudante de Engenharia de Software · Full Stack",
  location: "São Leopoldo, RS · Brasil",
  email: "brunogilberto.nunes@gmail.com",
  phoneDisplay: "+55 51 9 9919-2998",
  phoneWa: "5551991929989",
  github: "github.com/BrunoGilbertoNunes",
  linkedin: "linkedin.com/in/brunogilbertonunes",
  githubUrl: "https://github.com/BrunoGilbertoNunes",
  linkedinUrl: "https://linkedin.com/in/brunogilbertonunes",
  waUrl: "https://wa.me/5551991929989",
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
    id: "sicredi-pix",
    name: "PIX Sicredi",
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
      "Plataforma de gestão logística em tempo real para jogos desenvolvida em Laravel + React.",
    description:
      "Mod do DayZ em C++ para catalago de itens ingaming, vendas via aplicação laravel com stripe e liberação em tempo real via steamid para jogares, Aplicação com painel administrativo, autenticação e módulos de operação logística.",
    stack: ["Laravel", "React", "Inertia.js", "Tailwind", "MySQL", "C++", "SteamOS"],
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
      "Manutenção e Desenvolvimento de plugins e integrações para Wordpress.",
      "API de automação em Node.js e contribuições em React para manter consistência entre frontend e backend.",
    ],
  },
  {
    company: "Agência Weber",
    role: "Software Engineer · Plataformas Web",
    place: "Santo Amaro/SP",
    period: "ago/2024 — mar/2025",
    items: [
      "Manutenção e evolução de 10+ sites WordPress em produção.",
      "Desenvolvimento de plugins custom (painéis admin, dashboards e integrações com APIs externas).",
      "Correção de incidentes de performance em código legado: refatoração de consultas com N+1, reduzindo tempo de resposta de 6s para 1s."
    ],
  },
  {
    company: "TIQuality",
    role: "Software Engineer · Integração de Dados",
    place: "Porto Alegre/RS",
    period: "jun/2023 — ago/2024",
    items: [
      "Integração com API UPS (cotação de frete, validação de peso por carrinho e consulta de time-in-transit) para e-commerce WooCommerce.",
      "Sistema de importação e sincronização de produtos a partir de ERPs com persistência de estado por produto e histórico de processamento.",
      "Desenvolvimento de plugins de logística e APIs de integração para WooCommerce."
    ],
  },
  {
    company: "Agência Weber",
    role: "Software Engineer · E-commerce",
    place: "Santo Amaro/SP",
    period: "fev/2022 — jun/2023",
    items: [
      "Desenvolvimento de módulos, temas e integrações para OpenCart em produção; desenvolvimento de plugins WordPress sob demanda.",
      "Definição de padrão de implementação e deploy para novas lojas, reduzindo tempo de setup entre projetos.",
      "Sustentação e manutenção de lojas em produção.",
      "Treinamento e code review de desenvolvedores júnior.",
    ],
  },
  {
    company: "Secrets LTDA",
    role: "Backend Engineer · Live Streaming",
    place: "Porto Alegre/RS",
    period: "jan/2020 — fev/2022",
    items: [
      "Desenvolvimento backend em Laravel 8 para plataforma de mídia em tempo real voltada a criadores de conteúdo.",
      "Infraestrutura de streaming em servidor dedicado (Linux, Nginx, FFmpeg), com 1.000+ transmissões simultâneas.",
      "Comunicação em tempo real via WebSockets (reações, comentários, ACK) com 5.000+ conexões simultâneas por canal.",
    ],
  },
];

export const stats = [
  { value: "7+", label: "anos de experiência" },
  { value: "10+", label: "projetos em produção" },
  { value: "4", label: "stacks dominadas" },
  { value: "2", label: "países atendidos" },
];