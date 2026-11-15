import { SectionHeading } from '@/components/blocks/SectionHeading';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { ReviewsContent } from '@/features/landing/types';

type ReviewsProps = ReviewsContent & {
  id: string;
};

const controlClassName =
  'static size-11 translate-none rounded-none border-green text-green hover:bg-green hover:text-cream disabled:opacity-30';

export const Reviews = ({ id, eyebrow, title, reviews }: ReviewsProps) => (
  <section id={id} className="px-6 py-24">
    <div className="mx-auto flex max-w-site flex-col gap-11">
      <SectionHeading eyebrow={eyebrow} title={title} balance={false} />
      <Carousel opts={{ align: 'start' }} className="flex flex-col gap-8">
        <CarouselContent className="-ml-6">
          {reviews.map((review) => (
            <CarouselItem
              key={review.name}
              className="basis-[85%] pl-6 md:basis-1/2 lg:basis-1/3"
            >
              <figure className="flex h-full flex-col justify-between gap-6 border-t-3 border-green bg-card px-[30px] py-[34px]">
                <blockquote className="font-serif text-[24px] leading-[1.3] font-medium italic">
                  {review.quote}
                </blockquote>
                <figcaption className="text-[16px] font-bold tracking-[0.08em] text-gold-dark uppercase">
                  {review.name}
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-3">
          <CarouselPrevious className={controlClassName} />
          <CarouselNext className={controlClassName} />
        </div>
      </Carousel>
    </div>
  </section>
);
