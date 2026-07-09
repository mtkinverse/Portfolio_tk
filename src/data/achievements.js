// Quantified wins, each traceable to the current résumé (v2.1).
const achievements = {
  topItems: 5,
  items: [
    {
      id: 'promotion',
      category: 'Career',
      title: 'Promoted to Associate Backend Developer',
      metric: '2 months',
      description:
        'Advanced from backend trainee to Associate Developer at 360XpertsSolutions within two months.',
      tech: [],
    },
    {
      id: 'di-framework',
      category: 'Engineering',
      title: 'Faster feature bootstrapping across the team',
      metric: '70% faster',
      description:
        'Architected a layered boilerplate framework enforcing SoC and IoC via dependency injection, with strict serialization validation and event sourcing over RabbitMQ, Kafka, and Redis.',
      tech: ['RabbitMQ', 'Kafka', 'Redis'],
    },
    {
      id: 'secure-chat',
      category: 'Engineering',
      title: 'Secure real-time messaging at production scale',
      metric: '<500ms latency',
      description:
        'Multi-tenant chat backend using hybrid AES-256 and NaCl/Elliptic-Curve encryption with per-message key rotation for zero-knowledge data-at-rest protection.',
      tech: ['AES-256', 'NaCl', 'Node.js'],
    },
    {
      id: 'elearning-ai',
      category: 'AI',
      title: 'AI-generated courses deployed on a live platform',
      metric: '100+ @ 85%',
      description:
        'RAG-driven course generation on a multi-tenant e-learning platform (RBAC, event sourcing, PostgreSQL/RabbitMQ/Redis); 100+ automated courses with 85% audit accuracy.',
      tech: ['RAG', 'PostgreSQL', 'CrewAI', 'LangGraph'],
    },
    {
      id: 'leadership',
      category: 'Leadership',
      title: 'Led engineering teams across client projects',
      metric: '6+ projects',
      description:
        'Led teams of 3 to 4 engineers from requirements through production/UAT, shipping ahead of schedule.',
      tech: [],
    },
  ],
};

export default achievements;
