import { NextResponse } from "next/server";
// import verificationStore from "@/lib/verificationStore";
import emailjs from "@emailjs/browser";

export async function POST(request) {
  try {
    const { email, verificationCode, formData } = await request.json();

    if (!email || !formData) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // COMMENTED OUT VERIFICATION SYSTEM - SENDING EMAIL DIRECTLY
    // Verify the code
    // console.log("All stored codes:", verificationStore.getAll());
    // const storedData = verificationStore.get(email);
    // console.log("Stored verification data:", storedData);
    // console.log("Received verification code:", verificationCode);

    // if (!storedData) {
    //   return NextResponse.json(
    //     { error: "Verification code not found or expired" },
    //     { status: 400 }
    //   );
    // }

    // if (storedData.expires < Date.now()) {
    //   verificationStore.delete(email);
    //   return NextResponse.json(
    //     { error: "Verification code expired" },
    //     { status: 400 }
    //   );
    // }

    // if (storedData.code !== verificationCode) {
    //   console.log(
    //     "Code mismatch - stored:",
    //     storedData.code,
    //     "received:",
    //     verificationCode
    //   );
    //   return NextResponse.json(
    //     { error: "Invalid verification code" },
    //     { status: 400 }
    //   );
    // }

    // Code is valid, remove it and send the quote request
    // verificationStore.delete(email);

    // Format services list
    const servicesList =
      formData.services.length > 0
        ? formData.services.join(", ")
        : "None specified";

    // ENABLED EMAILJS - SENDING ACTUAL EMAILS
    // Send quote request email to your business email using EmailJS
    const businessEmailParams = {
      to_email: "name0198080@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      subject: `New Quote Request from ${formData.name}`,
      client_name: formData.name,
      client_email: formData.email,
      budget: formData.budget,
      timeline: formData.timeline,
      services: servicesList,
      additional_details: formData.details || "No additional details provided.",
      submission_date: new Date().toLocaleString(),
    };

    console.log("Sending business email with EmailJS...", businessEmailParams);

    const businessEmailResult = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      businessEmailParams,
      process.env.EMAILJS_PUBLIC_KEY
    );

    console.log("EmailJS business email result:", businessEmailResult);

    if (businessEmailResult.status !== 200) {
      console.error("EmailJS error:", businessEmailResult);
      return NextResponse.json(
        { error: "Failed to send quote request", details: businessEmailResult.text },
        { status: 500 }
      );
    }

    console.log("Quote request email sent successfully:", businessEmailResult);

    // Send confirmation email to the client using EmailJS
    const clientEmailParams = {
      to_email: formData.email,
      from_name: "Aaladin AI",
      client_name: formData.name,
      subject: "Quote Request Received - Aaladin AI",
      message: `Thank you, ${formData.name}! We've received your quote request and our team will review it carefully. You can expect to hear back from us within 24 hours with a detailed proposal.`,
      contact_email: "name0198080@gmail.com",
    };

    console.log("Sending client confirmation email with EmailJS...", clientEmailParams);

    const clientEmailResult = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      clientEmailParams,
      process.env.EMAILJS_PUBLIC_KEY
    );

    console.log("EmailJS client email result:", clientEmailResult);

    // DIRECT EMAIL SENDING - ALSO LOGGING FOR DEBUGGING
    console.log("Quote request received:", {
      client: formData.name,
      email: formData.email,
      services: servicesList,
      budget: formData.budget,
      timeline: formData.timeline,
      details: formData.details
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
