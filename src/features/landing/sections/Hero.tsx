'use client';
import { LuCheck } from 'react-icons/lu';
import Image from 'next/image';
import BaynaYadyk from '@/assets/bayna-yadayk.webp';
import { componentIds } from '@/features/landing/content';
import Link from 'next/link';
import type { HeroContent } from '@/features/landing/types';

const Hero = ({ title, bulletPoints, buttonText, imageAlt }: HeroContent) => {
  const bullets = bulletPoints.map((point, index) => (
    <li
      key={index}
      className="flex items-center text-xl font-bold text-white md:text-3xl sm:text-2xl"
    >
      <LuCheck className="mr-2 text-white sm:mr-4" size={24} />
      <span>{point}</span>
    </li>
  ));

  return (
    <header role="banner">
      {' '}
      <div
        className="relative flex min-h-screen items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/sky.jpg')" }}
        id={componentIds.hero}
      >
        <div className="absolute inset-0 bg-heroGradient" />
        {/* gutter has higher specificity so need the !. Hero wasn't spaced enought with nav */}
        <div className="relative z-10 gutter flex w-full flex-col items-center justify-between pt-24! lg:flex-row lg:items-center lg:pt-28!">
          <div className="mb-12 w-full lg:mb-0 lg:w-1/2">
            <h1 className="mb-8 text-4xl font-bold text-white md:text-6xl lg:mb-12 lg:text-7xl sm:text-5xl">
              {title}
            </h1>
            <ul className="mb-14 space-y-4 sm:space-y-6">{bullets}</ul>
            <div className="mt-[10px] animate-shake">
              <Link
                href={`#${componentIds.signUpBlock}`}
                className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-600/90 sm:px-12 sm:py-4 sm:text-xl"
              >
                {buttonText}
              </Link>
            </div>
          </div>
          <div className="animate-in delay-500 duration-800 fill-mode-both fade-in slide-in-from-bottom-8 md:w-[600px] lg:w-[500px] lg:slide-in-from-bottom-0 lg:slide-in-from-right-8 xl:w-[600px]">
            <Image src={BaynaYadyk} alt={imageAlt} />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Hero };
