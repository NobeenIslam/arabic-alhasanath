"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { BsChatLeftQuote } from "react-icons/bs";
import { componentIds } from "@/app/Data";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FadeUpWrapper } from "@/components/FadeUpWrapper";

type Testimonial = {
  quote: string;
  image: string;
  name: string;
};

export interface TestimonialBlockProps {
  title: string;
  testimonials: Testimonial[];
}

const TestimonialCard = ({ quote, image, name }: Testimonial) => (
  <div
    className="bg-specialCardGrey p-6 rounded-lg shadow-md"
    id={componentIds.testimonialsBlock}
  >
    <BsChatLeftQuote className="text-red-600 text-3xl mb-4" />
    <p className="text-gray-700 mb-4">{quote}</p>
    <div className="flex items-center">
      <div className=" w-12 h-12 rounded-full mr-4 overflow-hidden">
        <Image src={image} alt={name} width={50} height={50} />
      </div>

      <p className="font-semibold">{name}</p>
    </div>
  </div>
);

const TestimonialBlock = ({ title, testimonials }: TestimonialBlockProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <FadeUpWrapper as="section" className="gutter py-16">
      <h2 className="text-6xl font-bold text-left mb-12">{title}</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-2">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </Slider>
    </FadeUpWrapper>
  );
};

export { TestimonialBlock };
export type { Testimonial };
