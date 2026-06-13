import type { Metadata } from "next";
import Script from "next/script";
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
  title: "Harmony - AI Agents for Work",
  description: "Stop syncing, start shipping",
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TH63R2V6');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className="min-h-full flex flex-col bg-black text-white"
        style={bodyStyle}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TH63R2V6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <CalInit />
        <AgentflowNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
