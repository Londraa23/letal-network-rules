import Image from "next/image";
import Link from "next/link";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { InView } from "@/components/motion-primitives/in-view";
import { RuleIcon } from "@/components/icons";
import { LiveStatusBar } from "@/components/LiveStatusBar";
import type { ServerStatus } from "@/lib/server-status";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero({ status }: { status: ServerStatus }) {
  return (
    <section className="relative overflow-hidden border-b-2 border-cream-border">
      <div className="absolute inset-0">
        <Image src="/hero.png" alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-cream/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,theme(colors.cream.DEFAULT)_92%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/50" />
      </div>

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-5 py-32 text-center md:px-8 md:py-40">
        <InView
          once
          viewOptions={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: -8 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_EXPO } },
          }}
        >
          <LiveStatusBar status={status} />
        </InView>

        <h1 className="mt-6 font-display text-6xl font-extrabold uppercase leading-[0.95] tracking-tight text-acid md:text-8xl">
          <TextEffect as="span" per="word" preset="fade-in-blur" delay={0.1}>
            Letal Network
          </TextEffect>
        </h1>

        <TextEffect
          as="p"
          per="word"
          preset="fade-in-blur"
          delay={0.25}
          className="mt-2 font-display text-3xl font-extrabold text-ink md:text-4xl"
        >
          Tu próxima aventura
        </TextEffect>

        <TextEffect
          as="p"
          per="line"
          preset="slide"
          delay={0.45}
          className="mt-5 max-w-lg text-[17px] font-semibold leading-relaxed text-ink-muted"
        >
          {"Survival, eventos frecuentes y una comunidad activa donde siempre hay algo nuevo por construir."}
        </TextEffect>

        <InView
          once
          viewOptions={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_EXPO, delay: 0.6 } },
          }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="https://tienda.letal.net"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-amber px-7 py-3.5 font-display text-[16px] font-bold text-cream shadow-[0_5px_0_0_theme(colors.amber.deep)] transition-all duration-200 ease-bouncy hover:-translate-y-0.5 hover:shadow-[0_7px_0_0_theme(colors.amber.deep)] active:translate-y-1 active:shadow-none"
          >
            <RuleIcon icon="cart" className="h-4 w-4" />
            Tienda
          </a>

          <Link
            href="/reglas"
            className="group flex items-center justify-center gap-2 rounded-2xl border-2 border-cream-border bg-cream-surface px-7 py-3.5 font-display text-[16px] font-bold text-ink shadow-[0_5px_0_0_theme(colors.cream.border)] transition-all duration-200 ease-bouncy hover:-translate-y-0.5 hover:border-acid hover:shadow-[0_7px_0_0_theme(colors.acid.deep)] active:translate-y-1 active:shadow-none"
          >
            Ver reglas
            <RuleIcon
              icon="arrow-right"
              className="h-4 w-4 transition-transform duration-200 ease-bouncy group-hover:translate-x-1"
            />
          </Link>
        </InView>
      </div>

      <RuleIcon
        icon="arrow-right"
        className="absolute bottom-6 left-1/2 h-5 w-5 -translate-x-1/2 rotate-90 animate-bounce text-ink-faint"
        aria-hidden
      />
    </section>
  );
}
