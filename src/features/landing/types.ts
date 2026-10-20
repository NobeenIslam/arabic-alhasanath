import type { NavLink } from '@/components/layout/Navigation';

export type TimelineEntry = {
  year: string;
  subheading: string;
  details: string;
};

export type Testimonial = {
  quote: string;
  image: string;
  name: string;
};

export type HeroContent = {
  title: string;
  bulletPoints: string[];
  buttonText: string;
  imageAlt: string;
};

export type InstructorContent = {
  title: string;
  imageCaption: string;
  timeline: TimelineEntry[];
};

export type CourseStructureContent = {
  title: string;
  wistiaVideoId: string;
};

export type TestimonialsContent = {
  title: string;
  testimonials: Testimonial[];
};

export type ContactFormContent = {
  heading: string;
  fullNameLabel: string;
  phoneNumberLabel: string;
  emailAddressLabel: string;
  submitLabel: string;
  submittingLabel: string;
  successTitle: string;
  successDescription: string;
  errorTitle: string;
  errorDescription: string;
  disclaimer: string;
};

export type SignUpContent = {
  title: string;
  imageAlt: string;
  form: ContactFormContent;
};

export type NavigationContent = {
  logoLabel: string;
  links: NavLink[];
};

export type FooterContent = {
  logoLabel: string;
  copyright: string;
};
