import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TeleHealth Van Network | Free Mental Health Care",
    template: "%s | TeleHealth Van Network",
  },
  description:
    "The nation's largest 5G-enabled mobile telehealth fleet. Free, anonymous mental health therapy. Licensed therapists. No insurance required. No one turned away.",
  keywords: [
    "telehealth",
    "mental health",
    "free therapy",
    "mobile healthcare",
    "5G telehealth",
    "anonymous therapy",
    "licensed therapists",
  ],
  authors: [{ name: "TeleHealth Van Network" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TeleHealth Van Network",
    title: "TeleHealth Van Network | Free Mental Health Care",
    description:
      "Free, anonymous mental health therapy. Licensed therapists. No insurance required.",
    images: [
      {
        url: "/images/video-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "TeleHealth Van Network Fleet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TeleHealth Van Network | Free Mental Health Care",
    description:
      "Free, anonymous mental health therapy. Licensed therapists. No insurance required.",
    images: ["/images/video-thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
