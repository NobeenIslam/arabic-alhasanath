import { NextResponse } from "next/server";
import { Resend } from "resend";

//Need a privately registered email domain to send from. Resend won't allow from public domains

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { fullName, phoneNumber, emailAddress } = await request.json();

    console.log(fullName, phoneNumber, emailAddress);

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "",
      to: process.env.RESEND_TO_EMAIL || "",
      subject: "New Sign Up to Arabic Course",
      html: `<b>New sign up</b><br>
             Name: ${fullName}<br>
             Phone: ${phoneNumber}<br>
             Email: ${emailAddress}`,
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err: any) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { error: { message: err.message } },
      { status: 500 }
    );
  }
}
