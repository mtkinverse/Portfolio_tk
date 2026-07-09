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
    {
      id: 'deans-list',
      category: 'Academic',
      title: "Dean's List in every semester",
      metric: 'All semesters',
      description:
        "Named to the Dean's List in all semesters of the BS Computer Science program at NUCES-FAST Karachi, graduating with a 3.76/4.0 CGPA.",
      tech: [],
    },
    {
      id: 'fyp-defense',
      category: 'Academic',
      title: 'Defended the final-year project on Person Re-Identification',
      metric: 'FYP defended',
      description:
        'Presented and successfully defended a lightweight person re-identification pipeline tackling occlusion, pose variation, and illumination variation; a gap unaddressed in existing literature.',
      tech: ['Computer Vision', 'Person Re-ID'],
    },
    {
      id: 'data-odyssey-competition',
      category: 'Community',
      title: 'Built Data Odyssey and conducted a live SQL competition',
      metric: 'Live event',
      description:
        'Designed and built the Data Odyssey competition platform, then conducted the SQL competition on it end to end, with third-party query execution, automated scoring, and a live leaderboard.',
      tech: ['Node.js', 'MySQL', 'OneCompiler'],
    },
  ],
};

export default achievements;
