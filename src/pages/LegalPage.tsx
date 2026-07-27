import { PageHero } from "../components/sections";
import { Reveal } from "../components/motion";
import { site, img } from "../data/site";
import styles from "./LegalPage.module.css";

type Kind = "terms" | "accessibility";

const HERO = img(
  "home__section-general__role-background__blog-list-img-10__029.webp",
);

export function LegalPage({ kind }: { kind: Kind }) {
  const meta =
    kind === "terms"
      ? { eyebrow: "Legal", title: "Terms of Use" }
      : { eyebrow: "Legal", title: "Accessibility Statement" };

  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title={meta.title}
        image={HERO}
        compact
      />
      <section className="section container">
        <Reveal className={styles.prose}>
          {kind === "terms" ? <Terms /> : <Accessibility />}
        </Reveal>
      </section>
    </>
  );
}

function Terms() {
  return (
    <>
      <p className={styles.updated}>Please Read Carefully</p>
      <p>
        Welcome to {site.name}. By accessing or using our website, you agree to
        be bound by these Terms of Use and all applicable laws and regulations.
        If you do not agree with any part of these terms, please do not use this
        website.
      </p>

      <h2>1. Use of the Website</h2>
      <p>
        This website is provided for your general information and personal use.
        You agree to use it only for lawful purposes and in a way that does not
        infringe the rights of, or restrict or inhibit the use and enjoyment of,
        this site by any third party.
      </p>

      <h2>2. Medical Disclaimer</h2>
      <p>
        Content on this website is for informational purposes only and is not
        intended as medical advice. Results from treatments vary by individual.
        Always consult with a qualified provider at our spa before beginning any
        treatment.
      </p>

      <h2>3. Appointments &amp; Services</h2>
      <p>
        Descriptions, pricing, and availability of treatments and packages are
        subject to change without notice. Bookings are confirmed at the time of
        scheduling and may be governed by additional cancellation policies.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        All content on this site — including text, graphics, logos, images, and
        design — is the property of {site.name} or its licensors and is
        protected by applicable trademark and copyright law. You may not
        reproduce, distribute, or reuse any content without prior written
        permission.
      </p>

      <h2>5. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites, including online
        booking, gift certificate, and financing partners. We are not
        responsible for the content or practices of these external sites.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        {site.name} shall not be liable for any direct, indirect, incidental, or
        consequential damages arising from your use of, or inability to use,
        this website or any treatment information contained herein.
      </p>

      <h2>7. Privacy</h2>
      <p>
        Any personal information you submit through our contact or booking forms
        is handled in accordance with applicable privacy laws and used solely to
        respond to your inquiry and manage your care.
      </p>

      <h2>8. Changes to These Terms</h2>
      <p>
        We reserve the right to update or modify these Terms of Use at any time
        without prior notice. Continued use of the website constitutes
        acceptance of any changes.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms of Use are governed by and construed in accordance with the
        laws of the Commonwealth of Pennsylvania. Any disputes shall be subject
        to the exclusive jurisdiction of the courts located in Westmoreland
        County, Pennsylvania.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        Questions about these Terms of Use? Reach us at{" "}
        <a href={site.phoneHref}>{site.phone}</a> or{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </>
  );
}

function Accessibility() {
  return (
    <>
      <p className={styles.updated}>Our Commitment to You</p>

      <h2>General</h2>
      <p>
        {site.name} is committed to ensuring that our website is accessible to
        everyone, including people with disabilities. We strive to provide an
        inclusive online experience and continually work to improve the
        accessibility and usability of our site.
      </p>

      <h2>Accessibility</h2>
      <p>
        We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1
        at level AA. These guidelines explain how to make web content more
        accessible for people with a wide range of disabilities. Our efforts
        include semantic structure, sufficient color contrast, keyboard
        navigation, descriptive text alternatives, and respect for
        reduced-motion preferences.
      </p>

      <h2>Here For You</h2>
      <p>
        Accessibility is an ongoing effort. If you encounter any content or
        functionality on our website that you are unable to access, please let
        us know — we will do our best to provide the information, service, or
        assistance you need through an alternative method.
      </p>

      <h2>Contacting Us</h2>
      <p>
        If you have questions, feedback, or need assistance, please contact us
        at <a href={site.phoneHref}>{site.phone}</a> or{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. You may also visit us
        at {site.address.line1}, {site.address.line2}.
      </p>
    </>
  );
}
