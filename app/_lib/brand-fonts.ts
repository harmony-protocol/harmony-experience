import { Cabin, Schibsted_Grotesk } from "next/font/google";

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

export const brandFontClassName = `${schibsted.variable} ${cabin.variable}`;

export const headingStyle = { fontFamily: "var(--font-schibsted)" } as const;
export const bodyStyle = { fontFamily: "var(--font-cabin)" } as const;
