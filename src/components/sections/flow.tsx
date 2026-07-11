import { flowSteps } from "@/lib/content";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";

export function Flow() {
  return (
    <Section id="flow" labelledBy="flow-heading">
      <SectionHeading
        eyebrow="Flow"
        headingId="flow-heading"
        title="公開まで、最短5ステップ。"
        lead="進行はすべて見える化します。いま何が起きていて、次に何をするのか——迷子になる瞬間をつくりません。"
      />

      <div className="relative mx-auto mt-16 max-w-3xl">
        <span
          aria-hidden="true"
          className="absolute bottom-7 left-7 top-7 w-px bg-border"
        />
        <ol>
        {flowSteps.map((step, i) => (
          <li key={step.step} className="relative flex gap-6 pb-12 last:pb-0 md:gap-8">
            <Reveal delay={i * 0.06} className="shrink-0">
              <span className="relative z-10 flex size-14 items-center justify-center rounded-full border border-border bg-background text-sm font-bold tabular-nums text-accent">
                {step.step}
              </span>
            </Reveal>
            <Reveal delay={i * 0.06 + 0.04} className="pt-1.5">
              <div>
                <h3 className="flex flex-wrap items-center gap-3 text-lg font-bold">
                  {step.title}
                  <span className="rounded-full border border-border bg-surface px-3 py-0.5 text-xs font-medium text-muted-foreground">
                    {step.duration}
                  </span>
                </h3>
                <p className="mt-2 max-w-xl text-[15px] leading-loose text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
        </ol>
      </div>
    </Section>
  );
}
