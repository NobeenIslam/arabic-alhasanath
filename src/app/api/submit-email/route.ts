import { NextResponse } from 'next/server';
import { Resend, ErrorResponse } from 'resend';
import { env } from '@/lib/env';

//Need a privately registered email domain to send from. Resend won't allow from public domains

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { fullName, phoneNumber, emailAddress } = await request.json();

    const { data, error } = await resend.emails.send({
      from: env.RESEND_FROM_EMAIL,
      to: env.BOOKING_EMAIL_RECIPIENT,
      subject: 'New Sign Up to Arabic Course',
      html: `<b>New sign up</b><br>
             Name: ${fullName}<br>
             Phone: ${phoneNumber}<br>
             Email: ${emailAddress}`,
    });

    if (error) {
      throw error as ErrorResponse;
    }

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (err: unknown) {
    console.error('Error sending email:', err);
    const error = err as ErrorResponse;
    return NextResponse.json(
      { error: { message: error.message, name: error.name } },
      { status: 500 }
    );
  }
}
