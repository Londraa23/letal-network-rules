import { TextEffect } from "@/components/motion-primitives/text-effect";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-cream-border bg-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,theme(colors.acid.tint)_0%,transparent_60%)]" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-5 pb-16 pt-32 text-center md:px-8 md:pb-20 md:pt-40">
        <TextEffect
          as="p"
          per="char"
          preset="fade"
          speedReveal={2.5}
          className="font-display text-sm font-bold uppercase tracking-widest text-acid"
        >
          Servidor de Minecraft en español
        </TextEffect>

        <h1 className="mt-4 font-display text-6xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-8xl">
          <TextEffect as="span" per="word" preset="fade-in-blur" delay={0.1}>
            Letal Network
          </TextEffect>
        </h1>

        <TextEffect
          as="p"
          per="line"
          preset="slide"
          delay={0.35}
          className="mt-5 max-w-lg text-[17px] font-semibold leading-relaxed text-ink-muted"
        >
          {"Java y Bedrock. Survival, eventos frecuentes y una comunidad que siempre tiene algo nuevo por construir."}
        </TextEffect>
      </div>
    </section>
  );
}
