import Image from "next/image";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { InView } from "@/components/motion-primitives/in-view";
import { RuleIcon, type IconKey } from "@/components/icons";
import { categoryColors } from "@/lib/category-colors";
import type { CategoryColor } from "@/data/rules";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const cards: { icon: IconKey; color: CategoryColor; title: string; body: string }[] = [
  {
    icon: "scale",
    color: "blue",
    title: "Aplicación general",
    body: "Todos los jugadores conectados a play.letal.net deben cumplir esta normativa, sin excepción.",
  },
  {
    icon: "gavel",
    color: "amber",
    title: "Sanciones",
    body: "Toda sanción se fundamenta en estas normas o en conductas que representen un abuso evidente.",
  },
  {
    icon: "appeal",
    color: "green",
    title: "Apelaciones",
    body: "Las decisiones del staff podrán ser apeladas mediante los canales oficiales, siempre con respeto.",
  },
];

export function RulesHero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-cream-border">
      <div className="absolute inset-0">
        <Image
          src="/hero-test.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cream/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-cream/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/40" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40">
        <TextEffect
          as="p"
          per="char"
          preset="fade"
          speedReveal={2.5}
          className="font-display text-sm font-bold uppercase tracking-widest text-acid"
        >
          Normativa oficial
        </TextEffect>

        <h1 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-7xl">
          <TextEffect as="span" per="word" preset="fade-in-blur" delay={0.1} className="block">
            Reglas del
          </TextEffect>
          <TextEffect as="span" per="word" preset="fade-in-blur" delay={0.25} className="block text-acid">
            Servidor
          </TextEffect>
        </h1>

        <TextEffect
          as="p"
          per="line"
          preset="slide"
          delay={0.45}
          className="mt-5 max-w-xl text-[16px] font-semibold leading-relaxed text-ink-muted"
        >
          {"Este documento reúne las normas que rigen la convivencia y el juego dentro de Letal Network. Su cumplimiento es obligatorio para todos los jugadores conectados a play.letal.net."}
        </TextEffect>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 md:mt-14">
          {cards.map((card, i) => {
            const c = categoryColors[card.color];
            return (
              <InView
                key={card.title}
                once
                viewOptions={{ once: true, amount: 0.4 }}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: EASE_EXPO, delay: 0.1 * i },
                  },
                }}
                className="group rounded-3xl border-2 border-cream-border bg-cream-surface/90 p-5 shadow-[0_4px_0_0_theme(colors.cream.border)] backdrop-blur-sm transition-all duration-300 ease-bouncy hover:-translate-y-1"
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.tint} group-hover:animate-wiggle`}
                >
                  <RuleIcon icon={card.icon} className={`h-5 w-5 ${c.text}`} />
                </span>
                <p className="mt-3 font-display text-[16px] font-extrabold text-ink">{card.title}</p>
                <p className="mt-1.5 text-[13px] font-medium leading-relaxed text-ink-muted">
                  {card.body}
                </p>
              </InView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
