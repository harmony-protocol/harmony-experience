import type { Metadata } from "next";
import Script from "next/script";
import { PlausibleInit } from "./_components/plausible-init";
import { Geist, Geist_Mono, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AgentflowNav } from "./_components/nav";
import { SiteFooter } from "./_components/site-footer";
import { CalInit } from "./_components/cal-init";
import { CookieConsent } from "./_components/cookie-consent";
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
      <head>
        {/* Google Tag Manager. Kept for the other tags in the container.
            Plausible no longer loads through GTM; it loads via next-plausible
            below so adblockers blocking GTM no longer drop our analytics. */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TH63R2V6');`}
        </Script>
        {/* End Google Tag Manager */}
        {/* Crisp live chat. Loads its launcher in the bottom-right corner. */}
        <Script id="crisp-chat" strategy="afterInteractive">
          {`window.$crisp=[];window.CRISP_WEBSITE_ID="a7e30915-923c-440d-99c3-6ae92875bfcf";(function(){var d=document;var s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
        </Script>
        {/* End Crisp live chat */}
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
        {/* Plausible: official tracker. Script is bundled (adblock cannot block
            it); events post directly to plausible.io. See plausible-init. */}
        <PlausibleInit />
        <CalInit />
        <CookieConsent />
        <AgentflowNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
