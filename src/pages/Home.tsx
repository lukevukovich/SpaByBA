import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { serviceCategories } from "../data/services";
import { testimonials } from "../data/testimonials";
import { links, img, LOGO } from "../data/site";
import {
  SectionHead,
  BookButton,
  SplitFeature,
  CtaBand,
} from "../components/sections";
import { Reveal, Stagger, StaggerItem } from "../components/motion";
import { Counter } from "../components/Counter";
import styles from "./Home.module.css";

const ROTATING = ["Rejuvenation", "Tranquility", "Radiance", "Confidence"];
const EASE = [0.22, 1, 0.36, 1] as const;

export function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <ServicesShowcase />
      <PromoSplit />
      <Team />
      <Luxury />
      <Testimonials />
      <CtaBand
        image={img(
          "home__section-general__role-content__spa-by-ba-banner-1__048.webp",
        )}
        eyebrow="Get in Touch"
        title="Indulge in Unmatched Luxury"
        text="Reserve your escape at The Med Spa by B.A. in North Huntingdon, PA — where your body and skin are always the priority."
      />
    </>
  );
}

function Hero() {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduce ? "0%" : "16%"],
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % ROTATING.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className={styles.hero}>
      <motion.div className={styles.heroMedia} style={{ y, scale }}>
        <img
          src={img(
            "home__section-indulge-in-rejuvenation-tranquility-radiance__role-background__indulge-in-rejuvenation-tranquility-radiance__027.webp",
          )}
          alt=""
        />
      </motion.div>
      <div className="container">
        <div className={styles.heroInner}>
          <motion.p
            className={`eyebrow ${styles.heroEyebrow}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          >
            The Med Spa by B.A. · North Huntingdon, PA
          </motion.p>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          >
            Indulge in
            <span className={styles.rotator} aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING[index]}
                  initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduce ? 0 : -24 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  style={{ display: "inline-block" }}
                >
                  {ROTATING[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          >
            A luxury medical spa experience
          </motion.p>
          <motion.div
            className={styles.heroCtas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
          >
            <BookButton label="Book Your Appointment" />
            <Link to="/services" className="btn btn-light">
              <span>Explore Services</span>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}

function Welcome() {
  const stats = [
    { to: 7, suffix: "", label: "Treatment Categories" },
    { to: 50, suffix: "+", label: "Signature Treatments" },
    { to: 3, suffix: "", label: "Membership Tiers" },
    { to: 5, suffix: ".0", label: "Star Rated Care" },
  ];
  return (
    <section className="section container">
      <div className={styles.welcome}>
        <Reveal direction="right">
          <img
            src={LOGO}
            alt="The Med Spa by B.A."
            className={styles.welcomeLogo}
          />
          <p className="eyebrow">Welcome to The Med Spa by B.A.</p>
          <h2 className="h2" style={{ margin: "1rem 0 1.4rem" }}>
            Where your body and skin are the priority
          </h2>
        </Reveal>
        <Reveal direction="left">
          <p className="lead">
            Step into an oasis of tranquility meticulously crafted to prioritize
            your comfort. Our expert providers seamlessly blend advanced
            treatments with a refined sense of care — creating an indulgent
            experience tailored to your every need.
          </p>
          <p className="muted">
            From rejuvenating facials and precise injectables to restorative
            massage and body contouring, every visit is designed to leave you
            radiant, confident, and completely at ease.
          </p>
          <BookButton label="Book an Appointment" variant="btn-outline" />
        </Reveal>
      </div>

      <Stagger className={styles.stats}>
        {stats.map((s) => (
          <StaggerItem key={s.label} className={styles.stat}>
            <div className={styles.statNum}>
              <Counter to={s.to} suffix={s.suffix} />
            </div>
            <div className={styles.statLabel}>{s.label}</div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function ServicesShowcase() {
  return (
    <section className="section bg-alt">
      <div className="container">
        <SectionHead
          eyebrow="What We Offer"
          title="Treatments Tailored to You"
          center
        >
          Explore our curated menu of medical spa services, each performed with
          precision, artistry, and genuine care.
        </SectionHead>
        <Stagger className={styles.svcGrid} gap={0.1}>
          {serviceCategories.map((s) => (
            <StaggerItem key={s.slug}>
              <Link to={`/services/${s.slug}`} className={styles.svcCard}>
                <div className={styles.svcMedia}>
                  <img src={s.cardImage} alt="" loading="lazy" />
                </div>
                <div className={styles.svcBody}>
                  <h3 className={styles.svcTitle}>{s.navLabel}</h3>
                  <p className={styles.svcBlurb}>{s.cardBlurb}</p>
                  <span className={styles.svcLink}>Discover →</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function PromoSplit() {
  return (
    <section className="section container">
      <SectionHead eyebrow="Explore" title="Packages & Memberships" center>
        Unlock exclusive access to our most sought-after treatments — all at
        member-preferred rates.
      </SectionHead>
      <div className={styles.promoGrid}>
        <Reveal direction="right" className={styles.promo}>
          <div className={styles.promoMedia}>
            <img
              src={img(
                "packages-2__section-general__role-content__hydrafacial2-650x650__045.webp",
              )}
              alt=""
              loading="lazy"
            />
          </div>
          <div className={styles.promoBody}>
            <h3 className="h3">Curated Packages</h3>
            <p>
              Hydrafacials, microneedling, chemical peels, and skin bundles
              designed to deliver visible, lasting results.
            </p>
            <Link to="/packages" className="btn btn-light">
              <span>View Packages</span>
            </Link>
          </div>
        </Reveal>
        <Reveal direction="left" className={styles.promo}>
          <div className={styles.promoMedia}>
            <img
              src={img(
                "memberships-2__section-vip__role-background__vip__020.webp",
              )}
              alt=""
              loading="lazy"
            />
          </div>
          <div className={styles.promoBody}>
            <h3 className="h3">Memberships</h3>
            <p>
              Members-only pricing, monthly treatments, and luxurious perks with
              our Rewards, VIP, and F.A.B. Clubs.
            </p>
            <Link to="/memberships" className="btn btn-light">
              <span>Join the Club</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section bg-alt">
      <div className="container">
        <SplitFeature
          image={img(
            "home__section-general__role-content__team-photo-billboard__047.webp",
          )}
        >
          <p className="eyebrow">Meet Our Team</p>
          <h2 className="h2" style={{ margin: "1rem 0 1.4rem" }}>
            Expert care, an artist's touch
          </h2>
          <p className="lead muted">
            Our providers seamlessly blend advanced treatments with a refined
            sense of care, creating an indulgent experience tailored to your
            every need.
          </p>
          <p className="muted">
            Skilled, approachable, and deeply experienced — our team is here to
            help you look and feel your absolute best.
          </p>
          <BookButton label="Meet Us in Person" variant="btn-outline" />
        </SplitFeature>
      </div>
    </section>
  );
}

function Luxury() {
  const gallery = [
    img(
      "home__section-general__role-content__spa-gallery-long-2-scaled__051.webp",
    ),
    img("home__section-general__role-content__spa-entrance-2__052.webp"),
    img("home__section-general__role-content__spa-towel-area__053.webp"),
    img(
      "home__section-general__role-content__spa-gallery-long-3-scaled__054.webp",
    ),
  ];
  return (
    <section className="section container">
      <SectionHead
        eyebrow="The Experience"
        title="Indulge in Unmatched Luxury"
        center
      >
        Our space is meticulously crafted to prioritize your comfort — an oasis
        of tranquility offering an unparalleled, indulgent spa experience.
      </SectionHead>
      <Stagger className={styles.gallery} gap={0.1}>
        {gallery.map((src, i) => (
          <StaggerItem key={i} className={styles.galleryItem}>
            <img src={src} alt="" loading="lazy" />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function Testimonials() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="section bg-deep">
      <div className="container">
        <SectionHead eyebrow="Kind Words" title="What Our Clients Say" center />
      </div>
      <div className={styles.tWrap}>
        <div className={styles.tTrack}>
          {loop.map((t, i) => (
            <figure key={i} className={styles.tCard}>
              <div className={styles.stars} aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote className={styles.tQuote}>“{t.quote}”</blockquote>
              <figcaption>
                <div className={styles.tName}>{t.name}</div>
                {t.source && <div className={styles.tSource}>{t.source}</div>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="container center" style={{ marginTop: "3rem" }}>
        <a
          href={links.booking}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          <span>Book Your Experience</span>
        </a>
      </div>
    </section>
  );
}
