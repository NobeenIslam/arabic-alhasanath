"use client";
import { LuCheck } from "react-icons/lu";

export interface HeroProps {
  title: string;
  bulletPoints: string[];
  buttonText: string;
}

//Uses Sky as backgroudn image with --hero-gradient overlay
//Uses Table and baynadayk images

const Hero = ({ title, bulletPoints, buttonText }: HeroProps) => {
  return <div className="gutter"></div>;
};

export { Hero };
