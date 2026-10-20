'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { BsChatLeftQuote } from 'react-icons/bs';
import { componentIds } from '@/features/landing/content';

// Import slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FadeUpWrapper } from '@/components/blocks/FadeUpWrapper';
import type {
  Testimonial,
  TestimonialsContent,
} from '@/features/landing/types';

//All the h-fulls and the modification of the react-slick classes in the global.css were all to make the cards equal height

const TestimonialCard = ({ quote, image, name }: Testimonial) => (
  <div
    className="flex h-full flex-col rounded-lg bg-specialCardGrey p-6 shadow-md"
    id={componentIds.testimonialsBlock}
  >
    {/* grow pushes the name and image to the bottom */}
    <div className="grow">
      <BsChatLeftQuote className="mb-4 text-3xl text-red-600" />
      <p className="mb-4 text-gray-700">{quote}</p>
    </div>

    <div className="flex items-center">
      <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
        <Image src={image} alt={name} width={50} height={50} />
      </div>

      <p className="font-semibold">{name}</p>
    </div>
  </div>
);

const TestimonialBlock = ({ title, testimonials }: TestimonialsContent) => {
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
        className="mb-12 text-left text-4xl font-bold md:text-6xl lg:text-7xl sm:text-5xl"
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
