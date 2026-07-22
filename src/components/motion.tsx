import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Direction = "up" | "down" | "left" | "right" | "none";

const offset = (dir: Direction, reduce: boolean) => {
  if (reduce) return { x: 0, y: 0 };
  switch (dir) {
    case "up":
      return { x: 0, y: 44 };
    case "down":
      return { x: 0, y: -44 };
    case "left":
      return { x: 44, y: 0 };
    case "right":
      return { x: -44, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
};

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "section" | "li" | "span" | "article";
  once?: boolean;
}

/** Subtle fade + slide reveal as the element enters the viewport. */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className,
  style,
  as = "div",
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion() ?? false;
  const { x, y } = offset(direction, reduce);
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: reduce ? 0.001 : duration, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Staggered container — pair with <StaggerItem>. */
export function Stagger({
  children,
  className,
  gap = 0.12,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  as?: "div" | "ul" | "section";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap } },
      }}
    >
      {children}
    </MotionTag>
  );
}

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={staggerItemVariants}>
      {children}
    </MotionTag>
  );
}
