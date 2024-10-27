import { NextResponse } from 'next/server'
import { verifyCreemSignature } from '@/lib/creem/verify-signature';

const webhook_payload_example = {
    id: 'evt_6thZikCqFN3AUQm5SgNGsa',
    eventType: 'checkout.completed',
    created_at: 1729080242974,
    object: {
        id: 'ch_8owsNh1DQP30W477WKzUW',
        object: 'checkout',
        order: {
            id: 'ord_5GWmPQ39PgKMQjnQ7qvx4Q',
            customer: 'cust_6GoKxRonGjWNKU2SRM2rrK',
            product: 'prod_3wxf0VhfMOt7KheeOqzcef',
            amount: 19900,
            currency: 'EUR',
            status: 'paid',
            type: 'onetime',
            created_at: '2024-10-16T12:03:45.952Z',
            updated_at: '2024-10-16T12:03:45.952Z',
            mode: 'test'
        },
        product: {
            id: 'prod_3wxf0VhfMOt7KheeOqzcef',
            name: 'Job Post',
            description: 'Reach the right candidates through our specialized job board',
            image_url: 'https://nucn5fajkcc6sgrd.public.blob.vercel-storage.com/Logo-LwD42TiEbLBJtytzR6dKvol8Snzjol.png',
            price: 19900,
            currency: 'EUR',
            billing_type: 'onetime',
            billing_period: 'once',
            status: 'active',
            tax_mode: 'inclusive',
            tax_category: 'saas',
            default_success_url: 'http://localhost:3000/hiring-form',
            created_at: '2024-10-15T14:27:54.497Z',
            updated_at: '2024-10-15T14:27:54.497Z',
            mode: 'test'
        },
        customer: {
            id: 'cust_6GoKxRonGjWNKU2SRM2rrK',
            object: 'customer',
            email: 'a.m.housen@gmail.com',
            name: 'Dummy name',
            country: 'DE',
            created_at: '2024-10-16T07:34:58.599Z',
            updated_at: '2024-10-16T07:34:58.599Z',
            mode: 'test'
        },
        custom_fields: [],
        status: 'completed',
        mode: 'test'
    }
}
type Webhook = typeof webhook_payload_example

export const dynamic = "force-dynamic"

export const POST = async (req: Request) => {
    // validate the webhook
    const clonedReq = req.clone()
    const payload = await clonedReq.text()
    const isCreeemSignature = await verifyCreemSignature(payload, clonedReq).catch(console.error)

    if (!isCreeemSignature) {
        return NextResponse.json({ message: "Invalid signature" }, { status: 401 })
    }

    // }
    // const body = await req.json()
    // get the event type

    // get the object

    // get the customer

    // get the product

    return NextResponse.json({})
}