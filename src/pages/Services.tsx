import { Link } from "react-router-dom";
import { serviceCategories } from "../data/services";
import { PageHero, SectionHead, CtaBand } from "../components/sections";
import { Stagger, StaggerItem } from "../components/motion";
import { img } from "../data/site";
import styles from "./Services.module.css";

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Curated Care, Refined Results"
        subtitle="From brows and lashes to injectables, contouring, and massage — every treatment is thoughtfully designed to reveal your most radiant, confident self."
        image={img(
          "home__section-general__role-content__spa-gallery-long-2-scaled__051.webp",
        )}
      />

      <section className="section container">
        <SectionHead
          eyebrow="Explore"
          title="Find the Right Service for You"
          center
        >
          Browse our full menu of medical spa treatments, each performed by
          expert providers in a calm, luxurious setting.
        </SectionHead>

        <Stagger className={styles.grid}>
          {serviceCategories.map((s, i) => (
            <StaggerItem key={s.slug}>
              <Link to={`/services/${s.slug}`} className={styles.card}>
                <div className={styles.cardMedia}>
                  <img src={s.cardImage} alt="" loading="lazy" />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardIndex}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.cardTitle}>{s.navLabel}</h3>
                  <p className={styles.cardBlurb}>{s.cardBlurb}</p>
                  <span className={styles.cardArrow}>Explore →</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand
        image={img(
          "home__section-general__role-background__spa-entrance-2__036.webp",
        )}
        title="Not Sure Where to Begin?"
        text="Schedule a consultation and our team will craft a personalized plan for your goals."
      />
    </>
  );
}
