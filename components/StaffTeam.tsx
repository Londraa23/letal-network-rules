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

            <div className="mt-4 grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
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
                  className="group flex flex-col items-center gap-3 rounded-3xl border-2 bg-cream-surface p-5 text-center shadow-[0_4px_0_0_theme(colors.cream.border)] transition-all duration-300 ease-bouncy hover:-translate-y-1"
                  style={{ borderColor: group.color }}
                >
                  <div
                    className="relative h-16 w-16 overflow-hidden rounded-2xl transition-transform duration-300 ease-bouncy group-hover:scale-105"
                    style={{ imageRendering: "pixelated" }}
                  >
                    <Image
                      src={`https://mc-heads.net/avatar/${member}/96`}
                      alt={member}
                      fill
                      className="object-cover"
                      sizes="64px"
                      unoptimized
                    />
                  </div>
                  <p className="font-display text-[13px] font-bold text-ink">{member}</p>
                </InView>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
