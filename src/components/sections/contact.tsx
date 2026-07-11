import { CheckCircle2 } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";

const reassurances = [
  "相談・お見積り・サイト診断は、すべて無料です",
  "オンライン対応・全国どこからでもご依頼いただけます",
  "しつこい営業・不要な追客は一切いたしません",
] as const;

export function Contact() {
  return (
    <Section id="contact" tone="surface" labelledBy="contact-heading">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            headingId="contact-heading"
            title="無料相談・お問い合わせ"
            lead="まずは現状のお悩みをお聞かせください。1営業日以内にご返信します。"
            align="left"
          />
          <Reveal delay={0.08}>
            <ul className="mt-10 space-y-4">
              {reassurances.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-muted-foreground">
              メールでのご連絡はこちら：
              <br />
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="rounded-2xl border border-border bg-background p-7 md:p-9">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
