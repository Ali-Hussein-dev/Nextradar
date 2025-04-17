import { NextResponse } from "next/server"
import { verifyCreemSignature } from "@/jobs/lib/creem/verify-signature"
import { publishDocument } from "@/jobs/sanity/setters"
import { revalidatePath } from "next/cache"

const webhook_payload_example = {
  id: "evt_64lojVkXxkAUG0hghAtUHK",
  eventType: "checkout.completed",
  created_at: 1731008363192,
  object: {
    id: "ch_2Ta8PiXu2ahkQ4gyKCZGcK",
    object: "checkout",
    order: {
      id: "ord_3ub81kf23H5ZzWHroSFiJQ",
      customer: "cust_6GoKxRonGjWNKU2SRM2rrK",
      product: "prod_3wxf0VhfMOt7KheeOqzcef",
      amount: 19900,
      currency: "EUR",
      status: "paid",
      type: "onetime",
      created_at: "2024-11-07T19:39:01.298Z",
      updated_at: "2024-11-07T19:39:01.298Z",
      mode: "test",
    },
    product: {
      id: "prod_3wxf0VhfMOt7KheeOqzcef",
      name: "Job Post",
      description: "Reach the right candidates through our specialized job board",
      image_url:
        "https://nucn5fajkcc6sgrd.public.blob.vercel-storage.com/Logo-LwD42TiEbLBJtytzR6dKvol8Snzjol.png",
      price: 19900,
      currency: "EUR",
      billing_type: "onetime",
      billing_period: "once",
      status: "archived",
      tax_mode: "inclusive",
      tax_category: "saas",
      default_success_url: "http://localhost:3000/hiring-form",
      created_at: "2024-10-15T14:27:54.497Z",
      updated_at: "2024-10-15T14:27:54.497Z",
      mode: "test",
    },
    customer: {
      id: "cust_6GoKxRonGjWNKU2SRM2rrK",
      object: "customer",
      email: "a.m.housen@gmail.com",
      name: "Dummy name",
      country: "DE",
      created_at: "2024-10-16T07:34:58.599Z",
      updated_at: "2024-10-16T07:34:58.599Z",
      mode: "test",
    },
    custom_fields: [],
    status: "completed",
    metadata: {
      _id: "drafts.9fc759a7-6a1b-44cf-915d-1b8f1480f916",
      company: {
        name: "Vercel",
        website: "https://vercel.com",
      },
    },
    mode: "test",
  },
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
  const body = JSON.parse(payload) as Webhook
  // Check if event type is checkout.completed
  if (body.eventType === "checkout.completed") {
    // Publish the job post on Sanity
    const metadata = body.object.metadata
    const documentId = metadata._id
    const orderId = body.object.order.id
    console.log({ metadata, documentId, orderId })
    const publishRes = await publishDocument(documentId, orderId)

    console.log(publishRes)
    // Validate jobs page
    revalidatePath("/jobs")

    // send an email to the customer
    // send an email to the admin
  }

  return NextResponse.json({})
}
