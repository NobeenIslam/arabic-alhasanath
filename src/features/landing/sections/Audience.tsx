import { SectionHeading } from '@/components/blocks/SectionHeading';
import type { AudienceContent } from '@/features/landing/types';

type AudienceProps = AudienceContent & {
  id: string;
};

export const Audience = ({ id, eyebrow, title, cards }: AudienceProps) => (
  <section id={id} className="px-6 py-24">
    <div className="mx-auto flex max-w-site flex-col gap-11">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="grid grid-fit-320 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-3 border border-rule bg-card px-[30px] py-8"
          >
            <div
              lang="ar"
              className="font-amiri text-[48px] leading-none font-bold text-gold-dark"
            >
              {card.numeral}
            </div>
            <h3 className="font-serif text-[30px] leading-[1.1] font-bold">
              {card.title}
            </h3>
            <p className="text-muted">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
