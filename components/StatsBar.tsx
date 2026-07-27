import { InView } from "@/components/motion-primitives/in-view";
import type { ServerStatus } from "@/lib/server-status";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function StatsBar({ status }: { status: ServerStatus }) {
  const stats = [
    {
      label: "Estado",
      value: status.online ? "En línea" : "Comunidad activa",
      valueClass: status.online ? "text-green" : "text-ink",
    },
    {
      label: "Jugadores",
      value: status.players ? `${status.players.online}` : "—",
      valueClass: "text-ink",
    },
    {
      label: "Modalidades",
      value: "3",
      valueClass: "text-ink",
    },
  ];

  return (
    <section className="mx-auto -mt-8 max-w-[1000px] px-5 md:px-8">
      <InView
        once
        viewOptions={{ once: true, amount: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_EXPO } },
        }}
        className="relative z-10 grid grid-cols-3 divide-x-2 divide-cream-border rounded-3xl border-2 border-cream-border bg-cream-surface py-6 shadow-[0_6px_0_0_theme(colors.cream.border)]"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 px-2 text-center">
            <p className={`font-display text-2xl font-extrabold md:text-3xl ${stat.valueClass}`}>
              {stat.value}
            </p>
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink-faint">
              {stat.label}
            </p>
          </div>
        ))}
      </InView>
    </section>
  );
}
