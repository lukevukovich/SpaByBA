import { packageGroups, bundles, packagesIntro } from "../data/packages";
import {
  PageHero,
  SectionHead,
  SplitFeature,
  CtaBand,
  BookButton,
} from "../components/sections";
import { Reveal, Stagger, StaggerItem } from "../components/motion";
import { links, img } from "../data/site";
import styles from "./Packages.module.css";

export function Packages() {
  return (
    <>
      <PageHero
        eyebrow="Our Packages"
        title="Reveal Your Best Look Yet"
        subtitle={packagesIntro}
        image={img(
          "packages-2__section-general__role-content__hydrafacial2-650x650__047.webp",
        )}
      />

      <section className="section container">
        <div className={styles.groupStack}>
          {packageGroups.map((group, i) => (
            <SplitFeature
              key={group.heading}
              image={group.image}
              reverse={i % 2 === 1}
            >
              <p className="eyebrow" style={{ color: "var(--accent)" }}>
                Package
              </p>
              <h3 className="h3" style={{ margin: "0.6rem 0 0.4rem" }}>
                {group.heading}
              </h3>
              {group.blurb && <p className="muted">{group.blurb}</p>}
              <ul className={styles.items}>
                {group.items.map((item, idx) => (
                  <li key={`${item.name}-${idx}`} className={styles.item}>
                    <div>
                      <span className={styles.itemName}>{item.name}</span>
                      {item.addOn && <span className={styles.tag}>Add-On</span>}
                      {item.description && (
                        <p className={styles.itemDesc}>{item.description}</p>
                      )}
                    </div>
                    {item.price ? (
                      <span className={styles.itemPrice}>{item.price}</span>
                    ) : (
                      <span className={styles.tag}>Consult</span>
                    )}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "1.6rem" }}>
                <a
                  href={links.booking}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  Purchase This Package →
                </a>
              </div>
            </SplitFeature>
          ))}
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <SectionHead
            eyebrow="Indulge in the Very Best"
            title="Signature Skin Bundles"
            center
          >
            Confidence starts with skin you love. Our curated bundles combine
            our most effective treatments at exceptional value.
          </SectionHead>
          <Stagger className={styles.bundleGrid}>
            {bundles.map((b) => (
              <StaggerItem key={b.name}>
                <article className={styles.bundle}>
                  <div className={styles.bundleMedia}>
                    <img src={b.image} alt="" loading="lazy" />
                  </div>
                  <div className={styles.bundleBody}>
                    <h3 className={styles.bundleName}>{b.name}</h3>
                    <div className={styles.bundlePrice}>{b.price}</div>
                    <div className={styles.bundleValue}>{b.value}</div>
                    <ul className={styles.bundleList}>
                      {b.includes.map((inc) => (
                        <li key={inc}>{inc}</li>
                      ))}
                    </ul>
                    <BookButton
                      label="Purchase Package"
                      variant="btn-outline"
                    />
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Reveal>
        <CtaBand
          image={img(
            "packages-2__section-general__role-content__cosmetologist-applying-mask-on-woman-s-face-i__050.webp",
          )}
          title="Confidence Starts With Skin You Love"
          text="Book your first session and begin your transformation with The Med Spa by B.A."
        />
      </Reveal>
    </>
  );
}
