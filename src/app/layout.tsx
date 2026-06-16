import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jackfay.com"),
  title: {
    default: "Jack Fay — Product Engineer",
    template: "%s | Jack Fay",
  },
  description:
    "Jack Fay is a product engineer. Creator of Switchback — a live recovery-support app with real users, built solo in five weeks.",
  openGraph: {
    type: "website",
    siteName: "Jack Fay",
    locale: "en_US",
    url: "https://jackfay.com",
    title: "Jack Fay — Product Engineer",
    description:
      "Product engineer. Built Switchback: 36 live users, 85% activation, shipped solo in ~5 weeks.",
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
