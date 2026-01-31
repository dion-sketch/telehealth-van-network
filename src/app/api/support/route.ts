import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supportFormSchema } from "@/lib/validations/forms";

// Initialize Resend only when API key is available (not during build)
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
};

const userTypeLabels: Record<string, string> = {
  student: "Student",
  resident: "City Resident",
  refugee: "Refugee / Immigrant",
  other: "Other",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const result = supportFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, location, type, message } = result.data;

    // Send email using Resend
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: "TeleHealth Van <notifications@telehealthvan.org>",
      to: process.env.CONTACT_EMAIL || "info@telehealthvan.org",
      replyTo: email,
      subject: `Support Request - ${userTypeLabels[type]} from ${location}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0c1f35; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">
            New Support Request
          </h2>

          <div style="background: #ccfbf1; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0; color: #0d9488; font-weight: bold;">
              Someone is reaching out for mental health support. Please respond promptly.
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name || "Not provided (anonymous)"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Location:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${location}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">User Type:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${userTypeLabels[type]}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <h3 style="color: #0c1f35;">How can we help?</h3>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
          </div>

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
          <p style="color: #666; font-size: 12px;">
            This message was sent from the TeleHealth Van website support request form.
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
    console.error("Support form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
