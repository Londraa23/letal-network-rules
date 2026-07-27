"use client";

import { useState } from "react";
import Image from "next/image";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { InView } from "@/components/motion-primitives/in-view";
import { RuleIcon } from "@/components/icons";

const SERVER_IP = "letal.net";
const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable — ignore
    }
  }

  return (
    <section className="relative overflow-hidden border-b-2 border-cream-border">
      <div className="absolute inset-0">
        <Image src="/hero.png" alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-cream/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/30 to-cream/60" />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-5 pb-20 pt-36 md:grid-cols-[1fr_auto] md:px-8 md:pb-28 md:pt-44">
        <div className="text-center md:text-left">
          <TextEffect
            as="p"
            per="char"
            preset="fade"
            speedReveal={2.5}
            className="font-display text-sm font-bold uppercase tracking-widest text-acid"
          >
            Servidor de Minecraft en español
          </TextEffect>

          <h1 className="mt-4 font-display text-6xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-7xl">
            <TextEffect as="span" per="word" preset="fade-in-blur" delay={0.1}>
              Letal Network
            </TextEffect>
          </h1>

          <TextEffect
            as="p"
            per="line"
            preset="slide"
            delay={0.3}
            className="mt-4 max-w-md text-[17px] font-semibold leading-relaxed text-ink-muted"
          >
            {"Java y Bedrock. Survival, eventos frecuentes y una comunidad que siempre tiene algo nuevo por construir."}
          </TextEffect>

          <InView
            once
            viewOptions={{ once: true, amount: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_EXPO, delay: 0.5 } },
            }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start"
          >
            <a
              href="https://discord.gg/letal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#5865F2] px-6 py-3 font-display text-[15px] font-bold text-white shadow-[0_5px_0_0_#3c45a5] transition-all duration-200 ease-bouncy hover:-translate-y-0.5 hover:shadow-[0_7px_0_0_#3c45a5] active:translate-y-1 active:shadow-none"
            >
              Discord
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="flex min-w-[190px] items-center justify-center gap-2 rounded-2xl bg-amber px-6 py-3 font-display text-[15px] font-bold text-cream shadow-[0_5px_0_0_theme(colors.amber.deep)] transition-all duration-200 ease-bouncy hover:-translate-y-0.5 hover:shadow-[0_7px_0_0_theme(colors.amber.deep)] active:translate-y-1 active:shadow-none"
            >
              {copied ? (
                <>
                  <RuleIcon icon="shield-check" className="h-4 w-4 animate-pop-in" />
                  ¡IP copiada!
                </>
              ) : (
                <>
                  Empezar a jugar
                  <RuleIcon icon="arrow-right" className="h-4 w-4" />
                </>
              )}
            </button>
          </InView>
        </div>

        <InView
          once
          viewOptions={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE_EXPO, delay: 0.2 } },
          }}
          className="relative mx-auto hidden h-56 w-56 flex-none md:block"
        >
          <Image
            src="/logomark-cropped.png"
            alt=""
            fill
            className="animate-float object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.5)]"
            aria-hidden
          />
        </InView>
      </div>
    </section>
  );
}
