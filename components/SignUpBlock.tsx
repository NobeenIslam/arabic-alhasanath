"use client";

import MadinahBooks from "@/public/madinah-books.png";
import Image from "next/image";
import { componentIds } from "@/app/Data";
import { FadeUpWrapper } from "@/components/FadeUpWrapper";
import { ContactForm } from "@/components/molecules/ContactForm";
export interface SignUpBlockProps {
  title: string;
}

const SignUpBlock = ({ title }: SignUpBlockProps) => {

  return (
    <section
      className="gutter  bg-gradient-to-b from-amber-50 to-amber-100  "
      id={componentIds.signUpBlock}
      aria-labelledby="sign-up-title"
    >
      <FadeUpWrapper>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-bold mb-8"
          id="sign-up-title"
        >
          {title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center">
          <ContactForm />
          <div className="hidden lg:flex justify-center">
            <Image
              src={MadinahBooks}
              alt="Picture of Madinah Books"
              width={500}
              height={500}
              />
          </div>
        </div>
      </FadeUpWrapper>
    </section>
  );
};

export { SignUpBlock };
