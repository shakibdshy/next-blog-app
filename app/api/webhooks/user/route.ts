import { client } from "@/config/prismadb";
import { IncomingHttpHeaders } from "http";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from "svix";


const secret = process.env.WEBHOOK_SECRET || "";

type EventType = "user.created" | "user.updated" | "*"

type Event = {
  data: Record<string, string | number>;
  object: "event";
  type: EventType;
};

async function handler(req: Request) {
  const payload = await req.json()
  const headersList = headers()
  const heads = {
    "svix-id": headersList.get("svix-id"),
    "svix-timestamp": headersList.get("svix-timestamp"),
    "svix-signature": headersList.get("svix-signature"),
  }
  const wh = new Webhook(secret)
  let event: Event | null = null

  try {
    event = wh.verify(JSON.stringify(payload), heads as IncomingHttpHeaders & WebhookRequiredHeaders) as Event
  } catch (error) {
    console.error((error as Error).message)
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
  }

  const eventType: EventType = event.type

  if (eventType === "user.created" || eventType === "user.updated") {
    const { id, ...attributes } = event.data

    await client.user.upsert({
      where: { externalId: id as string },
      create: {
        externalId: id as string,
        attributes,
      },
      update: { attributes },
    })
  }
}

export { handler as GET, handler as POST, handler as PUT, }