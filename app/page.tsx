import { Hero } from "@/components/Hero";
import { InstructorBlock } from "@/components/InstructorBlock";
import { CourseStructureBlock } from "@/components/CourseStructureBlock";
import { TestimonialBlock } from "@/components/TestimonialBlock";
import { SignUpBlock } from "@/components/SignUpBlock";
import {
  heroData,
  instructorBlockData,
  courseStructureBlockData,
  testimonialBlockData,
  signUpBlockData,
} from "./Data";

export default function Home() {
  return (
    <>
      <Hero {...heroData} />
      <InstructorBlock {...instructorBlockData} />
      <CourseStructureBlock {...courseStructureBlockData} />
      <TestimonialBlock {...testimonialBlockData} />
      <SignUpBlock {...signUpBlockData} />
    </>
  );
}
