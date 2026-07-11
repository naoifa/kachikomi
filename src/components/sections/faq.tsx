import { faqs } from "@/lib/content";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-heading">
      <SectionHeading
        eyebrow="FAQ"
        headingId="faq-heading"
        title="よくあるご質問"
        lead="ここにない疑問は、無料相談でそのままぶつけてください。"
      />

      <Reveal>
        <Accordion
          type="single"
          collapsible
          className="mx-auto mt-12 max-w-3xl"
        >
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`faq-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
