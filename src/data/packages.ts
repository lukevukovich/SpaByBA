import { img } from "./site";

export interface PackageItem {
  name: string;
  price?: string;
  value?: string;
  description?: string;
  includes?: string[];
  addOn?: boolean;
}

export interface PackageGroup {
  heading: string;
  blurb?: string;
  image: string;
  items: PackageItem[];
}

export const packagesIntro =
  "Unlock exclusive access to our most sought-after treatments — Hydrafacials, Microneedling, Laser, Cryotherapy, Salmon Sperm DNA, and Chemical Peels — all at member-preferred rates.";

export const packageGroups: PackageGroup[] = [
  {
    heading: "Hydrafacials",
    blurb:
      "Deep-cleansing, brightening, firming, and clarifying — choose the series that fits your skin.",
    image: img(
      "packages-2__section-hydrafacials__role-content__hydrafacial2__013.webp",
    ),
    items: [
      {
        name: "Signature Hydrafacials — Series of 3 (Full Face)",
        price: "$500",
        description:
          "HydraGlow, HydraBright, HydraFirm, and HydraClear protocols leave skin soft, smooth, and glowing.",
      },
      {
        name: "Signature Hydrafacials — Series of 6 (Full Face)",
        price: "$950",
        description:
          "Six sessions of our signature protocols for lasting radiance and even tone.",
      },
    ],
  },
  {
    heading: "Chemical Peels",
    blurb:
      "Advanced VI Peels to refine texture, brighten, and reveal luminous skin.",
    image: img(
      "packages-2__section-chemical-peels__role-content__pexels-arina-krasnikova-6663368__016.webp",
    ),
    items: [
      {
        name: "VI Peel — 3 sessions",
        price: "$675",
        description:
          "Reduces discoloration and smooths texture for refreshed, luminous skin.",
      },
      {
        name: "VI Peel Precision / Plus — 3 sessions",
        price: "$825",
        description:
          "Targets pigmentation and fine lines for smoother, more even, radiant skin.",
      },
      {
        name: "VI Peel Advanced — 3 sessions",
        price: "$900",
        description: "A revitalizing peel for texture, tone, and clarity.",
      },
      {
        name: "VI Purify — 3 sessions",
        description:
          "Designed for blemish-prone skin — excess oil, clogged pores, and uneven tone.",
      },
    ],
  },
  {
    heading: "Microneedling",
    blurb:
      "Collagen induction for firmer, smoother, revitalized skin — face, neck, and chest.",
    image: img(
      "packages-2__section-microneedling__role-content__cosmetologist-making-mesotherapy-injection-wi__019.webp",
    ),
    items: [
      { name: "Microneedling Neck — Series of 3", price: "$650" },
      { name: "Microneedling Full Face — Series of 3", price: "$800" },
      { name: "Microneedling Chest — Series of 3", price: "$875" },
      { name: "Microneedling Full Face & Neck — Series of 3", price: "$1,250" },
      { name: "Microneedling Full Face — Series of 6", price: "$1,500" },
      {
        name: "Microneedling Full Face, Neck & Chest — Series of 3",
        price: "$1,600",
      },
      { name: "Microneedling with RF Neck — Series of 3", price: "$1,800" },
      {
        name: "Microneedling with RF Full Face — Series of 3",
        price: "$2,100",
      },
      { name: "Microneedling with RF Chest — Series of 3", price: "$2,400" },
      {
        name: "Microneedling with RF Face & Neck — Series of 3",
        price: "$2,700",
      },
    ],
  },
  {
    heading: "Enhancements",
    blurb: "Elevate any series with a nourishing, regenerative add-on.",
    image: img(
      "packages-2__section-enhancements__role-content__cosmetologist-applying-mask-on-woman-s-face-i__022.webp",
    ),
    items: [
      {
        name: "Growth Factor Add-On — Series of 3",
        price: "$350",
        addOn: true,
        description:
          "Proteins that support repair and renewal for a revitalized glow.",
      },
      {
        name: "Salmon Sperm DNA Add-On — Series of 3",
        price: "$699",
        addOn: true,
        description:
          "Concentrated Salmon DNA infusion for a nourished, luminous finish.",
      },
    ],
  },
  {
    heading: "Laser Treatments",
    blurb: "Non-invasive muscle and facial sculpting. Consultation required.",
    image: img(
      "packages-2__section-laser-treatments__role-service__emsculpt-neo2__025.webp",
    ),
    items: [
      {
        name: "Emsculpt Neo",
        description:
          "Builds muscle and burns fat for a toned, lifted look. Consultation required.",
      },
      {
        name: "Emface",
        description:
          "Non-surgical facial sculpting that tones, lifts, and tightens. Consultation required.",
      },
      {
        name: "Emsculpt Neo + Emface",
        description:
          "Combined body and facial sculpting. Consultation required.",
      },
    ],
  },
  {
    heading: "Cryo",
    blurb:
      "Cooling cryotherapy for tighter, more sculpted contours. Consultation required.",
    image: img(
      "packages-2__section-cryo__role-service__lasertreatment6__028.webp",
    ),
    items: [
      {
        name: "Cryo Facial",
        description:
          "Cooling facial tightening and toning for a refreshed, lifted, radiant look.",
      },
      {
        name: "Cryo Slimming Body Session",
        description:
          "Targets stubborn fat and firms problem areas for smoother contours.",
      },
    ],
  },
];

export interface Bundle {
  name: string;
  price: string;
  value: string;
  includes: string[];
  image: string;
}

export const bundles: Bundle[] = [
  {
    name: "Renew Package",
    price: "$1,170",
    value: "Value of $1,445",
    image: img(
      "packages-2__section-renew-package__role-content__young-woman-receiving-beauty-injection-on-her__031.webp",
    ),
    includes: [
      "2 Microneedling Treatments",
      "1 Chemical Peel",
      "20 Units of Tox",
      "1 Skin System Starter Kit ($250 Value)",
    ],
  },
  {
    name: "Refresh Package",
    price: "$1,700",
    value: "Value of $1,990",
    image: img(
      "packages-2__section-refresh-package__role-content__hydrafacial__034.webp",
    ),
    includes: [
      "1 Microneedling Treatment",
      "3 Hydrafacial Treatments",
      "1 Skin System Starter Kit ($250 Value)",
    ],
  },
  {
    name: "Rejuvenate Package",
    price: "$4,120",
    value: "Value of $5,150",
    image: img(
      "packages-2__section-rejuvenate-package__role-content__cosmetologist-does-prp-therapy-on-the-face-of__037.webp",
    ),
    includes: [
      "3 Microneedling Treatments",
      "3 Hydrafacial Treatments",
      "40 Units of Tox",
      "2 Syringes of Filler",
      "1 Skin System Starter Kit ($250 Value)",
    ],
  },
];
