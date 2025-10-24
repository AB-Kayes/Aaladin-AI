import { Resend } from "resend";
import { NextResponse } from "next/server";
import verificationStore from "@/lib/verificationStore";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, verificationCode, formData } = await request.json();

    if (!email || !verificationCode || !formData) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify the code
    console.log("All stored codes:", verificationStore.getAll());
    const storedData = verificationStore.get(email);
    console.log("Stored verification data:", storedData);
    console.log("Received verification code:", verificationCode);

    if (!storedData) {
      return NextResponse.json(
        { error: "Verification code not found or expired" },
        { status: 400 }
      );
    }

    if (storedData.expires < Date.now()) {
      verificationStore.delete(email);
      return NextResponse.json(
        { error: "Verification code expired" },
        { status: 400 }
      );
    }

    if (storedData.code !== verificationCode) {
      console.log(
        "Code mismatch - stored:",
        storedData.code,
        "received:",
        verificationCode
      );
      return NextResponse.json(
        { error: "Invalid verification code" },
        { status: 400 }
      );
    }

    // Code is valid, remove it and send the quote request
    verificationStore.delete(email);

    // Format services list
    const servicesList =
      formData.services.length > 0
        ? formData.services.join(", ")
        : "None specified";

    // Send quote request email to your business email
    const { data, error } = await resend.emails.send({
      from: "Aaladin AI <onboarding@resend.dev>", // Using Resend's default domain for testing
      to: ["jaznanofficial@gmail.com"], // Updated business email
      subject: `New Quote Request from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #007bff; padding-bottom: 20px;">
            <h1 style="color: #007bff; margin-bottom: 5px;">New Quote Request</h1>
            <p style="color: #666; font-size: 16px;">Aaladin AI - Client Inquiry</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Client Information</h2>
            
            <div style="display: grid; gap: 15px;">
              <div style="display: flex; padding: 10px; background: white; border-radius: 5px;">
                <strong style="color: #555; width: 120px;">Name:</strong>
                <span style="color: #333;">${formData.name}</span>
              </div>
              
              <div style="display: flex; padding: 10px; background: white; border-radius: 5px;">
                <strong style="color: #555; width: 120px;">Email:</strong>
                <span style="color: #333;">${formData.email}</span>
              </div>
              
              <div style="display: flex; padding: 10px; background: white; border-radius: 5px;">
                <strong style="color: #555; width: 120px;">Budget:</strong>
                <span style="color: #333;">${formData.budget}</span>
              </div>
              
              <div style="display: flex; padding: 10px; background: white; border-radius: 5px;">
                <strong style="color: #555; width: 120px;">Timeline:</strong>
                <span style="color: #333;">${formData.timeline}</span>
              </div>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Services Required</h2>
            <div style="background: white; padding: 15px; border-radius: 5px;">
              <p style="color: #333; margin: 0; line-height: 1.6;">${servicesList}</p>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 25px; border-radius: 10px;">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Additional Details</h2>
            <div style="background: white; padding: 15px; border-radius: 5px;">
              <p style="color: #333; margin: 0; line-height: 1.6; white-space: pre-wrap;">${
                formData.details || "No additional details provided."
              }</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              Received on ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send quote request", details: error.message },
        { status: 500 }
      );
    }

    console.log("Quote request email sent successfully:", data);

    // Send confirmation email to the client
    await resend.emails.send({
      from: "Aaladin AI <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Quote Request Received - Aaladin AI",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #007bff; margin-bottom: 10px;">Aaladin AI</h1>
            <p style="color: #666; font-size: 16px;">Quote Request Confirmed</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; text-align: center;">
            <h2 style="color: #333; margin-bottom: 20px;">Thank You, ${formData.name}!</h2>
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              We've received your quote request and our team will review it carefully. 
              You can expect to hear back from us within 24 hours with a detailed proposal.
            </p>
            <div style="background: #007bff; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold;">What's Next?</p>
              <p style="margin: 5px 0 0 0; font-size: 14px;">Our team will prepare a customized quote based on your requirements.</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 14px;">
              If you have any questions, feel free to reply to this email or contact us at jaznanofficial@gmail.com
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully",
    });
  } catch (error) {
    console.error("Verify and send quote error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
