import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    return NextResponse.json({});
  } catch (err: any) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { error: { message: err.message } },
      { status: 500 }
    );
  }
}
