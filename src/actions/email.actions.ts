'use server';

import { Resend } from 'resend';
import { SignUpEmail } from '@/components/emails/SignUpEmail';
import { signUpSchema } from '@/features/landing/schemas';
import { env } from '@/lib/env';

const resend = new Resend(env.RESEND_API_KEY);

export const sendSignUpEmail = async (input: unknown) => {
  const parsed = signUpSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, error: 'Invalid sign up details' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: env.RESEND_FROM_EMAIL,
      to: [env.BOOKING_EMAIL_RECIPIENT],
      subject: 'New Sign Up to Arabic Course',
      react: SignUpEmail(parsed.data),
    });

    if (error) {
      console.error('Error sending sign up email:', error);
      return { success: false, error: 'Failed to send sign up email' };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending sign up email:', error);
    return { success: false, error: 'Failed to send sign up email' };
  }
};
