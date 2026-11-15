import { SectionHeading } from '@/components/blocks/SectionHeading';
import type { ReviewsContent } from '@/features/landing/types';

type ReviewsProps = ReviewsContent & {
  id: string;
};

export const Reviews = ({ id, eyebrow, title, reviews }: ReviewsProps) => (
  <section id={id} className="px-6 py-24">
    <div className="mx-auto flex max-w-site flex-col gap-11">
      <SectionHeading eyebrow={eyebrow} title={title} balance={false} />
      <div className="grid grid-fit-320 gap-6">
        {reviews.map((review) => (
          <figure
            key={review.name}
            className="flex flex-col justify-between gap-6 border-t-3 border-green bg-card px-[30px] py-[34px]"
          >
            <blockquote className="font-serif text-[27px] leading-[1.3] font-medium italic">
              {review.quote}
            </blockquote>
            <figcaption className="text-[16px] font-bold tracking-[0.08em] text-gold-dark uppercase">
              {review.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
