"use client";

import Link from "next/link";

export interface FooterProps {
  text: string;
}

const Footer = ({ text }: FooterProps) => {
  return (
    <div className="gutter-x my-10 text-center bg-specialCardGrey text-xl">
      <div className="mb-6">
        {" "}
        <Link className="hover:underline" href="#hero">
          Back to the top!
        </Link>
      </div>

      <div>{text}</div>
    </div>
  );
};

export { Footer };
