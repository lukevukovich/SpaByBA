import { Link } from "react-router-dom";
import { about, type TeamMember } from "../data/about";
import {
  PageHero,
  SplitFeature,
  BookButton,
  CtaBand,
  SectionHead,
} from "../components/sections";
import { Reveal, Stagger, StaggerItem } from "../components/motion";
import styles from "./AboutUs.module.css";

export function AboutUs() {
  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        subtitle={about.hero.subtitle}
        image={about.hero.image}
      />

      {/* Intro */}
      <section className="section container">
        <Reveal className={styles.intro}>
          <h2 className="h2">{about.intro.heading}</h2>
          <p className="lead muted">{about.intro.body}</p>
          <BookButton label={about.intro.ctaLabel} href={about.intro.ctaHref} />
        </Reveal>
      </section>

      {/* Banner headline */}
      <section className={styles.banner}>
        <div className="container">
          <Reveal className={styles.bannerInner}>
            <h3 className={styles.bannerHeadline}>
              {about.bannerHeadline.lead}{" "}
              <span className={styles.bannerHighlight}>
                {about.bannerHeadline.highlight}
              </span>
            </h3>
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="section bg-alt">
        <div className="container">
          <SplitFeature image={about.founder.image}>
            <p className="eyebrow">{about.founder.title}</p>
            <h2 className="h2" style={{ margin: "1rem 0 1.6rem" }}>
              {about.founder.name}
            </h2>
            {about.founder.bio.map((p, i) => (
              <p key={i} className={i === 0 ? "lead" : "muted"}>
                {p}
              </p>
            ))}
            <img
              src={about.founder.signature}
              alt="Katie Jessup signature"
              className={styles.signature}
              loading="lazy"
            />
            <p className={styles.ownerNote}>
              {about.founder.ownerNote}{" "}
              {about.founder.ownerLinks.map((link, i) => (
                <span key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link to={link.href} className="link-underline">
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline"
                    >
                      {link.label}
                    </a>
                  )}
                  {i < about.founder.ownerLinks.length - 1 ? " and " : ""}
                </span>
              ))}
            </p>
          </SplitFeature>
        </div>
      </section>

      {/* Team */}
      <section className="section container">
        <Reveal className={styles.teamHead}>
          <p className="eyebrow">{about.team.eyebrow}</p>
          <h2 className={`h2 ${styles.teamTitle}`}>
            {about.team.titleLead}{" "}
            <span className={styles.teamHighlight}>
              {about.team.titleHighlight}
            </span>
          </h2>
        </Reveal>

        <div className={styles.teamStack}>
          {about.team.members.map((m, i) => (
            <SplitFeature key={m.name} image={m.image} reverse={i % 2 === 1}>
              <TeamBio member={m} />
            </SplitFeature>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="section bg-deep">
        <div className="container">
          <Reveal className={styles.closing}>
            <h2 className="h2" style={{ marginBottom: "1.4rem" }}>
              {about.closing.heading}
            </h2>
            <p className="lead">{about.closing.body}</p>
            <div className={styles.closingCtas}>
              <BookButton
                label={about.closing.primaryCtaLabel}
                href={about.closing.primaryCtaHref}
              />
              <BookButton
                label={about.closing.secondaryCtaLabel}
                href={about.closing.secondaryCtaHref}
                variant="btn-outline"
              />
            </div>
            <p className={styles.closingHighlight}>
              {about.closing.highlightLead}{" "}
              <span className={styles.bannerHighlight}>
                {about.closing.highlightWord}
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="section container">
        <SectionHead
          eyebrow={about.gallery.eyebrow}
          title={about.gallery.title}
          center
        >
          {about.gallery.intro}
        </SectionHead>
        <Stagger className={styles.gallery} gap={0.1}>
          {about.gallery.images.map((src, i) => (
            <StaggerItem key={i} className={styles.galleryItem}>
              <img src={src} alt="" loading="lazy" />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Video */}
      <section className="section bg-alt">
        <div className="container">
          <div className={styles.video}>
            <Reveal className={styles.videoMedia} direction="right">
              <iframe
                src={`https://www.youtube.com/embed/${about.video.youtubeId}?rel=0`}
                title="The Med Spa by B.A. Flyover"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </Reveal>
            <Reveal className={styles.videoText} direction="left">
              <h2 className="h2" style={{ marginBottom: "1.6rem" }}>
                {about.video.heading}
              </h2>
              <div className={styles.videoCtas}>
                <a href={about.video.callHref} className="btn btn-outline">
                  <span>{about.video.callLabel}</span>
                </a>
                <BookButton
                  label={about.video.bookLabel}
                  href={about.video.bookHref}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        image={about.cta.image}
        eyebrow="Ready When You Are"
        title={about.cta.title}
        text={about.cta.text}
      />
    </>
  );
}

function TeamBio({ member }: { member: TeamMember }) {
  return (
    <div>
      <h3 className={`h3 ${styles.memberName}`}>{member.name}</h3>
      {member.role && <p className={styles.memberRole}>{member.role}</p>}
      {member.bio.map((p, i) => (
        <p key={i} className={styles.memberBio}>
          {p}
        </p>
      ))}
    </div>
  );
}
