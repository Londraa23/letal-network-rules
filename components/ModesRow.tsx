import Image from "next/image";
import { RuleIcon, type IconKey } from "@/components/icons";
import { InView } from "@/components/motion-primitives/in-view";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const modes: { name: string; icon: IconKey; image: string; body: string }[] = [
  {
    name: "Survival Aqua",
    icon: "shield-check",
    image: "/survival.png",
    body: "El survival clásico de Letal Network: sobrevive, explora y construye.",
  },
  {
    name: "Gens OP",
    icon: "gem",
    image: "/gens.png",
    body: "Mejora tus generadores y domina la economía del servidor.",
  },
  {
    name: "FullPvP",
    icon: "swords",
    image: "/fullpvp.png",
    body: "Combate sin límites, arriesga tu inventario y demuestra quién manda.",
  },
];

export function ModesRow() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 md:py-28">
      <div className="text-center">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-acid">
          Modalidades
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
          Elige tu rumbo
        </h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {modes.map((mode, i) => (
          <InView
            key={mode.name}
            once
            viewOptions={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: EASE_EXPO, delay: 0.1 * i },
              },
            }}
            className="group overflow-hidden rounded-3xl border-2 border-cream-border bg-cream-surface"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={mode.image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 ease-expo group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cream-surface via-transparent to-transparent" />
            </div>
            <div className="p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-acid-tint">
                <RuleIcon icon={mode.icon} className="h-4 w-4 text-acid" />
              </span>
              <p className="mt-3 font-display text-lg font-extrabold text-ink">{mode.name}</p>
              <p className="mt-1.5 text-[14px] font-medium leading-relaxed text-ink-muted">
                {mode.body}
              </p>
            </div>
          </InView>
        ))}
      </div>
    </section>
  );
}
