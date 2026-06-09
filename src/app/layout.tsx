import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jackfay.com"),
  title: {
    default: "Jack Fay — Product & Software",
    template: "%s | Jack Fay",
  },
  description:
    "Jack Fay builds products end to end. Creator of Switchback, a recovery-support web app engineered around a single make-or-break moment.",
  openGraph: {
    type: "website",
    siteName: "Jack Fay",
    locale: "en_US",
    url: "https://jackfay.com",
    title: "Jack Fay — Product & Software",
    description:
      "Builder of Switchback. Product thinking, full-stack engineering, and AI integration — shipped.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-dvh bg-bg text-text font-sans">{children}</body>
    </html>
  );
}
