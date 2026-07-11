import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full rounded-lg border border-border bg-background px-4 text-[15px] text-foreground shadow-none transition-colors placeholder:text-muted-foreground/70 hover:border-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-red-500",
        className
      )}
      {...props}
    />
  );
}

export { Input };
