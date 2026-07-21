import { img } from "./site";

export interface Treatment {
  name: string;
  description?: string;
  duration?: string;
  price?: string;
}

export interface ServiceBlock {
  heading: string;
  subheading?: string;
  body?: string;
  image: string;
  treatments?: Treatment[];
}

export interface ServiceDetail {
  slug: string;
  navLabel: string;
  /** short label used in menus / cards */
  cardBlurb: string;
  cardImage: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  intro?: string;
  note?: string;
  blocks: ServiceBlock[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "brow-enhancements",
    navLabel: "Brow Enhancements",
    cardBlurb:
      "Expert shaping, tinting, and precision waxing to frame your face flawlessly.",
    cardImage: img(
      "brow-enhancements-2__section-general__role-content__brow-lamination__027.webp",
    ),
    heroEyebrow: "Brow Enhancements",
    heroTitle: "Frame Your Face Flawlessly",
    heroSubtitle:
      "We believe brows are more than a feature — they're a statement. From expert shaping and tinting to precision waxing, our brow services are tailored to enhance your natural beauty.",
    heroImage: img(
      "brow-enhancements-2__section-frame-your-face-flawlessly__role-background__frame-your-face-flawlessly__024.webp",
    ),
    intro:
      "Brows on point, confidence on high — sculpted arches and rich tones that frame your face beautifully.",
    blocks: [
      {
        heading: "Clean Up",
        subheading: "Shape That Turns Heads",
        image: img(
          "brow-enhancements-2__section-clean-up__role-content__the-beauty-procedure-process-moment__013.webp",
        ),
        treatments: [
          {
            name: "Cleanup",
            description:
              "A quick shape and tidy to remove stray hairs, define your natural arch, and keep brows looking polished.",
            price: "$20",
          },
        ],
      },
      {
        heading: "Tints",
        subheading: "Rich, Custom-Blended Color",
        image: img(
          "brow-enhancements-2__section-tints__role-content__master-eyebrowist-makes-eyebrow-correction-to__016.webp",
        ),
        treatments: [
          {
            name: "Brow Tint",
            description:
              "Adds rich, custom-blended color to enhance your brow shape, making them appear fuller and more defined.",
            price: "$30",
          },
        ],
      },
      {
        heading: "It's All in the Arch",
        subheading: "Tint & Shape",
        image: img(
          "brow-enhancements-2__section-general__role-content__master-eyebrowist-makes-eyebrow-correction-to__029.webp",
        ),
        treatments: [
          {
            name: "Brow Tint and Shape",
            description:
              "A custom tint and precise shaping for brows that look fuller, cleaner, and flawlessly defined.",
            price: "$50",
          },
        ],
      },
    ],
  },

  {
    slug: "lash-enhancements",
    navLabel: "Lash Enhancements",
    cardBlurb:
      "Lifts, tints, and keratin treatments for flawless, long-lasting lashes.",
    cardImage: img(
      "redesign2-lash-enhancements__section-general__role-content__lash-lift__025.webp",
    ),
    heroEyebrow: "Lash Enhancements",
    heroTitle: "Lashes for Every Look",
    heroSubtitle:
      "Enhance your natural beauty with expert lash treatments tailored to your style. From lifts to tints, we create flawless, long-lasting results while prioritizing lash health.",
    heroImage: img(
      "redesign2-lash-enhancements__section-lashes-for-every-look__role-background__lashes-for-every-look__021.webp",
    ),
    intro:
      "Lashes that speak volumes — get the lashes you've always dreamed of.",
    blocks: [
      {
        heading: "Lash Tint",
        subheading: "Effortless Definition",
        image: img(
          "redesign2-lash-enhancements__section-general__role-content__eyelash-extension-procedure-woman-eye-with-lo__024.webp",
        ),
        treatments: [
          {
            name: "Lash Tint",
            description:
              "Darkens your natural lashes for a fuller, more striking look — like wearing mascara without the smudge.",
            price: "$30",
          },
        ],
      },
      {
        heading: "Lash Lift",
        subheading: "Bright-Eyed & Open",
        image: img(
          "redesign2-lash-enhancements__section-lifts-and-tints__role-content__make-up-artist-makes-the-procedure-of-laminat__013.webp",
        ),
        treatments: [
          {
            name: "Lash Lift",
            description:
              "Gently curls your natural lashes upward for an open, bright-eyed look — no extensions or curlers needed.",
            price: "$95",
          },
          {
            name: "Keratin Lash Lift and Tint",
            description:
              "Nourishes and strengthens while lifting your lashes, then tints them deep and dark for maximum definition.",
            price: "$150",
          },
        ],
      },
    ],
  },

