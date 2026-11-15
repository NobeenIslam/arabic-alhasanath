import { SiteShell } from '@/features/landing/SiteShell';
import { Hero } from '@/features/landing/sections/Hero';
import { Audience } from '@/features/landing/sections/Audience';
import { Lessons } from '@/features/landing/sections/Lessons';
import { Prices } from '@/features/landing/sections/Prices';
import { Teacher } from '@/features/landing/sections/Teacher';
import { Reviews } from '@/features/landing/sections/Reviews';
import { GetStarted } from '@/features/landing/sections/GetStarted';
import {
  audienceData,
  getStartedData,
  heroData,
  lessonsData,
  pricesData,
  reviewsData,
  sectionIds,
  teacherData,
} from '@/features/landing/content';
import { PENDING_CALENDLY_URL } from '@/lib/constants/contact.constants';

export const LandingPage = () => (
  <SiteShell>
    <Hero id={sectionIds.top} {...heroData} />
    <Audience id={sectionIds.who} {...audienceData} />
    <Lessons id={sectionIds.how} {...lessonsData} />
    <Prices id={sectionIds.prices} {...pricesData} />
    <Teacher id={sectionIds.teacher} {...teacherData} />
    <Reviews id={sectionIds.reviews} {...reviewsData} />
    <GetStarted
      id={sectionIds.start}
      bookingId={sectionIds.book}
      registerId={sectionIds.register}
      calendlyUrl={PENDING_CALENDLY_URL}
      {...getStartedData}
    />
  </SiteShell>
);
