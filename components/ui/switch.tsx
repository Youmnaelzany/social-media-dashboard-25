"use client";

import * as React from "react";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // avoid SSR hydration mismatch
    return (
      <div
        className={cn(
          "bg-muted inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full opacity-60"
        )}
      />
    );
  }

  const isDark = theme === "dark";

  const lightRoot = "bg-[#AEB3CB]";
  const lightThumb = "bg-[#F1F3FA]";
  const darkRoot =
    "bg-gradient-to-r from-[#388FE7] to-[#40DB82] border border-transparent";
  const darkThumb = "bg-[#252B42]";

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer focus-visible:ring-ring/50 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        isDark ? darkRoot : lightRoot,
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
          isDark ? darkThumb : lightThumb
        )}
      />
    </SwitchPrimitive.Root>
  );
}