  {
    slug: "facial-treatments",
    navLabel: "Facial Treatments",
    cardBlurb:
      "Hydrafacials, peels, dermaplaning, and microneedling for luminous skin.",
    cardImage: img(
      "facial-treatments-2__section-general__role-content__hydrafacial2-650x650__060.webp",
    ),
    heroEyebrow: "Facial Treatments",
    heroTitle: "Indulgence You Can Feel, Confidence You Can See",
    heroSubtitle:
      "Renew your radiance with treatments that reveal your healthiest, most luminous skin — from Hydrafacials and dermaplaning to VI Peels and microneedling.",
    heroImage: img(
      "facial-treatments-2__section-indulgence-you-can-feel-confidence-you-can-s__role-background__indulgence-you-can-feel-confidence-you-can-s__047.jpg",
    ),
    blocks: [
      {
        heading: "Facials",
        subheading: "A Refresh for Every Skin",
        image: img(
          "facial-treatments-2__section-facials__role-content__top-view-of-beautiful-woman-lying-with-clay-m__013.webp",
        ),
        treatments: [
          {
            name: "Express Facial",
            description:
              "Quick skin refresh with deep cleanse, gentle exfoliation, extractions, tone, moisturizer, and SPF.",
            price: "$65",
          },
          {
            name: "Dermaplane",
            description:
              "Removes dead skin and peach fuzz for smoother texture and better product absorption.",
            price: "$80",
          },
          {
            name: "Classic Facial",
            duration: "60 min",
            description:
              "Signature cleanse, exfoliate, and nourish for a refreshed glow.",
            price: "$95",
          },
          {
            name: "Lymphatic Drainage Facial",
            description:
              "Detoxifying facial to reduce puffiness and boost circulation.",
            price: "$100",
          },
          {
            name: "Classic Facial",
            duration: "90 min",
            description:
              "Extended hydration and renewal for a brighter, more even complexion.",
            price: "$120",
          },
          {
            name: "Facial with Dermaplane",
            description:
              "Classic facial plus dermaplaning for smoother, brighter skin.",
            price: "$135",
          },
          {
            name: "Rejuvenation Facial",
            description:
              "Targets fine lines, dullness, and uneven texture with vitality and firmness support.",
            price: "$135",
          },
          {
            name: "Back Facial",
            description:
              "Cleanses, exfoliates, and hydrates hard-to-reach back skin.",
            price: "$150",
          },
        ],
      },
      {
        heading: "Medical Facials",
        subheading: "Advanced Hydration & Glow",
        image: img(
          "facial-treatments-2__section-medical-facials__role-content__hydrafacial2__016.webp",
        ),
        treatments: [
          {
            name: "Signature Hydrafacial",
            description:
              "Cleanse, exfoliate, extract, and hydrate with nourishing serums — no downtime.",
            price: "$199",
          },
          {
            name: "Deluxe Hydrafacial",
            description:
              "Signature Hydrafacial plus a customized booster and LED therapy.",
            price: "$250",
          },
          {
            name: "Platinum Hydrafacial",
            description:
              "Lymphatic drainage paired with the full Deluxe protocol.",
            price: "$299",
          },
          {
            name: "CryoFacial",
            description:
              "Cold therapy to reduce puffiness and temporarily tighten the appearance of skin.",
            price: "$250",
          },
          {
            name: "Glow & Go",
            description:
              "Dermaplaning, liquid resurfacing, and VAMP (Salmon DNA/PDRN) for glow and hydration.",
            price: "$265",
          },
        ],
      },
      {
        heading: "Chemical Peels",
        subheading: "Refine Tone & Texture",
        image: img(
          "facial-treatments-2__section-chemical-peels__role-content__chemical-peels__019.jpg",
        ),
        treatments: [
          {
            name: "VI Peel",
            description:
              "Medium-depth peel for brightness, texture, and healthier skin.",
            price: "$250",
          },
          {
            name: "VI Peel Precision / Plus",
            description:
              "Targets pigmentation, sun damage, melasma, and discoloration.",
            price: "$300",
          },
          {
            name: "VI Peel Purify",
            description:
              "For acne-prone skin — breakouts, oil, pores, and acne scars.",
            price: "$300",
          },
          {
            name: "VI Peel Advanced",
            description:
              "A more intensive peel for mature skin and deeper signs of aging.",
            price: "$325",
          },
          {
            name: "VAMP (Post-Chemical Peel Add-on)",
            description:
              "PDRN (Salmon DNA) add-on to calm, hydrate, and support repair.",
            price: "$250",
          },
        ],
      },
      {
        heading: "Microneedling",
        subheading: "Collagen, Reawakened",
        image: img(
          "facial-treatments-2__section-microneedling__role-content__microneedling__022.webp",
        ),
        treatments: [
          {
            name: "Microneedling — Full Face",
            description:
              "Collagen induction for lines, scars, pores, texture, and tone.",
            price: "$375",
          },
          {
            name: "Microneedling — Neck",
            description: "Improves crepey neck skin and firmness.",
            price: "$250",
          },
          {
            name: "Microneedling — Chest",
            description:
              "Helps with sun damage, fine lines, and texture on the décolleté.",
            price: "$325",
          },
          {
            name: "Microneedling — Full Face & Neck",
            description: "Combined face and neck rejuvenation.",
            price: "$425",
          },
          {
            name: "Microneedling — Full Face, Neck & Chest",
            description: "Comprehensive multi-area treatment.",
            price: "$475",
          },
          {
            name: "Microneedling with RF — Full Face",
            description: "RF-assisted collagen remodeling and tightening.",
            price: "$750",
          },
          {
            name: "Microneedling with RF — Neck",
            description: "RF-assisted neck firmness and texture.",
            price: "$650",
          },
          {
            name: "Microneedling with RF — Chest",
            description:
              "RF-assisted chest tightening and texture improvement.",
            price: "$900",
          },
          {
            name: "Microneedling with RF — Face & Neck",
            description: "Comprehensive RF tightening for face and neck.",
            price: "$1000",
          },
        ],
      },
      {
        heading: "Facial Treatment Elevations",
        subheading: "Treat Yourself With These Add-Ons",
        image: img(
          "facial-treatments-2__section-facial-treatment-elevations__role-service__black-woman-face-and-sleeping-in-spa-facial__033.webp",
        ),
        treatments: [
          {
            name: "Speciality Mask",
            description: "Tailored mask for hydration and targeted benefits.",
            price: "$25",
          },
          {
            name: "Enzyme Peel",
            description: "Gentle exfoliation with no downtime.",
            price: "$45",
          },
          {
            name: "Dermaplane Add-On",
            description: "Add-on dermaplaning for smoothness and absorption.",
            price: "$45",
          },
          {
            name: "Emsculpt Neo",
            duration: "10 min add-on",
            description:
              "Adjunctive recovery and wellness support for muscular function.",
            price: "$50",
          },
          {
            name: "Growth Factor",
            description:
              "Protein-based renewal support; add to any facial treatment.",
            price: "$125",
          },
        ],
      },
      {
        heading: "Relaxation Add-Ons",
        subheading: "A Little Extra Calm",
        image: img(
          "facial-treatments-2__section-relaxation-add-ons__role-content__massage-therapy__036.webp",
        ),
        treatments: [
          {
            name: "Scalp Massage",
            description: "Stress relief and revitalizing circulation.",
            price: "$25",
          },
          {
            name: "Extended Hand & Arm Massage",
            description: "Releases arm and hand tension and promotes comfort.",
            price: "$35",
          },
        ],
      },
      {
        heading: "Waxing Enhancements",
        subheading: "Clean, Defined Finish",
        image: img(
          "facial-treatments-2__section-waxing-enhancements__role-content__depilation-and-epilation-female-eyebrow-with__039.webp",
        ),
        treatments: [
          {
            name: "Lip Wax",
            description: "Smooth finish around the lips.",
            price: "$20",
          },
          {
            name: "Eyebrow Wax",
            description: "Clean, defined brow shaping.",
            price: "$25",
          },
        ],
      },
    ],
  },

