import { img } from "./site";

export interface Membership {
  name: string;
  price: string;
  commitment: string;
  highlight?: string;
  featured?: boolean;
  image: string;
  perks: string[];
}

export const membershipsIntro =
  "Indulge in exclusive access to premium treatments with our memberships. Enjoy members-only specials on Hydrafacials, Microneedling, and Chemical Peels — designed to keep your skin glowing and your body restored. Elevate your self-care with luxurious perks, priority booking, and personalized beauty all month long.";

export const memberships: Membership[] = [
  {
    name: "Rewards Club",
    price: "Free to Join",
    commitment: "6 Month Commitment",
    image: img(
      "memberships-2__section-rewards-club__role-background__rewards-club__019.jpg",
    ),
    perks: [
      "20% off Botox®",
      "20% off Dysport®",
      "20% off Rejuvenation Packages (Laser, Microneedling, and more)",
      "15% off Aesthetic Retail Products",
      "10% off Filler",
      "Special Monthly Perks",
      "Earn 1 point for every $10 spent on all services",
    ],
  },
  {
    name: "VIP Club",
    price: "$249 / month",
    commitment: "6 Month Commitment",
    featured: true,
    highlight: "Most Popular",
    image: img("memberships-2__section-vip__role-background__vip__020.webp"),
    perks: [
      "1 Signature Hydrafacial®",
      "1 60-min Classic Massage",
      "1 FREE add-on per month",
      "10% off Retail",
      "FREE Gift at sign up",
    ],
  },
  {
    name: "F.A.B. Club",
    price: "$379 / month",
    commitment: "12 Month Commitment",
    highlight: "Save $1,000",
    image: img(
      "memberships-2__section-f-a-b-club__role-background__f-a-b-club__021.jpg",
    ),
    perks: [
      "Pick one Facial monthly: any spa facial, Signature Hydrafacial®, or light peel",
      "Aesthetics: up to 3 Microneedling sessions & up to 100 units of tox per year",
      "Pick one Body monthly: Classic, Hot Stone, or Cupping (60 min massage)",
      "10% off all upgrades",
      "10% off all retail",
    ],
  },
];
