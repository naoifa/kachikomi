import { CalendarX, Palette, TimerOff } from "lucide-react";

import { problems } from "@/lib/content";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";

const icons = [CalendarX, Palette, TimerOff];

export function Problem() {
  return (
    <Section tone="surface" labelledBy="problem-heading">
      <SectionHeading
        eyebrow="Problem"
        headingId="problem-heading"
        title="こんな「もったいないサイト」になっていませんか。"
        lead="サイトは、放置していても壊れません。ただ、機会だけが静かに失われていきます。"
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {problems.map((problem, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={problem.title} delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-8">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-relaxed">
                  {problem.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-loose text-muted-foreground">
                  {problem.body}
                </p>
                <p className="mt-6 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    放置コスト：
                  </span>
                  {problem.cost}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
