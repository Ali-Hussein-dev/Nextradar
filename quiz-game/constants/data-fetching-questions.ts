import type { Question } from "../types"

export const dataFetchingQuestions: Question[] = [
  {
    id: "1",
    question: "Which method is recommended for fetching data at build time in Next.js 15 app directory?",
    options: [
      {
        option: "Static Generation with fetch() in Server Components",
        description: "Server Components can run fetch at build time if the data is static.",
        score: 5,
        isRight: true,
      },
      {
        option: "getStaticProps",
        description: "getStaticProps is only available in the pages directory.",
        score: 0,
        isRight: false,
      },
      {
        option: "useEffect",
        description: "useEffect runs on the client, not at build time.",
        score: 0,
        isRight: false,
      },
    ],
    difficulty: "easy",
    category: { label: "Data Fetching", id: "data-fetching" },
    explanation:
      "In the app directory, you can use fetch() in Server Components for static generation. getStaticProps is not supported in the app directory.",
  },
  {
    id: "2",
    question: "What is the default caching behavior of fetch() in Next.js 15 Server Components?",
    options: [
      {
        option: "auto",
        description: "Next.js automatically caches fetch requests unless specified otherwise.",
        score: 5,
        isRight: true,
      },
      {
        option: "no-store",
        description: "no-store disables caching, but is not the default.",
        score: 0,
        isRight: false,
      },
      {
        option: "force-cache",
        description: "force-cache is explicit, not the default.",
        score: 0,
        isRight: false,
      },
    ],
    difficulty: "easy",
    category: { label: "Data Fetching", id: "data-fetching" },
    explanation:
      "By default, fetch() in Server Components uses 'auto', which enables caching for GET requests to static resources.",
  },
  {
    id: "3",
    question: "How can you fetch dynamic data on every request in a Next.js 15 Server Component?",
    options: [
      {
        option: "fetch(url, { cache: 'no-store' })",
        description: "This disables caching and fetches fresh data on each request.",
        score: 15,
        isRight: true,
      },
      {
        option: "useEffect",
        description: "useEffect is not available in Server Components.",
        score: 0,
        isRight: false,
      },
      {
        option: "getServerSideProps",
        description: "getServerSideProps is not supported in the app directory.",
        score: 0,
        isRight: false,
      },
    ],
    difficulty: "medium",
    category: { label: "Data Fetching", id: "data-fetching" },
    explanation:
      "To fetch dynamic data on every request in Server Components, use fetch() with cache: 'no-store'.",
  },
  {
    id: "4",
    question: "Which hook is used for client-side data fetching in Next.js 15?",
    options: [
      {
        option: "useEffect",
        description: "useEffect is the standard React hook for client-side effects.",
        score: 5,
        isRight: true,
      },
      {
        option: "useServerEffect",
        description: "There is no such hook in React or Next.js.",
        score: 0,
        isRight: false,
      },
      {
        option: "useData",
        description: "Not a standard hook for data fetching.",
        score: 0,
        isRight: false,
      },
    ],
    difficulty: "easy",
    category: { label: "Data Fetching", id: "data-fetching" },
    explanation:
      "useEffect is used for client-side data fetching in React and Next.js Client Components.",
  },
  {
    id: "5",
    question: "How can you opt out of automatic fetch caching in a Next.js 15 Server Component?",
    options: [
      {
        option: "Pass { cache: 'no-store' } to fetch",
        description: "This disables caching for that request.",
        score: 15,
        isRight: true,
      },
      {
        option: "Pass { cache: false } to fetch",
        description: "This is not a valid option.",
        score: 0,
        isRight: false,
      },
      {
        option: "Set useCache: false in component",
        description: "No such option exists.",
        score: 0,
        isRight: false,
      },
    ],
    difficulty: "medium",
    category: { label: "Data Fetching", id: "data-fetching" },
    explanation:
      "To disable caching, pass { cache: 'no-store' } as the second argument to fetch().",
  },
  {
    id: "6",
    question: "Which pattern is best for fetching user-specific data in Next.js 15?",
    options: [
      {
        option: "Fetch in a Server Action or API Route",
        description: "Server Actions or API Routes can access session/cookie data.",
        score: 25,
        isRight: true,
      },
      {
        option: "Fetch in a Server Component with cache: 'force-cache'",
        description: "This would cache data and not be user-specific.",
        score: 0,
        isRight: false,
      },
      {
        option: "Fetch in a Static Route Segment",
        description: "Static segments are not suitable for user-specific data.",
        score: 0,
        isRight: false,
      },
    ],
    difficulty: "hard",
    category: { label: "Data Fetching", id: "data-fetching" },
    explanation:
      "User-specific data should be fetched on the server where you have access to authentication/session data, such as in Server Actions or API Routes.",
  },
  {
    id: "7",
    question: "What is the main benefit of using React Server Components for data fetching in Next.js 15?",
    options: [
      {
        option: "Reduced bundle size and improved performance",
        description: "Server Components don't send their code to the client.",
        score: 15,
        isRight: true,
      },
      {
        option: "Automatic client-side state management",
        description: "Server Components do not manage client state.",
        score: 0,
        isRight: false,
      },
      {
        option: "Built-in database connection pooling",
        description: "This is not a feature of Server Components.",
        score: 0,
        isRight: false,
      },
    ],
    difficulty: "medium",
    category: { label: "Data Fetching", id: "data-fetching" },
    explanation:
      "Server Components allow you to fetch data on the server, reducing bundle size and improving performance since no unnecessary JavaScript is sent to the client.",
  },
  {
    id: "8",
    question: "How can you revalidate cached data in Next.js 15 Server Components?",
    options: [
      {
        option: "Use fetch with { next: { revalidate: seconds } }",
        description: "This sets the revalidation interval for the cache.",
        score: 15,
        isRight: true,
      },
      {
        option: "Call revalidatePath() in a Client Component",
        description: "revalidatePath is a server-only function.",
        score: 0,
        isRight: false,
      },
      {
        option: "Set cache: 'no-store'",
        description: "This disables caching, but does not revalidate.",
        score: 0,
        isRight: false,
      },
    ],
    difficulty: "medium",
    category: { label: "Data Fetching", id: "data-fetching" },
    explanation:
      "You can use fetch with the next.revalidate option to specify how often cached data should be revalidated.",
  },
  {
    id: "9",
    question: "What is a common use case for using fetch with { cache: 'force-cache' } in Next.js 15?",
    options: [
      {
        option: "Fetching static, rarely changing data (e.g., product catalog)",
        description: "force-cache ensures the data is cached and reused.",
        score: 15,
        isRight: true,
      },
      {
        option: "Fetching user profile data",
        description: "User data should not be cached globally.",
        score: 0,
        isRight: false,
      },
      {
        option: "Fetching data from a POST endpoint",
        description: "POST requests are not cacheable.",
        score: 0,
        isRight: false,
      },
    ],
    difficulty: "medium",
    category: { label: "Data Fetching", id: "data-fetching" },
    explanation:
      "force-cache is ideal for static data that doesn't change often and can be safely cached.",
  },
  {
    id: "10",
    question: "Which of the following is NOT a valid way to fetch data in the Next.js 15 app directory?",
    options: [
      {
        option: "getStaticProps",
        description: "getStaticProps is only available in the pages directory.",
        score: 5,
        isRight: true,
      },
      {
        option: "fetch() in a Server Component",
        description: "This is the recommended way in the app directory.",
        score: 0,
        isRight: false,
      },
      {
        option: "useEffect in a Client Component",
        description: "Client Components can use useEffect for data fetching.",
        score: 0,
        isRight: false,
      },
    ],
    difficulty: "easy",
    category: { label: "Data Fetching", id: "data-fetching" },
    explanation:
      "getStaticProps is not supported in the app directory; use fetch in Server or Client Components instead.",
  },
];