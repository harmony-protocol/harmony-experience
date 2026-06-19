import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";
import { Schibsted_Grotesk } from "next/font/google";
import { NewsletterFormPanel } from "./_components/newsletter-form";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-schibsted",
});

const ACCENT = "#9ff690";
const NEWSLETTER_IMAGE = "/assets/newsletter/newsletter-image.png";
const LINK_PREVIEW_IMAGE = "/assets/link-previews/newsletter.jpg";

const reviews = [
  {
    quote:
      "Short and easy to read. I usually pick up one idea from each issue that my team can try that week.",
    name: "Piyush Agarwal",
    role: "Investor, BeeNext",
    avatar: "/assets/newsletter/Piyush.png",
  },
  {
    quote:
      "Most AI newsletters feel like hype. This one is clear about what is worth doing and what is not.",
    name: "Pushkar Patel",
    role: "Author, Nibbles Newsletter",
    avatar: "/assets/newsletter/Pushkar.png",
  },
  {
    quote:
      "Quick read, no fluff. I shared the last issue with a few people on my team the same day.",
    name: "Abhisek Prasad",
    role: "Engineering Lead, SideCar AI",
    avatar: "/assets/newsletter/Abhisek.png",
  },
];

function StarRating() {
  return (
    <div
      className="mt-5 flex items-center gap-1"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className="h-4 w-4 fill-[#f5a623] text-[#f5a623]"
          aria-hidden
        />
      ))}
    </div>
  );
}

export const metadata: Metadata = {
  title: "The Workflow Fix | Harmony AI",
  description:
    "Subscribe to The Workflow Fix, the Harmony newsletter with practical business automation playbooks sent to your inbox every week to help founders and operators scale.",
  alternates: { canonical: "/newsletter" },
  openGraph: {
    title: "The Workflow Fix | Harmony AI",
    description:
      "Subscribe to The Workflow Fix, the Harmony newsletter with practical business automation playbooks sent to your inbox every week to help founders and operators scale.",
    type: "website",
    url: "/newsletter",
    images: [
      {
        url: LINK_PREVIEW_IMAGE,
        width: 1920,
        height: 1080,
        alt: "The Workflow Fix newsletter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [LINK_PREVIEW_IMAGE],
  },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-black px-2 py-1 text-xs font-medium uppercase tracking-[0.06em] text-white">
      <span className="h-1.5 w-1.5" style={{ backgroundColor: ACCENT }} />
      {children}
    </span>
  );
}

function NewsletterImage() {
  return (
    <Image
      src={NEWSLETTER_IMAGE}
      alt="The Workflow Fix newsletter welcome letter"
      width={1122}
      height={1402}
      sizes="(min-width: 1024px) 480px, 380px"
      className="h-auto w-full max-w-[380px] object-contain md:max-w-[440px] lg:max-w-[480px]"
      priority
    />
  );
}

export default function NewsletterPage() {
  return (
    <div
      className={`${schibsted.variable} bg-[#fafafa] text-black`}
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >
      <main className="pb-0 pt-28 md:pt-32">
        <section className="mx-auto w-[92%] max-w-[1200px] pb-16 md:pb-24">
          <div className="border border-black/10">
            <div className="grid lg:grid-cols-2">
              <div className="border-b border-black/10 p-8 md:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <Eyebrow>Newsletter</Eyebrow>
                <h1
                  className="mt-6 text-[40px] font-normal leading-[1.05] text-black md:text-[52px]"
                  style={{ fontFamily: "var(--font-schibsted)" }}
                >
                  The Workflow Fix
                </h1>

                <div className="mt-5 flex items-center gap-3">
                  <Image
                    src="/blog-author-dp/vishal.webp"
                    alt="Vishal Singh"
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <span className="text-[16px] text-[#4d4d4d]">
                    By <span className="font-medium text-black">Vishal Singh</span>
                  </span>
                </div>

                <p className="mt-6 max-w-md text-[17px] leading-8 text-[#4d4d4d]">
                  Practical business automation playbooks for founders and
                  operators, sent to your inbox every week.
                </p>

                <div className="mt-8">
                  <NewsletterFormPanel />
                </div>
              </div>

              <div className="flex items-center justify-center bg-white p-6 md:p-8 lg:p-10">
                <NewsletterImage />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[92%] max-w-[1200px] pb-24 md:pb-32">
          <div className="flex flex-col items-start">
            <Eyebrow>Reviews</Eyebrow>
            <h2
              className="mt-5 max-w-2xl text-[32px] font-normal leading-[1.1] text-black md:text-[46px]"
              style={{ fontFamily: "var(--font-schibsted)" }}
            >
              What readers say
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.name}
                className="flex h-full flex-col border border-black/10 bg-white p-7"
              >
                <figcaption className="flex items-center gap-3">
                  <Image
                    src={review.avatar}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <span>
                    <span className="block text-[15px] font-medium text-black">
                      {review.name}
                    </span>
                    <span className="block text-[14px] text-[#4d4d4d]">
                      {review.role}
                    </span>
                  </span>
                </figcaption>
                <blockquote className="mt-5 text-[16px] leading-7 text-[#333]">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <StarRating />
              </figure>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
