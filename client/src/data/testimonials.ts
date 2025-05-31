export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Al-Farsi",
    title: "Procurement Manager",
    company: "Gulf Petrochemicals",
    text: "Zeen International has been our trusted supplier for over 5 years. Their quality products and exceptional service have never disappointed us. Even during the most urgent shutdowns, they managed to deliver on time.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Thompson",
    title: "Project Director",
    company: "GCC Pipeline Solutions",
    text: "We've worked with many suppliers, but Zeen stands out for their technical expertise and commitment to quality. Their team goes above and beyond to ensure that specifications are met precisely.",
    rating: 5
  },
  {
    id: 3,
    name: "Mohammed Al-Dosari",
    title: "Operations Manager",
    company: "Petrochemical Industries Co.",
    text: "During a critical plant shutdown, Zeen International delivered essential components 2 days ahead of schedule. Their responsiveness and reliability have made them our primary supplier for all pipeline materials.",
    rating: 5
  }
]; 