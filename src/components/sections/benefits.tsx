import { BadgeCheck, Check, X } from "lucide-react";

import { afterItems, beforeItems } from "@/lib/content";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";

export function Benefits() {
  return (
    <Section labelledBy="benefit-heading">
      <SectionHeading
        eyebrow="Benefit"
        headingId="benefit-heading"
        title="「名刺代わりのサイト」から、「24時間働く営業担当」へ。"
        lead="私たちが納品するのは置き物ではなく、事業の資産です。導入後、サイトはこう変わります。"
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <Reveal className="h-full">
          <div className="h-full rounded-2xl border border-border bg-surface p-8 md:p-10">
            <p className="text-sm font-semibold text-muted-foreground">
              Before：よくあるサイト
            </p>
            <ul className="mt-7 space-y-5">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X
                    className="mt-1 size-4 shrink-0 text-muted-foreground/70"
                    aria-hidden="true"
                  />
                  <span className="text-[15px] leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="h-full">
          <div className="h-full rounded-2xl border-2 border-accent bg-background p-8 md:p-10">
            <p className="text-sm font-semibold text-accent">
              After：AI Web Studioのサイト
            </p>
            <ul className="mt-7 space-y-5">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="mt-1 size-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-[15px] font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <p className="mt-10 flex items-start gap-4 rounded-2xl border border-border p-6 text-[15px] leading-loose md:p-8">
          <BadgeCheck
            className="mt-1 size-5 shrink-0 text-accent"
            aria-hidden="true"
          />
          <span>
            <span className="font-bold">私たちの約束。</span>
            全プランに「公開後30日の初期改善サポート」を含みます。
            公開して終わりではなく、最初の数字の動きを一緒に見届けてから、
            サイトをお引き渡しします。
          </span>
        </p>
      </Reveal>
    </Section>
  );
}
