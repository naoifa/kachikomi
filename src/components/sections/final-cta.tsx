import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="pb-24 md:pb-36">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-center text-background md:p-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full bg-accent/25 blur-[100px]"
            />
            <h2
              id="final-cta-heading"
              className="relative text-[1.75rem] font-bold leading-[1.4] tracking-tight md:text-[2.5rem]"
            >
              次に問い合わせが来るのは、
              <br className="sm:hidden" />
              あなたのサイトです。
            </h2>
            <p className="relative mx-auto mt-6 max-w-xl text-[15px] leading-loose text-background/70 md:text-base">
              無料相談は30分・オンライン。売り込みは一切しません。
              現状サイトの診断結果だけ持ち帰っていただいても、私たちは構いません。
            </p>
            <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/#contact">
                  無料相談する
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="inverted">
                <Link href="/#contact">無料サイト診断を受ける</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