  {
    slug: "injectables",
    navLabel: "Injectables",
    cardBlurb:
      "Botox, filler, and more — custom enhancements for naturally radiant results.",
    cardImage: img(
      "injectables-2__section-general__role-content__young-woman-receiving-beauty-injection-on-her__043.webp",
    ),
    heroEyebrow: "Injectables",
    heroTitle: "Refreshed, Glowing & Refined",
    heroSubtitle:
      "Subtle enhancements and timeless beauty. Smooth fine lines, restore volume, and define your features for a confident, refreshed look that lasts.",
    heroImage: img(
      "injectables-2__section-refreshed-glowing-and-refined__role-background__refreshed-glowing-and-refined__036.jpg",
    ),
    intro: "Radiate confidence, effortlessly.",
    note: "No downtime · Treatment time 15–30 minutes · Results last 6+ months · Consultation required for all injectable services.",
    blocks: [
      {
        heading: "Face",
        subheading: "Soften Fine Lines and Wrinkles with Elegant Precision",
        image: img(
          "injectables-2__section-face__role-content__woman-sits-with-open-eyes-while-medical-worke__013.webp",
        ),
        treatments: [
          {
            name: "Botox",
            description:
              "Relaxes muscles to soften forehead lines, crow's feet, and frown lines.",
          },
          {
            name: "Dysport",
            description:
              "Softens expression lines while preserving natural movement.",
          },
          {
            name: "Juvederm Vollure",
            description: "Softens moderate to deep lines and folds.",
          },
          {
            name: "Restylane Defyne",
            description: "Targets deeper folds while preserving expression.",
          },
        ],
      },
      {
        heading: "Lips & Smile",
        subheading: "Soft, Kissable Confidence",
        image: img(
          "injectables-2__section-lips-and-smile__role-content__close-up-of-a-calm-lady-lying-with-her-eyes-c__016.webp",
        ),
        treatments: [
          {
            name: "Lip Flip",
            description: "A subtle upper-lip lift and hint of fullness.",
          },
          {
            name: "Juvederm Ultra",
            description:
              "Adds lip volume and definition while softening lines.",
          },
          {
            name: "Juvederm Volbella",
            description: "Refines vertical lip lines with subtle definition.",
          },
          {
            name: "Restylane Kysse",
            description: "Flexible lip filler for natural movement.",
          },
          {
            name: "Versa",
            description:
              "Restores volume and smoothness with subtle, balanced results.",
          },
        ],
      },
      {
        heading: "Cheeks & Midface",
        subheading: "Naturally Lift, Contour, and Sculpt for Timeless Beauty",
        image: img(
          "injectables-2__section-cheeks-and-midface__role-content__closeup-of-a-syringe-injection-performed-to-a__019.webp",
        ),
        treatments: [
          {
            name: "Restylane Contour",
            description: "Adds cheek fullness and definition.",
          },
          {
            name: "Restylane Lyft",
            description:
              "Restores midface volume; also treats the backs of hands.",
          },
          {
            name: "Juvederm Voluma",
            description: "Lifts and restores cheek volume.",
          },
        ],
      },
      {
        heading: "Jawline & Neck",
        subheading: "Sleek, Sculpted, and Sophisticated",
        image: img(
          "injectables-2__section-jawline-and-neck__role-content__medical-worker-in-pink-gloves-injects-medicin__022.webp",
        ),
        treatments: [
          {
            name: "Juvederm Volux",
            description: "Jawline definition and sculpting.",
          },
        ],
      },
      {
        heading: "Skin & Overall Glow",
        subheading: "Hydrated, Youthful, and Luminous",
        image: img(
          "injectables-2__section-skin-and-overall-glow__role-content__young-woman-receiving-beauty-injection-on-her__025.webp",
        ),
        treatments: [
          {
            name: "Juvederm SkinVive",
            description: "Boosts internal hydration and smoothness.",
          },
          {
            name: "Sculptra",
            description:
              "Stimulates collagen for gradual, natural volume and firmness.",
          },
        ],
      },
      {
        heading: "Consultations & Adjustments",
        subheading: "Because Beauty Is Never One-Size-Fits-All",
        image: img(
          "injectables-2__section-consultations-and-adjustments__role-content__professional-cosmetologist-in-pink-gloves-lo__028.webp",
        ),
        treatments: [
          {
            name: "Free Aesthetic Follow-Up",
            description: "A post-treatment check-in and refinement.",
            price: "Free",
          },
          {
            name: "Aesthetic Consultation",
            description: "A personalized planning session.",
            price: "$50",
          },
          {
            name: "Filler Removal Treatment",
            description:
              "Filler dissolution and removal; consultation required.",
          },
        ],
      },
    ],
  },

