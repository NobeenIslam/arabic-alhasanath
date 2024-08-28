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

const dummyTimelineEntry: TimelineComponent = {
  year: "2013",
  subheading: "As-Suffa Institute",
  details:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
};

export const instructorBlockData: InstructorBlockProps = {
  title: "Instructor",
  imageCaption: "Ustaadh Abu Hasanath",
  timeline: [
    dummyTimelineEntry,
    dummyTimelineEntry,
    dummyTimelineEntry,
    dummyTimelineEntry,
  ],
  image: "/man.jpg",
};

export const courseStructureBlockData: CourseStructureBlockProps = {
  title: "Course Structure",
  wistiaVideoId: "g62hgm02ym",
};

const dummyTestimonialEntry: Testimonial = {
  quote:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  image: "/man.jpg", // Replace with actual path
  name: "Nobeen Islam",
};

export const testimonialBlockData: TestimonialBlockProps = {
  title: "Testimonials",
  testimonials: [
    dummyTestimonialEntry,
    dummyTestimonialEntry,
    dummyTestimonialEntry,
    dummyTestimonialEntry,
  ],
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
