import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { stats } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-48"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,#000_35%,transparent_100%)]" />
        <div className="absolute -top-48 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <Reveal mode="mount">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-[13px] font-medium text-muted-foreground">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            中小企業・スタートアップ・EC事業者のためのWeb制作
          </p>
        </Reveal>

        <Reveal mode="mount" delay={0.08}>
          <h1
            id="hero-heading"
            className="mx-auto mt-8 max-w-4xl text-[2.35rem] font-bold leading-[1.3] tracking-tight md:text-6xl md:leading-[1.22]"
          >
            そのホームページ、
            <br />
            <span className="text-accent">成果</span>を生んでいますか。
          </h1>
        </Reveal>

        <Reveal mode="mount" delay={0.16}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-loose text-muted-foreground md:text-lg">
            デザインの美しさは、目的ではなく手段。AI Web Studioは、
            問い合わせ・売上・採用——事業の成果から逆算して、
            ホームページ・LP・ECサイトを設計するWeb制作会社です。
          </p>
        </Reveal>

        <Reveal mode="mount" delay={0.24}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/#contact">
                無料相談する
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#contact">無料サイト診断を受ける</Link>
            </Button>
          </div>
          <p className="mt-5 text-[13px] text-muted-foreground">
            相談は30分・オンライン対応。しつこい営業は一切ありません。
          </p>
        </Reveal>

        <Reveal mode="mount" delay={0.34}>
          <dl className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-2">
                <dd className="text-3xl font-bold tabular-nums tracking-tight md:text-4xl">
                  {stat.value}
                  <span className="ml-0.5 text-lg font-semibold md:text-xl">
                    {stat.suffix}
                  </span>
                </dd>
                <dt className="text-[13px] text-muted-foreground">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
