import { Cabin, Inter, Schibsted_Grotesk } from "next/font/google";

export const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-schibsted",
});

export const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-cabin",
});

// Body font for the blog.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const brandFontClassName = `${schibsted.variable} ${cabin.variable} ${inter.variable}`;

export const headingStyle = { fontFamily: "var(--font-schibsted)" } as const;
// Body font, site-wide. Geist (was Cabin).
export const bodyStyle = { fontFamily: "var(--font-geist-sans)" } as const;
