import {
  PageHero,
  SectionHead,
  CtaBand,
} from "../components/sections";
import { Reveal, Stagger, StaggerItem } from "../components/motion";
import { paymentTestimonials } from "../data/testimonials";
import { img, links } from "../data/site";
import styles from "./PaymentPlans.module.css";

const props = [
  { num: "0%", text: "APR options available on qualifying plans" },
  { num: "5.99%", text: "Interest-bearing plans with APRs as low as this" },
  { num: "60s", text: "To apply — no hard credit checks, ever" },
  { num: "$0", text: "Hidden fees. Simple, transparent payments" },
];

const steps = [
  {
    title: "See If You Qualify",
    text: "Complete a 60-second application with no impact to your credit score.",
  },
  {
    title: "Get Your Care",
    text: "Use your approval toward any treatment or package at the spa.",
  },
  {
    title: "Pay Over Time",
    text: "Choose the plan length that works for you, including 0% APR options.",
  },
];

export function PaymentPlans() {
  return (
    <>
      <PageHero
        eyebrow="Payment Plans"
        title="Treat Now, Pay Later"
        subtitle="Flexible financing through Cherry makes your favorite treatments more accessible — with no hard credit checks and true 0% APR options."
        image={img(
          "payment-plans__section-see-an-example-of-what-you-could-pay__role-hero__see-an-example-of-what-you-could-pay__008.webp",
        )}
        compact
      />

      <section className="section container">
        <SectionHead
          eyebrow="Why Cherry"
          title="Financing That Feels Effortless"
          center
        >
          Split your payments into manageable amounts and get the care you want,
          when you want it.
        </SectionHead>
        <Stagger className={styles.props}>
          {props.map((p) => (
            <StaggerItem key={p.text} className={styles.prop}>
              <div className={styles.propNum}>{p.num}</div>
              <div className={styles.propText}>{p.text}</div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="center" style={{ marginTop: "3rem" }}>
          <a href={links.cherry} target="_blank" rel="noreferrer" className="btn">
            <span>See If You Qualify</span>
          </a>
        </Reveal>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <SectionHead
            eyebrow="How It Works"
            title="Three Simple Steps"
            center
          />
          <Stagger className={styles.steps}>
            {steps.map((s) => (
              <StaggerItem key={s.title} className={styles.step}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepText}>{s.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section container">
        <SectionHead
          eyebrow="What Our Customers Say"
          title="Real Stories, Real Ease"
          center
        />
        <Stagger className={styles.quotes}>
          {paymentTestimonials.map((t) => (
            <StaggerItem key={t.name} className={styles.quote}>
              <p className={styles.quoteText}>“{t.quote}”</p>
              <div className={styles.quoteName}>{t.name}</div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal style={{ marginTop: "3.5rem" }}>
          <p className={styles.disclaimer}>
            Example payment amounts and 0% APR or other promotional rates are
            subject to eligibility and creditworthiness. Financing is provided
            by Cherry Technologies, Inc. (NMLS #2061234) and its lending.
            See {links.cherry} for terms, lending partners, and
            accessibility information.
          </p>
        </Reveal>
      </section>

      <CtaBand
        image={img(
          "memberships-2__section-general__role-content__woman-lying-with-eyes-closed-while-beautician__023.jpg",
        )}
        eyebrow="Ready to Begin"
        title="Book Now, Pay Over Time"
        text="Schedule your treatment today and apply with Cherry at checkout."
      />
    </>
  );
}
