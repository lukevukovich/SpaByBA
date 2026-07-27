import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { links } from "../data/site";
import { Reveal } from "./motion";
import styles from "./sections.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

export function BookButton({
  label = "Book an Appointment",
  variant = "",
  href = links.booking,
}: {
  label?: string;
  variant?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`btn ${variant}`}
    >
      <span>{label}</span>
    </a>
  );
}

/** Full-bleed page hero with restrained parallax on the background image. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  note,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  note?: string;
  compact?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduce ? "0%" : "18%"],
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);

  return (
    <section
      ref={ref}
      className={`${styles.hero} ${compact ? styles.heroCompact : ""}`}
    >
      <motion.div className={styles.heroMedia} style={{ y, scale }}>
        <img src={image} alt="" />
      </motion.div>
      <div className="container">
        <div className={styles.heroInner}>
          {eyebrow && (
            <motion.p
              className={`eyebrow ${styles.heroEyebrow}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
            >
              {subtitle}
            </motion.p>
          )}
          {note && (
            <motion.p
              className={styles.heroNote}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
            >
              {note}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  children,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <Reveal className={`${styles.sectionHead} ${center ? styles.center : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h2">{title}</h2>
      {children && <p className="lead muted">{children}</p>}
    </Reveal>
  );
}

/** Sticky image + text feature block. */
export function SplitFeature({
  image,
  reverse = false,
  children,
}: {
  image: string;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`${styles.split} ${reverse ? styles.reverse : ""}`}>
      <Reveal
        className={styles.splitText}
        direction={reverse ? "right" : "left"}
      >
        {children}
      </Reveal>
      <Reveal
        className={styles.splitMedia}
        direction={reverse ? "left" : "right"}
      >
        <img src={image} alt="" loading="lazy" />
      </Reveal>
    </div>
  );
}

export function CtaBand({
  image,
  eyebrow = "Ready When You Are",
  title,
  text,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  text: string;
}) {
  return (
    <section className={styles.ctaBand}>
      <div className={styles.ctaBandMedia}>
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="container">
        <Reveal className={styles.ctaBandInner}>
          <p className="eyebrow" style={{ color: "var(--accent-soft)" }}>
            {eyebrow}
          </p>
          <h2 className="h2" style={{ marginTop: "1rem" }}>
            {title}
          </h2>
          <p>{text}</p>
          <div className={styles.ctaRow}>
            <BookButton label="Book an Appointment" />
            <a
              href={links.giftCertificates}
              target="_blank"
              rel="noreferrer"
              className="btn btn-light"
            >
              <span>Gift Certificates</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
