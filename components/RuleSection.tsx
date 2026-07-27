"use client";

import { InView } from "@/components/motion-primitives/in-view";
import { RuleIcon } from "@/components/icons";
import { categoryColors } from "@/lib/category-colors";
import type { RuleSectionData } from "@/data/rules";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_EXPO },
  },
};

function RuleList({
  intro,
  points,
  dotClass,
}: {
  intro?: string;
  points: string[];
  dotClass: string;
}) {
  return (
    <div className="mt-5">
      {intro && <p className="text-sm font-bold text-ink-muted">{intro}</p>}
      <InView
        as="ul"
        once
        variants={{ hidden: listVariants.hidden, visible: listVariants.visible }}
        viewOptions={{ once: true, amount: 0.2 }}
        className="mt-3 space-y-2.5"
      >
        {points.map((point) => (
          <InView
            key={point}
            as="li"
            once
            variants={itemVariants}
            viewOptions={{ once: true }}
            className="flex gap-3 text-[16px] font-medium leading-relaxed text-ink/90"
          >
            <span className={`mt-[9px] h-1.5 w-1.5 flex-none rounded-full ${dotClass}`} aria-hidden />
            <span>{point}</span>
          </InView>
        ))}
      </InView>
    </div>
  );
}

export function RuleSection({ rule }: { rule: RuleSectionData }) {
  const c = categoryColors[rule.color];

  return (
    <section id={rule.slug} className="scroll-mt-28 py-5">
      <InView
        once
        viewOptions={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_EXPO } },
        }}
        className={`rounded-3xl border-2 border-cream-border bg-cream-surface p-6 shadow-[0_4px_0_0_theme(colors.cream.border)] transition-colors duration-300 ease-expo md:p-8 ${c.borderHover}`}
      >
        <div className="flex items-center gap-4">
          <span className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl ${c.tint}`}>
            <RuleIcon icon={rule.icon} className={`h-6 w-6 ${c.text}`} />
          </span>
          <div>
            <span className={`font-mono text-xs font-bold ${c.text}`}>{rule.number}</span>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-[28px]">
              {rule.title}
            </h2>
          </div>
        </div>

        {rule.intro && (
          <p className="mt-5 max-w-2xl text-[16px] font-semibold leading-relaxed text-ink-muted">
            {rule.intro}
          </p>
        )}

        {rule.groups.map((group, gi) => (
          <RuleList key={gi} intro={group.intro} points={group.points} dotClass={c.bg} />
        ))}

        {rule.columns && (
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-green bg-green-tint p-5">
              <p className="font-display text-xs font-extrabold uppercase tracking-widest text-green-deep">
                {rule.columns.allowedTitle}
              </p>
              <ul className="mt-4 space-y-2.5">
                {rule.columns.allowed.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] font-medium leading-relaxed text-ink/90">
                    <RuleIcon icon="shield-check" className="mt-0.5 h-4 w-4 flex-none text-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-acid bg-acid-tint p-5">
              <p className="font-display text-xs font-extrabold uppercase tracking-widest text-acid-deep">
                {rule.columns.forbiddenTitle}
              </p>
              <ul className="mt-4 space-y-2.5">
                {rule.columns.forbidden.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] font-medium leading-relaxed text-ink/90">
                    <RuleIcon icon="alert" className="mt-0.5 h-4 w-4 flex-none text-acid" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {rule.outro && (
          <div className={`mt-7 flex gap-3 rounded-2xl ${c.tint} p-4`}>
            <RuleIcon icon="sparkle" className={`mt-0.5 h-4 w-4 flex-none ${c.text}`} />
            <p className="text-[15px] font-semibold leading-relaxed text-ink/90">{rule.outro}</p>
          </div>
        )}
      </InView>
    </section>
  );
}
