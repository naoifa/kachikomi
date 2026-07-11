import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 pt-16">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold tabular-nums text-accent">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
          ページが見つかりません
        </h1>
        <p className="mt-5 text-[15px] leading-loose text-muted-foreground">
          お探しのページは移動または削除された可能性があります。
          URLをご確認いただくか、トップページからお探しください。
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/">トップページへ戻る</Link>
        </Button>
      </div>
    </div>
  );
}
