import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AgentflowNav } from "./_components/nav";
import { SiteFooter } from "./_components/site-footer";
import { CalInit } from "./_components/cal-init";
import { brandFontClassName, bodyStyle } from "./_lib/brand-fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harmony - AI Agents for Work",
  description: "Stop syncing, start shipping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${brandFontClassName} ${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-black text-white"
        style={bodyStyle}
        suppressHydrationWarning
      >
        <CalInit />
        <AgentflowNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
