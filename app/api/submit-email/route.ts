import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { fullName, phoneNumber, emailAddress } = await request.json();

    const email = process.env.EMAIL_USERNAME;
    const password = process.env.EMAIL_PASSWORD;
    const host = process.env.EMAIL_HOST;
    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: host,
      port: 587,
      auth: {
        user: email,
        pass: password,
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
