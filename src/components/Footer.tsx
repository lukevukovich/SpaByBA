import { Link } from "react-router-dom";
import { site, links, LOGO } from "../data/site";
import { serviceCategories } from "../data/services";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandBlock}>
            <img src={LOGO} alt="" className={styles.logo} />
            <div className={styles.brandName}>The Med Spa by B.A.</div>
            <p className={styles.tagline}>
              Indulge in the best for your body and skin. A luxury medical spa
              experience in North Huntingdon, PA.
            </p>
            <div className={styles.socials}>
              <a
                className={styles.social}
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <IgIcon />
              </a>
              <a
                className={styles.social}
                href={links.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FbIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className={styles.colTitle}>Services</h3>
            <ul className={styles.list}>
              {serviceCategories.map((s) => (
                <li key={s.slug}>
                  <Link className={styles.link} to={`/services/${s.slug}`}>
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Explore</h3>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} to="/packages">
                  Packages
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/memberships">
                  Memberships
                </Link>
              </li>
              <li>
                <a
                  className={styles.link}
                  href={links.giftCertificates}
                  target="_blank"
                  rel="noreferrer"
                >
                  Gift Certificates
                </a>
              </li>
              <li>
                <Link className={styles.link} to="/get-in-touch">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/get-in-touch/payment-plans">
                  Payment Plans
                </Link>
              </li>
              <li>
                <a
                  className={styles.link}
                  href={links.booking}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book an Appointment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Visit Us</h3>
            <div className={styles.contactItem}>
              <strong>Location</strong>
              {site.address.line1}
              <br />
              {site.address.line2}
            </div>
            <div className={styles.contactItem}>
              <strong>Contact</strong>
              <a className={styles.link} href={site.phoneHref}>
                {site.phone}
              </a>
              <br />
              <a className={styles.link} href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
            <div className={styles.contactItem}>
              <strong>Hours</strong>
              Mon–Thu 10am–8pm
              <br />
              Fri–Sat 10am–4pm · Sun Closed
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} The Med Spa by B.A. All rights reserved.</span>
          <div className={styles.bottomLinks}>
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/accessibility-statement">Accessibility</Link>
            <Link to="/get-in-touch/payment-plans">Payment Plans</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}
function FbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 8.5V7c0-.8.5-1 1-1h1.5V3H14c-2 0-3.5 1.4-3.5 3.5v2H8V12h2.5v9h3.5v-9h2.3l.5-3.5H14z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