  {
    slug: "contouring-and-complexion",
    navLabel: "Body Contouring",
    cardBlurb:
      "Non-invasive Emsculpt, Emface, and Exion technologies for lasting results.",
    cardImage: img(
      "laser-treatments-2__section-general__role-content__emsculpt-neo2-650x650__028.webp",
    ),
    heroEyebrow: "Body Contouring",
    heroTitle: "Lift, Sculpt, Tone, and Transform",
    heroSubtitle:
      "Reveal smoother, brighter, more youthful skin with our advanced suite of technologies — non-invasive Emsculpt, Emface, Exion Clear, and Exion Face, with minimal downtime.",
    heroImage: img(
      "laser-treatments-2__section-lift-sculpt-tone-and-transform__role-background__lift-sculpt-tone-and-transform__027.webp",
    ),
    intro: "Results you can feel. Look your best — no filters needed.",
    note: "Consultations required for all body contouring treatments.",
    blocks: [
      {
        heading: "Emsculpt Neo & Exion Clear",
        subheading: "Build, Burn & Renew",
        image: img(
          "laser-treatments-2__section-emsculpt-neo-and-exion-clear__role-content__emsculpt-neo2__013.webp",
        ),
        treatments: [
          {
            name: "Emsculpt Neo",
            description:
              "Non-invasive body contouring that builds muscle and burns fat for a toned, lifted, energized look. Also used as adjunctive therapy to support range of motion, circulation, and muscle re-education.",
          },
          {
            name: "Exion Clear",
            description:
              "RF energy and AI stimulate collagen and elastin to improve fine lines, texture, pigmentation, and laxity — firmer, smoother, more radiant skin with minimal downtime.",
          },
        ],
      },
      {
        heading: "Emface & Exion Face",
        subheading: "A Mini Facelift Without the Downtime",
        image: img(
          "laser-treatments-2__section-emface-and-exion-face__role-content__emface1__016.webp",
        ),
        treatments: [
          {
            name: "Emface",
            description:
              "Non-surgical facial sculpting that tones, lifts, and tightens muscles while improving skin texture.",
          },
          {
            name: "Exion Face",
            description:
              "Advanced laser technology lifts, firms, and refines skin — stimulating collagen and enhancing contour for a naturally rejuvenated complexion.",
          },
        ],
      },
      {
        heading: "Neo + Emface",
        subheading: "The Ultimate Sculpting Experience",
        image: img(
          "laser-treatments-2__section-neo-emface__role-content__emface2__019.webp",
        ),
        treatments: [
          {
            name: "Emsculpt Neo + Emface",
            description:
              "The ultimate body and facial sculpting experience — firmer muscles, tighter skin, and a renewed sense of confidence and vitality.",
          },
        ],
      },
    ],
  },

