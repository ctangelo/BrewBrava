import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    // 1) Читаем тело безопасно
    const raw = await req.text();

    // лог в ответ (на время отладки)
    if (!raw) {
      return NextResponse.json(
        { ok: false, error: "EMPTY_BODY", contentType },
        { status: 400 }
      );
    }

    let body: any;
    try {
      body = JSON.parse(raw);
    } catch (e: any) {
      return NextResponse.json(
        { ok: false, error: "JSON_PARSE_FAILED", contentType, raw: raw.slice(0, 500) },
        { status: 400 }
      );
    }

    // 2) Проверка ключей
    const keys = Object.keys(body || {});
    const message = String(body?.message ?? "").trim();

    if (!message) {
      return NextResponse.json(
        { ok: false, error: "MESSAGE_EMPTY", keys, body },
        { status: 400 }
      );
    }

    // 3) Проверка env
    const n8nUrl = process.env.N8N_WEBHOOK_URL;
    const secret = process.env.N8N_WEBHOOK_SECRET;

    if (!n8nUrl || !secret) {
      return NextResponse.json(
        { ok: false, error: "ENV_MISSING", hasUrl: !!n8nUrl, hasSecret: !!secret },
        { status: 500 }
      );
    }

    // 4) Отправка в n8n
    const res = await fetch(n8nUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-webhook-secret": secret,
      },
      body: JSON.stringify({
        name: body?.name ?? "",
        company: body?.company ?? "",
        phone: body?.phone ?? "",
        email: body?.email ?? "",
        message: body?.message ?? "",
        pageUrl: body?.pageUrl ?? "",
        ts: new Date().toISOString(),
      }),
    });

    const text = await res.text().catch(() => "");

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "N8N_FAILED", status: res.status, response: text.slice(0, 500) },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: "UNHANDLED", message: e?.message ?? String(e) },
      { status: 500 }
    );
  }
}
