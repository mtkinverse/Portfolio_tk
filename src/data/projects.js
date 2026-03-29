const projects = {
  topItems: 4,
  items: [
    {
      label: 'Multi-Tenant SaaS Backend',
      picture: null,
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
      picture: null,
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
      label: 'InventorySync',
      picture: null,
      tech: ['Node.js', 'JavaScript', 'SQLite', 'RabbitMQ'],
      gitLink: 'https://github.com/mtkinverse/InventorySync',
      liveLink: null,
      isPrivate: false,
      description:
        'Inventory data synchronization system built as a case study solution for Bazar.com. Features a modular architecture with dedicated middleware, publisher, and background worker processes for reliable, event-driven inventory updates.',
      highlights: [
        'Event-driven inventory sync',
        'Background worker processes',
        'Modular middleware architecture',
        'Real-world case study solution',
      ],
    },
    {
      label: 'SharZii',
      picture: null,
      tech: ['Node.js', 'JavaScript', 'Python', 'WebRTC'],
      gitLink: 'https://github.com/mtkinverse/SharZii',
      liveLink: null,
      isPrivate: false,
      description:
        'An instant real-time messaging application supporting both text and voice communication. Combines a Node.js backend with Python services to deliver low-latency chat and voice features over a unified real-time infrastructure.',
      highlights: [
        'Real-time text & voice messaging',
        'Node.js + Python dual backend',
        'Low-latency communication stack',
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
    // — Example implementations: focused reference projects demonstrating specific architectural patterns —
    {
      label: 'Order Management System',
      picture: null,
      tech: ['Node.js', 'RabbitMQ', 'Docker', 'Microservices'],
      gitLink: 'https://github.com/mtkinverse/orderManagement',
      liveLink: null,
      isPrivate: false,
      description:
        'Example implementation of a microservices-based asynchronous order processing pipeline. Five independent services communicate via RabbitMQ with event-driven workflows, dead-letter queue handling, automatic retry logic, audit logging, and real-time customer status notifications.',
      highlights: [
        'Five decoupled microservices',
        'Dead-letter queue + retry logic',
        'Audit logging for compliance',
        'Docker Compose orchestration',
      ],
    },
    {
      label: 'gRPC Inter-Service Communication',
      picture: null,
      tech: ['Node.js', 'gRPC', 'Protocol Buffers'],
      gitLink: 'https://github.com/mtkinverse/gRPC',
      liveLink: null,
      isPrivate: false,
      description:
        'Example implementation demonstrating gRPC as a low-latency alternative to REST for inter-service communication. Covers service definitions with Protocol Buffers, unary and streaming RPCs, and practical comparison against REST overhead.',
      highlights: [
        'Protocol Buffers service definitions',
        'Unary & streaming RPCs',
        'Latency benchmark vs REST',
      ],
    },
    {
      label: 'Neo4j Knowledge Graph',
      picture: null,
      tech: ['Python', 'Neo4j', 'Docker', 'APOC'],
      gitLink: 'https://github.com/mtkinverse/new4jExampleImplementation',
      liveLink: null,
      isPrivate: false,
      description:
        'Example implementation of automated knowledge graph construction from documents (PDF, Excel, Word) using Neo4j 5. Features a graph query API, APOC plugin integration, Neo4j Bloom visualization, and Dockerized setup with persistent volumes.',
      highlights: [
        'Auto knowledge graph from documents',
        'Graph query API with Cypher',
        'Neo4j Bloom visualization',
        'Extensible entity type system',
      ],
    },
  ],
};

export default projects;