  {
    slug: "cryo",
    navLabel: "Cryotherapy",
    cardBlurb:
      "Cooling cryotherapy that tightens, tones, and targets stubborn areas.",
    cardImage: img(
      "cryo-2__section-general__role-content__dsc-1241-650x650__025.webp",
    ),
    heroEyebrow: "Cryotherapy",
    heroTitle: "Indulge in the Chill",
    heroSubtitle:
      "A quick, invigorating treatment that uses controlled cold therapy to reduce inflammation, soothe muscles, boost circulation, and stimulate collagen. Leave feeling lighter and recharged.",
    heroImage: img(
      "cryo-2__section-indulge-in-the-chill__role-background__indulge-in-the-chill__024.webp",
    ),
    intro:
      "Contour, refine, reveal — define your silhouette and elevate your confidence.",
    blocks: [
      {
        heading: "Cryo Facial",
        subheading: "Refreshed, Lifted, Radiant",
        image: img(
          "cryo-2__section-cryo-facial__role-content__dsc-1241__013.webp",
        ),
        treatments: [
          {
            name: "Cryo Facial",
            description:
              "A refreshing, cooling treatment that tightens, tones, and invigorates. Your face feels instantly refreshed, lifted, and radiant, with a healthy glow and tighter, more youthful-looking skin.",
            price: "$250",
          },
        ],
      },
      {
        heading: "Cryo Body",
        subheading: "Smoother Contours, Renewed Confidence",
        image: img(
          "cryo-2__section-cryo-body__role-content__dsc-1524__016.webp",
        ),
        treatments: [
          {
            name: "Cryo Slimming Body Session",
            description:
              "Targets stubborn fat and firms problem areas using controlled cold therapy. Your body feels lighter, more sculpted, and energized, with visibly smoother contours.",
            price: "$350",
          },
        ],
      },
    ],
  },

