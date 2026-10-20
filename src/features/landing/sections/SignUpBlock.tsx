'use client';

import MadinahBooks from '@/assets/madinah-books.png';
import Image from 'next/image';
import { componentIds } from '@/features/landing/content';
import { FadeUpWrapper } from '@/components/blocks/FadeUpWrapper';
import { ContactForm } from '@/features/landing/sections/ContactForm';
import type { SignUpContent } from '@/features/landing/types';

const SignUpBlock = ({ title, imageAlt, form }: SignUpContent) => {
  return (
    <section
      className="gutter bg-linear-to-b from-amber-50 to-amber-100"
      id={componentIds.signUpBlock}
      aria-labelledby="sign-up-title"
    >
      <FadeUpWrapper>
        <h2
          className="mb-8 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          id="sign-up-title"
        >
          {title}
        </h2>
        <div className="grid grid-cols-1 items-center justify-items-center lg:grid-cols-2">
          <ContactForm {...form} />
          <div className="hidden justify-center lg:flex">
            <Image src={MadinahBooks} alt={imageAlt} width={500} height={500} />
          </div>
        </div>
      </FadeUpWrapper>
    </section>
  );
};

export { SignUpBlock };
