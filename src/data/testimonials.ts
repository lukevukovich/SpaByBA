export interface Testimonial {
  name: string;
  quote: string;
  source?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Devyn K.",
    quote:
      "I had my first lip filler treatment done by Danielle and WOW! I'm beyond happy with my service and the outcome! She listened to my lip goals and made them come true. Super comfortable atmosphere — highly recommend!",
    source: "Google Review",
  },
  {
    name: "Daybly",
    quote:
      "Such a great experience with Nurse Keri! Her extensive dermatology background gave me complete confidence in my microneedling treatment. The spa is gorgeous and expertly designed. Can't wait for my next visit!",
    source: "Google Review",
  },
  {
    name: "Katlyn W.",
    quote:
      "I had a 90-minute massage with Brandy which was fabulous — the pressure was perfect. I also had a brow tint and shape with Carly and she did a great job. I will definitely return!",
    source: "Google Review",
  },
  {
    name: "Christina L.",
    quote:
      "I have been to so many spas across the country and Brandy is hands down the BEST massage therapist. The spa is gorgeous, clean, and modern — I can't wait to go back!",
    source: "Google Review",
  },
  {
    name: "Sarah G.",
    quote:
      "I've had two dermaplanes with facials here — both phenomenal! The building is gorgeous and the experience is peaceful and luxurious. I left relaxed, rejuvenated, and glowing.",
    source: "Google Review",
  },
  {
    name: "Maria B.",
    quote:
      "Fantastic deep tissue massage with Kaitlyn and Carly! Also a wonderful dermaplane facial. Beautiful spa, relaxing atmosphere — highly recommend!",
    source: "Google Review",
  },
  {
    name: "David M.",
    quote:
      "The spa has always been welcoming to me as a male client — not always the case elsewhere. I've had both massages and body treatments, and Brandy has been a great addition to their team!",
    source: "Google Review",
  },
  {
    name: "Jaimy T.",
    quote:
      "Had the best facial and dermaplane with Maddie! This place is top notch!",
    source: "Google Review",
  },
];

export interface PaymentTestimonial {
  name: string;
  quote: string;
}

export const paymentTestimonials: PaymentTestimonial[] = [
  {
    name: "Bryana",
    quote:
      "I was worried the application would take long — but it only took a few minutes and I'm so happy I can split my payments up now!",
  },
  {
    name: "Alex",
    quote:
      "Cherry was really easy to use and super fast. I can't wait to go back and try different services now that I can split my payments!",
  },
  {
    name: "Marie",
    quote:
      "I used this on Monday and it was great. Low down payment and low monthly. You all should try it.",
  },
  {
    name: "Gabriel",
    quote:
      "Cherry was great — one of the better lending companies I've ever used. Making payments was a lot easier and I appreciate that Cherry was willing to work with me.",
  },
  {
    name: "Alyssa",
    quote: "Cherry is amazing!!! Now we can get everything done!!",
  },
  {
    name: "Cassie",
    quote:
      "I've been putting off these treatments for a long time. I scheduled them all today using Cherry!",
  },
];
