import { RuleIcon, type IconKey } from "@/components/icons";

export function ComingSoon({
  icon,
  title,
  body,
}: {
  icon: IconKey;
  title: string;
  body: string;
}) {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-[1280px] flex-col items-center justify-center px-5 pt-24 text-center md:px-8">
      <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-acid-tint text-acid">
        <RuleIcon icon={icon} className="h-8 w-8" />
      </span>
      <p className="mt-6 font-display text-sm font-bold uppercase tracking-widest text-acid">
        Próximamente
      </p>
      <h1 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-ink md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-md text-[16px] font-semibold leading-relaxed text-ink-muted">
        {body}
      </p>
    </main>
  );
}
