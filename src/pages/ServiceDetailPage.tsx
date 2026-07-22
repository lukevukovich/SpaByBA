import { useParams, Link, Navigate } from "react-router-dom";
import {
  getService,
  type ServiceBlock,
  type Treatment,
} from "../data/services";
import {
  PageHero,
  SplitFeature,
  CtaBand,
  BookButton,
} from "../components/sections";
import { Reveal } from "../components/motion";
import { img } from "../data/site";
import styles from "./ServiceDetail.module.css";

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      <PageHero
        eyebrow={service.heroEyebrow}
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        image={service.heroImage}
        note={service.note}
      />

      <section className="section container">
        {service.intro && (
          <Reveal className="center max-60 mx-auto" style={undefined}>
            <p className="lead" style={{ textAlign: "center" }}>
              {service.intro}
            </p>
            <div className="divider center-line" />
          </Reveal>
        )}

        <div
          className={styles.stack}
          style={{ marginTop: service.intro ? "3rem" : 0 }}
        >
          {service.blocks.map((block, i) => (
            <SplitFeature
              key={block.heading}
              image={block.image}
              reverse={i % 2 === 1}
            >
              <BlockContent block={block} />
            </SplitFeature>
          ))}
        </div>

        <Reveal className="center" style={{ marginTop: "4rem" }}>
          <BookButton label="Book This Service" />
          <div style={{ marginTop: "1.5rem" }}>
            <Link to="/services" className="link-underline">
              ← All Services
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaBand
        image={img(
          "home__section-general__role-background__spa-towel-area__039.webp",
        )}
        title="Your Best Skin Starts Here"
        text="Book your visit and let our expert providers craft a treatment tailored to you."
      />
    </>
  );
}

function BlockContent({ block }: { block: ServiceBlock }) {
  return (
    <div>
      {block.subheading && (
        <p className={`eyebrow ${styles.blockSub}`}>{block.subheading}</p>
      )}
      <h3 className={`h3 ${styles.blockHead}`}>{block.heading}</h3>
      {block.body && <p className={styles.blockBody}>{block.body}</p>}
      {block.treatments && (
        <ul className={styles.treatments}>
          {block.treatments.map((t, idx) => (
            <TreatmentRow key={`${t.name}-${idx}`} t={t} />
          ))}
        </ul>
      )}
    </div>
  );
}

function TreatmentRow({ t }: { t: Treatment }) {
  return (
    <li className={styles.treatment}>
      <div>
        <span className={styles.tName}>{t.name}</span>
        {t.duration && <span className={styles.tDuration}>{t.duration}</span>}
        {t.description && <p className={styles.tDesc}>{t.description}</p>}
      </div>
      {t.price && <span className={styles.tPrice}>{t.price}</span>}
    </li>
  );
}
