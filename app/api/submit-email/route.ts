import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
export async function POST(request: Request) {
  try {
    const { fullName, phoneNumber, emailAddress } = await request.json();

    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
    const redirectUri = process.env.GOOGLE_REDIRECT_URI;

    const email = process.env.EMAIL_USERNAME;

    const OAuth2 = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

    OAuth2.setCredentials({ refresh_token: refreshToken });

    let transporter = nodemailer.createTransport({
      service: "gmail", // host and port are set automatically
      auth: {
        type: "OAuth2",
        user: email,
        clientId: clientId,
        clientSecret: clientSecret,
        refreshToken: refreshToken,
      },
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: email, // sender address
      to: email, // Email sent back to same email as any other address doesn't have permission set up to receive anything.s
      subject: "New Sign Up to Arabic Course",
      text: `New sign up from ${fullName}. Phone: ${phoneNumber}, Email: ${emailAddress}`,
      html: `<b>New sign up</b><br>
             Name: ${fullName}<br>
             Phone: ${phoneNumber}<br>
             Email: ${emailAddress}`,
    });

    console.log("Message sent: %s", JSON.stringify(info, null, 2));
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err: any) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { error: { message: err.message } },
      { status: 500 }
    );
  }
}
