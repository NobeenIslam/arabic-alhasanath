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

//All the h-fulls and the modification of the react-slick classes in the global.css were all to make the cards equal height

const TestimonialCard = ({ quote, image, name }: Testimonial) => (
  <div
    className="bg-specialCardGrey p-6 rounded-lg shadow-md flex flex-col  h-full"
    id={componentIds.testimonialsBlock}
  >
    {/* flex-grow pushes the name and image to the bottom */}
    <div className="flex-grow">
      <BsChatLeftQuote className="text-red-600 text-3xl mb-4" />
      <p className="text-gray-700 mb-4">{quote}</p>
    </div>

    <div className="flex items-center">
      <div className=" w-12 h-12 rounded-full mr-4 overflow-hidden ">
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
    <FadeUpWrapper
      as="section"
      className="gutter py-16"
      aria-labelledby="testimonials-title"
    >
      <h2
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-left mb-12"
        id="testimonials-title"
      >
        {title}
      </h2>
      <div className="testimonial-slider">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="h-full px-2">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </FadeUpWrapper>
  );
};

export { TestimonialBlock };
export type { Testimonial };
