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
    "Ayush Ranjan — full-stack engineer who designs distributed backend systems. Building production infrastructure, developer tools, and cool stuff.",
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
