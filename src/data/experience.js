const experience = {
  topItems: 2,
  items: [
    {
      company: '360XpertsSolutions',
      role: 'Associate Backend Developer',
      period: 'June 2025 – Present',
      type: 'Full-time',
      location: 'Karachi, Pakistan',
      isCurrent: true,
      summary:
        'Delivering production-grade distributed systems for real clients. Advanced from backend trainee to Associate Developer within 2 months. Operating at a level comparable to 4–5 year experienced developers.',
      bullets: [
        'Designed and implemented multi-tenancy architecture with full tenant isolation, RBAC, and feature toggle system',
        'Engineered event sourcing for notification and audit log pipelines with per-message encryption key rotation',
        'Instrumented performance monitoring hooks across microservices for real-time observability',
        'Managed Kubernetes-based production deployments with version patching and PM2 process orchestration',
        'Integrated RabbitMQ and Kafka for async, event-driven service communication',
        'Led teams of 3–4 engineers; delivered 3+ client projects from requirements through production/UAT',
        'Mentored junior trainees to accelerate onboarding in a fast-paced, deadline-driven environment',
      ],
      tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Kubernetes', 'RabbitMQ', 'Kafka', 'Docker'],
    },
    {
      company: 'The Bridge of Hopes',
      role: 'Frontend Lead & Research Assistant',
      period: 'June 2024 – Feb 2025',
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
      period: 'Aug 2024 – Dec 2024',
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
