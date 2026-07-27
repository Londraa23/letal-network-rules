"use client";

import { useState } from "react";
import { RuleIcon } from "@/components/icons";
import type { ServerStatus } from "@/lib/server-status";

const SERVER_IP = "play.letal.net";

const confettiDots = [
  { color: "bg-acid", tx: -34, ty: -22 },
  { color: "bg-blue", tx: 28, ty: -28 },
  { color: "bg-green", tx: -20, ty: 26 },
  { color: "bg-amber", tx: 34, ty: 18 },
  { color: "bg-purple", tx: 4, ty: -34 },
  { color: "bg-teal", tx: -36, ty: 6 },
];

export function LiveStatusBar({ status }: { status: ServerStatus }) {
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
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <div className="flex items-center gap-2.5 rounded-full border-2 border-cream-border bg-cream-surface/90 px-4 py-1.5 backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          {status.online && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
          )}
          <span className={`relative inline-flex h-2 w-2 rounded-full ${status.online ? "bg-green" : "bg-ink-faint"}`} />
        </span>
        <span className="font-display text-[13px] font-bold text-ink">{label}</span>
      </div>

      <button
        type="button"
        onClick={handleCopy}
        className="group relative flex items-center gap-2 rounded-full border-2 border-cream-border bg-cream-surface/90 px-4 py-2 font-mono text-[13px] font-semibold text-ink backdrop-blur-sm transition-all duration-200 ease-bouncy hover:-translate-y-0.5 hover:border-acid"
      >
        {copied ? (
          <RuleIcon icon="shield-check" className="h-4 w-4 animate-pop-in text-green" />
        ) : (
          <RuleIcon icon="copy" className="h-4 w-4 text-ink-faint" />
        )}
        <span>{copied ? "¡IP copiada!" : SERVER_IP}</span>

        {copied && (
          <span key={burstKey} className="pointer-events-none absolute right-2 top-1/2" aria-hidden>
            {confettiDots.map((dot, i) => (
              <span
                key={i}
                className={`absolute h-1.5 w-1.5 rounded-full ${dot.color} animate-confetti`}
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
  );
}
