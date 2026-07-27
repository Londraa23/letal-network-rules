import Image from "next/image";
import Link from "next/link";
import { RuleIcon } from "@/components/icons";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b-2 border-cream-border bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-cropped.png"
            alt="Letal Network"
            width={3184}
            height={1800}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <a
          href="https://tienda.letal.net"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-amber px-4 py-2 font-display text-[14px] font-bold uppercase tracking-wide text-ink shadow-[0_3px_0_0_theme(colors.amber.deep)] transition-all duration-200 ease-bouncy hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_theme(colors.amber.deep)] active:translate-y-0.5 active:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
        >
          <RuleIcon icon="cart" className="h-4 w-4" />
          Tienda
        </a>
      </div>
    </header>
  );
}
