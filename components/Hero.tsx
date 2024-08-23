"use client";
import { LuCheck } from "react-icons/lu";

export interface HeroProps {
  title: string;
  bulletPoints: string[];
  buttonText: string;
}

const Hero = ({ title, bulletPoints, buttonText }: HeroProps) => {
  return <div className="gutter"></div>;
};

export { Hero };
