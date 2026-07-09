const experience = {
  topItems: 2,
  items: [
    {
      company: '360XpertsSolutions',
      role: 'Associate Backend Developer',
      period: 'June 2025 to Present',
      type: 'Full-time',
      location: 'Karachi, Pakistan',
      isCurrent: true,
      summary:
        'Delivering production-grade distributed systems for real clients. Advanced from backend trainee to Associate Developer within 2 months; led teams of 3 to 4 engineers to ship 6+ production-grade client projects ahead of schedule.',
      bullets: [
        'Architected a fully layered boilerplate framework enforcing SoC and IoC via Dependency Injection, with strict serialization validation and event sourcing over RabbitMQ, Kafka, and Redis; cut feature bootstrapping time by 70%',
        'Built a multi-tenant secure chat backend with hybrid AES-256 and NaCl/Elliptic-Curve encryption and per-message key rotation, sustaining real-time messaging under 500ms latency',
        'Delivered an AI-assisted, multi-tenant e-learning platform (RBAC, event sourcing, PostgreSQL/RabbitMQ/Redis) with RAG-driven course generation; deployed 100+ automated courses at 85% audit accuracy',
        'Engineered the chat intelligence layer with CrewAI and LangGraph state maps, plus memory and context-management pipelines reaching 70% query and context extraction accuracy',
        'Led teams of 3 to 4 engineers; delivered 6+ client projects from requirements through production/UAT',
        'Mentored junior trainees on system design, distributed debugging, and CI/CD to align the team on production-level code standards',
      ],
      tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Kubernetes', 'RabbitMQ', 'Kafka', 'Docker'],
    },
    {
      company: 'The Bridge of Hopes',
      role: 'Frontend Lead & Research Assistant',
      period: 'June 2024 to Jan 2026',
      type: 'Volunteer',
      location: 'Karachi, Pakistan',
      isCurrent: false,
      summary:
        'Led frontend development for an NGO, managing a cross-functional team and shipping multiple production website releases.',
      bullets: [
        'Led a 4-person frontend team to design, develop, and deploy two interactive, responsive website versions',
        'Built and integrated a custom admin panel for entity management used by non-technical staff',
        'Enhanced donor outreach and contact flows through improved UX across both site versions',
      ],
      tech: ['React.js', 'JavaScript', 'CSS'],
    },
    {
      company: 'NUCES-FAST Karachi',
      role: 'Student Lab Assistant',
      period: 'Aug 2024 to Dec 2024',
      type: 'Part-time',
      location: 'Karachi, Pakistan',
      isCurrent: false,
      summary:
        'Supported 50+ students in Data Structures & Algorithms lab sessions, improving concept retention and debugging skills.',
      bullets: [
        'Assisted 50+ students with lab exercises, code debugging, and real-time troubleshooting',
        'Delivered personalized guidance on DSA concepts, boosting student confidence and performance',
      ],
      tech: ['C++', 'Data Structures', 'Algorithms'],
    },
  ],
};

export default experience;
