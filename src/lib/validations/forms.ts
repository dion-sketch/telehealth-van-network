import { z } from "zod";

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
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  organization: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Partner form schema
export const partnerFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  orgName: z.string().min(1, "Organization name is required"),
  orgType: z.enum([
    "city",
    "university",
    "foundation",
    "agency",
    "nonprofit",
    "other",
  ]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type PartnerFormData = z.infer<typeof partnerFormSchema>;

// Support form schema
export const supportFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  location: z.string().min(1, "Location is required"),
  type: z.enum(["student", "resident", "refugee", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type SupportFormData = z.infer<typeof supportFormSchema>;

// Newsletter schema
export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;
