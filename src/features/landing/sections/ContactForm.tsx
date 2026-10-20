'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import type { ContactFormContent } from '@/features/landing/types';
import { signUpSchema, type SignUpInput } from '@/features/landing/schemas';
import { sendSignUpEmail } from '@/actions/email.actions';
import { ROUTES } from '@/lib/constants/routes.constants';

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
  disclaimerPrefix,
  termsLabel,
  disclaimerJoiner,
  privacyLabel,
}: ContactFormContent) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpInput>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: SignUpInput) => {
    const result = await sendSignUpEmail(data);
    if (!result.success) {
      toast.error(errorTitle, { description: errorDescription });
      return;
    }

    toast.success(successTitle, { description: successDescription });
    reset();
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
          <Input id="fullName" {...register('fullName')} className="mt-1" />
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
            {...register('phoneNumber')}
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
            {...register('emailAddress')}
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
        <p className="text-xs text-gray-600">
          {disclaimerPrefix}{' '}
          <Link href={ROUTES.terms} className="underline hover:text-gray-900">
            {termsLabel}
          </Link>{' '}
          {disclaimerJoiner}{' '}
          <Link href={ROUTES.privacy} className="underline hover:text-gray-900">
            {privacyLabel}
          </Link>
        </p>
      </div>
    </div>
  );
};
