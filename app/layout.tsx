import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kylie AI - Trust & Verification Suite",
  description: "The complete suite for automated compliance auditing, supplier verification, and AI-driven voice interactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