  {
    slug: "massage-therapy",
    navLabel: "Massage Therapy",
    cardBlurb:
      "Hot stone, deep tissue, bamboo, cupping, and more — for solo or couples.",
    cardImage: img(
      "massage-therapy-2__section-general__role-content__pexels-ivan-samkov-5659007-650x650__045.webp",
    ),
    heroEyebrow: "Massage Therapy",
    heroTitle: "It's Time to Relax and Unwind",
    heroSubtitle:
      "Massage therapies designed to reduce stress, soothe muscles, and create lasting calm. From tension to tranquility, every treatment is 60 or 90 minutes of pure restoration.",
    heroImage: img(
      "massage-therapy-2__section-it-s-time-to-relax-and-unwind__role-background__it-s-time-to-relax-and-unwind__044.jpg",
    ),
    intro: "From stress to serenity.",
    blocks: [
      {
        heading: "Classic Massage",
        subheading: "Full-Body Relaxation",
        image: img(
          "massage-therapy-2__section-classic-massage__role-content__pexels-ivan-samkov-5659007__013.webp",
        ),
        treatments: [
          {
            name: "Classic Massage",
            duration: "60 min",
            description:
              "Full-body relaxation, stress relief, and better sleep and mood.",
            price: "$95",
          },
          {
            name: "Classic Massage",
            duration: "90 min",
            description: "Extended relaxation and replenishment.",
            price: "$120",
          },
        ],
      },
      {
        heading: "Hot Stone Massage",
        subheading: "Deep, Radiant Warmth",
        image: img(
          "massage-therapy-2__section-hot-stone-massage__role-content__taylor-heery-tyra1ruaii-unsplash__016.webp",
        ),
        treatments: [
          {
            name: "Hot Stone Massage",
            duration: "60 min",
            description:
              "Heated basalt stones for deeper muscle relaxation and circulation.",
            price: "$110",
          },
          {
            name: "Hot Stone Massage",
            duration: "90 min",
            description:
              "Extended heat therapy for chronic tension and deep calm.",
            price: "$140",
          },
        ],
      },
      {
        heading: "Holistic Massage",
        subheading: "Balance, Restored",
        image: img(
          "massage-therapy-2__section-holistic-massage__role-content__emiliano-vittoriosi-dsy-ilnh69a-unsplash__019.webp",
        ),
        treatments: [
          {
            name: "Holistic Massage",
            duration: "90 min",
            description:
              "Supports pain and inflammation relief and nervous-system balance.",
            price: "$140",
          },
        ],
      },
      {
        heading: "Deep Tissue Massage",
        subheading: "Release the Tension",
        image: img(
          "massage-therapy-2__section-deep-tissue-massage__role-content__jakub-klucky-7yeqemd-p90-unsplash__022.webp",
        ),
        treatments: [
          {
            name: "Deep Tissue Massage",
            duration: "60 min",
            description: "Targets deeper muscle tightness and adhesions.",
            price: "$125",
          },
          {
            name: "Deep Tissue Massage",
            duration: "90 min",
            description:
              "Extended deep work for posture, recovery, and relief.",
            price: "$150",
          },
        ],
      },
      {
        heading: "Prenatal Massage",
        subheading: "Comfort for Two",
        image: img(
          "massage-therapy-2__section-prenatal-massage__role-content__pregnant-woman-during-a-manual-therapy-sessio__025.webp",
        ),
        treatments: [
          {
            name: "Prenatal Massage",
            duration: "60 min",
            description:
              "Pregnancy-safe support for back pain, swelling, and relaxation.",
            price: "$120",
          },
          {
            name: "Prenatal Massage",
            duration: "90 min",
            description: "Extended prenatal relief and comfort.",
            price: "$135",
          },
        ],
      },
      {
        heading: "Warm Bamboo Massage",
        subheading: "Rolling Warmth & Relief",
        image: img(
          "massage-therapy-2__section-bamboo-massage__role-content__woman-having-anti-stress-massage-with-bamboo__028.webp",
        ),
        treatments: [
          {
            name: "Warm Bamboo Massage",
            duration: "60 min",
            description:
              "Warm bamboo pressure for knots, circulation, and lymphatic support.",
            price: "$110",
          },
          {
            name: "Warm Bamboo Massage",
            duration: "90 min",
            description: "Extended bamboo treatment with deeper relief.",
            price: "$140",
          },
        ],
      },
      {
        heading: "Couples Massage",
        subheading: "Side by Side",
        body: "Choose any massage and book together for a side-by-side treatment. Priced per person.",
        image: img(
          "massage-therapy-2__section-couples-massage__role-content__woman-head-massage-and-couple-at-beauty-spa__031.webp",
        ),
        treatments: [
          {
            name: "Classic Massage",
            duration: "60 min",
            price: "$95 / person",
          },
          {
            name: "Deep Tissue Massage",
            duration: "60 min",
            price: "$125 / person",
          },
          {
            name: "Hot Stone Massage",
            duration: "90 min",
            price: "$140 / person",
          },
          {
            name: "Deep Tissue Massage",
            duration: "90 min",
            price: "$150 / person",
          },
        ],
      },
      {
        heading: "Body Scrubs",
        subheading: "Softer, Brighter Skin",
        image: img(
          "massage-therapy-2__section-body-scrubs__role-icon__icons8-team-y2t5ht7pwx4-unsplash__034.webp",
        ),
        treatments: [
          {
            name: "Body Scrub",
            duration: "60 min",
            description: "Exfoliation for softer, brighter skin.",
            price: "$125",
          },
          {
            name: "Body Scrub",
            duration: "90 min",
            description: "Extended exfoliation and nourishment ritual.",
            price: "$150",
          },
        ],
      },
      {
        heading: "Cupping",
        subheading: "Circulation & Release",
        image: img(
          "massage-therapy-2__section-cupping__role-content__christine-galligan-s8qhwtaekyq-unsplash__037.webp",
        ),
        treatments: [
          {
            name: "Cupping Add-On",
            duration: "add-on",
            description: "Extra targeted release and circulation support.",
            price: "$30",
          },
          {
            name: "Cupping",
            duration: "60 min",
            description: "Suction-based circulation and lymphatic support.",
            price: "$110",
          },
          {
            name: "Cupping",
            duration: "90 min",
            description: "Extended cupping for deeper therapeutic effect.",
            price: "$130",
          },
        ],
      },
    ],
  },
];

/** Ordered list for the Services overview + Home grid. */
export const serviceOrder = [
  "brow-enhancements",
  "lash-enhancements",
  "facial-treatments",
  "injectables",
  "contouring-and-complexion",
  "cryo",
  "massage-therapy",
];

export const getService = (slug: string) =>
  serviceDetails.find((s) => s.slug === slug);

export const serviceCategories = serviceOrder
  .map((slug) => serviceDetails.find((s) => s.slug === slug)!)
  .filter(Boolean);
