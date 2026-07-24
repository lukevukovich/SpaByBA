import { img } from "./site";
import { links } from "./site";

export interface TeamMember {
  name: string;
  /** short role / credential line shown under the name */
  role?: string;
  /** one or more biography paragraphs */
  bio: string[];
  image: string;
}

export interface FounderLink {
  label: string;
  href: string;
}

export interface AboutContent {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: string;
  };
  /** Opening "this is where feeling good looks great" block */
  intro: {
    heading: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
  /** Rotating-style headline between intro and founder */
  bannerHeadline: {
    lead: string;
    highlight: string;
  };
  founder: {
    name: string;
    title: string;
    bio: string[];
    image: string;
    signature: string;
    ownerNote: string;
    ownerLinks: FounderLink[];
  };
  team: {
    eyebrow: string;
    titleLead: string;
    titleHighlight: string;
    members: TeamMember[];
  };
  closing: {
    heading: string;
    body: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    highlightLead: string;
    highlightWord: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    intro: string;
    images: string[];
  };
  video: {
    heading: string;
    youtubeId: string;
    callLabel: string;
    callHref: string;
    bookLabel: string;
    bookHref: string;
  };
  cta: {
    title: string;
    text: string;
    image: string;
  };
}

export const about: AboutContent = {
  hero: {
    eyebrow: "About Us",
    title: "This Is Where Feeling Good Looks Great",
    subtitle:
      "A sanctuary of serenity and holistic wellness, where the timeless wisdom of traditional therapies meets contemporary technique.",
    image: img(
      "home__section-indulge-in-rejuvenation-tranquility-radiance__role-background__indulge-in-rejuvenation-tranquility-radiance__027.webp",
    ),
  },
  intro: {
    heading: "This Is Where Feeling Good Looks Great",
    body: "A sanctuary of serenity and holistic wellness. Here, we blend the timeless wisdom of traditional therapies with contemporary techniques to create a unique spa experience. Our dedicated team of professionals is committed to providing personalized treatments that cater to your individual needs, ensuring a journey of rejuvenation that transcends the ordinary. At The Spa by B.A., we believe in nurturing the body, mind, and spirit, offering you a haven where tranquility meets luxury.",
    ctaLabel: "Book Your Appointment Today",
    ctaHref: links.booking,
  },
  bannerHeadline: {
    lead: "Your beauty, your wellness,",
    highlight: "our passion",
  },
  founder: {
    name: "Hi, I'm Katie Jessup",
    title: "Co-Founder of The Med Spa by B.A.",
    bio: [
      "the Co-Founder of The Med Spa by B.A. With a background in the beauty industry, Katie recognized a growing need in the community for high-quality, trusted, and results-driven med spa treatments in a client-focused, spa like environment. Driven by a passion for both beauty and well-being, Katie created The Med Spa by B.A. to offer services that bridge the gap between clinical expertise and luxury care. Since opening, the spa has become trusted destination for clients seeking advanced treatments such as Botox, dermal fillers, laser therapies, skin rejuvenation, and more.",
      "Katie is also the proud owner of Bella Amici Salon, which she has successfully operated for over 15 years. Through her work in the beauty industry, she developed a deep understanding of her clients' evolving needs—especially the desire for advanced aesthetic services delivered with the same care, trust, and expertise that made Bella Amici a local favorite.",
      "While Katie leads with vision and purpose, it's the dedication and performance of her expert team that truly set the spa apart. Together, Katie and her staff work to ensure that every client feels confident, heard, and cared for—leaving each appointment looking and feeling their absolute best.",
    ],
    signature: img(
      "about-us-2__section-hi-i-m-katie-jessup__role-icon__katie-signature__006.webp",
    ),
    image: img(
      "about-us-2__section-hi-i-m-katie-jessup__role-background__hi-i-m-katie-jessup__060.webp",
    ),
    ownerNote: "Proud owner of",
    ownerLinks: [
      { label: "The Medspa by B.A.", href: "/" },
      { label: "Bella Amici Salon", href: links.salon },
    ],
  },
  team: {
    eyebrow: "Our Team",
    titleLead: "Meet the Experts Behind Your",
    titleHighlight: "Glow",
    members: [
      {
        name: "Carly",
        role: "Licensed Esthetician and Massage Therapist",
        bio: [
          "Carly is a licensed Esthetician and Massage Therapist with over 10 years of experience in the wellness and aesthetics industry. Her expertise bridges the gap between clinical skincare and holistic wellness, offering clients results driven treatments in a calming, professional environment. Whether addressing chronic tension, aging concerns, or simply supporting self-care routines, Carly's mission is to promote lasting wellness inside and out.",
        ],
        image: img("about-us-2__section-carly__role-content__carly__009.webp"),
      },
      {
        name: "Danielle",
        role: "Certified Nurse Practitioner",
        bio: [
          "Danielle Marsh-Slavin is a nationally certified Nurse Practitioner and advanced injector specializing in natural, elegant aesthetic outcomes. She is known for her meticulous eye, gentle technique, and refined approach to facial harmony.",
          "Driven by a passion for continued education and the evolving art of aesthetic medicine, Danielle remains at the forefront of new technologies and treatment modalities, continuously pursuing advanced training and collaborative learning. She offers expert treatment with neuromodulators, dermal fillers, Sculptra®, and multi-modality treatment plans tailored to each patient's unique features and goals. Her care is grounded in precision, transparency, and a deep understanding of facial anatomy. Whether guiding someone through their first consultation or a long-term rejuvenation plan, Danielle blends artistry with professionalism to help patients feel like the best version of themselves.",
        ],
        image: img(
          "about-us-2__section-danielle__role-content__danielle__019.webp",
        ),
      },
      {
        name: "Roni",
        bio: [],
        image: img("about-us-2__section-roni__role-content__roni__026.webp"),
      },
      {
        name: "Maddi",
        role: "Licensed Esthetician and Massage Therapist",
        bio: [
          "Maddi is a licensed Esthetician and Massage Therapist dedicated to helping clients achieve healthier skin and greater relaxation. With a focus on both skincare and bodywork, she provides personalized treatments that combine results-driven care with a calming, professional touch.",
          "Whether easing muscle tension, supporting skin health, or encouraging everyday self-care, Maddi's goal is to leave every client feeling refreshed and renewed.",
        ],
        image: img("about-us-2__section-maddi__role-content__maddi__036.webp"),
      },
      {
        name: "Dr. Matthew Glenn",
        role: "Board Certified Osteopathic & Family Medicine Physician",
        bio: [
          "Dr. Matthew Glenn, DO is a board-certified family medicine and osteopathic physician with more than two decades of clinical and leadership experience. Before joining our medspa, Dr. Glenn spent over 20 years in emergency medicine, serving as both a practicing physician and a medical director, where he was known for his skill and dedication to patient care.",
          "A graduate of Midwestern University's Chicago College of Osteopathic Medicine, Dr. Glenn completed his residency at St. Francis Medical Center in Pittsburgh, PA, and has remained committed to advancing his medical expertise throughout his career. He holds certifications in advanced trauma, cardiovascular, and pediatric life support, underscoring his depth of training and commitment to safety.",
          "Now, Dr. Glenn brings his knowledge and passion for patient well-being to the field of aesthetics. He helps each client feel at ease, knowing they are in the hands of a physician who values both health and beauty.",
        ],
        image: img(
          "about-us-2__section-dr-matthew-glenn__role-content__dr-matthew-glenn__045.webp",
        ),
      },
    ],
  },
  closing: {
    heading: "Let Us Take Care of You",
    body: "Whether you're here for self-care, transformation, or just a little \u201Cyou\u201D time, our team is dedicated to helping you shine—inside and out.",
    primaryCtaLabel: "Book Your Appointment",
    primaryCtaHref: links.booking,
    secondaryCtaLabel: "Schedule Your Consultation",
    secondaryCtaHref: links.booking,
    highlightLead: "each experience is all about",
    highlightWord: "you",
  },
  gallery: {
    eyebrow: "The Space",
    title: "A Haven Where Tranquility Meets Luxury",
    intro:
      "Every corner of The Med Spa by B.A. is meticulously crafted to prioritize your comfort — an oasis of calm designed around you.",
    images: [
      img(
        "about-us-2__section-general__role-content__spa-entrance-2__094.webp",
      ),
      img(
        "about-us-2__section-general__role-content__spa-by-ba-banner-1__119.webp",
      ),
      img("about-us-2__section-general__role-content__spa-seating__100.webp"),
      img(
        "about-us-2__section-general__role-content__spa-towel-area__103.webp",
      ),
      img("about-us-2__section-general__role-content__spa-bed-2__106.webp"),
      img("about-us-2__section-general__role-content__spa-shower__109.webp"),
    ],
  },
  video: {
    heading: "This Is Where Your Self-Care Journey Begins",
    youtubeId: "qQ9CceQi9oQ",
    callLabel: "Questions? Speak with Our Staff",
    callHref: "tel:+17246095043",
    bookLabel: "Book Your Consultation",
    bookHref: links.booking,
  },
  cta: {
    title: "Let Us Take Care of You",
    text: "Whether you're here for self-care, transformation, or just a little \u201Cyou\u201D time, our team is dedicated to helping you shine—inside and out.",
    image: img(
      "about-us-2__section-general__role-hero__spa-by-ba-banner__098.webp",
    ),
  },
};
