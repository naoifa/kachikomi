import Link from "next/link";
import {
  ArrowRight,
  Globe,
  MapPin,
  MousePointerClick,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { services } from "@/lib/content";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  "mouse-pointer-click": MousePointerClick,
  "shopping-cart": ShoppingCart,
  search: Search,
  "map-pin": MapPin,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
};

export function Features() {
  return (
    <Section id="services" tone="surface" labelledBy="services-heading">
      <SectionHeading
        eyebrow="Service"
        headingId="services-heading"
        title="事業フェーズに合わせて、必要なものを必要なだけ。"
        lead="単発の制作からマーケティング・AI活用まで。すべてのメニューが「事業の成果」につながっているのが、私たちのサービスです。"
      />

      <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Globe;
          return (
            <li key={service.title} className="h-full">
              <Reveal delay={(i % 4) * 0.06} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-7 transition-colors hover:border-muted-foreground/40">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-[17px] font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}

        <li className="h-full">
          <Reveal delay={0.18} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-accent/50 bg-accent/[0.04] p-7">
              <div>
                <h3 className="text-[17px] font-bold">
                  どれが必要か、分からなくても大丈夫。
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  課題の整理から一緒にやりましょう。それが戦略設計です。
                </p>
              </div>
              <Link
                href="/#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
              >
                無料相談してみる
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </li>
      </ul>
    </Section>
  );
}
