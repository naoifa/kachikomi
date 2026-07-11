import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full rounded-lg border border-border bg-background px-4 py-3 text-[15px] leading-relaxed text-foreground shadow-none transition-colors placeholder:text-muted-foreground/70 hover:border-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-red-500",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
