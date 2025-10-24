import { Resend } from "resend";
import { NextResponse } from "next/server";
import verificationStore from "@/lib/verificationStore";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Generate 6-digit verification code
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // Store code with expiration (5 minutes)
    verificationStore.set(email, {
      code: verificationCode,
      expires: Date.now() + 5 * 60 * 1000, // 5 minutes
    });

    // Send verification email
    const { data, error } = await resend.emails.send({
      from: "Aaladin AI <onboarding@resend.dev>", // Replace with your domain
      to: [email],
      subject: "Verify Your Email - Quote Request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #333; margin-bottom: 10px;">Aaladin AI</h1>
            <p style="color: #666; font-size: 16px;">Email Verification Required</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; text-align: center;">
            <h2 style="color: #333; margin-bottom: 20px;">Verification Code</h2>
            <div style="background: #fff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <span style="font-size: 32px; font-weight: bold; color: #007bff; letter-spacing: 5px;">${verificationCode}</span>
            </div>
            <p style="color: #666; margin-top: 20px;">
              Enter this code to verify your email and submit your quote request.
            </p>
            <p style="color: #999; font-size: 14px; margin-top: 15px;">
              This code will expire in 5 minutes.
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 14px;">
              If you didn't request this verification, please ignore this email.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send verification email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Verification code sent successfully",
    });
  } catch (error) {
    console.error("Send verification error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Export the verification store for use in other routes
export { verificationStore };
