import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/forms";

// Initialize Resend only when API key is available (not during build)
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
};

const inquiryTypeLabels: Record<string, string> = {
  individual: "Individual Seeking Support",
  foundation: "Foundation / Funder",
  partnership: "Partnership Interest",
  agency: "Government Agency",
  school: "School / University",
  nonprofit: "Nonprofit Organization",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { inquiryType, name, email, organization, message } = result.data;

    // Send email using Resend
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: "TeleHealth Van <notifications@telehealthvan.org>",
      to: process.env.CONTACT_EMAIL || "info@telehealthvan.org",
      replyTo: email,
      subject: `New Contact Form Submission - ${inquiryTypeLabels[inquiryType]}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0c1f35; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Inquiry Type:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${inquiryTypeLabels[inquiryType]}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}">${email}</a>
              </td>
            </tr>
            ${
              organization
                ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Organization:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${organization}</td>
            </tr>
            `
                : ""
            }
          </table>

          <div style="margin-top: 20px;">
            <h3 style="color: #0c1f35;">Message:</h3>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
          </div>

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
          <p style="color: #666; font-size: 12px;">
            This message was sent from the TeleHealth Van website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
