import { SITE_NAME } from '@/lib/constants/site.constants';
import { homeSection } from '@/lib/constants/routes.constants';
import { WHATSAPP_URL } from '@/lib/constants/contact.constants';
import type {
  AudienceContent,
  FloatingContactContent,
  FooterContent,
  GetStartedContent,
  HeroContent,
  LessonsContent,
  NavigationContent,
  PricesContent,
  ReviewsContent,
  TeacherContent,
  Verse,
  WordmarkContent,
} from '@/features/landing/types';

export const sectionIds = {
  top: 'top',
  who: 'who',
  how: 'how',
  prices: 'prices',
  teacher: 'teacher',
  reviews: 'reviews',
  start: 'start',
  register: 'register',
} as const;

const registerCta = {
  name: 'Register your interest',
  href: homeSection(sectionIds.start),
};

export const wordmarkData: WordmarkContent = {
  arabic: 'لِسَان',
  latin: SITE_NAME,
  homeLabel: `${SITE_NAME}, back to the top`,
};

export const navigationData: NavigationContent = {
  links: [
    { name: 'Courses', href: homeSection(sectionIds.who) },
    { name: 'Prices', href: homeSection(sectionIds.prices) },
    { name: 'Teacher', href: homeSection(sectionIds.teacher) },
    { name: 'Reviews', href: homeSection(sectionIds.reviews) },
  ],
  cta: registerCta,
  menuLabel: 'Open or close the menu',
};

const heroVerse: Verse = {
  arabic: 'بِلِسَانٍ عَرَبِيٍّ مُّبِينٍ',
  translation: '“In a clear Arabic tongue” · Ash-Shuʿarāʾ 26:195',
};

export const heroData: HeroContent = {
  verse: heroVerse,
  title: 'From first letters to fluent speech.',
  intro:
    "Private online Arabic lessons with Ustādh Abu Hasnath. For complete beginners, Dars-i-Nizami students and graduates, and anyone who can read Arabic but still can't speak it.",
  primaryCta: registerCta,
  secondaryCta: {
    name: 'Or message on WhatsApp',
    href: WHATSAPP_URL,
  },
  highlights: [
    'Online',
    'Weekend lessons',
    '1-on-1 or small groups',
    'From £8 / hour',
  ],
};

export const audienceData: AudienceContent = {
  eyebrow: "Who it's for",
  title: 'Start where you are',
  cards: [
    {
      numeral: '١',
      title: 'Beginners',
      description:
        'Start with the alphabet and build up to reading, writing and understanding simple Arabic.',
    },
    {
      numeral: '٢',
      title: 'Dars-i-Nizami students & graduates',
      description:
        'You can read the classical texts, but speaking is another matter. Lessons focus on conversation, so the grammar you already know starts coming out when you talk.',
    },
    {
      numeral: '٣',
      title: 'Tailored 1-on-1',
      description:
        'You set the goal and the pace. Lessons are planned around what you want to get out of Arabic.',
    },
  ],
};

export const lessonsData: LessonsContent = {
  eyebrow: 'How lessons work',
  title: 'Grammar you can actually use',
  intro:
    'Lessons mix traditional grammar teaching with modern speaking practice. You learn how the language works, then you use it in conversation.',
  books: [
    { title: 'Al-ʿArabiyyah Bayna Yadayk', arabicTitle: 'العربية بين يديك' },
    { title: 'The Madinah books', arabicTitle: 'دروس اللغة العربية' },
  ],
  booksNote: 'Which book you start with depends on your level.',
  facts: [
    { title: 'Online', description: 'Live lessons you join from home.' },
    {
      title: 'Weekends',
      description: 'Saturday and Sunday slots that fit around work and study.',
    },
    {
      title: 'One hour minimum',
      description: 'Every lesson runs for at least an hour.',
    },
    {
      title: 'Beginner to advanced',
      description: 'Keep the same teacher as your Arabic improves.',
    },
  ],
};

