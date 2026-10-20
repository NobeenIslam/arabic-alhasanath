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
      href: `#${componentIds.hero}`,
      description: 'Back to the top',
    },
    {
      name: 'Instructor',
      href: `#${componentIds.instructorBlock}`,
      description: 'Meet our instructor Ustaadh Abu Hasanath',
    },
    {
      name: 'Course Structure',
      href: `#${componentIds.courseStructureBlock}`,
      description: 'Learn about our course structure',
    },
    {
      name: 'Testimonials',
      href: `#${componentIds.testimonialsBlock}`,
      description: 'See what our students say',
    },
    {
      name: 'Sign Up',
      href: `#${componentIds.signUpBlock}`,
      description: 'Take the first step of your journey now!',
    },
  ],
};

export const heroData: HeroContent = {
  title: "Abu'sArabic",
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
    'Completed 6 year full-time Alimiyyah course covering all the Islamic sciences and building my Arabic',
};

const secondTimelineEntry: TimelineEntry = {
  year: '2019',
  subheading: 'Markfield Universtiy for Islamic Studies',
  details:
    'Completed a BA in Islam and Arabic at Markfield, honing my academic research and arabic skills',
};

const thirdTimelineEntry: TimelineEntry = {
  year: '2022',
  subheading: 'Primary School',
  details:
    'Began teaching at Arabic at a private school to children, developing my communication',
};

const fourthTimelineEntry: TimelineEntry = {
  year: '2023',
  subheading: 'As-Suffa Institute',
  details:
    'Resdident teacher at As-Suffa Institute where I teach Arabi Bayna Yadayk to years 1 and 2 and Usool Hadith to year 4',
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
  image: '/silhouette.jpeg', // Replace with actual path
  name: 'Asif Khan',
};

const harunsTestimony: Testimonial = {
  quote:
    'The arabic course is well structured, balancing vocabulary, reading, written and conversational skills. My arabic has improved massively as well as helped me with my islamic studies. This course has opened up new opportunities for personal and professional growth, and I highly recommend it to anyone interested in learning Arabic.',
  image: '/silhouette.jpeg', // Replace with actual path
  name: 'Harun Ali',
};

const nobeensTestimony: Testimonial = {
  quote:
    "I've taken online Arabic lessons before but never made real progress until now. Ustaadh's focus on conversation and varied vocabulary use, along with his experience with the Bayna Yadayk series, has rapidly improved my skills. I'm amazed at my progress in such a short time.",
  image: '/silhouette.jpeg', // Replace with actual path
  name: 'Nobeen Islam',
};

export const testimonialBlockData: TestimonialsContent = {
  title: 'Testimonials',
  testimonials: [asifsTestimony, harunsTestimony, nobeensTestimony],
  slideLabel: 'Go to slide',
};

export const signUpBlockData: SignUpContent = {
  title: 'Sign-Up',
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
    disclaimer:
      'By enrolling, you agree to our Terms of Service and Privacy Policy',
  },
};

export const footerData: FooterContent = {
  logoLabel: 'Back to the top!',
  copyright: '© 2024 Al-Arabi Institute. All rights reserved.',
};
