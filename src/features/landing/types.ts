import type { NavLink } from '@/components/layout/Navigation';

export type WordmarkContent = {
  arabic: string;
  latin: string;
  homeLabel: string;
};

export type NavigationContent = {
  links: NavLink[];
  cta: NavLink;
  menuLabel: string;
};

export type FloatingContactContent = {
  href: string;
  label: string;
  message: string;
};

export type FooterContent = {
  tagline: string;
  whatsapp: NavLink;
  copyright: string;
};

export type Verse = {
  arabic: string;
  translation: string;
};

export type HeroContent = {
  verse: Verse;
  title: string;
  intro: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
  highlights: string[];
};

export type AudienceCard = {
  numeral: string;
  title: string;
  description: string;
};

export type AudienceContent = {
  eyebrow: string;
  title: string;
  cards: AudienceCard[];
};

export type Book = {
  title: string;
  arabicTitle: string;
};

export type LessonFact = {
  title: string;
  description: string;
};

export type LessonsContent = {
  eyebrow: string;
  title: string;
  intro: string;
  books: Book[];
  booksNote: string;
  facts: LessonFact[];
};

export type GroupRate = {
  label: string;
  price: string;
  isBestValue?: boolean;
};

export type PricesContent = {
  eyebrow: string;
  title: string;
  oneToOne: {
    title: string;
    price: string;
    unit: string;
    features: string[];
  };
  groups: {
    title: string;
    pricePrefix: string;
    price: string;
    unit: string;
    rates: GroupRate[];
    note: string;
  };
};

export type TeacherContent = {
  eyebrow: string;
  name: string;
  bio: string;
  credentials: string[];
  imageAlt: string;
};

export type Review = {
  quote: string;
  name: string;
};

export type ReviewsContent = {
  eyebrow: string;
  title: string;
  reviews: Review[];
};

export type LessonTypeOption = {
  label: string;
  price: string;
};

export type RegisterFormContent = {
  nameLabel: string;
  phoneLabel: string;
  emailLabel: string;
  levelLabel: string;
  lessonTypeLegend: string;
  lessonTypes: Record<'one-to-one' | 'group', LessonTypeOption>;
  preferredTimesLabel: string;
  optionalLabel: string;
  preferredTimesPlaceholder: string;
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
  errorMessage: string;
  privacyNotice: {
    prefix: string;
    linkLabel: string;
    suffix: string;
  };
};

export type GetStartedContent = {
  eyebrow: string;
  title: string;
  intro: string;
  form: RegisterFormContent;
  whatsapp: NavLink;
};
