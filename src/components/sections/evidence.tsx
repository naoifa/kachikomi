import { Gauge, Accessibility, Timer } from "lucide-react";

import { stats } from "@/lib/content";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";

const standards = [
  {
    icon: Gauge,
    title: "Lighthouse 90+",
    body: "すべての制作物で計測し、90点以上を出荷基準にします。",
  },
  {
    icon: Timer,
    title: "表示1.5秒以内",
    body: "Core Web Vitalsを設計段階から組み込みます。",
  },
  {
    icon: Accessibility,
    title: "アクセシビリティ",
    body: "WCAGに準拠し、誰にでも届くサイトを作ります。",
  },
] as const;

export function Evidence() {
  return (
    <Section tone="inverted" labelledBy="evidence-heading">
      <SectionHeading
        eyebrow="Evidence"
        headingId="evidence-heading"
        title="品質は、基準で語ります。"
        lead="デザインの好みは分かれても、速度と設計の基準は誤魔化せません。このサイト自体が、私たちの品質基準で作られています。"
        inverted
      />

      <Reveal>
        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-12 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-3">
              <dd className="text-4xl font-bold tabular-nums tracking-tight md:text-5xl">
                {stat.value}
                <span className="ml-0.5 text-xl font-semibold md:text-2xl">
                  {stat.suffix}
                </span>
              </dd>
              <dt className="text-[13px] text-background/60">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Reveal>

      <div className="mt-20 grid gap-10 border-t border-background/15 pt-12 sm:grid-cols-3">
        {standards.map((standard, i) => (
          <Reveal key={standard.title} delay={i * 0.08}>
            <div>
              <standard.icon
                className="size-5 text-accent-inverted"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-base font-bold">{standard.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/60">
                {standard.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
