import { z } from 'zod';
import { levelOptions } from '@/features/landing/content';

export const lessonTypes = ['one-to-one', 'group'] as const;

const countDigits = (value: string) => value.replace(/\D/g, '').length;

export const registerInterestSchema = z.object({
  name: z.string().trim().min(1, 'Enter your full name').max(120),
  phone: z
    .string()
    .trim()
    .min(1, 'Enter your phone number')
    .regex(/^\+?[\d\s()-]+$/, 'Enter a valid phone number')
    .refine(
      (value) => countDigits(value) >= 10 && countDigits(value) <= 15,
      'Enter a valid phone number'
    ),
  email: z
    .string()
    .trim()
    .min(1, 'Enter your email address')
    .pipe(z.email('Enter a valid email address')),
  level: z.enum(levelOptions, 'Choose your level'),
  lesson_type: z.enum(lessonTypes, 'Choose a lesson type'),
  preferred_times: z.string().trim().max(500),
});

export type RegisterInterestInput = z.infer<typeof registerInterestSchema>;
