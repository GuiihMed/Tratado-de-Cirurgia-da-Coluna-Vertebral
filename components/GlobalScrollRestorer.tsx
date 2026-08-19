"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * GlobalScrollRestorer:
 * Persists the exact scroll position and active section across page reloads and navigations.
 * Restores seamlessly after hydration without jarring jumps.
 */
export default function GlobalScrollRestorer() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isRestoringRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Prevent default browser scroll restoration interference
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const currentKey = `sbc_scroll_${pathname}${searchParams ? `?${searchParams.toString()}` : ""}`;

    // 1. Restore saved scroll position
    const savedY = sessionStorage.getItem(currentKey);
    if (savedY !== null) {
      const targetY = parseInt(savedY, 10);
      if (!isNaN(targetY) && targetY > 0) {
        isRestoringRef.current = true;

        // Immediate attempt
        window.scrollTo({ top: targetY, behavior: "instant" });

        // Subsequent attempts after dynamic DOM rendering and image loads
        const timeouts = [40, 120, 300, 600, 1000];
        timeouts.forEach((delay) => {
          setTimeout(() => {
            if (Math.abs(window.scrollY - targetY) > 20) {
              window.scrollTo({ top: targetY, behavior: "instant" });
            }
            if (delay === 1000) {
              isRestoringRef.current = false;
            }
          }, delay);
        });
      }
    }

    // 2. Debounced scroll listener to save current position
    let scrollTimeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (isRestoringRef.current) return;

      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const y = window.scrollY;
        sessionStorage.setItem(currentKey, y.toString());

        // Also identify active section if any element with id is in view
        const sections = document.querySelectorAll("section[id], div[id]");
        let currentSectionId = "";
        sections.forEach((sec) => {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 100) {
            currentSectionId = sec.id;
          }
        });
        if (currentSectionId) {
          sessionStorage.setItem(`sbc_sec_${pathname}`, currentSectionId);
        }
      }, 100);
    };

    // 3. Save position right before page unload/refresh
    const handleBeforeUnload = () => {
      sessionStorage.setItem(currentKey, window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname, searchParams]);

  return null;
}
