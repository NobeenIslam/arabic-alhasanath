import Image from 'next/image';
import teacherPhoto from '@/assets/teacher.webp';
import { Diamond } from '@/components/blocks/Diamond';
import { Eyebrow } from '@/components/blocks/Eyebrow';
import type { TeacherContent } from '@/features/landing/types';

type TeacherProps = TeacherContent & {
  id: string;
};

export const Teacher = ({
  id,
  eyebrow,
  name,
  bio,
  credentials,
  imageAlt,
}: TeacherProps) => (
  <section id={id} className="bg-green px-6 py-24 text-cream">
    <div className="mx-auto grid max-w-[1080px] grid-fit-380 items-center gap-x-20 gap-y-14">
      <div className="w-full max-w-[420px] justify-self-center p-3.5">
        <Image
          src={teacherPhoto}
          alt={imageAlt}
          sizes="(max-width: 468px) calc(100vw - 76px), 392px"
          className="block aspect-[4/5] h-auto w-full rounded-t-[420px] object-cover object-[50%_22%] outline-[1.5px] outline-offset-12 outline-gold"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        <h2 className="font-serif text-[clamp(40px,4.8vw,60px)] leading-none font-semibold">
          {name}
        </h2>
        <p className="text-pretty text-muted-on-green">{bio}</p>
        <ul className="mt-2 flex flex-col">
          {credentials.map((credential) => (
            <li
              key={credential}
              className="flex items-center gap-4 border-t border-rule-on-green py-3.5 last:border-b"
            >
              <Diamond />
              <span>{credential}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
