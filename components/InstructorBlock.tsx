"use client";

export type TimelineComponent = {
  year: string;
  subheading: string;
  details: string;
};

export interface InstructorBlockProps {
  title: string;
  imageCaption: string;
  timeline: TimelineComponent[];
  image: string;
}

//Uses the man image

const InstructorBlock = ({
  title,
  imageCaption,
  timeline,
  image,
}: InstructorBlockProps) => {
  return <div className="gutter"></div>;
};

export { InstructorBlock };
