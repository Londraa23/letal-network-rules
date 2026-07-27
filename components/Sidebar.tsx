"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { rules } from "@/data/rules";
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";
import {
  Disclosure,
  DisclosureTrigger,
  DisclosureContent,
} from "@/components/motion-primitives/disclosure";
import { RuleIcon } from "@/components/icons";
import { categoryColors } from "@/lib/category-colors";

const ids = rules.map((r) => r.slug);
const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

function DesktopIndex({
  activeId,
  onNavigate,
}: {
  activeId: string;
  onNavigate: (slug: string) => void;
}) {
  const activeRule = rules.find((r) => r.slug === activeId);
  const activeTint = activeRule ? categoryColors[activeRule.color].tint : "bg-cream-soft";

  return (
    <AnimatedBackground
      defaultValue={activeId}
      onValueChange={(id) => {
        if (id) onNavigate(id);
      }}
      className={`rounded-2xl ${activeTint}`}
      transition={{ duration: 0.3, ease: EASE_EXPO }}
    >
      {rules.map((rule) => {
        const isActive = rule.slug === activeId;
        const c = categoryColors[rule.color];
        return (
          <a
            key={rule.slug}
            data-id={rule.slug}
            href={`#${rule.slug}`}
            className="group block rounded-2xl px-3 py-2 text-[14px] transition-all duration-200 ease-bouncy hover:translate-x-1"
          >
            <span className="flex items-center gap-2.5">
              <RuleIcon
                icon={rule.icon}
                className={`h-4 w-4 flex-none group-hover:animate-wiggle ${isActive ? c.text : "text-ink-faint"}`}
              />
              <span className={`font-mono text-[11px] font-bold ${isActive ? c.text : "text-ink-faint"}`}>
                {rule.number}
              </span>
              <span className={`font-semibold leading-snug ${isActive ? "text-ink" : "text-ink-muted"}`}>
                {rule.title}
              </span>
            </span>
          </a>
        );
      })}
    </AnimatedBackground>
  );
}

function MobileIndex({
  activeId,
  onNavigate,
}: {
  activeId: string;
  onNavigate: (slug: string) => void;
}) {
  return (
    <ol className="space-y-1">
      {rules.map((rule) => {
        const isActive = rule.slug === activeId;
        const c = categoryColors[rule.color];
        return (
          <li key={rule.slug}>
            <a
              href={`#${rule.slug}`}
              onClick={() => onNavigate(rule.slug)}
              className={`group flex items-center gap-2.5 rounded-2xl px-3 py-2 text-[14px] transition-all duration-200 ease-bouncy hover:translate-x-1 ${
                isActive ? c.tint : ""
              }`}
            >
              <RuleIcon
                icon={rule.icon}
                className={`h-4 w-4 flex-none ${isActive ? c.text : "text-ink-faint"}`}
              />
              <span className={`font-mono text-[11px] font-bold ${isActive ? c.text : "text-ink-faint"}`}>
                {rule.number}
              </span>
              <span className={`font-semibold leading-snug ${isActive ? "text-ink" : "text-ink-muted"}`}>
                {rule.title}
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export function Sidebar() {
  const scrollActiveId = useScrollSpy(ids);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const pinTimeout = useRef<ReturnType<typeof setTimeout>>();

  const activeId = pinnedId ?? scrollActiveId;
  const activeRule = rules.find((r) => r.slug === activeId);
  const activeColor = activeRule ? categoryColors[activeRule.color] : null;

  function handleNavigate(slug: string) {
    setPinnedId(slug);
    if (pinTimeout.current) clearTimeout(pinTimeout.current);
    pinTimeout.current = setTimeout(() => setPinnedId(null), 700);
  }

  useEffect(() => {
    return () => {
      if (pinTimeout.current) clearTimeout(pinTimeout.current);
    };
  }, []);

  return (
    <>
      {/* Desktop sticky sidebar */}
      <nav
        aria-label="Índice de reglas"
        className="sticky top-24 hidden max-h-[calc(100vh-7rem)] w-[270px] flex-none overflow-y-auto rounded-3xl border-2 border-cream-border bg-cream-surface p-3 shadow-[0_4px_0_0_theme(colors.cream.border)] md:block"
      >
        <p className="mb-2 px-3 pt-1 font-display text-xs font-extrabold uppercase tracking-widest text-ink-faint">
          Índice
        </p>
        <DesktopIndex activeId={activeId} onNavigate={handleNavigate} />
      </nav>

      {/* Mobile collapsible drawer */}
      <Disclosure
        open={open}
        onOpenChange={setOpen}
        transition={{ duration: 0.3, ease: EASE_EXPO }}
        className="sticky top-[72px] z-30 -mx-5 mb-6 border-b-2 border-cream-border bg-cream/95 px-5 backdrop-blur-sm md:hidden"
      >
        <DisclosureTrigger>
          <button
            type="button"
            className="flex w-full items-center justify-between py-3.5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acid"
          >
            <span className="flex items-center gap-3">
              {activeRule && (
                <RuleIcon
                  icon={activeRule.icon}
                  className={`h-4 w-4 flex-none ${activeColor?.text ?? "text-acid"}`}
                />
              )}
              <span className={`font-mono text-xs font-bold ${activeColor?.text ?? "text-acid"}`}>
                {activeRule?.number}
              </span>
              <span className="font-display text-[15px] font-bold text-ink">
                {activeRule?.title ?? "Índice"}
              </span>
            </span>
            <RuleIcon
              icon="arrow-right"
              className={`h-4 w-4 text-acid transition-transform duration-300 ease-bouncy ${open ? "-rotate-90" : "rotate-90"}`}
            />
          </button>
        </DisclosureTrigger>

        <DisclosureContent>
          <div className="max-h-[65vh] overflow-y-auto pb-4">
            <MobileIndex
              activeId={activeId}
              onNavigate={(slug) => {
                handleNavigate(slug);
                setOpen(false);
              }}
            />
          </div>
        </DisclosureContent>
      </Disclosure>
    </>
  );
}
