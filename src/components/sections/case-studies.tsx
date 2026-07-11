import { MoveRight } from "lucide-react";

import { caseStudies } from "@/lib/content";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";

export function CaseStudies() {
  return (
    <Section id="cases" tone="surface" labelledBy="cases-heading">
      <SectionHeading
        eyebrow="Case Study"
        headingId="cases-heading"
        title="成果は、こうして生まれました。"
        lead="業種も規模も違っても、やることは同じです。課題を言語化し、動線を設計し、数字で検証する。"
      />

      {/* ※事例はサンプル。ローンチ前に実案件へ差し替え（docs/05_delivery.md） */}
      <ul className="mt-16 grid gap-6 lg:grid-cols-3">
        {caseStudies.map((cs, i) => (
          <li key={cs.tag} className="h-full">
            <Reveal delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-7">
                <div
                  aria-hidden="true"
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <div className="flex gap-1.5">
                    <span className="size-2 rounded-full bg-border" />
                    <span className="size-2 rounded-full bg-border" />
                    <span className="size-2 rounded-full bg-border" />
                  </div>
                  <div className="mt-4 flex h-20 items-end gap-1.5">
                    {cs.bars.map((h, j) => (
                      <div
                        key={j}
                        style={{ height: `${h}%` }}
                        className={
                          j === cs.bars.length - 1
                            ? "w-full rounded-t-sm bg-accent"
                            : "w-full rounded-t-sm bg-accent/25"
                        }
                      />
                    ))}
                  </div>
                </div>

                <span className="mt-6 self-start rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {cs.tag}
                </span>
                <h3 className="mt-3 text-[17px] font-bold leading-relaxed">
                  {cs.title}
                </h3>

                <dl className="mt-4 flex-1 space-y-3 text-sm leading-relaxed">
                  <div className="flex gap-3">
                    <dt className="w-8 shrink-0 font-semibold">課題</dt>
                    <dd className="text-muted-foreground">{cs.problem}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-8 shrink-0 font-semibold">施策</dt>
                    <dd className="text-muted-foreground">{cs.action}</dd>
                  </div>
                </dl>

                <p className="mt-6 border-t border-border pt-5">
                  <span className="block text-[13px] text-muted-foreground">
                    {cs.result}
                  </span>
                  <span className="mt-1 flex items-center gap-2">
                    <span className="text-[15px] text-muted-foreground">
                      {cs.before}
                    </span>
                    <MoveRight
                      className="size-4 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <span className="text-2xl font-bold tabular-nums text-accent">
                      {cs.after}
                    </span>
                  </span>
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
