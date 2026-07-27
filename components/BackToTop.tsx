"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { RuleIcon } from "@/components/icons";

export function BackToTop() {
  const y = useScrollPosition();
  const visible = y > 600;

  return (
    <a
      href="#top"
      aria-label="Volver arriba"
      className={`fixed bottom-6 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full border-2 border-cream-border bg-cream-surface text-acid shadow-[0_4px_0_0_theme(colors.cream.border)] transition-all duration-200 ease-bouncy hover:-translate-y-1 hover:border-acid hover:shadow-[0_4px_0_0_theme(colors.acid.deep)] active:translate-y-0.5 active:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acid md:bottom-8 md:right-8 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <RuleIcon icon="arrow-right" className="h-5 w-5 -rotate-90" />
    </a>
  );
}
