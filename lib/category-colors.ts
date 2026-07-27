import type { CategoryColor } from "@/data/rules";

export interface CategoryClasses {
  text: string;
  bg: string;
  tint: string;
  border: string;
  borderHover: string;
  solidBg: string;
  ring: string;
}

export const categoryColors: Record<CategoryColor, CategoryClasses> = {
  acid: {
    text: "text-acid",
    bg: "bg-acid",
    tint: "bg-acid-tint",
    border: "border-acid",
    borderHover: "hover:border-acid",
    solidBg: "bg-acid",
    ring: "ring-acid",
  },
  blue: {
    text: "text-blue",
    bg: "bg-blue",
    tint: "bg-blue-tint",
    border: "border-blue",
    borderHover: "hover:border-blue",
    solidBg: "bg-blue",
    ring: "ring-blue",
  },
  green: {
    text: "text-green",
    bg: "bg-green",
    tint: "bg-green-tint",
    border: "border-green",
    borderHover: "hover:border-green",
    solidBg: "bg-green",
    ring: "ring-green",
  },
  amber: {
    text: "text-amber",
    bg: "bg-amber",
    tint: "bg-amber-tint",
    border: "border-amber",
    borderHover: "hover:border-amber",
    solidBg: "bg-amber",
    ring: "ring-amber",
  },
  purple: {
    text: "text-purple",
    bg: "bg-purple",
    tint: "bg-purple-tint",
    border: "border-purple",
    borderHover: "hover:border-purple",
    solidBg: "bg-purple",
    ring: "ring-purple",
  },
  teal: {
    text: "text-teal",
    bg: "bg-teal",
    tint: "bg-teal-tint",
    border: "border-teal",
    borderHover: "hover:border-teal",
    solidBg: "bg-teal",
    ring: "ring-teal",
  },
};
