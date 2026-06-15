import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
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
  metadataBase: new URL("https://getharmony.ai"),
  title: "Harmony | AI Automations for B2B Teams",
  description:
    "Harmony is an AI automation agency for B2B teams. We build the agents and workflows that run customer success, hiring and onboarding, and team productivity in the background, so you can lead the business instead of the busywork.",
  openGraph: {
    siteName: "Harmony AI",
    type: "website",
    images: [
      {
        url: "/assets/link-perview.png",
        width: 1200,
        height: 630,
        alt: "Harmony AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/link-perview.png"],
  },
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
        {/* Plausible loads via next-plausible. src and endpoint come from
            withPlausibleProxy in next.config.ts, so no src prop here. The
            provider renders the script only in production. */}
        <PlausibleProvider>
          <CalInit />
          <AgentflowNav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </PlausibleProvider>
      </body>
    </html>
  );
}
