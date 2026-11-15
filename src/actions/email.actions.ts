'use server';

import { Resend } from 'resend';
import { RegistrationEmail } from '@/components/emails/RegistrationEmail';
import { registerInterestSchema } from '@/features/landing/schemas';
import { env } from '@/lib/env';
import { SITE_NAME } from '@/lib/constants/site.constants';

const resend = new Resend(env.RESEND_API_KEY);

export const sendRegistrationEmail = async (input: unknown) => {
  const parsed = registerInterestSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, error: 'Invalid registration details' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: env.RESEND_FROM_EMAIL,
      to: [env.BOOKING_EMAIL_RECIPIENT],
      replyTo: parsed.data.email,
      subject: `New registration of interest: ${SITE_NAME}`,
      react: RegistrationEmail(parsed.data),
    });

    if (error) {
      console.error('Error sending registration email:', error);
      return { success: false, error: 'Failed to send registration email' };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending registration email:', error);
    return { success: false, error: 'Failed to send registration email' };
  }
};
