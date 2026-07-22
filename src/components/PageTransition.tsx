import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Soft cross-fade + rise transition applied to each routed page. */
export function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const mobileViewport =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 1040px)").matches;
  const disableVerticalShift = reduce || mobileViewport;
  return (
    <motion.main
      id="main"
      initial={{ opacity: 0, y: disableVerticalShift ? 0 : 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: disableVerticalShift ? 0 : -10 }}
      transition={{ duration: reduce ? 0.001 : 0.55, ease: EASE }}
    >
      {children}
    </motion.main>
  );
}
