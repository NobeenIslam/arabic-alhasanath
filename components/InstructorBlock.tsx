"use client";

import Image from "next/image";
import Hasanath from "@/public/hasnath.png";
import { componentIds } from "@/app/Data";
import { FadeUpWrapper } from "@/components/FadeUpWrapper";

export type TimelineComponent = {
  year: string;
  subheading: string;
  details: string;
};

export interface InstructorBlockProps {
  title: string;
  imageCaption: string;
  timeline: TimelineComponent[];
}

//Uses the man image

const InstructorBlock = ({
  title,
  imageCaption,
  timeline,
}: InstructorBlockProps) => {
  return (
    <FadeUpWrapper
      as="section"
      className=" gutter"
      id={componentIds.instructorBlock}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-left mb-12 text-specialBlue'>
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col items-center">
            <div className="mb-4 relative max-h-[500px] max-w-[500px]">
              <Image
                src={Hasanath}
                alt={imageCaption}
                objectFit="contain"
                className="rounded-[10%]"
              />
            </div>
            <p className="text-xl font-semibold text-blue-800 ">
              {imageCaption}
            </p>
            {/* Divider */}
            <div className="w-full h-px bg-gray-300 mt-8 md:hidden"></div>
          </div>
          <div className="space-y-8 md:space-y-0 md:flex md:flex-col md:justify-between md:h-full md:relative md:pl-8">
            {/* Divider relative and pl-8, are added to parent for the divider*/}

            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>

            {timeline.map((entry, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 w-24">
                  <span className="inline-flex items-center justify-center text-3xl text-red-500 font-semibold">
                    {entry.year}
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-blue-800 ">
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
