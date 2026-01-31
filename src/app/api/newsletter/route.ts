import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { newsletterSchema } from "@/lib/validations/forms";

// Initialize Resend only when API key is available (not during build)
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { email } = result.data;

    // Send notification email to admin
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: "TeleHealth Van <notifications@telehealthvan.com>",
      to: process.env.CONTACT_EMAIL || "info@telehealthvan.com",
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0c1f35; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">
            New Newsletter Subscriber
          </h2>

          <p style="font-size: 16px; margin-top: 20px;">
            A new visitor has subscribed to the TeleHealth Van newsletter:
          </p>

          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0; font-size: 18px;">
              <strong>Email:</strong> <a href="mailto:${email}">${email}</a>
            </p>
          </div>

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
          <p style="color: #666; font-size: 12px;">
            This notification was sent from the TeleHealth Van website newsletter signup.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 500 }
      );
    }

    // Send welcome email to subscriber
    await resend.emails.send({
      from: "TeleHealth Van <hello@telehealthvan.com>",
      to: email,
      subject: "Welcome to TeleHealth Van Updates",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0c1f35;">Thanks for Subscribing!</h2>

          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            You're now signed up to receive updates from TeleHealth Van Network about:
          </p>

          <ul style="color: #333; line-height: 1.8;">
            <li>New program launches and expansions</li>
            <li>Mental health resources and tips</li>
            <li>Community events and partnerships</li>
            <li>Ways to get involved</li>
          </ul>

          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            We're committed to bringing free, anonymous mental health care to communities nationwide.
          </p>

          <div style="margin-top: 30px; padding: 20px; background: #ccfbf1; border-radius: 8px;">
            <p style="margin: 0; color: #0d9488; font-weight: bold;">
              Need support now?
            </p>
            <p style="margin: 10px 0 0; color: #333;">
              Visit <a href="https://telehealthvan.com/support" style="color: #0d9488;">telehealthvan.com/support</a>
              to learn how to access free therapy.
            </p>
          </div>

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
          <p style="color: #666; font-size: 12px;">
            TeleHealth Van Network - Free mental health care for everyone.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
