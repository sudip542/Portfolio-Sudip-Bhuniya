export const projectsData = [
  {
    id: "coinpath",
    name: "Coinpath",
    category: "Digital Wallet & Payment Backend System",
    tagline: "Financial correctness first. Performance and convenience next.",
    description:
      "Coinpath is a production-oriented digital wallet and payment backend system designed to demonstrate reliable financial transactions, double-entry bookkeeping, concurrency control and event-driven architecture.",
    problemStatement:
      "Digital payment systems must maintain accurate balances and prevent duplicate transactions, double spending, inconsistent transfers and lost financial records, even when multiple requests arrive simultaneously.",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Redis",
      "Apache Kafka",
      "React",
      "Docker",
    ],
    engineeringBadges: [
      "Double-Entry Ledger",
      "Idempotency",
      "Concurrency",
      "Transactional Outbox",
    ],
    highlights: [
      {
        title: "Double-entry ledger",
        description:
          "Every transfer and refund is recorded using debit and credit entries, ensuring balanced and auditable financial records.",
      },
      {
        title: "Concurrency control",
        description:
          "Pessimistic row locking and deterministic lock ordering prevent double spending and reduce deadlock risks during simultaneous transfers.",
      },
      {
        title: "Idempotency",
        description:
          "Dual-layer idempotency using Redis and PostgreSQL prevents duplicate transaction processing during client retries.",
      },
      {
        title: "Transactional Outbox",
        description:
          "Ensures reliable publishing of Kafka events alongside database transactions without dual-write inconsistencies.",
      },
      {
        title: "Event-driven architecture",
        description:
          "Kafka handles asynchronous payment, notification and audit events for downstream decoupling.",
      },
    ],
    useCases: [
      "Peer-to-peer money transfers",
      "Adding money to a wallet",
      "Transaction history & statements",
      "Refund processing",
      "Concurrent payment requests",
      "Financial auditing & reconciliation",
    ],
    architectureOverview:
      "Layered domain architecture isolating ledger invariants from external API contracts. Uses Spring Data JPA with PostgreSQL for ACID durability, Redis for distributed lock coordination and idempotency caching, and an Outbox publisher pattern feeding Apache Kafka topics.",
    githubUrl: "https://github.com/sudip542/coinpath",
    liveUrl: "https://coinpath-a-payment-web-application-eta.vercel.app/login",
    hasLiveDemo: true,
    accentColor: "from-sky-500 to-blue-600",
  },
  {
    id: "showzen",
    name: "ShowZen",
    category: "High-Scale Movie Ticket Booking System",
    tagline: "Reliable seat reservations, even during high traffic.",
    description:
      "ShowZen is a movie ticket booking backend designed to handle concurrent seat reservations, temporary seat locking, payment processing and event-driven booking workflows.",
    problemStatement:
      "During popular movie releases and flash sales, multiple users may attempt to reserve the same seat simultaneously. The system must prevent double booking while maintaining consistent booking and payment states.",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Redis",
      "Apache Kafka",
      "React",
      "Docker",
    ],
    engineeringBadges: [
      "Redis Lua",
      "Optimistic Locking",
      "Idempotency",
      "Kafka",
    ],
    highlights: [
      {
        title: "Atomic seat locking",
        description:
          "Redis Lua scripts implement atomic multi-seat locking with a five-minute TTL to release expired holds automatically.",
      },
      {
        title: "Database consistency",
        description:
          "JPA optimistic locking provides an additional concurrency safeguard during the final seat reservation commit.",
      },
      {
        title: "Idempotent APIs",
        description:
          "Idempotency-Key handling across booking and payment APIs prevents duplicate operations during network retries.",
      },
      {
        title: "Event-driven processing",
        description:
          "Kafka decouples booking workflows from notifications, analytics and invoicing pipelines.",
      },
      {
        title: "Booking lifecycle state machine",
        description:
          "Temporary reservations, payment handling, and booking confirmations are managed through clearly defined state transitions.",
      },
    ],
    useCases: [
      "Movie search and discovery",
      "Theatre and show management",
      "Seat selection and temporary locking",
      "Concurrent ticket reservations",
      "Payment processing integration",
      "Booking confirmation",
      "Notification and invoice events",
    ],
    architectureOverview:
      "Designed with a two-phase reservation model. In phase one, Redis Lua handles atomic multi-key temporary locks with TTL. In phase two, a Spring Boot transaction confirms the booking against PostgreSQL with JPA optimistic locking and publishes a completion event to Kafka.",
    githubUrl: "https://github.com/sudip542/showzen",
    liveUrl: "https://high-scale-ticket-booking-system.vercel.app/",
    hasLiveDemo: true,
    accentColor: "from-cyan-500 to-teal-600",
  },
  {
    id: "ecommerce-app",
    name: "E-Commerce Application",
    category: "Full-Stack Web Application",
    tagline: "End-to-end shopping and order management.",
    description:
      "A full-stack e-commerce application that provides product browsing, secure authentication, inventory management, order tracking and administrative controls.",
    problemStatement:
      "Provides a centralized shopping platform where customers can browse products, manage purchases and track orders, while administrators manage products, inventory and order workflows.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    engineeringBadges: [
      "Full Stack",
      "Authentication",
      "Inventory",
      "Order Management",
    ],
    highlights: [
      {
        title: "Authentication & Authorization",
        description:
          "JWT-based authentication and role-based access control protecting customer vs. administrator endpoints.",
      },
      {
        title: "Product management",
        description:
          "Full CRUD capabilities for administrators to create, update, categorize and delete products with image assets.",
      },
      {
        title: "Inventory management",
        description:
          "Real-time product inventory tracking with stock decrement safeguards during checkout.",
      },
      {
        title: "Order management & workflows",
        description:
          "End-to-end order tracking, lifecycle states, and administrative order review and approval pipelines.",
      },
      {
        title: "Media management",
        description:
          "Seamless Cloudinary media integration for fast product image uploads, transformations, and responsive delivery.",
      },
    ],
    useCases: [
      "Online product browsing & search",
      "Product administration & cataloging",
      "Inventory management & alerts",
      "Order creation & cart checkout",
      "Order status tracking for customers",
      "Administrative order approval & dispatch",
    ],
    architectureOverview:
      "Modular MVC architecture on Express.js with Mongoose ODM schemas for Users, Products, and Orders. Features secure JWT cookie/bearer handling, RESTful routes with express-validator, and a reactive React single-page frontend.",
    githubUrl: "https://github.com/sudip542/ecommerce-app",
    liveUrl: "https://e-commerce-ui-olive.vercel.app/",
    hasLiveDemo: true,
    accentColor: "from-indigo-500 to-purple-600",
  },
];
