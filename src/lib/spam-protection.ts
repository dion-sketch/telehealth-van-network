import { NextRequest } from "next/server";
import { verifyRecaptcha } from "./recaptcha";
import { checkRateLimit } from "./rate-limit";

interface SpamCheckOptions {
  recaptchaAction: string;
  rateLimitMaxRequests?: number;
  rateLimitWindowMs?: number;
}

interface SpamCheckResult {
  passed: boolean;
  error?: string;
  status?: number;
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}

export async function runSpamChecks(
  request: NextRequest,
  body: Record<string, unknown>,
  options: SpamCheckOptions
): Promise<SpamCheckResult> {
  // 1. Honeypot check
  if (body._hp_website && typeof body._hp_website === "string" && body._hp_website.length > 0) {
    return { passed: false, error: "Submission rejected", status: 400 };
  }

  // 2. Rate limit check
  const ip = getClientIp(request);
  const rateResult = checkRateLimit(ip, {
    maxRequests: options.rateLimitMaxRequests,
    windowMs: options.rateLimitWindowMs,
  });

  if (!rateResult.allowed) {
    return {
      passed: false,
      error: "Too many requests. Please try again later.",
      status: 429,
    };
  }

  // 3. reCAPTCHA check
  const token = body.recaptchaToken;
  if (!token || typeof token !== "string") {
    return {
      passed: false,
      error: "Security verification required",
      status: 400,
    };
  }

  const recaptchaResult = await verifyRecaptcha(token, options.recaptchaAction);
  if (!recaptchaResult.success) {
    return {
      passed: false,
      error: "Security verification failed. Please try again.",
      status: 403,
    };
  }

  return { passed: true };
}
