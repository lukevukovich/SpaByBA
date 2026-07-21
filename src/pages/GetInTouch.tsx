import { site, links, img } from "../data/site";
import { PageHero, SectionHead } from "../components/sections";
import { Reveal } from "../components/motion";
import styles from "./GetInTouch.module.css";

export function GetInTouch() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="With Us"
        subtitle="We'd love to hear from you. Reach out to book a consultation, ask a question, or simply say hello — our team is here to help."
        image={img(
          "home__section-general__role-background__blog-list-img-10__029.webp",
        )}
        compact
      />

      <section className="section container">
        <div className={styles.layout}>
          <Reveal direction="right">
            <p className="eyebrow">Contact</p>
            <h2 className="h2" style={{ margin: "1rem 0 2rem" }}>
              Let's Connect
            </h2>

            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Location</div>
              <div className={styles.infoValue}>
                {site.address.line1}
                <br />
                {site.address.line2}
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Call Us</div>
              <div className={styles.infoValue}>
                <a href={site.phoneHref}>{site.phone}</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Email Us</div>
              <div className={styles.infoValue}>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Our Hours</div>
              <div style={{ marginTop: "0.6rem" }}>
                {site.hours.map((h) => (
                  <div key={h.days} className={styles.hoursRow}>
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

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
              <a
                href={links.booking}
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{ marginLeft: "0.4rem" }}
              >
                <span>Book Now</span>
              </a>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className={styles.formCard}>
              <iframe
                className={styles.formFrame}
                src={site.formEmbed}
                title="Contact & consultation form"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight container">
        <SectionHead eyebrow="Find Us" title="Visit the Spa" center>
          Conveniently located in North Huntingdon, PA.
        </SectionHead>
        <Reveal className={styles.map}>
          <iframe
            className={styles.mapFrame}
            src={site.mapEmbed}
            title="Map to The Med Spa by B.A."
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </>
  );
}

function IgIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 8.5V7c0-.8.5-1 1-1h1.5V3H14c-2 0-3.5 1.4-3.5 3.5v2H8V12h2.5v9h3.5v-9h2.3l.5-3.5H14z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
