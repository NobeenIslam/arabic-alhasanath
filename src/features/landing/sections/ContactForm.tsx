import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import type { ContactFormContent } from '@/features/landing/types';

type FormData = {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
};

export const ContactForm = ({
  heading,
  fullNameLabel,
  phoneNumberLabel,
  emailAddressLabel,
  submitLabel,
  submittingLabel,
  successTitle,
  successDescription,
  errorTitle,
  errorDescription,
  disclaimer,
}: ContactFormContent) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast.success(successTitle, { description: successDescription });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(errorTitle, { description: errorDescription });
    }
  };

  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-xl">
      <div className="bg-emerald-600 px-6 py-4">
        <h2 className="text-center text-2xl font-bold text-white">{heading}</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6">
        <div>
          <Label
            htmlFor="fullName"
            className="text-sm font-medium text-gray-700"
          >
            {fullNameLabel}
          </Label>
          <Input
            id="fullName"
            {...register('fullName', { required: 'Full name is required' })}
            className="mt-1"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div>
          <Label
            htmlFor="phoneNumber"
            className="text-sm font-medium text-gray-700"
          >
            {phoneNumberLabel}
          </Label>
          <Input
            id="phoneNumber"
            type="tel"
            {...register('phoneNumber', {
              required: 'Phone number is required',
              pattern: {
                value: /^\d{11}$/,
                message: 'Please enter a valid phone number',
              },
            })}
            className="mt-1"
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-red-600">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <div>
          <Label
            htmlFor="emailAddress"
            className="text-sm font-medium text-gray-700"
          >
            {emailAddressLabel}
          </Label>
          <Input
            id="emailAddress"
            type="email"
            {...register('emailAddress', {
              required: 'Email address is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address',
              },
            })}
            className="mt-1"
          />
          {errors.emailAddress && (
            <p className="mt-1 text-xs text-red-600">
              {errors.emailAddress.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {submittingLabel}
            </>
          ) : (
            submitLabel
          )}
        </Button>
      </form>
      <div className="bg-gray-50 px-6 py-4 text-center">
        <p className="text-xs text-gray-600">{disclaimer}</p>
      </div>
    </div>
  );
};
