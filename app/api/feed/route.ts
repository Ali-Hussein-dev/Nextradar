import { getSourcesPage } from '@/sanity/lib/getters';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'

export const GET = async (req: NextRequest) => {
    try {
        const url = req.nextUrl;
        const pageParam = url.searchParams.get('page');
        const page = pageParam ? Number(pageParam) : 1;

        // Validate page parameter
        if (isNaN(page) || page < 1) {
            return NextResponse.json({ error: 'Invalid page parameter' }, { status: 400 });
        }

        const list = await getSourcesPage({ page, pageSize: 10 });

        // Add security headers
        const response = NextResponse.json(list);
        response.headers.set('Content-Security-Policy', "default-src 'self'");
        response.headers.set('X-Content-Type-Options', 'nosniff');
        response.headers.set('X-Frame-Options', 'DENY');
        response.headers.set('X-XSS-Protection', '1; mode=block');

        return response;
    } catch (error) {
        console.error('Error fetching sources:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
};