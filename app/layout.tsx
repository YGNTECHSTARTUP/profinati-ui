import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Jersey_10 } from "next/font/google";
const inter = Jersey_10({
  weight:"400",
  subsets: ["latin"],})

export const metadata: Metadata = {
  title: "Profinati Guardian",
  description: "Profinati Guardian is a lightning-fast API for real-time content moderation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
