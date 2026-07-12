import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import Cursor from "@/components/Cursor";
import "./globals.css";

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Ranjan | System Architect",
  description:
    "Ayush Ranjan — SDE Intern @Omniful. Building distributed OMS/WMS systems, white-label tracking pipelines, and high-performance backend platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmMono.variable}>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
