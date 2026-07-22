import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { nav, links, site, LOGO } from "../data/site";
import styles from "./Navbar.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Routes whose page begins with a full-bleed hero image the header overlays. */
const HERO_ROUTES = new Set([
  "/",
  "/services",
  "/packages",
  "/memberships",
  "/get-in-touch",
  "/get-in-touch/payment-plans",
  "/terms-of-use",
  "/accessibility-statement",
]);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [suppressHover, setSuppressHover] = useState(false);
  const { pathname } = useLocation();
  const firstLoad = useRef(true);
  const navHovered = useRef(false);
  const overHero =
    HERO_ROUTES.has(pathname) || pathname.startsWith("/services/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Collapse any open hover dropdown after navigating; it reactivates once the
  // pointer leaves and re-enters a nav item. Skip the initial mount so the
  // dropdowns aren't suppressed on first page load.
  useEffect(() => {
    setOpen(false);
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    // Only suppress the dropdown if the cursor is actually over the nav at
    // navigation time (e.g. a dropdown link was just clicked and the panel
    // would otherwise linger). Otherwise the flag would stay stuck until a
    // mouseleave that never comes, breaking the first hover on the new page.
    if (navHovered.current) {
      setSuppressHover(true);
    }
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        styles.header,
        scrolled ? styles.scrolled : "",
        overHero ? styles.overHero : "",
      ].join(" ")}
    >
      <div className="container">
        <div className={styles.inner}>
          <Link to="/" className={styles.brand} aria-label={site.name}>
            <img src={LOGO} alt="" className={styles.brandLogo} />
          </Link>

          <nav
            className={[styles.nav, suppressHover ? styles.suppressHover : ""]
              .join(" ")
              .trim()}
            aria-label="Primary"
            onMouseEnter={() => {
              navHovered.current = true;
            }}
            onMouseLeave={() => {
              navHovered.current = false;
              setSuppressHover(false);
            }}
          >
            {nav.map((item) => (
              <div key={item.label} className={styles.navItem}>
                {item.to ? (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      [styles.navLink, isActive ? styles.active : ""].join(" ")
                    }
                  >
                    {item.label}
                    {item.children && <Caret />}
                  </NavLink>
                ) : (
                  <a
                    className={styles.navLink}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                  </a>
                )}

                {item.children && (
                  <div className={styles.dropdown}>
                    {item.children.map((c) =>
                      c.to ? (
                        <Link
                          key={c.label}
                          to={c.to}
                          className={styles.dropLink}
                        >
                          {c.label}
                        </Link>
                      ) : (
                        <a
                          key={c.label}
                          href={c.href}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.dropLink}
                        >
                          {c.label}
                        </a>
                      ),
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className={styles.actions}>
            <a
              href={links.booking}
              target="_blank"
              rel="noreferrer"
              className={`btn ${styles.bookBtn}`}
            >
              <span>Book Now</span>
            </a>
            <button
              className={styles.menuBtn}
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.drawer}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <div className={styles.drawerTop}>
              <span className={styles.brandText}>The Med Spa by B.A.</span>
              <button
                className={styles.close}
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              aria-label="Mobile"
            >
              {nav.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: EASE },
                    },
                  }}
                >
                  {item.to ? (
                    <Link to={item.to} className={styles.mLink}>
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.mLink}
                    >
                      {item.label}
                    </a>
                  )}
                  {item.children && (
                    <div className={styles.mSub}>
                      {item.children.map((c) =>
                        c.to ? (
                          <Link
                            key={c.label}
                            to={c.to}
                            className={styles.mSubLink}
                          >
                            {c.label}
                          </Link>
                        ) : (
                          <a
                            key={c.label}
                            href={c.href}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.mSubLink}
                          >
                            {c.label}
                          </a>
                        ),
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.nav>

            <div className={styles.drawerCta}>
              <a
                href={links.booking}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <span>Book an Appointment</span>
              </a>
              <a
                href={links.giftCertificates}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <span>Gift Certificates</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Caret() {
  return (
    <svg
      className={styles.caret}
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      aria-hidden
    >
      <path
        d="M1 1l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
