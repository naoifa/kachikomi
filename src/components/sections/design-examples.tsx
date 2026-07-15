import { designExamples } from "@/lib/content";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";

export function DesignExamples() {
  return (
    <Section id="examples" tone="surface" labelledBy="examples-heading">
      <SectionHeading
        eyebrow="Design Example"
        headingId="examples-heading"
        title="業種によって、こんな見せ方をします。"
        lead="以下は実在する制作実績ではなく、業種ごとの対応イメージを示すデザインサンプルです。実際の制作は、ヒアリングした内容にもとづいて設計します。"
      />

      <ul className="mt-16 grid gap-6 lg:grid-cols-3">
        {designExamples.map((example, i) => (
          <li key={example.tag} className="h-full">
            <Reveal delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-7">
                <div
                  aria-hidden="true"
                  className="overflow-hidden rounded-xl border border-border bg-surface"
                >
                  <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                    <span className="size-2 rounded-full bg-border" />
                    <span className="size-2 rounded-full bg-border" />
                    <span className="size-2 rounded-full bg-border" />
                  </div>
                  <div className="space-y-2.5 p-4">
                    <div
                      className="h-2 w-2/5 rounded-full"
                      style={{ backgroundColor: example.accent }}
                    />
                    <div className="h-3 w-4/5 rounded-full bg-foreground/15" />
                    <div className="h-3 w-3/5 rounded-full bg-foreground/15" />
                    <div className="mt-3 flex gap-2">
                      <div
                        className="h-6 w-20 rounded-full"
                        style={{ backgroundColor: example.accent }}
                      />
                      <div className="h-6 w-20 rounded-full border border-border" />
                    </div>
                  </div>
                </div>

                <span className="mt-6 self-start rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {example.tag}
                </span>
                <h3 className="mt-3 text-[17px] font-bold leading-relaxed">
                  {example.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {example.focus}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        ※ 上記は業種イメージを示すデザインサンプルであり、実在する制作事例ではありません。
      </p>
    </Section>
  );
}
