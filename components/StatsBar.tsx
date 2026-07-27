import { InView } from "@/components/motion-primitives/in-view";
import type { ServerStatus } from "@/lib/server-status";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function StatsBar({ status }: { status: ServerStatus }) {
  const statusLabel = status.online ? "En línea" : "En mantenimiento";
  const statusColor = status.online ? "bg-green" : "bg-acid";
  const statusTextColor = status.online ? "text-green" : "text-acid";

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
        <div className="flex flex-col items-center gap-1.5 px-2 text-center">
          <p className={`flex items-center gap-2 font-display text-xl font-extrabold md:text-2xl ${statusTextColor}`}>
            <span className="relative flex h-2.5 w-2.5">
              {status.online && (
                <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${statusColor} opacity-75`} />
              )}
              <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${statusColor}`} />
            </span>
            {statusLabel}
          </p>
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink-faint">
            Estado
          </p>
        </div>

        <div className="flex flex-col items-center gap-1 px-2 text-center">
          <p className="font-display text-2xl font-extrabold text-ink md:text-3xl">
            {status.players ? status.players.online : "—"}
          </p>
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink-faint">
            Jugadores
          </p>
        </div>

        <div className="flex flex-col items-center gap-1 px-2 text-center">
          <p className="font-display text-2xl font-extrabold text-ink md:text-3xl">3</p>
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink-faint">
            Modalidades
          </p>
        </div>
      </InView>
    </section>
  );
}
