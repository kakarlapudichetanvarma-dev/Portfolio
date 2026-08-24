export const portfolioData = {
  profile: {
    name: "Kakarlapudi Chetan Varma",
    preferredName: "Chetan Varma",
    title: "Backend & Distributed Systems Engineer",
    tagline: "I architect high-throughput microservices, event-driven pipelines, and resilient backend systems.",
    bio: "Specialized in Java 21, Spring Boot, distributed messaging (Apache Kafka, RabbitMQ), low-latency caching (Redis), and cloud-native microservices. Passionate about designing fault-tolerant systems, zero-downtime message orchestration, and scalable API platforms.",
    location: "India (Available for Remote / Hybrid / Relocation)",
    statusText: "OPEN FOR BACKEND & DISTRIBUTED SYSTEMS ROLES",
    systemStatus: "PROD_READY // ALL SYSTEMS NOMINAL",
    email: "kakarlapudichetanvarma@gmail.com",
    github: "https://github.com/kakarlapudichetanvarma-dev",
    linkedin: "https://www.linkedin.com/in/chetan-varma-a239182a4",
    resumeUrl: "#contact", // or link to PDF in public folder
  },

  stats: [
    { label: "Microservices Built", value: "9+", detail: "Autonomous deployable services" },
    { label: "Architecture", value: "Event-Driven", detail: "Kafka & RabbitMQ pipelines" },
    { label: "Availability Target", value: "99.95%", detail: "Resilience4j & failover design" },
    { label: "Service Latency", value: "< 45ms", detail: "Optimized queries & Redis caching" }
  ],

  projects: [
    {
      code: "PRJ-01",
      name: "RADIUS — Real-Time Distributed Chat Platform",
      subtitle: "High-concurrency chat & collaboration engine with WebSocket/STOMP and Kafka event streaming.",
      category: "Real-Time / Event-Driven",
      status: "PRODUCTION_ACTIVE",
      featured: true,
      summary: "Spring Boot microservices chat application with a React/TypeScript frontend: presence management, community group messaging, distributed state caching, and high-throughput real-time events over WebSocket/STOMP and Apache Kafka.",
      architectureType: "Distributed Microservices + STOMP WebSocket Broker",
      stack: [
        "Java 21",
        "Spring Boot",
        "Kafka",
        "Redis Pub/Sub",
        "PostgreSQL",
        "WebSocket / STOMP",
        "Docker",
        "TypeScript",
        "React"
      ],
      highlights: [
        "Real-time bidirectional message orchestration with WebSocket/STOMP protocol and sub-30ms delivery latency.",
        "Decoupled asynchronous event processing using Apache Kafka for message persistence, audit streams, and search indexing.",
        "Distributed user presence tracking and session heartbeat clustering powered by in-memory Redis key-value stores.",
        "Secure stateless JWT authentication with token refresh rotation and encrypted payload channels.",
        "Containerized multi-service topology orchestrated with Docker Compose for seamless local and production environments."
      ],
      architectureFlow: "Client App ──(WebSocket / STOMP)──> API Gateway (JWT Auth) ──> Kafka Event Broker ──> Chat Processing Workers ──> Redis Presence & PostgreSQL Cluster",
      metrics: {
        throughput: "5,000+ msgs/sec",
        latency: "< 25ms end-to-end",
        uptime: "99.95%"
      },
      githubUrl: "https://github.com/kakarlapudichetanvarma-dev",
      demoUrl: null
    },
    {
      code: "PRJ-02",
      name: "Hospital Management System — Microservices Suite",
      subtitle: "Modular 9-microservice backend orchestrating clinical records, appointments, and billing.",
      category: "Microservices Architecture",
      status: "PRODUCTION_ACTIVE",
      featured: true,
      summary: "Spring Boot microservices backend for hospital operations — patient care, doctor scheduling, electronic health records, and billing across nine independently deployable services behind an API Gateway with Eureka discovery and RabbitMQ event queues.",
      architectureType: "Spring Cloud Microservices Ecosystem",
      stack: [
        "Java 17",
        "Spring Boot",
        "Spring Cloud Eureka",
        "RabbitMQ",
        "MySQL",
        "Razorpay API",
        "Docker",
        "Spring Security / JWT",
        "OpenAPI / Swagger"
      ],
      highlights: [
        "Architected 9 autonomous microservices discovered dynamically via Spring Cloud Eureka Service Registry with zero hardcoded service URLs.",
        "Implemented asynchronous inter-service messaging with RabbitMQ for automated appointment scheduling, notification triggers, and billing invoices.",
        "Centralized authentication at API Gateway with distributed JWT token validation and fine-grained role-based authorization (RBAC).",
        "Integrated Razorpay payment gateway for secure invoice checkout, automated payment status webhooks, and billing reconciliation.",
        "Strict input validation with Bean Validation, centralized Global Exception Handling, structured error schemas, and paginated HATEOAS REST endpoints."
      ],
      architectureFlow: "Patient/Doctor Portal ──> Spring Cloud Gateway (Auth & Rate Limit) ──> Eureka Discovery ──> RabbitMQ Exchange ──> [Appointments | EHR Records | Billing | Auth Service] ──> Isolated MySQL Schemas",
      metrics: {
        servicesCount: "9 Autonomous Microservices",
        messaging: "RabbitMQ Async Exchanges",
        database: "Isolated Per-Service Schemas"
      },
      githubUrl: "https://github.com/kakarlapudichetanvarma-dev",
      demoUrl: null
    },
    {
      code: "PRJ-03",
      name: "Event-Driven E-Commerce & Inventory Orchestrator",
      subtitle: "Saga-pattern transactional order processing with CQRS read models and distributed locking.",
      category: "Distributed Systems",
      status: "FEATURE_COMPLETE",
      featured: false,
      summary: "High-throughput e-commerce core engineered for peak concurrent flash-sale traffic. Uses Saga Orchestration with Apache Kafka to guarantee eventual consistency across inventory reservation, payment processing, and shipment dispatch with automated compensating transactions.",
      architectureType: "Event-Driven CQRS + Saga Orchestration",
      stack: [
        "Java 21",
        "Spring Boot",
        "Apache Kafka",
        "Redis (Redlock)",
        "Elasticsearch",
        "PostgreSQL",
        "Resilience4j",
        "Micrometer"
      ],
      highlights: [
        "Engineered Saga Orchestrator pattern over Kafka topics to coordinate distributed multi-step transactions with automatic rollbacks.",
        "Prevented concurrent inventory overselling using Redis distributed locks (Redlock algorithm) during flash-sale spikes.",
        "Separated write and read paths using CQRS with Elasticsearch projections for sub-15ms search and catalogue filtering.",
        "Configured Resilience4j circuit breakers, bulkhead isolation, and retry policies for cascading failure prevention."
      ],
      architectureFlow: "Order API ──> Saga Coordinator ──> Kafka Topic ──> [Inventory Lock (Redis) | Payment Worker | Order Service] ──> Elasticsearch Projections",
      metrics: {
        concurrency: "10,000+ req/sec",
        searchSpeed: "< 15ms",
        faultTolerance: "Zero Cascading Outages"
      },
      githubUrl: "https://github.com/kakarlapudichetanvarma-dev",
      demoUrl: null
    },
    {
      code: "PRJ-04",
      name: "High-Concurrency Distributed Task Engine",
      subtitle: "Lightweight distributed job scheduling and worker pool powered by Java 21 Virtual Threads.",
      category: "Distributed Systems",
      status: "ACTIVE_DEVELOPMENT",
      featured: false,
      summary: "Distributed cron and event-driven job execution pipeline. Leverages Project Loom virtual threads to achieve massive I/O concurrency with negligible memory footprint, backed by Redis Streams, idempotency lease controls, and dead-letter queue retries.",
      architectureType: "Virtual Threads + Redis Streams Worker Pool",
      stack: [
        "Java 21",
        "Project Loom (Virtual Threads)",
        "Redis Streams",
        "Quartz Scheduler",
        "PostgreSQL",
        "Prometheus",
        "Grafana"
      ],
      highlights: [
        "Harnessed Java 21 Virtual Threads to execute tens of thousands of concurrent I/O-bound webhooks and jobs without thread-pool starvation.",
        "Guaranteed exactly-once execution semantics using distributed idempotency keys and atomic Redis leases.",
        "Automatic dead-letter queue (DLQ) retry mechanism with exponential backoff, jitter, and real-time Prometheus telemetry.",
        "RESTful schedule management interface with real-time Server-Sent Events (SSE) log streaming."
      ],
      architectureFlow: "Task Trigger API ──> Redis Stream Queue ──> Virtual Thread Pool (Project Loom) ──> Webhook Execution ──> Prometheus Metrics",
      metrics: {
        virtualThreads: "25,000+ Concurrent Tasks",
        memoryFootprint: "65% Memory Reduction",
        reliability: "Dead-Letter Queue with Jitter"
      },
      githubUrl: "https://github.com/kakarlapudichetanvarma-dev",
      demoUrl: null
    }
  ],

  skillCategories: [
    {
      title: "Backend & Core Languages",
      icon: "Server",
      description: "Enterprise backend development and JVM performance tuning",
      skills: [
        { name: "Java (17 / 21)", level: "Advanced", tag: "Core" },
        { name: "Spring Boot 3", level: "Advanced", tag: "Framework" },
        { name: "Spring Cloud", level: "Intermediate", tag: "Microservices" },
        { name: "Spring Security / JWT", level: "Advanced", tag: "Auth" },
        { name: "Hibernate / JPA", level: "Advanced", tag: "ORM" },
        { name: "RESTful API Design", level: "Advanced", tag: "API" },
        { name: "Maven / Gradle", level: "Advanced", tag: "Build" },
        { name: "OOP & Clean Code", level: "Advanced", tag: "Core" }
      ]
    },
    {
      title: "Messaging & Real-Time",
      icon: "Radio",
      description: "Distributed messaging, event streaming, and asynchronous workflows",
      skills: [
        { name: "Apache Kafka", level: "Intermediate", tag: "Streaming" },
        { name: "RabbitMQ", level: "Advanced", tag: "Queues" },
        { name: "Redis Pub/Sub", level: "Advanced", tag: "In-Memory" },
        { name: "WebSocket / STOMP", level: "Advanced", tag: "Real-Time" },
        { name: "Event-Driven Architecture", level: "Advanced", tag: "Pattern" },
        { name: "Server-Sent Events (SSE)", level: "Intermediate", tag: "Streaming" }
      ]
    },
    {
      title: "Databases & Caching",
      icon: "Database",
      description: "Relational, NoSQL, in-memory caching and indexing solutions",
      skills: [
        { name: "PostgreSQL", level: "Advanced", tag: "Relational" },
        { name: "MySQL", level: "Advanced", tag: "Relational" },
        { name: "MongoDB", level: "Intermediate", tag: "NoSQL" },
        { name: "Redis Caching & Locks", level: "Advanced", tag: "Cache" },
        { name: "SQL Indexing & Tuning", level: "Advanced", tag: "Performance" },
        { name: "HikariCP Pooling", level: "Advanced", tag: "Optimization" }
      ]
    },
    {
      title: "Distributed Systems & Cloud",
      icon: "Cpu",
      description: "Containerization, service discovery, and resilient architectures",
      skills: [
        { name: "Microservices Architecture", level: "Advanced", tag: "Architecture" },
        { name: "Docker & Docker Compose", level: "Advanced", tag: "Containers" },
        { name: "Eureka Service Discovery", level: "Advanced", tag: "Spring Cloud" },
        { name: "API Gateway Routing", level: "Advanced", tag: "Gateway" },
        { name: "Resilience4j / Circuit Breaker", level: "Intermediate", tag: "Resilience" },
        { name: "Git & GitHub Actions CI/CD", level: "Advanced", tag: "DevOps" }
      ]
    }
  ],

  architecturalPillars: [
    {
      title: "Fault Tolerance & Resilience",
      code: "ARCH-01",
      description: "Graceful degradation using Circuit Breakers, timeouts, dead-letter queues, and automated retry policies with jitter to prevent cascading microservice failures."
    },
    {
      title: "Stateless Auth & Security",
      code: "ARCH-02",
      description: "Zero-trust token verification via JWT at API Gateways, encrypted inter-service communications, sanitized input validation, and fine-grained RBAC."
    },
    {
      title: "Event-Driven Scalability",
      code: "ARCH-03",
      description: "Decoupling critical business workflows into asynchronous Kafka/RabbitMQ event streams to maximize throughput, minimize latency, and ensure eventual consistency."
    },
    {
      title: "Low-Latency Caching & Concurrency",
      code: "ARCH-04",
      description: "Distributed Redis caching tiers, distributed locks (Redlock) for race-condition prevention, and Java 21 Virtual Threads for high-density I/O handling."
    }
  ],

  experience: [
    {
      period: "2023 — Present",
      role: "Backend & Microservices Engineer",
      context: "Distributed Systems & Cloud Platforms",
      points: [
        "Architected and deployed 9+ modular Spring Boot microservices with Spring Cloud Eureka service discovery and RabbitMQ asynchronous messaging.",
        "Built real-time collaboration engines using WebSocket/STOMP, Redis presence tracking, and Kafka streaming pipelines with sub-30ms latency.",
        "Implemented distributed caching and locking strategies with Redis to handle high-concurrency requests and prevent duplicate execution.",
        "Adopted Java 21 modern features including Virtual Threads (Project Loom), Record patterns, and pattern matching for enhanced throughput."
      ]
    },
    {
      period: "Focus & Specialization",
      role: "Distributed Architecture & Performance",
      context: "Core JVM & Data Engineering",
      points: [
        "Deep exploration of CQRS, Saga Pattern, Domain-Driven Design (DDD), and event-sourcing principles.",
        "Database schema optimization, indexing strategies, HikariCP connection pool tuning, and transaction boundary management in PostgreSQL & MySQL.",
        "Configured robust CI/CD pipelines, containerization with Docker Compose, and observability with Prometheus metrics."
      ]
    }
  ]
}
