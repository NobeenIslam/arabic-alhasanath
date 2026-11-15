import { SectionHeading } from '@/components/blocks/SectionHeading';
import type { LessonsContent } from '@/features/landing/types';

type LessonsProps = LessonsContent & {
  id: string;
};

export const Lessons = ({
  id,
  eyebrow,
  title,
  intro,
  books,
  booksNote,
  facts,
}: LessonsProps) => (
  <section id={id} className="bg-panel px-6 py-24">
    <div className="mx-auto grid max-w-site grid-fit-440 items-start gap-x-18 gap-y-12">
      <div className="flex flex-col gap-3.5">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          intro={intro}
          align="start"
        />
        <div className="mt-3.5 flex flex-col gap-3">
          {books.map((book) => (
            <div
              key={book.title}
              className="flex items-center justify-between gap-4 border border-rule bg-card px-[22px] py-[18px]"
            >
              <span className="font-serif text-[24px] font-bold">
                {book.title}
              </span>
              <span
                lang="ar"
                dir="rtl"
                className="font-amiri text-[24px] text-gold-dark"
              >
                {book.arabicTitle}
              </span>
            </div>
          ))}
          <div className="text-[16px] text-muted">{booksNote}</div>
        </div>
      </div>
      <div className="grid grid-fit-220 gap-x-7 gap-y-8">
        {facts.map((fact) => (
          <div
            key={fact.title}
            className="flex flex-col gap-1.5 border-t-2 border-green pt-4"
          >
            <div className="font-serif text-[28px] font-bold">{fact.title}</div>
            <div className="text-muted">{fact.description}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
