import * as crypto from 'crypto';
import { env } from '@/env.mjs';
import { NextRequest } from 'next/server';

/**
 * Generate a signature for a Creem webhook
 */
function generateSignature(payload: string, secret: string): string {
    const computedSignature = crypto
        .createHmac('sha256', secret)
        .update(payload)
        .digest('hex');
    return computedSignature;
}
/**
 * Verify the signature of a Creem webhook
 */
export const verifyCreemSignature = async (req: NextRequest) => {
    const signature = req.headers.get('creem-signature')
    if (!signature) return false
    
    const secret = env.CREEM_WEBHOOK_SECRET
    const payload = await req.text()

    const computedSignature = generateSignature(payload, secret)

    return computedSignature === signature
}