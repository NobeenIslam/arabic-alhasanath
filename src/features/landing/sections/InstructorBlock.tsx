'use client';

import Image from 'next/image';
import Hasanath from '@/assets/hasnath.png';
import { componentIds } from '@/features/landing/content';
import { FadeUpWrapper } from '@/components/blocks/FadeUpWrapper';
import type { InstructorContent } from '@/features/landing/types';

//Uses the man image

const InstructorBlock = ({
  title,
  imageCaption,
  timeline,
}: InstructorContent) => {
  return (
    <FadeUpWrapper
      as="section"
      className="gutter"
      id={componentIds.instructorBlock}
      aria-labelledby="instructor-title"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          className="text-specialBlue mb-12 text-left text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          id="instructor-title"
        >
          {title}
        </h2>
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <div className="relative mb-4 max-h-[500px] max-w-[500px]">
              <Image
                src={Hasanath}
                alt={imageCaption}
                className="rounded-[10%]"
              />
            </div>
            <p className="text-xl font-semibold text-blue-800">
              {imageCaption}
            </p>
            {/* Divider */}
            <div className="mt-8 h-px w-full bg-gray-300 md:hidden"></div>
          </div>
          <div className="space-y-8 md:relative md:flex md:h-full md:flex-col md:justify-between md:space-y-0 md:pl-8">
            {/* Divider relative and pl-8, are added to parent for the divider*/}

            <div className="absolute top-0 bottom-0 left-0 hidden w-px bg-gray-300 md:block"></div>

            {timeline.map((entry, index) => (
              <div key={index} className="flex">
                <div className="w-24 shrink-0">
                  <span className="inline-flex items-center justify-center text-3xl font-semibold text-red-500">
                    {entry.year}
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-blue-800">
                    {entry.subheading}
                  </h3>
                  <p className="mt-1 text-gray-600">{entry.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeUpWrapper>
  );
};

export { InstructorBlock };
