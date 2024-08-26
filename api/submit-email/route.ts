import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { fullName, phoneNumber, emailAddress } = await request.json();

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // sender address
      to: "bloofoogery@gmail.com", // list of receivers
      subject: "New Sign Up", // Subject line
      text: `New sign up from ${fullName}. Phone: ${phoneNumber}, Email: ${emailAddress}`, // plain text body
      html: `<b>New sign up</b><br>
             Name: ${fullName}<br>
             Phone: ${phoneNumber}<br>
             Email: ${emailAddress}`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err: any) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { error: { message: err.message } },
      { status: 500 }
    );
  }
}
