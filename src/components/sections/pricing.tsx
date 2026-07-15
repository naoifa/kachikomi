import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { planCommons, plans } from "@/lib/content";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section id="pricing" tone="surface" labelledBy="pricing-heading">
      <SectionHeading
        eyebrow="Price"
        headingId="pricing-heading"
        title="料金は、最初から明朗に。"
        lead="Web制作の見積りは不透明になりがちです。私たちは基準価格を公開し、「何に、いくらかかるのか」を最初にご説明します。"
      />

      <ul className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <li key={plan.name} className="h-full">
            <Reveal delay={i * 0.08} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border bg-background p-8",
                  plan.recommended
                    ? "border-2 border-accent shadow-lg shadow-accent/5"
                    : "border-border"
                )}
              >
                {plan.recommended && (
                  <p className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground">
                    一番選ばれています
                  </p>
                )}
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tabular-nums tracking-tight">
                    ¥{plan.price}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {plan.unit}（税別）
                  </span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-background p-6 md:p-7">
            <h3 className="text-sm font-bold">全プラン共通</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {planCommons.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-background p-6 md:p-7">
            <h3 className="text-sm font-bold">
              保守運用プラン
              <span className="ml-3 text-xl font-bold tabular-nums">
                月額 ¥19,800
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                〜（税別）
              </span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              更新代行・セキュリティ監視・月次改善レポート。
              他社で制作したサイトの保守も承ります。
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <div className="mt-14 text-center">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            「どのプランが合うか分からない」——その状態のままで大丈夫です。
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/#contact">
              無料相談で最適プランを聞く
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
