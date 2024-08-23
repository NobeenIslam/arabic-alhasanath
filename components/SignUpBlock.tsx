"use client";

export interface SignUpBlockProps {
  title: string;
  buttonText: string;
  successMessage: string;
}

const SignUpBlock = ({
  title,
  buttonText,
  successMessage,
}: SignUpBlockProps) => {
  return <div className="gutter"></div>;
};

export { SignUpBlock };
