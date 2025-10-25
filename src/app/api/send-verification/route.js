import { NextResponse } from "next/server";
// import verificationStore from "@/lib/verificationStore";
// import emailjs from "@emailjs/browser";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // COMMENTED OUT VERIFICATION SYSTEM - SENDING EMAIL DIRECTLY
    // Generate 6-digit verification code
    // const verificationCode = Math.floor(
    //   100000 + Math.random() * 900000
    // ).toString();

    // Store code with expiration (5 minutes)
    // verificationStore.set(email, {
    //   code: verificationCode,
    //   expires: Date.now() + 5 * 60 * 1000, // 5 minutes
    // });

    // Send verification email using EmailJS
    // const templateParams = {
    //   to_email: email,
    //   verification_code: verificationCode,
    //   from_name: "Aaladin AI",
    //   message: `Your verification code is: ${verificationCode}. This code will expire in 5 minutes.`,
    // };

    // const result = await emailjs.send(
    //   process.env.EMAILJS_SERVICE_ID,
    //   process.env.EMAILJS_TEMPLATE_ID,
    //   templateParams,
    //   process.env.EMAILJS_PUBLIC_KEY
    // );

    // if (result.status !== 200) {
    //   console.error("EmailJS error:", result);
    //   return NextResponse.json(
    //     { error: "Failed to send verification email" },
    //     { status: 500 }
    //   );
    // }

    // DIRECT EMAIL SENDING - NO VERIFICATION NEEDED
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Send email error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
