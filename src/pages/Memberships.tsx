import { memberships, membershipsIntro } from "../data/memberships";
import { PageHero, SectionHead, CtaBand } from "../components/sections";
import { Stagger, StaggerItem } from "../components/motion";
import { links, img } from "../data/site";
import styles from "./Memberships.module.css";

export function Memberships() {
  return (
    <>
      <PageHero
        eyebrow="Memberships"
        title="Unlock the Luminous, Polished, Flawless You"
        subtitle={membershipsIntro}
        image={img(
          "memberships-2__section-unlock-the-luminous-polished-flawless-you__role-background__unlock-the-luminous-polished-flawless-you__018.jpg",
        )}
      />

      <section className="section container">
        <SectionHead
          eyebrow="Feel Radiant All Year"
          title="Choose Your Club"
          center
        >
          Members enjoy exclusive pricing, monthly treatments, and luxurious
          perks designed to keep your skin glowing and your body restored.
        </SectionHead>

        <Stagger className={styles.grid}>
          {memberships.map((m) => (
            <StaggerItem key={m.name}>
              <article
                className={`${styles.card} ${m.featured ? styles.featured : ""}`}
              >
                <div className={styles.media}>
                  <img src={m.image} alt="" loading="lazy" />
                </div>
                <div className={styles.body}>
                  {m.highlight && (
                    <span className={styles.badge}>{m.highlight}</span>
                  )}
                  <h3 className={styles.name}>{m.name}</h3>
                  <div className={styles.price}>{m.price}</div>
                  <div className={styles.commit}>{m.commitment}</div>
                  <ul className={styles.perks}>
                    {m.perks.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <a
                    href={links.booking}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light"
                  >
                    <span>Join the Club</span>
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand
        image={img(
          "memberships-2__section-general__role-content__spa-face-massage-woman-getting-spa-treatment__025.webp",
        )}
        title="Enjoy the Renewal, Beauty, and Glow You've Been Craving"
        text="Become a member today and elevate your self-care with priority booking and personalized beauty all month long."
      />
    </>
  );
}
