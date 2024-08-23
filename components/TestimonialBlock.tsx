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

const TestimonialBlock = ({ title, testimonials }: TestimonialBlockProps) => {
  return <div className="gutter"></div>;
};

export { TestimonialBlock };
