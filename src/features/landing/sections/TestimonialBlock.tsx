'use client';

import { useCallback, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { BsChatLeftQuote } from 'react-icons/bs';
import { componentIds } from '@/features/landing/content';
import { FadeUpWrapper } from '@/components/blocks/FadeUpWrapper';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import type {
  Testimonial,
  TestimonialsContent,
} from '@/features/landing/types';

const TestimonialCard = ({ quote, image, name }: Testimonial) => (
  <div className="flex h-full flex-col rounded-lg bg-specialCardGrey p-6 shadow-md">
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

const useCarouselPosition = (api: CarouselApi) => {
  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!api) return () => {};
      api.on('select', onChange).on('reInit', onChange);
      return () => {
        api.off('select', onChange).off('reInit', onChange);
      };
    },
    [api]
  );
  const selectedIndex = useSyncExternalStore(
    subscribe,
    () => api?.selectedScrollSnap() ?? 0,
    () => 0
  );
  const snapCount = useSyncExternalStore(
    subscribe,
    () => api?.scrollSnapList().length ?? 0,
    () => 0
  );
  return { selectedIndex, snapCount };
};

const TestimonialBlock = ({
  title,
  testimonials,
  slideLabel,
}: TestimonialsContent) => {
  const [api, setApi] = useState<CarouselApi>();
  const { selectedIndex, snapCount } = useCarouselPosition(api);

  return (
    <FadeUpWrapper
      as="section"
      className="gutter py-16"
      id={componentIds.testimonialsBlock}
      aria-labelledby="testimonials-title"
    >
      <h2
        className="mb-12 text-left text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
        id="testimonials-title"
      >
        {title}
      </h2>
      <Carousel opts={{ loop: true, align: 'start' }} setApi={setApi}>
        <CarouselContent className="py-2">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.name}
              className="sm:basis-1/2 min-[64rem]:basis-1/3"
            >
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: snapCount > 1 ? snapCount : 0 }, (_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`${slideLabel} ${index + 1}`}
            aria-current={index === selectedIndex}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              'h-2 w-2 rounded-full transition-colors',
              index === selectedIndex
                ? 'bg-foreground'
                : 'bg-muted-foreground/40'
            )}
          />
        ))}
      </div>
    </FadeUpWrapper>
  );
};

export { TestimonialBlock };
