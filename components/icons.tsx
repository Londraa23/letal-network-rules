import type { SVGProps } from "react";

export type IconKey =
  | "users"
  | "clock"
  | "copy"
  | "cursor"
  | "swords"
  | "alert"
  | "coin"
  | "monitor"
  | "bug"
  | "megaphone"
  | "hammer"
  | "trophy"
  | "wallet"
  | "building"
  | "shield-alert"
  | "gavel"
  | "scale"
  | "appeal"
  | "sparkle"
  | "arrow-right"
  | "headset"
  | "gem"
  | "shield-check"
  | "cart"
  | "menu"
  | "close";

const paths: Record<IconKey, React.ReactNode> = {
  users: (
    <>
      <circle cx="9" cy="7.5" r="3" />
      <path d="M3.5 20c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      <circle cx="17" cy="8.5" r="2.4" />
      <path d="M15.8 14.3c2.5.4 4.2 2.5 4.2 5.2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  copy: (
    <>
      <rect x="8" y="8" width="12" height="12" rx="1.5" />
      <path d="M4.5 16H4a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 4 2.5h10.5A1.5 1.5 0 0 1 16 4v.5" />
    </>
  ),
  cursor: (
    <>
      <path d="M5 3.5 19 9l-6 2-2 6-6-13.5Z" />
    </>
  ),
  swords: (
    <>
      <path d="M4 20 14 10" />
      <path d="M13 3l7 7-2.5 2.5L10 5l3-2Z" />
      <path d="M20 4l-7 7 2.5 2.5L22 6l-2-2Z" />
      <path d="M4 20l3 0 0-3" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3.5 21.5 20h-19L12 3.5Z" />
      <path d="M12 10v4" />
      <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  coin: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.5 15c.4.9 1.3 1.5 2.5 1.5 1.7 0 2.7-1 2.7-2.2 0-3-5.4-1.4-5.4-4.3 0-1.2 1-2.2 2.7-2.2 1.2 0 2.1.6 2.5 1.5" />
      <path d="M12 6.5v11" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
      <path d="M9 20.5h6M12 16.5v4" />
    </>
  ),
  bug: (
    <>
      <rect x="7.5" y="8" width="9" height="10.5" rx="4.5" />
      <path d="M12 8V5.5M9.5 6l-1.7-1.7M14.5 6l1.7-1.7" />
      <path d="M4 12h3.5M20 12h-3.5M4.5 17l3-1.5M19.5 17l-3-1.5" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 10v4h3l6 4V6l-6 4H3Z" />
      <path d="M15 9a4 4 0 0 1 0 6" />
      <path d="M18 6.5a8 8 0 0 1 0 11" />
    </>
  ),
  hammer: (
    <>
      <path d="M14.5 6.5 18 3l3 3-3.5 3.5" />
      <path d="M16 8l-9.5 9.5a2 2 0 0 1-2.8 0l-.2-.2a2 2 0 0 1 0-2.8L13 5" />
      <path d="M4.5 19.5l-1-1" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 5.5H4a3 3 0 0 0 3 4M17 5.5h3a3 3 0 0 1-3 4" />
      <path d="M12 14v3M9 20.5h6M9.5 17.5h5l.5 3h-6l.5-3Z" />
    </>
  ),
  wallet: (
    <>
      <path d="M3.5 7.5a2 2 0 0 1 2-2H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2v-10Z" />
      <path d="M3.5 8.5 15 5" />
      <circle cx="16.5" cy="13.5" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3.5" width="9" height="17" rx="1" />
      <rect x="14.5" y="9" width="5.5" height="11.5" rx="1" />
      <path d="M7 7h.01M10 7h.01M7 10.5h.01M10 10.5h.01M7 14h.01M10 14h.01" />
    </>
  ),
  "shield-alert": (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.5-3 8-7.5 9.5-4.5-1.5-7.5-5-7.5-9.5V6L12 3Z" />
      <path d="M12 8.5v4M12 15.3h.01" />
    </>
  ),
  gavel: (
    <>
      <path d="M13 4.5 18.5 10 16 12.5 10.5 7 13 4.5Z" />
      <path d="M9 8.5 3.5 14l2.5 2.5L11.5 11" />
      <path d="M3 20.5h9" />
      <path d="M15 9l4 4" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18M8 21h8" />
      <path d="M4 7h6M14 7h6" />
      <path d="M4 7 1.5 12a2.5 2.5 0 0 0 5 0L4 7ZM20 7l-2.5 5a2.5 2.5 0 0 0 5 0L20 7Z" />
    </>
  ),
  appeal: (
    <>
      <path d="M4 12a8 8 0 1 1 3 6.2" />
      <path d="M4 18v-4h4" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
      <path d="M12 8.5 13.2 11 15.5 12.2 13.2 13.4 12 15.9 10.8 13.4 8.5 12.2 10.8 11 12 8.5Z" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19v.5a3 3 0 0 1-3 3h-3" />
    </>
  ),
  gem: (
    <>
      <path d="M6 3h12l3 5.5L12 21 3 8.5 6 3Z" />
      <path d="M3 8.5h18M9 3l-2 5.5L12 21M15 3l2 5.5L12 21" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.5-3 8-7.5 9.5-4.5-1.5-7.5-5-7.5-9.5V6L12 3Z" />
      <path d="m9 12 2 2 4-4.5" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2.2l1.2 11.2A2 2 0 0 0 8.4 17h8.2a2 2 0 0 0 2-1.7L20 8H6.5" />
      <circle cx="9" cy="20.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="17" cy="20.5" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
  close: (
    <>
      <path d="M5 5l14 14M19 5 5 19" />
    </>
  ),
};

export function RuleIcon({
  icon,
  ...props
}: { icon: IconKey } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[icon]}
    </svg>
  );
}
