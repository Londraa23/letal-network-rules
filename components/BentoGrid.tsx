"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RuleIcon, type IconKey } from "@/components/icons";
import { InView } from "@/components/motion-primitives/in-view";
import type { ServerStatus } from "@/lib/server-status";

const SERVER_IP = "play.letal.net";
const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const confettiDots = [
  { tx: -30, ty: -20 },
  { tx: 26, ty: -24 },
  { tx: -18, ty: 22 },
  { tx: 30, ty: 16 },
];

function fadeIn(delay: number) {
  return {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_EXPO, delay } },
  };
}

function PhotoTile({
  image,
  title,
  tag,
  body,
  className,
  delay,
}: {
  image: string;
  title: string;
  tag: string;
  body: string;
  className: string;
  delay: number;
}) {
  return (
    <InView
      once
      viewOptions={{ once: true, amount: 0.3 }}
      variants={fadeIn(delay)}
      className={`group relative min-h-[220px] overflow-hidden rounded-3xl border-2 border-cream-border ${className}`}
    >
      <Link href="/modalidades" className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 ease-expo group-hover:scale-110"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-surface via-cream-surface/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <span className="inline-flex rounded-full bg-cream-surface/90 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-ink backdrop-blur-sm">
            {tag}
          </span>
          <p className="mt-2 font-display text-xl font-extrabold text-ink md:text-2xl">{title}</p>
          <p className="mt-1 max-w-xs text-[13px] font-medium leading-snug text-ink-muted">{body}</p>
        </div>
      </Link>
    </InView>
  );
}

function NavTile({
  href,
  external,
  icon,
  label,
  accentBg,
  accentText,
  className,
  delay,
}: {
  href: string;
  external?: boolean;
  icon: IconKey;
  label: string;
  accentBg: string;
  accentText: string;
  className: string;
  delay: number;
}) {
  return (
    <InView once viewOptions={{ once: true, amount: 0.3 }} variants={fadeIn(delay)} className={className}>
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`group flex h-full flex-col items-start justify-between rounded-3xl border-2 border-cream-border p-5 transition-all duration-300 ease-bouncy hover:-translate-y-1 ${accentBg}`}
      >
        <RuleIcon
          icon={icon}
          className={`h-6 w-6 flex-none transition-transform duration-300 ease-bouncy group-hover:animate-wiggle ${accentText}`}
        />
        <span className="font-display text-base font-extrabold text-ink">{label}</span>
      </Link>
    </InView>
  );
}

export function BentoGrid({ status }: { status: ServerStatus }) {
  const [copied, setCopied] = useState(false);
  const [burstKey, setBurstKey] = useState(0);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      setCopied(true);
      setBurstKey((k) => k + 1);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable — ignore
    }
  }

  const label = status.online
    ? status.players
      ? `${status.players.online}/${status.players.max} jugadores conectados`
      : "Servidor en línea"
    : "Comunidad activa";

  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-5 md:[grid-auto-rows:190px]">
        <PhotoTile
          image="/survival.png"
          tag="Survival"
          title="Survival Aqua"
          body="El survival clásico de Letal Network: sobrevive, explora y construye."
          className="md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-2"
          delay={0}
        />

        {/* IP / estado en vivo */}
        <InView
          once
          viewOptions={{ once: true, amount: 0.3 }}
          variants={fadeIn(0.08)}
          className="relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-3xl border-2 border-acid-deep bg-gradient-to-br from-acid to-acid-deep p-5 md:col-start-3 md:col-span-2 md:row-start-1 md:row-span-1"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              {status.online && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              )}
              <span className={`relative inline-flex h-2 w-2 rounded-full ${status.online ? "bg-white" : "bg-white/50"}`} />
            </span>
            <span className="font-display text-[12px] font-bold uppercase tracking-wide text-white/85">
              {label}
            </span>
          </div>

          <div className="flex items-end justify-between gap-3">
            <p className="font-mono text-2xl font-bold text-white md:text-3xl">{SERVER_IP}</p>
            <button
              type="button"
              onClick={handleCopy}
              className="group relative flex flex-none items-center gap-1.5 rounded-full bg-white px-3.5 py-2 font-display text-[13px] font-bold text-acid transition-all duration-200 ease-bouncy hover:-translate-y-0.5 active:translate-y-0"
            >
              {copied ? (
                <RuleIcon icon="shield-check" className="h-4 w-4 animate-pop-in text-green" />
              ) : (
                <RuleIcon icon="copy" className="h-4 w-4" />
              )}
              {copied ? "¡Copiada!" : "Copiar"}
              {copied && (
                <span key={burstKey} className="pointer-events-none absolute right-1 top-0" aria-hidden>
                  {confettiDots.map((dot, i) => (
                    <span
                      key={i}
                      className="absolute h-1.5 w-1.5 rounded-full bg-white animate-confetti"
                      style={
                        {
                          "--tx": `${dot.tx}px`,
                          "--ty": `${dot.ty}px`,
                          animationDelay: `${i * 20}ms`,
                        } as React.CSSProperties
                      }
                    />
                  ))}
                </span>
              )}
            </button>
          </div>
        </InView>

        <NavTile
          href="https://discord.gg/letal"
          external
          icon="headset"
          label="Discord"
          accentBg="bg-[#5865F2]/15 hover:border-[#5865F2]"
          accentText="text-[#8f99fb]"
          className="md:col-start-3 md:col-span-1 md:row-start-2 md:row-span-1"
          delay={0.16}
        />

        <NavTile
          href="https://tienda.letal.net"
          external
          icon="cart"
          label="Tienda"
          accentBg="bg-amber-tint hover:border-amber"
          accentText="text-amber"
          className="md:col-start-4 md:col-span-1 md:row-start-2 md:row-span-1"
          delay={0.2}
        />

        <PhotoTile
          image="/gens.png"
          tag="Economía"
          title="Gens OP"
          body="Genera recursos y domina la economía."
          className="md:col-start-1 md:col-span-1 md:row-start-3 md:row-span-1"
          delay={0.24}
        />

        <PhotoTile
          image="/fullpvp.png"
          tag="PvP"
          title="FullPvP"
          body="Combate sin límites, arriesga tu inventario."
          className="md:col-start-2 md:col-span-2 md:row-start-3 md:row-span-1"
          delay={0.28}
        />

        <NavTile
          href="/reglas"
          icon="scale"
          label="Reglas"
          accentBg="bg-teal-tint hover:border-teal"
          accentText="text-teal"
          className="md:col-start-4 md:col-span-1 md:row-start-3 md:row-span-1"
          delay={0.32}
        />
      </div>
    </section>
  );
}
