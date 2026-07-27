"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 160): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (ids.length === 0) return;

    function handleScroll() {
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) {
          current = id;
        }
      }

      setActiveId(current);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ids, offset]);

  return activeId;
}
