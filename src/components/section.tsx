import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

type SectionProps = {
  id?: string;
  tone?: "default" | "surface" | "inverted";
  className?: string;
  labelledBy?: string;
  children: ReactNode;
};

export function Section({
  id,
  tone = "default",
  className,
  labelledBy,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "scroll-mt-20 py-24 md:py-36",
        tone === "surface" && "bg-surface",
        tone === "inverted" && "bg-foreground text-background",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  headingId: string;
  lead?: string;
  align?: "center" | "left";
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  headingId,
  lead,
  align = "center",
  inverted = false,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className={cn(align === "center" && "text-center")}>
        <p
          className={cn(
            "text-[13px] font-semibold uppercase tracking-[0.22em]",
            inverted ? "text-accent-inverted" : "text-accent"
          )}
        >
          {eyebrow}
        </p>
        <h2
          id={headingId}
          className="mt-4 text-[1.75rem] font-bold leading-[1.35] tracking-tight md:text-[2.5rem]"
        >
          {title}
        </h2>
        {lead && (
          <p
            className={cn(
              "mt-6 max-w-2xl text-base leading-loose md:text-[17px]",
              inverted ? "text-background/70" : "text-muted-foreground",
              align === "center" && "mx-auto"
            )}
          >
            {lead}
          </p>
        )}
      </div>
    </Reveal>
  );
}
