import { SiteShell } from '@/features/landing/SiteShell';
import { Hero } from '@/features/landing/sections/Hero';
import { InstructorBlock } from '@/features/landing/sections/InstructorBlock';
import { CourseStructureBlock } from '@/features/landing/sections/CourseStructureBlock';
import { TestimonialBlock } from '@/features/landing/sections/TestimonialBlock';
import { SignUpBlock } from '@/features/landing/sections/SignUpBlock';
import {
  heroData,
  instructorBlockData,
  courseStructureBlockData,
  testimonialBlockData,
  signUpBlockData,
} from '@/features/landing/content';

export const LandingPage = () => (
  <SiteShell>
    <Hero {...heroData} />
    <InstructorBlock {...instructorBlockData} />
    <CourseStructureBlock {...courseStructureBlockData} />
    <TestimonialBlock {...testimonialBlockData} />
    <SignUpBlock {...signUpBlockData} />
  </SiteShell>
);
