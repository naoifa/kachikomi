import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { pillars } from "@/lib/content";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function Solution() {
  return (
    <Section id="solution" labelledBy="solution-heading">
      <SectionHeading
        eyebrow="Solution"
        headingId="solution-heading"
        title="答えはシンプル。「成果から逆算」してつくる。"
        lead="私たちは色やレイアウトの話から始めません。誰に・何を・どう届ければ事業が伸びるのか——戦略の設計から始めるのが、AI Web Studioの制作です。"
      />

      <div className="mt-16 space-y-6">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.number} delay={i * 0.06}>
            <article className="rounded-2xl border border-border p-8 transition-colors hover:border-muted-foreground/40 md:grid md:grid-cols-[72px_1fr] md:p-10">
              <p
                aria-hidden="true"
                className="text-sm font-semibold tabular-nums text-accent"
              >
                {pillar.number}
              </p>
              <div className="mt-3 md:mt-0">
                <h3 className="text-xl font-bold tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-3 max-w-3xl text-[15px] leading-loose text-muted-foreground">
                  {pillar.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {pillar.deliverables.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <aside
          aria-label="無料相談の案内"
          className="mt-16 flex flex-col items-start justify-between gap-8 rounded-3xl bg-foreground p-10 text-background md:flex-row md:items-center md:p-14"
        >
          <div>
            <p className="text-xl font-bold leading-relaxed md:text-2xl">
              まずは、現状の課題を30分で言語化しませんか。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-background/70">
              無料相談でも、サイト診断だけでも構いません。話して終わりでも大丈夫です。
            </p>
          </div>
          <Button asChild size="lg" variant="inverted" className="shrink-0">
            <Link href="/#contact">
              無料相談する
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </aside>
      </Reveal>
    </Section>
  );
}
