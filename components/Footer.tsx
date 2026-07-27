import Image from "next/image";
import Link from "next/link";

function DiscordIcon() {
  return (
    <svg viewBox="0 0 127.14 96.36" className="h-[18px] w-[18px] flex-none fill-white" aria-hidden>
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-cream-border pt-14">
      <div className="flex flex-col items-start gap-8 pb-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-cropped.png"
              alt="Letal Network"
              width={3184}
              height={1800}
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-[14px] font-medium leading-relaxed text-ink-muted">
            Una comunidad de Minecraft en español con eventos frecuentes y una aventura que
            siempre continúa.
          </p>
        </div>

        <a
          href="https://discord.gg/letal"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-2xl border-2 border-cream-border bg-cream-surface py-2 pl-2 pr-4 shadow-[0_4px_0_0_theme(colors.cream.border)] transition-all duration-200 ease-bouncy hover:-translate-y-0.5 hover:border-[#5865F2] hover:shadow-[0_4px_0_0_#5865F2]"
        >
          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-[#5865F2]">
            <DiscordIcon />
          </span>
          <span className="text-[14px] font-bold text-ink">Únete al Discord</span>
        </a>
      </div>

      <div className="flex flex-col items-start gap-2 border-t-2 border-cream-border py-6 text-[13px] font-semibold text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <p>Letal Network · {year}</p>
        <p>play.letal.net</p>
      </div>
    </footer>
  );
}
