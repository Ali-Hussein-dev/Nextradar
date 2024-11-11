

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    if (process.env.VERCEL_ENV !== 'production') {
        // If in development, skip the middleware and continue to the next handler
        return NextResponse.next();
    }
    // Get the full URL from the request
    const pathname = new URL(request.url).pathname;

    // Clone the request headers
    const requestHeaders = new Headers(request.headers);

    // Add the full URL to a custom header
    requestHeaders.set('x-pathname', pathname);

    // Create the response
    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
    // Add the X-Robots-Tag header for the specific route
    if (pathname.startsWith('/jobs/')) {
        response.headers.set('X-Robots-Tag', 'index, follow');
    }
    // Return the response with the modified headers
    return response;
}

export const config = {
    matcher: [
        // Match all routes except for static files, API routes, and Next.js internals
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};