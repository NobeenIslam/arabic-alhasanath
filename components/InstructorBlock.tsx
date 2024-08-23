"use client";

type timelineComponent = {
  year: string;
  subheading: string;
  details: string;
};

export interface InstructorBlockProps {
  title: string;
  imageCaption: string;
  timeline: timelineComponent[];
  image: string;
}

const InstructorBlock = ({
  title,
  imageCaption,
  timeline,
  image,
}: InstructorBlockProps) => {
  return;
};

export { InstructorBlock };
