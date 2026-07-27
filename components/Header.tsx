"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RuleIcon } from "@/components/icons";
import {
  Disclosure,
  DisclosureContent,
} from "@/components/motion-primitives/disclosure";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/modalidades", label: "Modalidades" },
  { href: "/reglas", label: "Reglas" },
  { href: "/staff", label: "Staff" },
  { href: "/colaboraciones", label: "Colaboraciones" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b-2 border-cream-border bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex flex-none items-center">
          <Image
            src="/logo-cropped.png"
            alt="Letal Network"
            width={3184}
            height={1800}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 font-display text-[13px] font-bold uppercase tracking-wide transition-all duration-200 ease-bouncy ${
                  isActive
                    ? "bg-acid text-white shadow-[0_3px_0_0_theme(colors.acid.deep)]"
                    : "text-ink-muted hover:-translate-y-0.5 hover:bg-cream-soft hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-none items-center gap-2">
          <a
            href="https://tienda.letal.net"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-amber px-4 py-2 font-display text-[14px] font-bold uppercase tracking-wide text-cream shadow-[0_3px_0_0_theme(colors.amber.deep)] transition-all duration-200 ease-bouncy hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_theme(colors.amber.deep)] active:translate-y-0.5 active:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
          >
            <RuleIcon icon="cart" className="h-4 w-4" />
            <span className="hidden sm:inline">Tienda</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cream-border bg-cream-surface text-ink transition-colors duration-200 ease-expo hover:border-acid lg:hidden"
          >
            <RuleIcon icon={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      <Disclosure
        open={open}
        onOpenChange={setOpen}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="border-t-2 border-cream-border bg-cream lg:hidden"
      >
        <div />
        <DisclosureContent>
          <nav className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-2.5 font-display text-[15px] font-bold uppercase tracking-wide transition-colors duration-200 ease-expo ${
                    isActive ? "bg-acid text-white" : "text-ink-muted hover:bg-cream-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </DisclosureContent>
      </Disclosure>
    </header>
  );
}
