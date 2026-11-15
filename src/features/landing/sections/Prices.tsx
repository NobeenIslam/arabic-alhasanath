import { SectionHeading } from '@/components/blocks/SectionHeading';
import { cn } from '@/lib/utils';
import type { PricesContent } from '@/features/landing/types';

type PricesProps = PricesContent & {
  id: string;
};

const priceClass = 'font-serif text-[80px] leading-none font-bold';
const cardClass = 'flex flex-col gap-[18px] px-9 py-10';
const cardTitleClass = 'font-serif text-[32px] font-bold';

export const Prices = ({
  id,
  eyebrow,
  title,
  oneToOne,
  groups,
}: PricesProps) => (
  <section id={id} className="px-6 py-24">
    <div className="mx-auto flex max-w-site flex-col gap-11">
      <SectionHeading eyebrow={eyebrow} title={title} balance={false} />
      <div className="grid grid-fit-420 items-stretch gap-6">
        <div className={cn(cardClass, 'border border-rule bg-card')}>
          <h3 className={cardTitleClass}>{oneToOne.title}</h3>
          <div className="flex items-baseline gap-2.5">
            <span className={cn(priceClass, 'text-green')}>
              {oneToOne.price}
            </span>
            <span className="text-muted">{oneToOne.unit}</span>
          </div>
          <div className="flex flex-col gap-2.5 border-t border-rule pt-[18px] text-muted">
            {oneToOne.features.map((feature) => (
              <div key={feature}>{feature}</div>
            ))}
          </div>
        </div>
        <div className={cn(cardClass, 'bg-green text-cream')}>
          <h3 className={cardTitleClass}>{groups.title}</h3>
          <div className="flex items-baseline gap-2.5">
            <span className="text-[20px] text-muted-on-green">
              {groups.pricePrefix}
            </span>
            <span className={cn(priceClass, 'text-gold')}>{groups.price}</span>
            <span className="text-muted-on-green">{groups.unit}</span>
          </div>
          <div className="flex flex-col border-t border-rule-on-green">
            {groups.rates.map((rate) => (
              <div
                key={rate.label}
                className="flex justify-between border-b border-rule-on-green py-3"
              >
                <span>{rate.label}</span>
                <span
                  className={cn('font-bold', rate.isBestValue && 'text-gold')}
                >
                  {rate.price}
                </span>
              </div>
            ))}
          </div>
          <div className="text-[16px] text-muted-on-green">{groups.note}</div>
        </div>
      </div>
    </div>
  </section>
);
