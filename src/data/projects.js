const projects = {
  topItems: 3,
  items: [
    {
      label: 'Multi-Tenant SaaS Backend',
      picture: '/projects/project-backend-api.png',
      tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Kubernetes', 'RabbitMQ'],
      gitLink: null,
      liveLink: null,
      isPrivate: true,
      description:
        'Architected and delivered a production SaaS backend at 360XpertsSolutions. Implemented multi-tenancy with full tenant isolation, RBAC, feature toggles, event sourcing, and per-message encryption key rotation. Deployed via Kubernetes with PM2 process management and RabbitMQ for async event-driven pipelines.',
      highlights: [
        'Led team of 3–4 engineers end-to-end',
        'Delivered to production for 3+ clients',
        'Per-message encryption key rotation',
        'Performance monitoring hooks',
        'Kubernetes + PM2 deployment',
      ],
    },
    {
      label: 'AI RAG Pipeline with Knowledge Graphs',
      picture: '/projects/project-ai-pipeline.png',
      tech: ['Python', 'LangGraph', 'CrewAI', 'pgvector', 'Neo4j', 'Apache AGE'],
      gitLink: null,
      liveLink: null,
      isPrivate: true,
      description:
        'Built a Retrieval-Augmented Generation pipeline combining vector similarity search (pgvector) with structured knowledge graphs (Neo4j / Apache AGE). Used LangGraph for agentic workflow orchestration and CrewAI for multi-agent task delegation.',
      highlights: [
        'RAG pipeline with pgvector',
        'Knowledge graph integration (Neo4j)',
        'Multi-agent orchestration via CrewAI',
        'LangGraph workflow engine',
      ],
    },
    {
      label: 'Konnect App',
      picture: '/projects/konnect.png',
      tech: ['C++', 'Data Structures', 'Graphs'],
      gitLink: 'https://github.com/mtkinverse/konnect',
      liveLink: null,
      isPrivate: false,
      description:
        'A network application leveraging graph data structures to connect users for collaborative problem-solving. Users authenticate, post problems, and receive solutions from the community. Demonstrates deep understanding of graph algorithms and efficient network traversal.',
      highlights: [
        'Graph-based user network',
        'Custom authentication',
        'Efficient traversal algorithms',
      ],
    },
    {
      label: 'BillEase',
      picture: '/projects/billEase2.png',
      tech: ['React.js', 'JavaScript'],
      gitLink: 'https://github.com/mtkinverse/utility-app',
      liveLink: 'https://mtkinverse.github.io/utility-app/',
      isPrivate: false,
      description:
        'A mobile-friendly React web app for tracking and downloading utility slips. Demonstrates frontend architecture with component reuse, responsive design, and user-friendly UX flows.',
      highlights: ['Mobile-first design', 'Downloadable slips', 'React component architecture'],
    },
    {
      label: 'Vertex (Platformer Game)',
      picture: '/projects/vertex.jpg',
      tech: ['C++', 'SFML', 'OOP'],
      gitLink: 'https://github.com/mtkinverse/code_cpp/tree/main/Project',
      liveLink: null,
      isPrivate: false,
      description:
        'GUI platformer game built with SFML and OOP principles. Features multiple characters, collision detection, and full level design in pure C++.',
      highlights: ['SFML GUI rendering', 'OOP design patterns', 'Game physics & collision'],
    },
    {
      label: 'Pong Game',
      picture: '/projects/pongGame.png',
      tech: ['C', 'CLI'],
      gitLink: 'https://github.com/mtkinverse/code_tk/tree/main/project',
      liveLink: null,
      isPrivate: false,
      description:
        'CLI pong game with persistent user profiles written in pure C. A foundational project demonstrating systems programming, file I/O, and terminal-based UI.',
      highlights: ['Persistent user profiles', 'CLI interface', 'Pure C systems programming'],
    },
  ],
};

export default projects;
