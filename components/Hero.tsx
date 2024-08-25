"use client";
import { LuCheck } from "react-icons/lu";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "@/utilities/breakpoints";
import TablePic from "@/public/table.png";
import BaynaYadyk from "@/public/bayna-yadayk.webp";

export interface HeroProps {
  title: string;
  bulletPoints: string[];
  buttonText: string;
}

const Hero = ({ title, bulletPoints, buttonText }: HeroProps) => {
  const isLarge = useMediaQuery(`(max-width:${breakpoints.lg})`);

  return (
    <div
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/sky.jpg')" }}
    >
      <div className="absolute inset-0 bg-heroGradient" />
      <div className="gutter relative z-10 w-full flex flex-col items-start lg:flex-row justify-between lg:items-center">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 lg:mb-12">
            {title}
          </h1>
          <ul className="space-y-4 sm:space-y-6 mb-8 lg:mb-12">
            {bulletPoints.map((point, index) => (
              <li
                key={index}
                className="flex items-center text-white font-bold text-xl sm:text-2xl md:text-3xl"
              >
                <LuCheck className="mr-2 sm:mr-4 text-white" size={24} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <button className="bg-blue-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold hover:bg-opacity-90 transition-colors">
            {buttonText}
          </button>
        </div>
        <div className="">
          <div className=" xl:w-[700px] lg:w-[600px] md:w-[500px] w-[300px]">
            <Image src={BaynaYadyk} alt="Arabic Course Books" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
