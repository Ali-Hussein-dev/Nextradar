export const cmsFilterLabels = {
  version: "1.0.0",
  description:
    "Comprehensive tag collection for filtering headless CMS platforms",
  categories: [
    {
      name: "Core Features",
      value: "core-features",
      tags: [
        {
          label: "Free Tier",
          value: "freetier",
          description:
            "Offers a no-cost option with basic functionality for testing or small projects",
        },
        {
          label: "Open Source",
          value: "open-source",
          description:
            "Software with source code that is freely available for modification and distribution",
        },
      ],
    },
    {
      name: "Database Support",
      value: "database-support",
      tags: [
        {
          label: "PostgreSQL",
          value: "postgresql",
          description:
            "Supports PostgreSQL as the underlying database for content storage",
        },
        {
          label: "MySQL",
          value: "mysql",
          description: "Compatible with MySQL database for data persistence",
        },
        {
          label: "MariaDB",
          value: "mariadb",
          description: "Works with MariaDB as an alternative to MySQL database",
        },
        {
          label: "MongoDB",
          value: "mongodb",
          description: "Uses MongoDB for NoSQL document-based content storage",
        },
        {
          label: "SQLite",
          value: "sqlite",
          description:
            "Supports lightweight SQLite database for simpler deployments",
        },
        {
          label: "Proprietary Content Lake",
          value: "proprietary-content-lake",
          description:
            "Implements a custom-designed proprietary storage solution",
        },
        {
          label: "Built-in Persistent Database",
          value: "built-in-persistent-database",
          description:
            "Includes a self-contained database system requiring no external setup",
        },
      ],
    },
    {
      name: "API Type",
      value: "api-type",
      tags: [
        {
          label: "Restful API",
          value: "restful-api",
          description:
            "Provides RESTful API endpoints for content management and delivery",
        },
        {
          label: "Local API",
          value: "local-api",
          description: "Offers a local API for content management and delivery",
        },
        {
          label: "GraphQL",
          value: "graphql",
          description:
            "Offers GraphQL API for efficient and flexible content querying",
        },
      ],
    },
    {
      name: "Hosting",
      value: "hosting",
      tags: [
        {
          label: "Self-Hosting",
          value: "self-hosting",
          description:
            "Can be installed and run on your own infrastructure with full control",
        },
        {
          label: "Cloud-based",
          value: "cloud-based",
          description:
            "Managed service operated in the cloud with reduced maintenance overhead",
        },
        {
          label: "Serverless",
          value: "serverless",
          description:
            "Utilizes serverless architecture for automatic scaling and reduced operational complexity",
        },
        {
          label: "Docker Support",
          value: "docker-support",
          description:
            "Provides containerization via Docker for simplified deployment and environment consistency",
        },
        {
          label: "Kubernetes Compatible",
          value: "kubernetes-compatible",
          description:
            "Designed to work efficiently within Kubernetes orchestration environments",
        },
        {
          label: "Multi-Environment Support",
          value: "multi-environment",
          description:
            "Supports multiple deployment environments for development, staging, and production",
        },
      ],
    },
    {
      name: "Content Management",
      value: "content-management",
      tags: [
        {
          label: "Content Versioning",
          value: "content-versioning",
          description:
            "Maintains history of content changes with ability to restore previous versions",
        },
        {
          label: "Workflow Management",
          value: "workflow-management",
          description:
            "Supports defined content approval processes with role-based publishing workflows",
        },
        {
          label: "Multi-language Support",
          value: "multi-language",
          description:
            "Handles content in multiple languages with localization capabilities",
        },
        {
          label: "Content Modeling",
          value: "content-modeling",
          description:
            "Allows creation of custom content structures with defined relationships",
        },
        {
          label: "Content Scheduling",
          value: "content-scheduling",
          description:
            "Enables scheduling content publication and expiration at specified times",
        },
        {
          label: "Content Relations",
          value: "content-relations",
          description:
            "Supports defining and managing relationships between different content items",
        },
      ],
    },
    {
      name: "Developer Experience",
      value: "developer-experience",
      tags: [
        {
          label: "Realtime Collaboration",
          value: "realtime-collaboration",
          description:
            "Enables multiple users to work on content simultaneously with live updates",
        },
        {
          label: "TypeScript Support",
          value: "typescript-support",
          description:
            "Provides type definitions and native TypeScript integration for improved development",
        },
        {
          label: "Webhook Support",
          value: "webhook-support",
          description:
            "Allows configuration of event-triggered HTTP callbacks to external systems",
        },
        {
          label: "SEO Friendly",
          value: "seo-friendly",
          description:
            "Built-in features to optimize content for search engine visibility",
        },
      ],
    },
    {
      name: "Performance & Security",
      value: "performance-security",
      tags: [
        {
          label: "Caching Support",
          value: "caching-support",
          description:
            "Implements content caching strategies to improve delivery performance",
        },
        //   {
        //     label: "Authentication Options",
        //     value: "authentication-options",
        //     description:
        //       "Supports various authentication methods like OAuth, JWT, or SSO",
        //   },
        {
          label: "Role-based Access",
          value: "role-based-access",
          description:
            "Granular permission system controlling user access to different functionality",
        },
        {
          label: "Audit Logging",
          value: "audit-logging",
          description:
            "Records detailed history of system events and user actions for accountability",
        },
        {
          label: "Compliance Certifications",
          value: "compliance-certifications",
          description:
            "Adheres to industry standards like GDPR, HIPAA, SOC2, or ISO certifications",
        },
        {
          label: "Data Encryption",
          value: "data-encryption",
          description:
            "Implements encryption for data in transit and at rest to enhance security",
        },
      ],
    },
  ],
};
