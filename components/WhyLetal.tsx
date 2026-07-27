import Link from "next/link";
import { RuleIcon, type IconKey } from "@/components/icons";
import { categoryColors } from "@/lib/category-colors";
import type { CategoryColor } from "@/data/rules";
import { InView } from "@/components/motion-primitives/in-view";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const reasons: {
  icon: IconKey;
  color: CategoryColor;
  title: string;
  body: string;
  href?: string;
}[] = [
  {
    icon: "users",
    color: "blue",
    title: "Comunidad activa",
    body: "Jugadores conectados todos los días, siempre hay alguien con quien jugar.",
  },
  {
    icon: "trophy",
    color: "amber",
    title: "Eventos frecuentes",
    body: "Sorteos, torneos y actividades especiales para toda la comunidad.",
  },
  {
    icon: "scale",
    color: "green",
    title: "Normativa clara",
    body: "Reglas transparentes y un staff que las aplica de forma justa para todos.",
    href: "/reglas",
  },
  {
    icon: "headset",
    color: "purple",
    title: "Soporte por Discord",
    body: "¿Dudas o problemas? El equipo y la comunidad están a un mensaje de distancia.",
  },
];

export function WhyLetal() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 md:py-28">
      <p className="font-display text-sm font-bold uppercase tracking-widest text-acid">
        Por qué Letal Network
      </p>
      <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-ink md:text-5xl">
        Hecho para quedarte
      </h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, i) => {
          const c = categoryColors[reason.color];
          const content = (
            <>
              <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${c.tint} group-hover:animate-wiggle`}>
                <RuleIcon icon={reason.icon} className={`h-6 w-6 ${c.text}`} />
              </span>
              <p className="mt-4 font-display text-lg font-extrabold text-ink">{reason.title}</p>
              <p className="mt-1.5 text-[14px] font-medium leading-relaxed text-ink-muted">
                {reason.body}
              </p>
            </>
          );

          const className = `group block rounded-3xl border-2 border-cream-border bg-cream-surface p-6 shadow-[0_4px_0_0_theme(colors.cream.border)] transition-all duration-300 ease-bouncy hover:-translate-y-1.5 ${c.borderHover}`;

          return (
            <InView
              key={reason.title}
              once
              viewOptions={{ once: true, amount: 0.4 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: EASE_EXPO, delay: 0.08 * i },
                },
              }}
            >
              {reason.href ? (
                <Link href={reason.href} className={className}>
                  {content}
                </Link>
              ) : (
                <div className={className}>{content}</div>
              )}
            </InView>
          );
        })}
      </div>
    </section>
  );
}
