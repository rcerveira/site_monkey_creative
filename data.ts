import { ProjectData } from './types';

export const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Processo', href: '#process' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
];

export const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Behance', url: 'https://behance.net' }
];

export const servicesData = [
    { 
        icon: 'language', 
        title: 'Websites Institucionais', 
        desc: 'Sites rápidos, otimizados para SEO e estruturados para conversão. Preparados para rankear no Google e encantar seus clientes.',
        inverse: false
    },
    { 
        icon: 'ads_click', 
        title: 'Landing Pages', 
        desc: 'Foco total em leads e vendas. Copy estratégica, carregamento instantâneo e integrações com WhatsApp, CRM e ferramentas de e-mail.', 
        inverse: true 
    },
    { 
        icon: 'smartphone', 
        title: 'Sites One Page', 
        desc: 'Solução enxuta e direta. Presença digital profissional com alta clareza de mensagem. Ideal para profissionais e empresas de serviço.',
        inverse: false 
    },
    { 
        icon: 'dns', 
        title: 'Micro SaaS', 
        desc: 'Transforme ideias em produtos. MVP rápido, escalável e seguro para automatizar processos e validar novos modelos de negócio.',
        inverse: true 
    }
];

export const processSteps = [
    { num: '01', title: 'Diagnóstico', desc: 'Entendimento do negócio, público, concorrência e objetivos.', color: 'primary' },
    { num: '02', title: 'Estratégia', desc: 'Definição de UX, arquitetura, jornada do usuário e conversão.', color: 'black' },
    { num: '03', title: 'Design + Dev', desc: 'Implementação com tecnologia moderna, rápida e segura.', color: 'primary' },
    { num: '04', title: 'Lançamento', desc: 'Publicação, monitoramento e otimização baseada em métricas.', color: 'black' },
];

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'AlugueMaq',
    category: 'Catálogo Online',
    image: 'https://pub-9bd44561011b427d8901eec9c88e98a4.r2.dev/projetos/aluguemaq.webp',
    hasHoverState: true,
    url: 'https://aluguemaq.com.br',
    description: 'Site institucional robusto focado na apresentação de catálogo de produtos para locação. Implementamos um sistema de reserva online intuitivo que facilita a jornada do cliente. A arquitetura de dados utiliza SQLite para garantir agilidade nas consultas de disponibilidade e leveza na operação do catálogo.',
    technologies: ['SQLite', 'Next.js', 'Tailwind', 'Reserva Online', 'SEO']
  },
  {
    id: 2,
    title: 'CCM Máquinas',
    category: 'Site Institucional',
    image: 'https://pub-9bd44561011b427d8901eec9c88e98a4.r2.dev/projetos/ccmmaquinas.webp',
    hasHoverState: false,
    url: 'https://ccmmaquinas.com.br',
    description: 'Portal corporativo integrado a um catálogo completo de equipamentos seminovos para venda. O projeto foi desenvolvido em PHP com estilização moderna via Tailwind CSS. Foco total em SEO Técnico e UI/UX para garantir que os ativos de alto valor sejam encontrados organicamente e apresentados de forma profissional. Utiliza SQLite para gestão eficiente dos anúncios.',
    technologies: ['PHP', 'Tailwind', 'SQLite', 'SEO', 'UI/UX']
  },
  {
    id: 3,
    title: 'MaqGo CRM',
    category: 'SaaS / CRM Vertical',
    image: 'https://pub-9bd44561011b427d8901eec9c88e98a4.r2.dev/projetos/crm_maqgo.webp',
    hasHoverState: true,
    description: 'Software de gestão de relacionamento com clientes (CRM) desenhado especificamente para revendedores de máquinas. Funcionalidades incluem gestão de funil de vendas (Kanban), automação de propostas comerciais em PDF, histórico de interações e integração direta com o WhatsApp API para agilizar o follow-up de leads.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WhatsApp API', 'SaaS']
  },
  {
    id: 4,
    title: 'Tattoo ERP',
    category: 'Micro SaaS',
    image: 'https://pub-9bd44561011b427d8901eec9c88e98a4.r2.dev/projetos/erp_tatto.webp',
    hasHoverState: true,
    description: 'Solução de gestão completa "All-in-One" para estúdios de tatuagem e body piercing. O sistema digitaliza toda a operação: agenda inteligente com lembretes automáticos, assinatura digital de termos de responsabilidade (anamnese), controle de estoque de tintas/agulhas e fluxo de caixa financeiro. Foco total em UX mobile para tatuadores.',
    technologies: ['Next.js', 'PWA', 'Stripe', 'Digital Signature', 'Firebase']
  },
  {
    id: 5,
    title: 'Escavater',
    category: 'Site Institucional',
    image: 'https://pub-9bd44561011b427d8901eec9c88e98a4.r2.dev/projetos/escavater.webp',
    hasHoverState: false,
    description: 'Site institucional sólido para empresa de terraplanagem e demolição. Desenvolvido em WordPress para permitir fácil gerenciamento de conteúdo pelo cliente, mas com otimizações de performance e cache para garantir carregamento rápido. Estrutura focada em credibilidade e conversão de contatos comerciais.',
    technologies: ['WordPress', 'PHP', 'Elementor', 'SEO', 'CRO']
  },
  {
    id: 6,
    title: 'KMW',
    category: 'Institucional Corporativo',
    image: 'https://pub-9bd44561011b427d8901eec9c88e98a4.r2.dev/projetos/kmw.webp',
    hasHoverState: false,
    description: 'Portal corporativo para empresa de engenharia e montagem industrial. O projeto transmite autoridade e robustez técnica, essenciais para o setor B2B industrial. Conta com área de portfólio de grandes obras, certificações técnicas e conformidade com normas de segurança.',
    technologies: ['Next.js', 'Tailwind', 'Motion', 'B2B', 'Institucional']
  },
  {
    id: 7,
    title: 'MaqGo Classificados',
    category: 'Marketplace Vertical',
    image: 'https://pub-9bd44561011b427d8901eec9c88e98a4.r2.dev/projetos/maqgo.webp',
    hasHoverState: true,
    description: 'Portal líder em compra e venda de equipamentos pesados usados. Diferente de classificados genéricos, o MaqGo oferece filtros técnicos específicos (horas de uso, ano, modelo). Desenvolvido com Next.js para máxima velocidade e indexação (SEO).',
    technologies: ['Next.js', 'Algolia', 'Vercel', 'Marketplace', 'SEO']
  },
  {
    id: 8,
    title: 'RVR Engenharia',
    category: 'Portfólio de Engenharia',
    image: 'https://pub-9bd44561011b427d8901eec9c88e98a4.r2.dev/projetos/rvr.webp',
    hasHoverState: false,
    description: 'Website institucional focado na apresentação visual de projetos de infraestrutura e construção civil. Galeria de projetos imersiva, detalhamento de serviços técnicos e área restrita para clientes acompanharem a evolução física e financeira das obras em tempo real.',
    technologies: ['React', 'Gallery API', 'Real-time', 'Engineering']
  },
  {
    id: 9,
    title: 'Titan',
    category: 'Página de Produto (LP)',
    image: 'https://pub-9bd44561011b427d8901eec9c88e98a4.r2.dev/projetos/titan_ccmmaquinas.webp',
    hasHoverState: false,
    description: 'Hotsite promocional para lançamento de linha de implementos rodoviários. Desenvolvimento "Hand-coded" utilizando HTML5 e CSS3 puro para performance máxima e liberdade criativa total, sem overhead de frameworks. Foco em vídeo e demonstração técnica do produto.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX', 'Video Optimization']
  },
  {
    id: 10,
    title: 'MaqGo Dashboard',
    category: 'Dashboard',
    image: 'https://pub-9bd44561011b427d8901eec9c88e98a4.r2.dev/projetos/crm_maqgo.png',
    hasHoverState: true,
    description: 'Interface administrativa do ecossistema MaqGo CRM. Um painel intuitivo para visualização de métricas de vendas, gestão de equipe comercial e relatórios de desempenho. Design limpo focado na produtividade diária dos vendedores e gestores.',
    technologies: ['React', 'Recharts', 'Dashboard', 'Analytics', 'UX Research']
  }
];