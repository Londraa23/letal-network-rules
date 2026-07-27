import Image from "next/image";
import { RuleIcon, type IconKey } from "@/components/icons";
import { InView } from "@/components/motion-primitives/in-view";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

function DiscordIcon() {
  return (
    <svg viewBox="0 0 127.14 96.36" className="h-5 w-5 flex-none fill-acid" aria-hidden>
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
    </svg>
  );
}

const bullets: { icon: IconKey; label: string }[] = [
  { icon: "headset", label: "Soporte eficiente" },
  { icon: "megaphone", label: "Noticias y sorteos" },
  { icon: "users", label: "Comunidad activa" },
];

export function CommunityCta() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pb-20 md:px-8 md:pb-28">
      <InView
        once
        viewOptions={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_EXPO } },
        }}
        className="relative overflow-hidden rounded-3xl border-2 border-acid-deep bg-gradient-to-br from-acid to-acid-deep px-8 py-12 shadow-[0_8px_0_0_theme(colors.acid.deep)] md:px-14 md:py-16"
      >
        <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
              Únete a nuestra
              <br />
              comunidad
            </h2>
            <p className="mt-4 max-w-md text-[16px] font-semibold leading-relaxed text-white/85">
              Conoce jugadores, recibe soporte y entérate antes que nadie de eventos, sorteos y
              novedades.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {bullets.map((b) => (
                <span key={b.label} className="flex items-center gap-2 text-[14px] font-bold text-white">
                  <RuleIcon icon={b.icon} className="h-4 w-4 flex-none" />
                  {b.label}
                </span>
              ))}
            </div>

            <a
              href="https://discord.gg/letal"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-2xl bg-white px-6 py-3.5 font-display text-[15px] font-bold text-acid shadow-[0_5px_0_0_rgba(0,0,0,0.25)] transition-all duration-200 ease-bouncy hover:-translate-y-0.5 hover:shadow-[0_7px_0_0_rgba(0,0,0,0.25)] active:translate-y-1 active:shadow-none"
            >
              <DiscordIcon />
              Entrar al Discord
            </a>
          </div>

          <div className="relative mx-auto hidden h-56 w-56 md:block">
            <Image
              src="/logomark-cropped.png"
              alt=""
              fill
              className="animate-float object-contain drop-shadow-[0_12px_0_rgba(0,0,0,0.25)]"
              aria-hidden
            />
          </div>
        </div>
      </InView>
    </section>
  );
}
