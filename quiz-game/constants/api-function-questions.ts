import type { Question } from "../types";

export const functionQuestions: Question[] = [
    {
      id: "after-1",
      question: "What is the primary use of the `after` function in Next.js 15?",
      options: [
        {
          option: "To register a callback after a response is sent",
          description: "Used for post-response logic in server functions.",
          score: 15,
          isRight: true,
        },
        {
          option: "To run code after a component mounts",
          score: 0,
          isRight: false,
        },
        {
          option: "To fetch data after rendering",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "The `after` function is used to register a callback that runs after a response is sent in server functions.",
    },
    {
      id: "cacheLife-1",
      question: "How does the `cacheLife` function affect caching in Next.js?",
      options: [
        {
          option: "It sets the cache expiration time for a cached function or component",
          score: 15,
          isRight: true,
        },
        {
          option: "It invalidates all cache tags",
          score: 0,
          isRight: false,
        },
        {
          option: "It disables caching entirely",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`cacheLife` allows you to specify how long a cached function or component should remain in the cache before expiring.",
    },
    {
      id: "cacheTag-1",
      question: "What is the purpose of the `cacheTag` function in Next.js?",
      options: [
        {
          option: "To manage cache invalidation using tags",
          score: 15,
          isRight: true,
        },
        {
          option: "To set cache duration in seconds",
          score: 0,
          isRight: false,
        },
        {
          option: "To disable cache for a route",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`cacheTag` is used to associate cache entries with tags, making it easier to invalidate related cached data.",
    },
    {
      id: "cookies-1",
      question: "Which scenario best fits using the `cookies` function in Next.js 15?",
      options: [
        {
          option: "Reading and manipulating HTTP cookies in server functions",
          score: 15,
          isRight: true,
        },
        {
          option: "Fetching data from an API",
          score: 0,
          isRight: false,
        },
        {
          option: "Managing cache tags",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "The `cookies` function provides an API for reading and manipulating cookies in server functions.",
    },
    {
      id: "draftMode-1",
      question: "What does the `draftMode` function enable in a Next.js application?",
      options: [
        {
          option: "Previewing unpublished content",
          score: 15,
          isRight: true,
        },
        {
          option: "Disabling SSR",
          score: 0,
          isRight: false,
        },
        {
          option: "Forcing static rendering",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`draftMode` is used to enable preview mode for displaying draft or unpublished content in Next.js.",
    },
    {
      id: "fetch-1",
      question: "How is the `fetch` function extended in Next.js 15 compared to the standard Web API?",
      options: [
        {
          option: "It supports persistent caching and revalidation semantics on the server",
          score: 15,
          isRight: true,
        },
        {
          option: "It only works on the client side",
          score: 0,
          isRight: false,
        },
        {
          option: "It automatically retries failed requests",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "Next.js extends the fetch API to allow each request on the server to set its own caching and revalidation semantics.",
    },
    {
      id: "forbidden-1",
      question: "What is the effect of calling the `forbidden` function in a Next.js API route or server action?",
      options: [
        {
          option: "It sends a 403 Forbidden response",
          score: 15,
          isRight: true,
        },
        {
          option: "It redirects to the login page",
          score: 0,
          isRight: false,
        },
        {
          option: "It logs the user out",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "The `forbidden` function is used to immediately respond with a 403 Forbidden HTTP status.",
    },
    {
      id: "generateMetadata-1",
      question: "What is the main purpose of the `generateMetadata` function in Next.js?",
      options: [
        {
          option: "To add SEO and social sharing metadata to pages",
          score: 15,
          isRight: true,
        },
        {
          option: "To generate static props",
          score: 0,
          isRight: false,
        },
        {
          option: "To create sitemaps",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`generateMetadata` allows you to define metadata for SEO and social sharing, which is output in the HTML <head>.",
    },
    {
      id: "generateStaticParams-1",
      question: "When should you use the `generateStaticParams` function in Next.js?",
      options: [
        {
          option: "When you need to generate dynamic routes at build time",
          score: 15,
          isRight: true,
        },
        {
          option: "When you want to fetch data on the client",
          score: 0,
          isRight: false,
        },
        {
          option: "When you need to invalidate cache tags",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`generateStaticParams` is used to generate the list of dynamic route parameters for static generation.",
    },
    {
      id: "headers-1",
      question: "What does the `headers` function provide access to in a Next.js server function?",
      options: [
        {
          option: "The incoming HTTP request headers",
          score: 15,
          isRight: true,
        },
        {
          option: "The response headers only",
          score: 0,
          isRight: false,
        },
        {
          option: "All cookies set by the client",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "The `headers` function gives access to the HTTP headers sent with the request, useful for authentication and content negotiation.",
    },
    {
      id: "connection-1",
      question: "What does the `connection` function provide in Next.js 15 route handlers?",
      options: [
        {
          option: "Access to connection information like client IP address",
          score: 15,
          isRight: true,
        },
        {
          option: "Database connection pooling",
          score: 0,
          isRight: false,
        },
        {
          option: "WebSocket connection management",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`connection` exposes network connection details, such as the client's IP address, which can be useful for logging or security purposes.[4]",
    },
    {
      id: "generateImageMetadata-1",
      question: "What is the main use of the `generateImageMetadata` function in Next.js 15?",
      options: [
        {
          option: "To generate multiple images for the Metadata API in a single file",
          score: 15,
          isRight: true,
        },
        {
          option: "To optimize images at runtime",
          score: 0,
          isRight: false,
        },
        {
          option: "To lazy-load images on the client",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`generateImageMetadata` is used to generate multiple image entries for the Metadata API, such as Open Graph or Twitter images, from a single file.[4]",
    },
    {
      id: "generateSitemaps-1",
      question: "When should you use the `generateSitemaps` function in Next.js 15?",
      options: [
        {
          option: "When you need to generate multiple sitemaps for your application",
          score: 15,
          isRight: true,
        },
        {
          option: "When you want to generate static routes",
          score: 0,
          isRight: false,
        },
        {
          option: "When you want to generate robots.txt",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`generateSitemaps` enables you to programmatically generate multiple sitemap files for large or complex sites.[4]",
    },
    {
      id: "generateViewport-1",
      question: "What does the `generateViewport` function allow you to do in Next.js 15?",
      options: [
        {
          option: "Define custom viewport settings for a page",
          score: 15,
          isRight: true,
        },
        {
          option: "Generate responsive images",
          score: 0,
          isRight: false,
        },
        {
          option: "Override default device scaling",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`generateViewport` lets you set viewport meta tags for a page, which is useful for controlling layout and scaling on different devices.[4]",
    },
    {
      id: "ImageResponse-1",
      question: "What is the purpose of the `ImageResponse` constructor in Next.js 15?",
      options: [
        {
          option: "To generate dynamic images on the server",
          score: 15,
          isRight: true,
        },
        {
          option: "To optimize image loading on the client",
          score: 0,
          isRight: false,
        },
        {
          option: "To preload images in the HTML head",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`ImageResponse` is used to create dynamic images (e.g., Open Graph images) on the server, often for social sharing.[4]",
    },
    {
      id: "NextRequest-1",
      question: "How does `NextRequest` extend the native Web Request API in Next.js 15?",
      options: [
        {
          option: "By adding convenience methods for cookies, headers, and URL manipulation",
          score: 15,
          isRight: true,
        },
        {
          option: "By enabling direct database queries",
          score: 0,
          isRight: false,
        },
        {
          option: "By providing client-side navigation",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`NextRequest` extends the standard Request API with features like cookie and header manipulation, and enhanced URL parsing.[3][4]",
    },
    {
      id: "NextResponse-1",
      question: "What is a unique capability of `NextResponse` in Next.js 15?",
      options: [
        {
          option: "It enables advanced response manipulation, like redirects and setting cookies",
          score: 15,
          isRight: true,
        },
        {
          option: "It automatically caches all responses",
          score: 0,
          isRight: false,
        },
        {
          option: "It only works for static files",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`NextResponse` allows you to craft custom responses, set headers/cookies, and perform redirects in middleware and route handlers.[4][5]",
    },
    {
      id: "notFound-1",
      question: "What happens when you call the `notFound` function in a Next.js 15 route handler?",
      options: [
        {
          option: "The user is shown the 404 page",
          score: 15,
          isRight: true,
        },
        {
          option: "The user is redirected to the home page",
          score: 0,
          isRight: false,
        },
        {
          option: "A server error is thrown",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "Calling `notFound` in a route handler triggers the 404 page for that request.[4]",
    },
    {
      id: "permanentRedirect-1",
      question: "How does `permanentRedirect` differ from `redirect` in Next.js 15?",
      options: [
        {
          option: "It issues a 308 Permanent Redirect status code",
          score: 15,
          isRight: true,
        },
        {
          option: "It only works for client-side navigation",
          score: 0,
          isRight: false,
        },
        {
          option: "It disables caching for the redirect",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`permanentRedirect` sends a 308 status code, indicating the redirect is permanent, which helps with SEO and browser caching.[4]",
    },
    {
      id: "redirect-1",
      question: "What does the `redirect` function do in a Next.js 15 route handler?",
      options: [
        {
          option: "Performs a programmatic redirect to another URL",
          score: 15,
          isRight: true,
        },
        {
          option: "Reloads the current page",
          score: 0,
          isRight: false,
        },
        {
          option: "Clears all cookies",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`redirect` is used to programmatically send a redirect response to the client from a route handler.[4][7]",
    },
    {
      id: "revalidatePath-1",
      question: "What does the `revalidatePath` function allow you to do in Next.js 15?",
      options: [
        {
          option: "Trigger revalidation for a specific path or route",
          score: 15,
          isRight: true,
        },
        {
          option: "Invalidate all cache tags globally",
          score: 0,
          isRight: false,
        },
        {
          option: "Force a client-side refresh",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`revalidatePath` triggers a revalidation of cached data for a specific route or path.[4]",
    },
    {
      id: "revalidateTag-1",
      question: "How is the `revalidateTag` function used in Next.js 15?",
      options: [
        {
          option: "To revalidate cached data associated with a specific tag",
          score: 15,
          isRight: true,
        },
        {
          option: "To revalidate all static pages",
          score: 0,
          isRight: false,
        },
        {
          option: "To clear cookies for a tag",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`revalidateTag` is used to selectively revalidate cache entries that have been tagged, enabling granular cache control.[4]",
    },
    {
      id: "unauthorized-1",
      question: "What is the effect of calling the `unauthorized` function in a Next.js 15 API route?",
      options: [
        {
          option: "It sends a 401 Unauthorized HTTP response",
          score: 15,
          isRight: true,
        },
        {
          option: "It logs the user out",
          score: 0,
          isRight: false,
        },
        {
          option: "It redirects to the login page",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`unauthorized` sends a 401 Unauthorized response, commonly used for authentication failures.[4]",
    },
    {
      id: "unstable_cache-1",
      question: "What is the main purpose of the `unstable_cache` function in Next.js 15?",
      options: [
        {
          option: "To manually cache the result of an async function",
          score: 15,
          isRight: true,
        },
        {
          option: "To disable all caching",
          score: 0,
          isRight: false,
        },
        {
          option: "To cache static assets only",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`unstable_cache` allows you to cache the result of an async function, providing fine-grained control over caching behavior.[4]",
    },
    {
      id: "unstable_noStore-1",
      question: "How does the `unstable_noStore` function affect caching in Next.js 15?",
      options: [
        {
          option: "It disables caching for the current request",
          score: 15,
          isRight: true,
        },
        {
          option: "It enables persistent caching",
          score: 0,
          isRight: false,
        },
        {
          option: "It clears all cache tags",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`unstable_noStore` marks the current request as non-cacheable, ensuring fresh data is fetched every time.[4]",
    },
    {
      id: "unstable_rethrow-1",
      question: "What is the use case for the `unstable_rethrow` function in Next.js 15?",
      options: [
        {
          option: "To rethrow an error for error boundary handling",
          score: 15,
          isRight: true,
        },
        {
          option: "To retry failed fetch requests",
          score: 0,
          isRight: false,
        },
        {
          option: "To suppress errors in production",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`unstable_rethrow` allows you to rethrow errors so they can be caught by error boundaries, useful for advanced error handling.[4]",
    },
    {
      id: "useLinkStatus-1",
      question: "What does the `useLinkStatus` hook provide in Next.js 15?",
      options: [
        {
          option: "Information about the status of a link (e.g., loading, prefetching)",
          score: 15,
          isRight: true,
        },
        {
          option: "The current pathname",
          score: 0,
          isRight: false,
        },
        {
          option: "The current search params",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`useLinkStatus` is a hook that gives you information about the status of a link, such as whether it is loading or being prefetched.[4]",
    },
    {
      id: "useParams-1",
      question: "What does the `useParams` hook return in a Next.js 15 app route?",
      options: [
        {
          option: "An object containing the dynamic route parameters",
          score: 15,
          isRight: true,
        },
        {
          option: "The current search query",
          score: 0,
          isRight: false,
        },
        {
          option: "The full request headers",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`useParams` returns an object with the dynamic route parameters for the current route segment.",
    },
    {
      id: "usePathname-1",
      question: "How is the `usePathname` hook used in Next.js 15?",
      options: [
        {
          option: "To get the current URL pathname in a Client Component",
          score: 15,
          isRight: true,
        },
        {
          option: "To get the current search params",
          score: 0,
          isRight: false,
        },
        {
          option: "To get the current user session",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`usePathname` returns the current URL pathname, useful for navigation and conditional rendering in Client Components.",
    },
    {
      id: "useReportWebVitals-1",
      question: "What is the purpose of the `useReportWebVitals` function in Next.js 15?",
      options: [
        {
          option: "To report custom web vitals metrics for analytics",
          score: 15,
          isRight: true,
        },
        {
          option: "To monitor server logs",
          score: 0,
          isRight: false,
        },
        {
          option: "To prefetch routes",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`useReportWebVitals` allows you to send custom web vitals metrics to analytics providers.",
    },
    {
      id: "useRouter-1",
      question: "What does the `useRouter` hook provide access to in Next.js 15?",
      options: [
        {
          option: "The router instance for navigation and route information",
          score: 15,
          isRight: true,
        },
        {
          option: "The current request headers",
          score: 0,
          isRight: false,
        },
        {
          option: "The user's session data",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`useRouter` gives you access to the router instance, enabling navigation and access to route information in Client Components.",
    },
    {
      id: "useSearchParams-1",
      question: "What does the `useSearchParams` hook return in Next.js 15?",
      options: [
        {
          option: "An object for reading and manipulating the current URL's search parameters",
          score: 15,
          isRight: true,
        },
        {
          option: "The current route parameters",
          score: 0,
          isRight: false,
        },
        {
          option: "The current user's cookies",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`useSearchParams` returns an object that lets you read and manipulate the URL's search parameters in Client Components.",
    },
    {
      id: "useSelectedLayoutSegment-1",
      question: "What does the `useSelectedLayoutSegment` hook return in Next.js 15?",
      options: [
        {
          option: "The currently selected layout segment for the route",
          score: 15,
          isRight: true,
        },
        {
          option: "The current search params",
          score: 0,
          isRight: false,
        },
        {
          option: "The current user's authentication state",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`useSelectedLayoutSegment` returns the active layout segment, useful for advanced routing and layout composition.",
    },
    {
      id: "useSelectedLayoutSegments-1",
      question: "How does `useSelectedLayoutSegments` differ from `useSelectedLayoutSegment` in Next.js 15?",
      options: [
        {
          option: "It returns an array of all selected layout segments",
          score: 15,
          isRight: true,
        },
        {
          option: "It returns the current pathname",
          score: 0,
          isRight: false,
        },
        {
          option: "It returns the current search params",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`useSelectedLayoutSegments` provides an array of all currently selected layout segments for the route.",
    },
    {
      id: "userAgent-1",
      question: "What information does the `userAgent` helper provide in Next.js 15?",
      options: [
        {
          option: "Details about the client's browser and device",
          score: 15,
          isRight: true,
        },
        {
          option: "The current user's authentication token",
          score: 0,
          isRight: false,
        },
        {
          option: "The server's operating system",
          score: 0,
          isRight: false,
        },
      ],
      difficulty: "medium",
      category: { label: "API Functions", id: "api-functions" },
      explanation: "`userAgent` provides detailed information about the client's browser and device, useful for feature detection and analytics.",
    },
  ];
  
