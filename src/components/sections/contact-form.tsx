"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "お名前を入力してください")
    .max(100, "100文字以内で入力してください"),
  company: z.string().max(120, "120文字以内で入力してください").optional(),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("メールアドレスの形式が正しくありません")
    .max(200, "200文字以内で入力してください"),
  type: z.string().max(60),
  message: z
    .string()
    .min(10, "ご相談内容は10文字以上で入力してください")
    .max(4000, "4000文字以内で入力してください"),
  /** honeypot: 人間には見えない欄。入力があればbot */
  website: z.string().max(0).optional(),
});

type ContactValues = z.infer<typeof contactSchema>;

const inquiryTypes = [
  "無料相談（総合）",
  "無料サイト診断",
  "ホームページ制作",
  "LP制作",
  "ECサイト制作",
  "SEO・MEO対策",
  "保守・運用",
  "AI導入支援",
  "その他",
] as const;

export function ContactForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { type: inquiryTypes[0], website: "" },
  });

  const onSubmit = async (values: ContactValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setServerError(
          data?.error ?? "送信に失敗しました。時間をおいて再度お試しください。"
        );
        return;
      }
      router.push("/thanks");
    } catch {
      setServerError(
        "通信エラーが発生しました。ネットワーク環境をご確認のうえ再度お試しください。"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="contact-name">
              お名前 <span className="text-red-600 dark:text-red-400">*</span>
            </Label>
            <Input
              id="contact-name"
              autoComplete="name"
              placeholder="山田 太郎"
              className="mt-2"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              {...register("name")}
            />
            {errors.name && (
              <p
                id="contact-name-error"
                className="mt-1.5 text-[13px] text-red-600 dark:text-red-400"
              >
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="contact-company">会社名</Label>
            <Input
              id="contact-company"
              autoComplete="organization"
              placeholder="株式会社サンプル"
              className="mt-2"
              aria-invalid={!!errors.company}
              {...register("company")}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="contact-email">
            メールアドレス{" "}
            <span className="text-red-600 dark:text-red-400">*</span>
          </Label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="taro@example.com"
            className="mt-2"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p
              id="contact-email-error"
              className="mt-1.5 text-[13px] text-red-600 dark:text-red-400"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="contact-type">ご相談の種類</Label>
          <select
            id="contact-type"
            className="mt-2 flex h-11 w-full appearance-none rounded-lg border border-border bg-background px-4 text-[15px] text-foreground transition-colors hover:border-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/25"
            {...register("type")}
          >
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="contact-message">
            ご相談内容{" "}
            <span className="text-red-600 dark:text-red-400">*</span>
          </Label>
          <Textarea
            id="contact-message"
            placeholder="現状の課題やご希望をお聞かせください（例：10年前に作ったサイトをリニューアルしたい、広告のLPを改善したい など）"
            className="mt-2"
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            {...register("message")}
          />
          {errors.message && (
            <p
              id="contact-message-error"
              className="mt-1.5 text-[13px] text-red-600 dark:text-red-400"
            >
              {errors.message.message}
            </p>
          )}
        </div>

        {/* honeypot（スクリーンリーダー・タブ移動からも除外） */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        {serverError && (
          <p
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300"
          >
            {serverError}
          </p>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "送信中…" : "無料で相談する"}
        </Button>

        <p className="text-xs leading-relaxed text-muted-foreground">
          送信いただいた内容は
          <Link
            href="/privacy"
            className="underline underline-offset-2 transition-colors hover:text-foreground"
          >
            プライバシーポリシー
          </Link>
          に基づいて取り扱います。
        </p>
      </div>
    </form>
  );
}
