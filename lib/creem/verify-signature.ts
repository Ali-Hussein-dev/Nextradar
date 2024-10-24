"use server"
import * as crypto from 'crypto';
import { env } from '@/env.mjs';

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
export const verifyCreemSignature = async (payload: string, req: Request) => {
    const signature = req.headers.get('creem-signature')
    if (!signature) return false
    
    const secret = env.CREEM_WEBHOOK_SECRET
    const computedSignature = generateSignature(payload, secret)

    return computedSignature === signature
}