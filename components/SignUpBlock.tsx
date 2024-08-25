"use client";

import { useState } from "react";
import ExclamationCloud from "@/public/exclamation-cloud.jpeg";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "@/utilities/breakpoints";

export interface SignUpBlockProps {
  title: string;
  buttonText: string;
  successMessage: string;
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

//THere is no validation because the browser has native validation for the form fields

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

const SignUpBlock = ({
  title,
  buttonText,
  successMessage,
}: SignUpBlockProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const isScreenLargeSizeOrSmaller = useMediaQuery(
    `(max-width:${breakpoints.lg})`
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.fullName && formData.phoneNumber && formData.emailAddress) {
      // Form submission logic will be added later
      console.log("Form submitted:", formData);
      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    }
  };

  return (
    <div className="gutter bg-specialBackgroundPink">
      <h2 className="text-6xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="w-full m-auto bg-specialFormBlue rounded-lg p-8">
          {isSubmitted ? (
            <div className="max-w-md mx-auto bg-specialFormBlue rounded-lg p-8 text-center">
              <h2 className="text-5xl font-bold text-white mb-4">Thank You!</h2>
              <p className="text-white text-4xl">{successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <InputField
                label="Full Name"
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <InputField
                label="Phone Number"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <InputField
                label="Email Address"
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                required
              />
              <div className="flex ">
                <button
                  type="submit"
                  className=" m-auto bg-buttonPink text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  {buttonText}
                </button>
              </div>
            </form>
          )}
        </div>
        {!isScreenLargeSizeOrSmaller && (
          <div className="flex justify-center">
            <Image
              src={ExclamationCloud}
              alt="Exclamation Mark"
              width={500}
              height={500}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export { SignUpBlock };
