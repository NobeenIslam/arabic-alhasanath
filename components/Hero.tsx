"use client";
import { LuCheck } from "react-icons/lu";
import Image from "next/image";

export interface HeroProps {
  title: string;
  bulletPoints: string[];
  buttonText: string;
}

const Hero = ({ title, bulletPoints, buttonText }: HeroProps) => {
  return (
    <div
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/sky.jpg')" }}
    >
      <div className="absolute inset-0 bg-blue-200 bg-opacity-50" />
      <div className="gutter relative z-10 w-full flex flex-col lg:flex-row justify-between items-center">
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
          <button className="bg-buttonBlue text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold hover:bg-opacity-90 transition-colors">
            {buttonText}
          </button>
        </div>
        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="absolute bottom-[15rem] right-4 sm:right-[3rem] w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px]">
            <Image
              src="/bayna-yadayk.webp"
              alt="Arabic Course Books"
              layout="responsive"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="absolute -bottom-[2rem] -right-[3rem] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]">
            <Image
              src="/table.png"
              alt="Table"
              layout="responsive"
              width={600}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
