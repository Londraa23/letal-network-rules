import Image from "next/image";
import { staffGroups } from "@/data/staff";
import { InView } from "@/components/motion-primitives/in-view";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function StaffTeam() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-20">
      <div className="space-y-12">
        {staffGroups.map((group) => (
          <div key={group.rank}>
            <div className="flex items-center gap-2.5">
              <span
                className="h-2.5 w-2.5 flex-none rounded-full"
                style={{ backgroundColor: group.color }}
                aria-hidden
              />
              <h2 className="font-display text-lg font-extrabold uppercase tracking-wide text-ink">
                {group.rank}
              </h2>
              <span className="font-mono text-xs font-bold text-ink-faint">
                {group.members.length}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-3.5">
              {group.members.map((member, i) => (
                <InView
                  key={member}
                  once
                  viewOptions={{ once: true, amount: 0.4 }}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: EASE_EXPO, delay: 0.05 * i },
                    },
                  }}
                  className="group flex w-[140px] flex-none flex-col items-center gap-2 rounded-3xl border-2 bg-cream-surface px-4 pb-4 pt-5 text-center shadow-[0_4px_0_0_theme(colors.cream.border)] transition-all duration-300 ease-bouncy hover:-translate-y-1"
                  style={{ borderColor: group.color }}
                >
                  <p className="font-display text-[13px] font-bold" style={{ color: group.color }}>
                    {member}
                  </p>
                  <div
                    className="relative mx-auto h-32 w-14 flex-none transition-transform duration-300 ease-bouncy group-hover:scale-105"
                    style={{ imageRendering: "pixelated" }}
                  >
                    <Image
                      src={`https://mc-heads.net/body/${member}/100`}
                      alt={member}
                      fill
                      className="object-contain object-top"
                      sizes="56px"
                      unoptimized
                    />
                  </div>
                </InView>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
