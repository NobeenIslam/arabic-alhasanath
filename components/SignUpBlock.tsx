"use client";

import MadinahBooks from "@/public/madinah-books.png";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "@/utilities/breakpoints";
import { componentIds } from "@/app/Data";
import { FadeUpWrapper } from "@/components/FadeUpWrapper";
import { ContactForm } from "@/components/molecules/ContactForm";
export interface SignUpBlockProps {
  title: string;
}

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  required = false,
}) => (
  <div className="mb-8">
    <label htmlFor={id} className="block text-white mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 rounded-md bg-white text-gray-800 h-[60px]`}
      required={required}
    />
  </div>
);

const Spinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
  </div>
);

const SignUpBlock = ({ title }: SignUpBlockProps) => {
  const isScreenLargeSizeOrSmaller = useMediaQuery(
    `(max-width:${breakpoints.lg})`
  );

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
          {!isScreenLargeSizeOrSmaller && (
            <div className="flex justify-center">
              <Image
                src={MadinahBooks}
                alt="Picture of Madinah Books"
                width={500}
                height={500}
              />
            </div>
          )}
        </div>
      </FadeUpWrapper>
    </section>
  );
};

export { SignUpBlock };
