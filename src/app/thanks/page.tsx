import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "お問い合わせ完了",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 pt-16">
      <div className="max-w-md text-center">
        <CheckCircle2
          className="mx-auto size-14 text-accent"
          aria-hidden="true"
        />
        <h1 className="mt-8 text-2xl font-bold tracking-tight md:text-3xl">
          お問い合わせありがとうございます
        </h1>
        <p className="mt-5 text-[15px] leading-loose text-muted-foreground">
          内容を確認のうえ、1営業日以内に担当者よりご返信いたします。
          しばらく経っても返信がない場合は、お手数ですが
          メールが迷惑フォルダに入っていないかご確認ください。
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/">トップページへ戻る</Link>
        </Button>
      </div>
    </div>
  );
}
