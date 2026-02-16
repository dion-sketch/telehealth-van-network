import { z } from "zod";

// Name: must contain at least one letter, no more than 3 consecutive identical characters
const nameRegex = /^(?=.*[a-zA-Z])(?!.*(.)\1{3})[a-zA-Z\s'.,\-]{1,100}$/;

// US phone formats: (555) 123-4567, 555-123-4567, 5551234567, +1-555-123-4567
const phoneRegex = /^(\+1[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;

// Spam protection fields shared across all forms
const spamFields = {
  recaptchaToken: z.string().min(1, "Security verification required"),
  _hp_website: z.string().optional(),
};

// Contact form schema (Home page)
export const contactFormSchema = z.object({
  inquiryType: z.enum([
    "individual",
    "foundation",
    "partnership",
    "agency",
    "school",
    "nonprofit",
  ]),
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be under 100 characters")
    .regex(nameRegex, "Please enter a valid name"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email must be under 254 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(phoneRegex, "Please enter a valid US phone number"),
  organization: z.string().max(200, "Organization name is too long").optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
  ...spamFields,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Partner form schema
export const partnerFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be under 100 characters")
    .regex(nameRegex, "Please enter a valid name"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email must be under 254 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(phoneRegex, "Please enter a valid US phone number"),
  orgName: z
    .string()
    .min(1, "Organization name is required")
    .max(200, "Organization name is too long"),
  orgType: z.enum([
    "city",
    "university",
    "foundation",
    "agency",
    "nonprofit",
    "other",
  ]),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
  ...spamFields,
});

export type PartnerFormData = z.infer<typeof partnerFormSchema>;

// Support form schema
export const supportFormSchema = z.object({
  name: z
    .string()
    .max(100, "Name must be under 100 characters")
    .refine((val) => !val || nameRegex.test(val), "Please enter a valid name")
    .optional(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email must be under 254 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(phoneRegex, "Please enter a valid US phone number"),
  location: z
    .string()
    .min(1, "Location is required")
    .max(200, "Location is too long"),
  type: z.enum(["student", "resident", "refugee", "other"]),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
  ...spamFields,
});

export type SupportFormData = z.infer<typeof supportFormSchema>;

// Newsletter schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email must be under 254 characters"),
  ...spamFields,
});

export type NewsletterData = z.infer<typeof newsletterSchema>;
