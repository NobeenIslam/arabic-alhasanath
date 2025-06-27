"use client";
import { LuCheck } from "react-icons/lu";
import Image from "next/image";
import BaynaYadyk from "@/public/bayna-yadayk.webp";
import { componentIds } from "@/app/Data";
import Link from "next/link";

export interface HeroProps {
  title: string;
  bulletPoints: string[];
  buttonText: string;
}

const Hero = ({ title, bulletPoints, buttonText }: HeroProps) => {
  const bullets = bulletPoints.map((point, index) => (
    <li
      key={index}
      className="flex items-center text-white font-bold text-xl sm:text-2xl md:text-3xl"
    >
      <LuCheck className="mr-2 sm:mr-4 text-white" size={24} />
      <span>{point}</span>
    </li>
  ));

  return (
    <header role="banner">
      {" "}
      <div
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/sky.jpg')" }}
        id={componentIds.hero}
      >
        <div className="absolute inset-0 bg-heroGradient" />
        {/* gutter has higher specificity so need the !. Hero wasn't spaced enought with nav */}
        <div className="gutter !pt-24 lg:!pt-[7rem] relative z-10 w-full flex flex-col items-center justify-between  lg:flex-row  lg:items-center ">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 lg:mb-12">
              {title}
            </h1>
            <ul className="space-y-4 sm:space-y-6 mb-14 ">{bullets}</ul>
            <div className="animate-shake animate-duration-1000 animate-delay-1000 animate-twice mt-[10px]">
              <Link
                href={`#${componentIds.signUpBlock}`}
                className="bg-blue-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold hover:bg-opacity-90 transition-colors"
              >
                {buttonText}
              </Link>
            </div>
          </div>
          <div className=" md:w-[600px] lg:w-[500px] xl:w-[600px] animate-fade-up lg:animate-fade-left animate-delay-500 animate-duration-800">
            <Image
              src={BaynaYadyk}
              alt="Bayna Yadayk Arabic course books, showcasing the comprehensive learning materials"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Hero };
