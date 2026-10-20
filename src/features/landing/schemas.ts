import { z } from 'zod';

export const signUpSchema = z.object({
  fullName: z.string().trim().min(1, 'Full name is required'),
  phoneNumber: z
    .string()
    .trim()
    .min(1, 'Phone number is required')
    .regex(/^\d{11}$/, 'Please enter a valid phone number'),
  emailAddress: z
    .string()
    .trim()
    .min(1, 'Email address is required')
    .pipe(z.email('Please enter a valid email address')),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
