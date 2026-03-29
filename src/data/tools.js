// Each item is a category. topItems controls how many categories show by default.
const tools = {
  topItems: 2,
  items: [
    {
      name: 'Infrastructure & DevOps',
      tools: [
        { label: 'Docker',      picture: '/icons/docker.png',      level: 'Proficient' },
        { label: 'Kubernetes',  picture: '/icons/kubernetes.png',  level: 'Proficient' },
        { label: 'AWS',         picture: '/icons/aws.png',         level: 'Proficient' },
        { label: 'Terraform',   picture: '/icons/terraform.png',   level: 'Familiar'   },
        { label: 'PM2',         picture: null,                     level: 'Proficient' },
      ],
    },
    {
      name: 'Messaging & Queues',
      tools: [
        { label: 'RabbitMQ', picture: '/icons/rabbitmq.png', level: 'Proficient' },
        { label: 'Kafka',    picture: '/icons/kafka.png',    level: 'Proficient' },
        { label: 'Firebase', picture: null,                  level: 'Familiar'   },
      ],
    },
    {
      name: 'AI & Machine Learning',
      tools: [
        { label: 'LangGraph',      picture: null, level: 'Proficient' },
        { label: 'CrewAI',         picture: null, level: 'Proficient' },
        { label: 'RAG Pipelines',  picture: null, level: 'Proficient' },
        { label: 'pgvector',       picture: null, level: 'Proficient' },
      ],
    },
    {
      name: 'Databases & Storage',
      tools: [
        { label: 'PostgreSQL', picture: '/icons/postgresql.png', level: 'Expert'     },
        { label: 'Redis',      picture: '/icons/redis.png',      level: 'Proficient' },
        { label: 'Neo4j',      picture: '/icons/neo4j.png',      level: 'Familiar'   },
        { label: 'Apache AGE', picture: null,                    level: 'Familiar'   },
      ],
    },
    {
      name: 'Protocols & Auth',
      tools: [
        { label: 'gRPC',         picture: '/icons/grpc.png', level: 'Proficient' },
        { label: 'Google OAuth', picture: null,              level: 'Proficient' },
        { label: 'Nodemailer',   picture: null,              level: 'Proficient' },
        { label: 'Fastify',      picture: '/icons/fastify.png', level: 'Proficient' },
      ],
    },
  ],
};

export default tools;
