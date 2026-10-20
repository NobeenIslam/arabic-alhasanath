import Image from 'next/image';
import OpenBook from '@/assets/open-book.svg';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/features/landing/sections/Hero';
import { InstructorBlock } from '@/features/landing/sections/InstructorBlock';
import { CourseStructureBlock } from '@/features/landing/sections/CourseStructureBlock';
import { TestimonialBlock } from '@/features/landing/sections/TestimonialBlock';
import { SignUpBlock } from '@/features/landing/sections/SignUpBlock';
import {
  componentIds,
  navigationData,
  heroData,
  instructorBlockData,
  courseStructureBlockData,
  testimonialBlockData,
  signUpBlockData,
  footerData,
} from '@/features/landing/content';

const TopLink = ({ label }: { label: string }) => (
  <a href={`#${componentIds.hero}`} aria-label={label}>
    <Image src={OpenBook} alt="" width={50} height={50} />
  </a>
);

export const LandingPage = () => (
  <>
    <Navigation
      logo={<TopLink label={navigationData.logoLabel} />}
      navLinks={navigationData.links}
    />
    <main id="main-content">
      <Hero {...heroData} />
      <InstructorBlock {...instructorBlockData} />
      <CourseStructureBlock {...courseStructureBlockData} />
      <TestimonialBlock {...testimonialBlockData} />
      <SignUpBlock {...signUpBlockData} />
    </main>
    <Footer
      logo={<TopLink label={footerData.logoLabel} />}
      navLinks={navigationData.links}
      copyright={footerData.copyright}
    />
  </>
);
