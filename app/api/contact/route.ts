import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Мини-валидация (можно расширить)
    const name = String(body?.name ?? "").trim();
    const contact = String(body?.contact ?? "").trim();
    const message = String(body?.message ?? "").trim();
    const language = String(body?.language ?? "en").trim();

    if (!message) {
      return NextResponse.json({ ok: false, error: "Message is required" }, { status: 400 });
    }

    const n8nUrl = process.env.N8N_WEBHOOK_URL;
    const secret = process.env.N8N_WEBHOOK_SECRET;

    if (!n8nUrl || !secret) {
      return NextResponse.json({ ok: false, error: "Server env is not configured" }, { status: 500 });
    }

    // Что уходит в n8n
    const payload = {
      name,
      contact,
      message,
      language,
      pageUrl: body?.pageUrl ?? "",
      userAgent: req.headers.get("user-agent") ?? "",
      ts: new Date().toISOString(),
    };

    const res = await fetch(n8nUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-webhook-secret": secret,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return NextResponse.json({ ok: false, error: "n8n error", details: text }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: "Invalid JSON or server error" }, { status: 400 });
  }
}
