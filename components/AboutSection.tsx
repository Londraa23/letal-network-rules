import Link from "next/link";
import { RuleIcon } from "@/components/icons";
import { InView } from "@/components/motion-primitives/in-view";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function AboutSection() {
  return (
    <section className="border-y-2 border-cream-border bg-cream-soft">
      <InView
        once
        viewOptions={{ once: true, amount: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_EXPO } },
        }}
        className="mx-auto max-w-[720px] px-5 py-20 text-center md:px-8 md:py-28"
      >
        <p className="font-display text-sm font-bold uppercase tracking-widest text-acid">
          Sobre nosotros
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
          ¿Qué es Letal Network?
        </h2>
        <p className="mt-5 text-[16px] font-medium leading-relaxed text-ink-muted">
          Somos una comunidad de Minecraft en español con varias modalidades de juego, eventos
          frecuentes y una normativa clara que garantiza una experiencia justa para todos. Ya
          seas nuevo en el servidor o lleves años con nosotros, siempre hay algo nuevo que
          construir.
        </p>
        <Link
          href="/reglas"
          className="group mt-7 inline-flex items-center gap-2 rounded-2xl border-2 border-cream-border bg-cream-surface px-6 py-3 font-display text-[15px] font-bold text-ink transition-all duration-200 ease-bouncy hover:-translate-y-0.5 hover:border-acid"
        >
          Conoce las reglas
          <RuleIcon
            icon="arrow-right"
            className="h-4 w-4 transition-transform duration-200 ease-bouncy group-hover:translate-x-1"
          />
        </Link>
      </InView>
    </section>
  );
}
