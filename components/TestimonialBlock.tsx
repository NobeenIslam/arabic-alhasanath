"use client";

import { BsChatLeftQuote } from "react-icons/bs";

type testimonial = {
  quote: string;
  image: string;
  name: string;
};

export interface TestimonialBlockProps {
  title: string;
  testimonials: testimonial[];
}

//For now uses the man image for the little image circles, I'll replace it with proper assets when I have the structure I need.
const TestimonialBlock = ({ title, testimonials }: TestimonialBlockProps) => {
  return <div className="gutter"></div>;
};

export { TestimonialBlock };
