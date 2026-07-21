export const site = {
  name: "The Med Spa by B.A.",
  shortName: "Spa by B.A.",
  tagline: "North Huntingdon, PA",
  phone: "724-515-2836",
  phoneHref: "tel:+17245152836",
  email: "info@themedspaba.com",
  address: {
    line1: "8489 Country Club Dr, Suite 2",
    line2: "North Huntingdon, PA 15642",
  },
  hours: [
    { days: "Monday – Thursday", time: "10 am – 8 pm" },
    { days: "Friday – Saturday", time: "10 am – 4 pm" },
    { days: "Sunday", time: "Closed" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=8489+Country+Club+Dr+Suite+2+North+Huntingdon+PA+15642&output=embed",
  formEmbed: "https://api.leadconnectorhq.com/widget/form/lfHBxMmcw1Piba3Pz7nR",
} as const;

export const links = {
  booking: "https://na02.patientnow.com/a/medspabyba/OnlineBooking.aspx",
  giftCertificates:
    "https://www.salonvision.com/medspabyba/GiftCertificatePop.aspx",
  facebook:
    "https://www.facebook.com/p/Bella-Amici-Salon-The-Spa-By-BA-100063524713338/",
  instagram: "https://www.instagram.com/bellaamicisalon/",
} as const;

export type NavItem = {
  label: string;
  to?: string;
  href?: string;
  children?: NavItem[];
};

export const nav: NavItem[] = [
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Brow Enhancements", to: "/services/brow-enhancements" },
      { label: "Lash Enhancements", to: "/services/lash-enhancements" },
      { label: "Facial Treatments", to: "/services/facial-treatments" },
      { label: "Injectables", to: "/services/injectables" },
      { label: "Body Contouring", to: "/services/contouring-and-complexion" },
      { label: "Cryotherapy", to: "/services/cryo" },
      { label: "Massage Therapy", to: "/services/massage-therapy" },
    ],
  },
  { label: "Packages", to: "/packages" },
  { label: "Memberships", to: "/memberships" },
  { label: "Gift Certificates", href: links.giftCertificates },
  {
    label: "Get in Touch",
    to: "/get-in-touch",
    children: [
      { label: "Payment Plans", to: "/get-in-touch/payment-plans" },
      { label: "Accessibility Statement", to: "/accessibility-statement" },
      { label: "Terms of Use", to: "/terms-of-use" },
    ],
  },
];

/** Base path for image assets copied into /public/images. */
export const img = (file: string) => `/images/${file}`;

export const LOGO = img(
  "home__section-general__role-content__image-default__008.webp",
);
