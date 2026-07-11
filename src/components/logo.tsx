import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="flex size-8 items-center justify-center rounded-[10px] bg-accent"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-4.5 fill-accent-foreground"
          aria-hidden="true"
        >
          <path d="M12 2c.9 5.2 3.9 8.1 9 9-5.1.9-8.1 3.8-9 9-.9-5.2-3.9-8.1-9-9 5.1-.9 8.1-3.8 9-9z" />
        </svg>
      </span>
      <span className="text-[17px] font-bold tracking-tight">
        AI Web Studio
      </span>
    </span>
  );
}
