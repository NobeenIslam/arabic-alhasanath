import { Diamond } from '@/components/blocks/Diamond';
import type { HeroContent } from '@/features/landing/types';

type HeroProps = HeroContent & {
  id: string;
};

const StarPattern = () => (
  <svg
    aria-hidden="true"
    width="100%"
    height="100%"
    className="absolute top-0 left-0 opacity-[0.09]"
  >
    <defs>
      <pattern
        id="siteStar"
        width="120"
        height="120"
        patternUnits="userSpaceOnUse"
      >
        <g fill="none" stroke="var(--color-gold)" strokeWidth="1.2">
          <rect x="34" y="34" width="52" height="52" />
          <rect
            x="34"
            y="34"
            width="52"
            height="52"
            transform="rotate(45 60 60)"
          />
          <path d="M0 60H23M97 60H120M60 0V23M60 97V120" />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#siteStar)" />
  </svg>
);

const Ornament = () => (
  <div aria-hidden="true" className="my-1.5 flex items-center gap-4">
    <div className="h-px w-24 bg-gold" />
    <Diamond className="size-[9px]" />
    <div className="h-px w-24 bg-gold" />
  </div>
);

export const Hero = ({
  id,
  verse,
  title,
  intro,
  primaryCta,
  secondaryCta,
  highlights,
}: HeroProps) => (
  <section
    id={id}
    className="relative overflow-hidden bg-green px-6 pt-[177px] pb-18 text-cream"
  >
    <StarPattern />
    <div className="relative mx-auto flex max-w-[980px] flex-col items-center gap-5 text-center">
      <div
        lang="ar"
        dir="rtl"
        className="font-ruqaa text-[clamp(52px,8vw,104px)] leading-[1.35] font-bold text-gold"
      >
        {verse.arabic}
      </div>
      <div className="font-serif text-[21px] text-muted-on-green italic">
        {verse.translation}
      </div>
      <Ornament />
      <h1 className="font-serif text-[clamp(46px,6.4vw,84px)] leading-none font-semibold tracking-[-0.01em] text-balance">
        {title}
      </h1>
      <p className="max-w-[660px] text-[21px] leading-[1.5] text-pretty text-muted-on-green">
        {intro}
      </p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
        <a
          href={primaryCta.href}
          className="bg-gold px-[34px] py-[18px] text-[19px] font-bold text-green"
        >
          {primaryCta.name}
        </a>
        <a
          href={secondaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="tap-target text-[17px] font-semibold underline underline-offset-5"
        >
          {secondaryCta.name}
        </a>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-x-11 gap-y-3 self-stretch border-t border-rule-on-green pt-6.5 text-[14px] font-semibold tracking-[0.2em] text-gold uppercase">
        {highlights.map((highlight) => (
          <span key={highlight}>{highlight}</span>
        ))}
      </div>
    </div>
  </section>
);
