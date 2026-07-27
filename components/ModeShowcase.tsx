import Image from "next/image";
import Link from "next/link";
import { RuleIcon, type IconKey } from "@/components/icons";
import { categoryColors } from "@/lib/category-colors";
import type { CategoryColor } from "@/data/rules";
import { InView } from "@/components/motion-primitives/in-view";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const modes: {
  name: string;
  icon: IconKey;
  color: CategoryColor;
  image: string;
  tag: string;
  body: string;
}[] = [
  {
    name: "Survival Aqua",
    icon: "shield-check",
    color: "blue",
    image: "/survival.png",
    tag: "Survival",
    body: "El survival clásico de Letal Network: sobrevive, explora y construye junto a la comunidad.",
  },
  {
    name: "Gens OP",
    icon: "gem",
    color: "green",
    image: "/gens.png",
    tag: "Economía",
    body: "Mejora tus generadores, produce recursos sin parar y domina la economía del servidor.",
  },
  {
    name: "FullPvP",
    icon: "swords",
    color: "acid",
    image: "/fullpvp.png",
    tag: "PvP",
    body: "Combate sin límites: equípate, arriesga tu inventario y demuestra quién manda en el campo de batalla.",
  },
];

export function ModeShowcase() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 md:py-28">
      <p className="font-display text-sm font-bold uppercase tracking-widest text-acid">
        Elige tu rumbo
      </p>
      <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-ink md:text-5xl">
        Modalidades disponibles
      </h2>
      <p className="mt-3 max-w-lg text-[16px] font-semibold text-ink-muted">
        Escoge tu favorita y comienza a construir tu historia.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modes.map((mode, i) => {
          const c = categoryColors[mode.color];
          return (
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
              className={`group relative h-[420px] overflow-hidden rounded-3xl border-2 border-cream-border shadow-[0_5px_0_0_theme(colors.cream.border)] transition-all duration-300 ease-bouncy hover:-translate-y-1.5 hover:rotate-1 ${c.borderHover}`}
            >
              <Image
                src={mode.image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 ease-expo group-hover:scale-110"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cream-surface via-cream-surface/70 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${c.tint} shadow-[0_3px_0_0_rgba(0,0,0,0.25)] transition-transform duration-300 ease-bouncy group-hover:animate-wiggle`}
                >
                  <RuleIcon icon={mode.icon} className={`h-5 w-5 ${c.text}`} />
                </span>
                <p className="mt-3 font-display text-xl font-extrabold text-ink">{mode.name}</p>
                <p className="mt-1.5 text-[14px] font-medium leading-relaxed text-ink-muted">
                  {mode.body}
                </p>

                <span
                  className={`mt-3 inline-flex rounded-full ${c.tint} px-3 py-1 font-mono text-[11px] font-bold ${c.text}`}
                >
                  {mode.tag}
                </span>

                <Link
                  href="/modalidades"
                  className="mt-4 flex items-center gap-1.5 font-display text-[13px] font-extrabold uppercase tracking-wide text-acid transition-transform duration-200 ease-bouncy hover:translate-x-1"
                >
                  Ver modalidad
                  <RuleIcon icon="arrow-right" className="h-3.5 w-3.5" />
                </Link>
              </div>
            </InView>
          );
        })}
      </div>
    </section>
  );
}
