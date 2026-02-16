"use client";

import { useCallback } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

export function useRecaptcha() {
  const executeRecaptcha = useCallback(async (action: string): Promise<string> => {
    if (!SITE_KEY) {
      throw new Error("reCAPTCHA site key is not configured");
    }

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error("reCAPTCHA failed to load. Please refresh the page and try again."));
      }, 10_000);

      if (typeof window === "undefined" || !window.grecaptcha) {
        clearTimeout(timeout);
        reject(new Error("reCAPTCHA is not loaded. Please refresh the page and try again."));
        return;
      }

      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(SITE_KEY, { action });
          clearTimeout(timeout);
          resolve(token);
        } catch (error) {
          clearTimeout(timeout);
          reject(error);
        }
      });
    });
  }, []);

  return { executeRecaptcha };
}