export const pricesData: PricesContent = {
  eyebrow: 'Prices',
  title: 'Pay by the hour',
  oneToOne: {
    title: '1-on-1 lessons',
    price: '£25',
    unit: 'per hour',
    features: [
      'Planned around your goals',
      'Go as fast or as slow as you like',
      'Lessons of one hour or more',
    ],
  },
  groups: {
    title: 'Small groups',
    pricePrefix: 'from',
    price: '£8',
    unit: 'per person, per hour',
    rates: [
      { label: 'Group of 3', price: '£10' },
      { label: 'Group of 4', price: '£9' },
      { label: 'Group of 5', price: '£8', isBestValue: true },
    ],
    note: 'You can sign up on your own. Ustādh Abu Hasnath will put you in a group at your level.',
  },
};

export const teacherData: TeacherContent = {
  eyebrow: 'Your teacher',
  name: 'Ustādh Abu Hasnath',
  bio: 'Abu Hasnath teaches grammar thoroughly, the way he learned it in the Dars-i-Nizami, and then gets you using it in conversation.',
  credentials: [
    'Dars-i-Nizami graduate',
    'BA in Islamic Studies with Arabic',
    'MA in Islamic Studies',
    'Almost a decade of teaching experience',
  ],
  imageAlt: 'Ustādh Abu Hasnath',
};

export const reviewsData: ReviewsContent = {
  eyebrow: 'Reviews',
  title: 'What students say',
  reviews: [
    {
      quote:
        "“Ustādh Abu Hasnath's lessons are very interactive and enjoyable.”",
      name: 'Asif Khan',
    },
    {
      quote:
        '“The Arabic course is well structured, balancing vocabulary, reading, written and conversational skills.”',
      name: 'Harun Ali',
    },
    {
      quote:
        "“I've taken online Arabic lessons before but never made real progress until now.”",
      name: 'Nobeen Islam',
    },
  ],
};

export const levelOptions = [
  'Complete beginner',
  "I can read but can't speak",
  'Dars-i-Nizami student or graduate',
  'Intermediate, and I want to go further',
] as const;

export const getStartedData: GetStartedContent = {
  eyebrow: 'Get started',
  title: 'Register your interest',
  intro:
    'Leave your details and Ustādh Abu Hasnath will call or message you to work out which lessons suit you.',
  form: {
    nameLabel: 'Full name',
    phoneLabel: 'Phone number',
    emailLabel: 'Email address',
    levelLabel: 'Your level',
    lessonTypeLegend: 'Lesson type',
    lessonTypes: {
      'one-to-one': { label: '1-on-1', price: '£25/hr' },
      group: { label: 'Small group', price: 'from £8/hr' },
    },
    preferredTimesLabel: 'Preferred weekend times',
    optionalLabel: '(optional)',
    preferredTimesPlaceholder: 'e.g. Saturday mornings',
    submitLabel: 'Register',
    submittingLabel: 'Sending…',
    successMessage: 'Thanks. Ustādh Abu Hasnath will be in touch soon.',
    errorMessage:
      "Sorry, that didn't send. Please try again, or send a WhatsApp message instead.",
    privacyNotice: {
      prefix: "We'll only use your details to arrange lessons. See our",
      linkLabel: 'privacy policy',
      suffix: '.',
    },
  },
  whatsapp: {
    name: 'Prefer WhatsApp? Message 07828 559720',
    href: WHATSAPP_URL,
  },
};

export const floatingContactData: FloatingContactContent = {
  href: WHATSAPP_URL,
  label: 'Message Ustādh Abu Hasnath on WhatsApp',
  message: 'Questions? Message us on WhatsApp',
};

export const footerData: FooterContent = {
  tagline: 'Online Arabic lessons with Ustādh Abu Hasnath',
  whatsapp: { name: 'WhatsApp 07828 559720', href: WHATSAPP_URL },
  copyright: `© ${new Date().getFullYear()} ${SITE_NAME}`,
};
