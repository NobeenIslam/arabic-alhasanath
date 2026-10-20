import { SITE_NAME } from '@/lib/constants/site.constants';
import { ROUTES } from '@/lib/constants/routes.constants';
import type {
  CourseStructureContent,
  FooterContent,
  NavigationContent,
  HeroContent,
  InstructorContent,
  SignUpContent,
  Testimonial,
  TestimonialsContent,
  TimelineEntry,
} from '@/features/landing/types';

export const componentIds = {
  hero: 'hero',
  instructorBlock: 'instructor-block',
  courseStructureBlock: 'course-structure-block',
  testimonialsBlock: 'testimonial-block',
  signUpBlock: 'sign-up-block',
};

export const navigationData: NavigationContent = {
  logoLabel: 'Go to the top',
  links: [
    {
      name: 'Home',
      href: `${ROUTES.home}#${componentIds.hero}`,
      description: 'Back to the top',
    },
    {
      name: 'Instructor',
      href: `${ROUTES.home}#${componentIds.instructorBlock}`,
      description: 'Meet our instructor Ustaadh Abu Hasanath',
    },
    {
      name: 'Course Structure',
      href: `${ROUTES.home}#${componentIds.courseStructureBlock}`,
      description: 'Learn about our course structure',
    },
    {
      name: 'Testimonials',
      href: `${ROUTES.home}#${componentIds.testimonialsBlock}`,
      description: 'See what our students say',
    },
    {
      name: 'Sign Up',
      href: `${ROUTES.home}#${componentIds.signUpBlock}`,
      description: 'Take the first step of your journey now!',
    },
  ],
};

export const heroData: HeroContent = {
  title: SITE_NAME,
  bulletPoints: [
    'Small groups of 5 or less',
    'Remote',
    'Weekly 2 hr sessions',
    'Cater to beginner, intermediate, advanced',
  ],
  buttonText: 'Sign Me Up!',
  imageAlt:
    'Bayna Yadayk Arabic course books, showcasing the comprehensive learning materials',
};

const firstTimelineEntry: TimelineEntry = {
  year: '2013',
  subheading: 'As-Suffa Institute',
  details:
    'Completed a 6-year full-time Alimiyyah course covering all the Islamic sciences and building my Arabic',
};

const secondTimelineEntry: TimelineEntry = {
  year: '2019',
  subheading: 'Markfield University for Islamic Studies',
  details:
    'Completed a BA in Islam and Arabic at Markfield, honing my academic research and Arabic skills',
};

const thirdTimelineEntry: TimelineEntry = {
  year: '2022',
  subheading: 'Primary School',
  details:
    'Began teaching Arabic to children at a private school, developing my communication',
};

const fourthTimelineEntry: TimelineEntry = {
  year: '2023',
  subheading: 'As-Suffa Institute',
  details:
    'Resident teacher at As-Suffa Institute, where I teach Al-Arabiyyah Bayna Yadayk to years 1 and 2 and Usool Hadith to year 4',
};

export const instructorBlockData: InstructorContent = {
  title: 'Instructor',
  imageCaption: 'Ustaadh Abu Hasanath',
  timeline: [
    fourthTimelineEntry,
    thirdTimelineEntry,
    secondTimelineEntry,
    firstTimelineEntry,
  ],
};

export const courseStructureBlockData: CourseStructureContent = {
  title: 'Course Structure',
  wistiaVideoId: 'g62hgm02ym',
};

const asifsTestimony: Testimonial = {
  quote:
    "Ustaaz Abu Hasanath's lessons are very interactive and enjoyable. I've been pleasantly surprised at the improvement in the group. Long may it continue.",
  image: '/silhouette.jpeg',
  name: 'Asif Khan',
};

const harunsTestimony: Testimonial = {
  quote:
    'The arabic course is well structured, balancing vocabulary, reading, written and conversational skills. My arabic has improved massively as well as helped me with my islamic studies. This course has opened up new opportunities for personal and professional growth, and I highly recommend it to anyone interested in learning Arabic.',
  image: '/silhouette.jpeg',
  name: 'Harun Ali',
};

const nobeensTestimony: Testimonial = {
  quote:
    "I've taken online Arabic lessons before but never made real progress until now. Ustaadh's focus on conversation and varied vocabulary use, along with his experience with the Bayna Yadayk series, has rapidly improved my skills. I'm amazed at my progress in such a short time.",
  image: '/silhouette.jpeg',
  name: 'Nobeen Islam',
};

export const testimonialBlockData: TestimonialsContent = {
  title: 'Testimonials',
  testimonials: [asifsTestimony, harunsTestimony, nobeensTestimony],
  slideLabel: 'Go to slide',
};

export const signUpBlockData: SignUpContent = {
  title: 'Sign Up',
  imageAlt: 'Picture of Madinah Books',
  form: {
    heading: 'Join Our Arabic Course',
    fullNameLabel: 'Full Name',
    phoneNumberLabel: 'Phone Number',
    emailAddressLabel: 'Email Address',
    submitLabel: 'Sign Me Up!',
    submittingLabel: 'Submitting...',
    successTitle: 'Form Submitted!',
    successDescription: 'Thank you for your interest in our Arabic course.',
    errorTitle: 'Error',
    errorDescription:
      'An error occurred while submitting the form. Please try again.',
    disclaimerPrefix: 'By enrolling, you agree to our',
    termsLabel: 'Terms of Service',
    disclaimerJoiner: 'and',
    privacyLabel: 'Privacy Policy',
  },
};

export const footerData: FooterContent = {
  logoLabel: 'Back to the top!',
  copyright: `© ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.`,
  legalHeading: 'Legal',
  legalLinks: [
    { name: 'Privacy Policy', href: ROUTES.privacy },
    { name: 'Terms of Service', href: ROUTES.terms },
  ],
};
