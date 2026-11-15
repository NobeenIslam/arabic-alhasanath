'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useForm, type FieldError } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendRegistrationEmail } from '@/actions/email.actions';
import { levelOptions } from '@/features/landing/content';
import {
  lessonTypes,
  registerInterestSchema,
  type RegisterInterestInput,
} from '@/features/landing/schemas';
import type { RegisterFormContent } from '@/features/landing/types';
import { ROUTES } from '@/lib/constants/routes.constants';

type RegisterFormProps = RegisterFormContent & {
  id: string;
};

type FieldProps = {
  id: string;
  label: ReactNode;
  error?: FieldError;
  className?: string;
  children: ReactNode;
};

const controlClass =
  'border border-input-border bg-card px-3.5 py-3 text-ink aria-invalid:border-error';
const labelClass = 'text-[16px] font-semibold';
const errorId = (id: string) => `${id}-error`;

const Field = ({ id, label, error, className, children }: FieldProps) => (
  <div className={className ?? 'flex flex-col gap-2'}>
    <label htmlFor={id} className={labelClass}>
      {label}
    </label>
    {children}
    {error ? (
      <p id={errorId(id)} className="text-[15px] font-semibold text-error">
        {error.message}
      </p>
    ) : null}
  </div>
);

const fieldIds = {
  name: 'register-name',
  phone: 'register-phone',
  email: 'register-email',
  level: 'register-level',
  preferred_times: 'register-times',
} satisfies Partial<Record<keyof RegisterInterestInput, string>>;

export const RegisterForm = ({
  id,
  nameLabel,
  phoneLabel,
  emailLabel,
  levelLabel,
  lessonTypeLegend,
  lessonTypes: lessonTypeOptions,
  preferredTimesLabel,
  optionalLabel,
  preferredTimesPlaceholder,
  submitLabel,
  submittingLabel,
  successMessage,
  errorMessage,
  privacyNotice,
}: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<RegisterInterestInput>({
    resolver: zodResolver(registerInterestSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      level: levelOptions[0],
      lesson_type: 'one-to-one',
      preferred_times: '',
    },
  });

  const onSubmit = async (values: RegisterInterestInput) => {
    const isSent = await sendRegistrationEmail(values).then(
      (result) => result.success,
      () => false
    );
    if (isSent) {
      return;
    }

    setError('root.server', { type: 'server', message: errorMessage });
  };

  const describedBy = (field: keyof typeof fieldIds) =>
    errors[field] ? errorId(fieldIds[field]) : undefined;

  return (
    <div
      id={id}
      className="mx-auto w-full max-w-[720px] border border-rule bg-cream px-[30px] py-8"
    >
      <div role="status">
        {isSubmitSuccessful ? (
          <p className="border-2 border-green bg-card px-6 py-5 font-serif text-[26px] leading-[1.2] font-semibold text-green">
            {successMessage}
          </p>
        ) : null}
      </div>
      {isSubmitSuccessful ? null : (
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-fit-220 gap-[18px]"
        >
          <Field id={fieldIds.name} label={nameLabel} error={errors.name}>
            <input
              id={fieldIds.name}
              type="text"
              autoComplete="name"
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={describedBy('name')}
              className={`min-h-13 ${controlClass}`}
              {...register('name')}
            />
          </Field>
          <Field id={fieldIds.phone} label={phoneLabel} error={errors.phone}>
            <input
              id={fieldIds.phone}
              type="tel"
              autoComplete="tel"
              required
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={describedBy('phone')}
              className={`min-h-13 ${controlClass}`}
              {...register('phone')}
            />
          </Field>
          <Field id={fieldIds.email} label={emailLabel} error={errors.email}>
            <input
              id={fieldIds.email}
              type="email"
              autoComplete="email"
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy('email')}
              className={`min-h-13 ${controlClass}`}
              {...register('email')}
            />
          </Field>
          <Field id={fieldIds.level} label={levelLabel} error={errors.level}>
            <select
              id={fieldIds.level}
              required
              aria-invalid={Boolean(errors.level)}
              aria-describedby={describedBy('level')}
              className={`min-h-13 ${controlClass}`}
              {...register('level')}
            >
              {levelOptions.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </Field>
          <fieldset className="col-span-full flex flex-col gap-2.5">
            <legend className={`mb-2.5 ${labelClass}`}>
              {lessonTypeLegend}
            </legend>
            <div className="grid grid-fit-260 gap-3">
              {lessonTypes.map((lessonType) => (
                <label
                  key={lessonType}
                  className="box-content flex min-h-13 cursor-pointer items-center gap-3 border border-input-border bg-card px-4 py-3"
                >
                  <input
                    type="radio"
                    value={lessonType}
                    className="size-5 accent-green"
                    {...register('lesson_type')}
                  />
                  <span>
                    <strong>{lessonTypeOptions[lessonType].label}</strong> ·{' '}
                    {lessonTypeOptions[lessonType].price}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          <Field
            id={fieldIds.preferred_times}
            label={
              <>
                {preferredTimesLabel}{' '}
                <span className="font-normal text-muted">{optionalLabel}</span>
              </>
            }
            error={errors.preferred_times}
            className="col-span-full flex flex-col gap-2"
          >
            <textarea
              id={fieldIds.preferred_times}
              rows={3}
              placeholder={preferredTimesPlaceholder}
              aria-invalid={Boolean(errors.preferred_times)}
              aria-describedby={describedBy('preferred_times')}
              className={`resize-y ${controlClass}`}
              {...register('preferred_times')}
            />
          </Field>
          <button
            type="submit"
            disabled={isSubmitting}
            className="col-span-full min-h-14 cursor-pointer border-2 border-green px-6 py-4 text-[19px] font-bold text-green disabled:cursor-wait"
          >
            {isSubmitting ? submittingLabel : submitLabel}
          </button>
          {errors.root?.server ? (
            <p
              role="alert"
              className="col-span-full border-l-4 border-error bg-card px-4 py-3 text-[16px] font-semibold text-error"
            >
              {errors.root.server.message}
            </p>
          ) : null}
          <p className="col-span-full text-[15px] text-muted">
            {privacyNotice.prefix}{' '}
            <Link
              href={ROUTES.privacy}
              className="tap-target font-semibold text-green underline underline-offset-4"
            >
              {privacyNotice.linkLabel}
            </Link>
            {privacyNotice.suffix}
          </p>
        </form>
      )}
    </div>
  );
};
