import { NavBarProps } from "@/components/NavBar";
import { HeroProps } from "@/components/Hero";
import { InstructorBlockProps } from "@/components/InstructorBlock";
import type { TimelineComponent } from "@/components/InstructorBlock";
import { CourseStructureBlockProps } from "@/components/CourseStructureBlock";
import { TestimonialBlockProps } from "@/components/TestimonialBlock";
import type { Testimonial } from "@/components/TestimonialBlock";
import { SignUpBlockProps } from "@/components/SignUpBlock";
import { FooterProps } from "@/components/Footer";

export const componentIds = {
  hero: "hero",
  instructorBlock: "instructor-block",
  courseStructureBlock: "course-structure-block",
  testimonialsBlock: "testimonial-block",
  signUpBlock: "sign-up-block",
};

export const navBarData: NavBarProps = {
  navItems: [
    {
      title: "Home",
      anchorReference: componentIds.hero,
      subtitle: "Back to the top",
    },
    {
      title: "Instructor",
      anchorReference: componentIds.instructorBlock,
      subtitle: "Meet our instructor Ustaadh Abu Hasanath",
    },
    {
      title: "Course Structure",
      anchorReference: componentIds.courseStructureBlock,
      subtitle: "Learn about our course structure",
    },
    {
      title: "Testimonials",
      anchorReference: componentIds.testimonialsBlock,
      subtitle: "See what our students say",
    },
    {
      title: "Sign Up",
      anchorReference: componentIds.signUpBlock,
      subtitle: "Take the first step of your journey now!",
    },
  ],
};

export const heroData: HeroProps = {
  title: "Al-Arabi Institute",
  bulletPoints: [
    "Small groups of 5 or less",
    "Remote",
    "Weekly 2 hr sessions",
    "Cater to beginner, intermediate, advanced",
  ],
  buttonText: "Sign Me Up!",
};

const firstTimelineEntry: TimelineComponent = {
  year: "2013",
  subheading: "As-Suffa Institute",
  details:
    "Completed 6 year full-time Alimiyyah course covering all the Islamic sciences and building my Arabic",
};

const secondTimelineEntry: TimelineComponent = {
  year: "2019",
  subheading: "Markfield Universtiy for Islamic Studies",
  details:
    "Completed a BA in Islam and Arabic at Markfield, honing my academic research and arabic skills",
};

const thirdTimelineEntry: TimelineComponent = {
  year: "2022",
  subheading: "Primary School",
  details:
    "Began teaching at Arabic at a private school to children, developing my communication",
};

const fourthTimelineEntry: TimelineComponent = {
  year: "2023",
  subheading: "As-Suffa Institute",
  details:
    "Resdident teacher at As-Suffa Institute where I teach Arabi Bayna Yadayk to years 1 and 2 and Usool Hadith to year 4",
};

export const instructorBlockData: InstructorBlockProps = {
  title: "Instructor",
  imageCaption: "Ustaadh Abu Hasanath",
  timeline: [
    fourthTimelineEntry,
    thirdTimelineEntry,
    secondTimelineEntry,
    firstTimelineEntry,
  ],
};

export const courseStructureBlockData: CourseStructureBlockProps = {
  title: "Course Structure",
  wistiaVideoId: "g62hgm02ym",
};

const asifsTestimony: Testimonial = {
  quote:
    "Ustaaz Abu Hasanath's lessons are very interactive and enjoyable. I've been pleasantly surprised at the improvement in the group. Long may it continue.",
  image: "/silhouette.jpeg", // Replace with actual path
  name: "Asif Khan",
};

const harunsTestimony: Testimonial = {
  quote:
    "The arabic course is well structured, balancing vocabulary, reading, written and conversational skills. My arabic has improved massively as well as helped me with my islamic studies. This course has opened up new opportunities for personal and professional growth, and I highly recommend it to anyone interested in learning Arabic.",
  image: "/silhouette.jpeg", // Replace with actual path
  name: "Harun Ali",
};

const nobeensTestimony: Testimonial = {
  quote:
    "I've taken online Arabic lessons before but never made real progress until now. Ustaadh's focus on conversation and varied vocabulary use, along with his experience with the Bayna Yadayk series, has rapidly improved my skills. I'm amazed at my progress in such a short time.",
  image: "/silhouette.jpeg", // Replace with actual path
  name: "Nobeen Islam",
};

export const testimonialBlockData: TestimonialBlockProps = {
  title: "Testimonials",
  testimonials: [asifsTestimony, harunsTestimony, nobeensTestimony],
};

export const signUpBlockData: SignUpBlockProps = {
  title: "Sign-Up",
  buttonText: "Sign Me Up!",
  successMessage:
    "Bismillah! We will get back to you as soon as! You've taken the first step!",
};

export const footerData: FooterProps = {
  text: "© 2024 Al-Arabi Institute. All rights reserved.",
};
