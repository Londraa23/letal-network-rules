import Image from "next/image";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { RuleIcon } from "@/components/icons";

export function StaffHero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-cream-border">
      <div className="absolute inset-0">
        <Image src="/hero-test.png" alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-cream/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-cream/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/40" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <TextEffect
              as="p"
              per="char"
              preset="fade"
              speedReveal={2.5}
              className="font-display text-sm font-bold uppercase tracking-widest text-acid"
            >
              Equipo oficial
            </TextEffect>

            <h1 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-7xl">
              <TextEffect as="span" per="word" preset="fade-in-blur" delay={0.1} className="block">
                Nuestro
              </TextEffect>
              <TextEffect as="span" per="word" preset="fade-in-blur" delay={0.25} className="block text-acid">
                Staff
              </TextEffect>
            </h1>

            <TextEffect
              as="p"
              per="line"
              preset="slide"
              delay={0.45}
              className="mt-5 max-w-xl text-[16px] font-semibold leading-relaxed text-ink-muted"
            >
              {"Las personas que mantienen Letal Network en marcha: desarrollo, moderación y soporte, todos los días."}
            </TextEffect>
          </div>

          <a
            href="/colaboraciones"
            className="flex flex-none items-center gap-2 rounded-2xl bg-acid px-6 py-3.5 font-display text-[15px] font-bold text-white shadow-[0_5px_0_0_theme(colors.acid.deep)] transition-all duration-200 ease-bouncy hover:-translate-y-0.5 hover:shadow-[0_7px_0_0_theme(colors.acid.deep)] active:translate-y-1 active:shadow-none"
          >
            Postularse
            <RuleIcon icon="arrow-right" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
