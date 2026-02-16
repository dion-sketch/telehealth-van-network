interface RecaptchaResponse {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  "error-codes"?: string[];
}

interface VerifyResult {
  success: boolean;
  score: number;
  error?: string;
}

export async function verifyRecaptcha(
  token: string,
  expectedAction: string
): Promise<VerifyResult> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY is not configured");
    return { success: false, score: 0, error: "reCAPTCHA not configured" };
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      }
    );

    const data: RecaptchaResponse = await response.json();

    if (process.env.RECAPTCHA_DEBUG === "true") {
      console.log("[reCAPTCHA]", {
        success: data.success,
        score: data.score,
        action: data.action,
        expectedAction,
        errors: data["error-codes"],
      });
    }

    if (!data.success) {
      return {
        success: false,
        score: data.score ?? 0,
        error: "reCAPTCHA verification failed",
      };
    }

    if (data.action !== expectedAction) {
      return {
        success: false,
        score: data.score,
        error: "reCAPTCHA action mismatch",
      };
    }

    if (data.score < 0.8) {
      return {
        success: false,
        score: data.score,
        error: "reCAPTCHA score too low",
      };
    }

    return { success: true, score: data.score };
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return { success: false, score: 0, error: "reCAPTCHA verification error" };
  }
}
