import type { Question } from "../types";

export const serverClientComponentQuestions: Question[] = [
    // Easy
    {
      id: "scc-1",
      question: "What is the default type of component in the Next.js App Router?",
      options: [
        {
          option: "Server Component",
          score: 5,
          isRight: true,
        },
        {
          option: "Client Component",
          score: 0,
          isRight: false,
        },
        {
          option: "Static Component",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "easy",
      category: { label: "Server and Client Components", id: "server-client-components" },
      explanation: "In the Next.js App Router, components are Server Components by default. You only need to mark a component with 'use client' if you want it to run on the client.",
    },
    // Easy
    {
      id: "scc-2",
      question: "Which directive is used to mark a component as a Client Component in Next.js?",
      options: [
        {
          option: "'use client'",
          score: 5,
          isRight: true,
        },
        {
          option: "'use server'",
          score: 0,
          isRight: false,
        },
        {
          option: "'client only'",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "easy",
      category: { label: "Server and Client Components", id: "server-client-components" },
      explanation: "The 'use client' directive at the top of a file marks it as a Client Component, enabling state, effects, and browser APIs.",
    },
    // Medium
    {
      id: "scc-3",
      question: "Which of the following is NOT a valid reason to use a Client Component?",
      options: [
        {
          option: "Fetching data from a database using secrets",
          score: 15,
          isRight: true,
        },
        {
          option: "Handling user interactions like onClick",
          score: 0,
          isRight: false,
        },
        {
          option: "Using browser APIs like localStorage",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "Server and Client Components", id: "server-client-components" },
      explanation: "Sensitive operations like fetching data with secrets should be done in Server Components, not Client Components.",
    },
    // Medium
    {
      id: "scc-4",
      question: "What happens when you nest a Client Component inside a Server Component?",
      options: [
        {
          option: "The Server Component renders on the server, and the Client Component is hydrated on the client",
          score: 15,
          isRight: true,
        },
        {
          option: "Both components render only on the server",
          score: 0,
          isRight: false,
        },
        {
          option: "Both components render only on the client",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "Server and Client Components", id: "server-client-components" },
      explanation: "Nesting a Client Component inside a Server Component enables server-side rendering for static content, while interactive parts are hydrated on the client.",
    },
    // Medium
    {
      id: "scc-5",
      question: "Which of the following best describes hydration in Next.js?",
      options: [
        {
          option: "Attaching event handlers to static HTML to make it interactive",
          score: 15,
          isRight: true,
        },
        {
          option: "Streaming HTML from the server to the client",
          score: 0,
          isRight: false,
        },
        {
          option: "Prefetching data before rendering",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "Server and Client Components", id: "server-client-components" },
      explanation: "Hydration is React's process for attaching event handlers to the DOM, making static HTML interactive.",
    },
    // Hard
    {
      id: "scc-6",
      question: "What is the React Server Component Payload (RSC Payload) used for in Next.js?",
      options: [
        {
          option: "It contains the serialized output of Server Components and references to Client Components for hydration",
          score: 15,
          isRight: true,
        },
        {
          option: "It bundles all client-side JavaScript for the app",
          score: 0,
          isRight: false,
        },
        {
          option: "It stores user session data",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "hard",
      category: { label: "Server and Client Components", id: "server-client-components" },
      explanation: "The RSC Payload is a compact binary format containing the rendered output of Server Components and placeholders for Client Components, which are hydrated on the client.",
    },
    // Hard
    {
      id: "scc-7",
      question: "Which of the following is a recommended best practice when structuring Server and Client Components?",
      options: [
        {
          option: "Place Client Components as low as possible in the component tree",
          score: 15,
          isRight: true,
        },
        {
          option: "Use Client Components for all components by default",
          score: 0,
          isRight: false,
        },
        {
          option: "Mix server and client logic in every component",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "hard",
      category: { label: "Server and Client Components", id: "server-client-components" },
      explanation: "Client Components should be leaf nodes whenever possible, maximizing the performance and security benefits of Server Components.",
    },
    // Hard
    {
      id: "scc-8",
      question: "Why is it not recommended to use Client Components for data fetching from secure backends?",
      options: [
        {
          option: "Client Components expose JavaScript and cannot securely handle secrets or tokens",
          score: 15,
          isRight: true,
        },
        {
          option: "Client Components do not support fetch requests",
          score: 0,
          isRight: false,
        },
        {
          option: "Client Components cannot be nested in Server Components",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "hard",
      category: { label: "Server and Client Components", id: "server-client-components" },
      explanation: "Secrets and sensitive logic should remain on the server, as Client Components' code is sent to the browser and can be inspected.",
    },
    // Hard
    {
      id: "scc-9",
      question: "How does Next.js handle subsequent navigations between routes with a mix of Server and Client Components?",
      options: [
        {
          option: "The RSC Payload is prefetched and cached, and only Client Components are hydrated on the client",
          score: 15,
          isRight: true,
        },
        {
          option: "All components are re-rendered on the server and sent as HTML",
          score: 0,
          isRight: false,
        },
        {
          option: "Only Server Components are sent to the client for hydration",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "hard",
      category: { label: "Server and Client Components", id: "server-client-components" },
      explanation: "On subsequent navigations, Next.js uses the prefetched RSC Payload to enable fast transitions, hydrating only the necessary Client Components.",
    },
    // Hard
    {
      id: "scc-10",
      question: "What is a common misconception about the 'use server' directive in Next.js?",
      options: [
        {
          option: "That it marks a component as a Server Component, when in fact Server Components are the default and 'use server' is for server actions",
          score: 15,
          isRight: true,
        },
        {
          option: "That it is required for all server-side code",
          score: 0,
          isRight: false,
        },
        {
          option: "That it enables browser APIs in Server Components",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "hard",
      category: { label: "Server and Client Components", id: "server-client-components" },
      explanation: "'use server' is used for marking server actions, not for declaring Server Components, which are already the default in the App Router.",
    },
  ];
  