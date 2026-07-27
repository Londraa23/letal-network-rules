import { RuleIcon, type IconKey } from "@/components/icons";
import { InView } from "@/components/motion-primitives/in-view";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const reasons: { icon: IconKey; title: string; body: string }[] = [
  {
    icon: "shield-check",
    title: "Staff activo",
    body: "Un equipo presente que aplica las normas de forma justa y mantiene el servidor en orden.",
  },
  {
    icon: "trophy",
    title: "Eventos frecuentes",
    body: "Sorteos, torneos y actividades especiales para que siempre haya algo nuevo por hacer.",
  },
  {
    icon: "users",
    title: "Comunidad activa",
    body: "Jugadores conectados todos los días, en el servidor y en el Discord.",
  },
];

export function WhyLetal() {
  return (
    <section className="mx-auto max-w-[1000px] px-5 py-20 text-center md:px-8 md:py-28">
      <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
        ¿Por qué jugar con nosotros?
      </h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {reasons.map((reason, i) => (
          <InView
            key={reason.title}
            once
            viewOptions={{ once: true, amount: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: EASE_EXPO, delay: 0.1 * i },
              },
            }}
            className="rounded-3xl border-2 border-cream-border bg-cream-surface p-6"
          >
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-acid-tint">
              <RuleIcon icon={reason.icon} className="h-5 w-5 text-acid" />
            </span>
            <p className="mt-4 font-display text-lg font-extrabold text-ink">{reason.title}</p>
            <p className="mt-1.5 text-[14px] font-medium leading-relaxed text-ink-muted">
              {reason.body}
            </p>
          </InView>
        ))}
      </div>
    </section>
  );
}
