import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  company: z.string().max(120).optional(),
  email: z.string().email().max(200),
  type: z.string().max(60).optional(),
  message: z.string().min(10).max(4000),
  website: z.string().max(0).optional(),
});

/**
 * 簡易レートリミット（10分間に同一IPから5回まで）。
 * サーバーレスではインスタンス単位のためベストエフォート。
 * 本格運用時はVercel KV / Upstash等に置き換える（docs/05_delivery.md）。
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "送信回数が上限に達しました。時間をおいてお試しください。" },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "リクエストの形式が正しくありません。" },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "入力内容をご確認ください。" },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // honeypotに入力がある場合はbot。成功を装って破棄する
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (apiKey && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
        to: [to],
        reply_to: data.email,
        subject: `【お問い合わせ】${data.name}様（${data.type ?? "無料相談"}）`,
        text: [
          `お名前: ${data.name}`,
          `会社名: ${data.company || "（未記入）"}`,
          `メール: ${data.email}`,
          `種類: ${data.type ?? "無料相談"}`,
          "",
          "----- ご相談内容 -----",
          data.message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      console.error("[contact] メール送信失敗:", res.status, await res.text());
      return NextResponse.json(
        { error: "送信に失敗しました。時間をおいて再度お試しください。" },
        { status: 502 }
      );
    }
  } else {
    // メール未設定の環境ではログに記録（RESEND_API_KEY / CONTACT_TO_EMAIL で有効化）
    console.log("[contact] 受信:", {
      name: data.name,
      company: data.company,
      email: data.email,
      type: data.type,
      message: data.message,
    });
  }

  return NextResponse.json({ ok: true });
}
