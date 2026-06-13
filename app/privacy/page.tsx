import type { Metadata } from "next";
import Link from "next/link";
import { Cabin, Schibsted_Grotesk } from "next/font/google";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-schibsted",
});

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-cabin",
});

export const metadata: Metadata = {
  title: "Privacy Policy | Harmony AI",
  description:
    "How Harmony AI collects, uses, and shares information from users of our Services.",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mt-12 text-[22px] font-medium text-white first:mt-0 md:text-[26px]"
      style={{ fontFamily: "var(--font-schibsted)" }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 text-[18px] font-medium text-white/90 md:text-[20px]">
      {children}
    </h3>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-[16px] leading-8 text-white/65 md:text-[17px]">
      {children}
    </p>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-3 pl-6 text-[16px] leading-8 text-white/65 md:text-[17px]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function AgentflowPrivacyPage() {
  return (
    <div
      className={`${schibsted.variable} ${cabin.variable} min-h-screen bg-black text-white`}
      style={{ fontFamily: "var(--font-cabin)" }}
    >
      <main className="mx-auto w-[92%] max-w-[820px] px-0 pb-24 pt-28 md:pt-32">
        <Link
          href="/"
          className="text-[15px] text-white/45 transition hover:text-white"
        >
          ← Back to home
        </Link>

        <h1
          className="mt-8 text-[36px] font-medium leading-tight text-white md:text-[48px]"
          style={{ fontFamily: "var(--font-schibsted)" }}
        >
          Privacy Policy
        </h1>
        <p className="mt-4 text-[15px] text-white/45">
          Effective date: January 9, 2026
        </p>

        <Paragraph>
          Sarg Innovation Labs Pvt. Ltd. (&ldquo;Harmony AI&rdquo;,
          &ldquo;Sarg,&rdquo; &ldquo;Harmony&rdquo;, &ldquo;we,&rdquo;
          &ldquo;our,&rdquo; and/or &ldquo;us&rdquo;), the company behind
          Harmony AI, values the privacy of individuals who use our applications,
          websites, and related services (collectively, our
          &ldquo;Services&rdquo;). This privacy policy (the &ldquo;Privacy
          Policy&rdquo;) explains how we collect, use, and share information
          from users of our Services (&ldquo;Users&rdquo;). By using our
          Services, you agree to the collection, use, disclosure, and
          procedures this Privacy Policy describes. Beyond the Privacy Policy,
          your use of our Services is also subject to our Terms of Service.
        </Paragraph>

        <Paragraph>
          Please note that this Privacy Policy does not apply to any content
          contained in User-created applications or to how those applications
          operate. Any information collection, use, or sharing practices by
          User-created applications are subject to the respective privacy
          policies of those applications.
        </Paragraph>

        <SectionHeading>Information We Collect</SectionHeading>
        <Paragraph>
          We may collect a variety of information from or about you or your
          devices from various sources, as described below.
        </Paragraph>

        <SubHeading>A. Information You Provide to Us</SubHeading>
        <Paragraph>
          <strong className="font-medium text-white/80">
            Registration and Profile Information.
          </strong>{" "}
          If you sign up for an account, register to use our Services, sign up
          for notifications or updates, or participate in our surveys, we may
          ask you for your first name, last name, avatar and email address.
        </Paragraph>
        <Paragraph>
          <strong className="font-medium text-white/80">Communications.</strong>{" "}
          If you contact us directly, we may receive additional information
          about you. For example, when you contact our Customer Support Team, we
          will receive your name, email address, the contents of a message or
          attachments that you may send to us, and other information you choose
          to provide. If you subscribe to our newsletter, then we will collect
          certain information from you, such as your email address. When we send
          you emails, we may track whether you open them to learn how to
          deliver a better customer experience and improve our Services.
        </Paragraph>
        <Paragraph>
          <strong className="font-medium text-white/80">Careers.</strong> If you
          decide that you wish to apply for a job with us, you may submit your
          contact information and your resume online. We will collect the
          information you choose to provide on your resume, such as your
          education and employment experience. You may also apply through
          LinkedIn. If you do so, we will collect the information you make
          available to us on LinkedIn.
        </Paragraph>
        <Paragraph>
          <strong className="font-medium text-white/80">
            Payment Information.
          </strong>{" "}
          If you make a purchase through our Services, your payment-related
          information, such as credit card or other financial information, is
          collected by our third party payment processor, Stripe and its
          affiliates, on our behalf.
        </Paragraph>

        <SubHeading>B. Information We Collect When You Use Our Services</SubHeading>
        <Paragraph>
          <strong className="font-medium text-white/80">
            Device Information.
          </strong>{" "}
          We receive information about the device and software you use to access
          our Services, including IP address, web browser type, operating
          system version, application instructions, device identifiers, mobile
          advertising identifiers, and push notification tokens.
        </Paragraph>
        <Paragraph>
          <strong className="font-medium text-white/80">
            Usage Information.
          </strong>{" "}
          To help us understand how you use our Services and to help us improve
          them, we automatically receive information about your interactions
          with our Services, like the dates and times of your visits.
        </Paragraph>
        <Paragraph>
          <strong className="font-medium text-white/80">
            Information from Cookies and Similar Technologies.
          </strong>{" "}
          We and third party partners collect information using cookies, pixel
          tags, or similar technologies. Our third party partners, such as
          analytics and advertising partners, may use these technologies to
          collect information about your online activities over time and across
          different services. Cookies are small text files containing a string
          of alphanumeric characters. We may use both session cookies and
          persistent cookies. A session cookie disappears after you close your
          browser. A persistent cookie remains after you close your browser and
          may be used by your browser on subsequent visits to our Services.
        </Paragraph>
        <Paragraph>
          Please review your web browser&apos;s &ldquo;Help&rdquo; file to learn
          the proper way to modify your cookie settings. Please note that if you
          delete or choose not to accept cookies from the Service, you may not
          be able to utilize the features of the Service to their fullest
          potential.
        </Paragraph>

        <SubHeading>C. Information We Receive from Third Parties</SubHeading>
        <Paragraph>
          <strong className="font-medium text-white/80">Other Users.</strong> We
          may receive information about you from other Users of our Services.
          For example, if a User invites you to view content they&apos;ve posted
          to our Services, we will receive your email address. We may also
          receive information such as your google contacts, google calendar
          events data, your emails, slack messages, jira tickets and so on,
          only after your authorization.
        </Paragraph>

        <SectionHeading>How We Use the Information We Collect</SectionHeading>
        <Paragraph>We use the information we collect:</Paragraph>
        <List
          items={[
            "To provide, maintain, improve, and enhance our Services;",
            "To personalize your experience on our Services such as by providing tailored content and recommendations;",
            "To understand and analyze how you use our Services and develop new products, services, features, and functionality;",
            "To communicate with you, provide you with updates and other information relating to our Services, provide information that you request, respond to comments and questions, and otherwise provide customer support;",
            "To facilitate the connection of third party services or applications;",
            "For marketing purposes, such as developing and providing promotional materials that may be relevant, valuable or otherwise of interest to you;",
            "To generate anonymized, aggregate data containing only de-identified, non-personal information that we may use to generate reports;",
            "To send you push notifications;",
            "To find and prevent fraud, and respond to trust and safety issues that may arise;",
            "For compliance purposes, including enforcing our Terms of Service or other legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency; and",
            "For other purposes for which we provide specific notice at the time the information is collected.",
          ]}
        />

        <SectionHeading>How We Share the Information We Collect</SectionHeading>
        <Paragraph>
          <strong className="font-medium text-white/80">
            Vendors and Service Providers.
          </strong>{" "}
          We may share any information we receive with vendors and service
          providers retained in connection with the provision of our Services.
        </Paragraph>
        <Paragraph>
          <strong className="font-medium text-white/80">Marketing.</strong> We
          do not rent, sell, or share information about you with nonaffiliated
          companies for their direct marketing purposes, unless we have your
          permission.
        </Paragraph>
        <Paragraph>
          <strong className="font-medium text-white/80">
            As Required By Law and Similar Disclosures.
          </strong>{" "}
          We may access, preserve, and disclose your information if we believe
          doing so is required or appropriate to: (a) comply with law
          enforcement requests and legal process, such as a court order or
          subpoena; (b) respond to your requests; or (c) protect your, our, or
          others&apos; rights, property, or safety. For the avoidance of doubt,
          the disclosure of your information may occur if you post any
          objectionable content on or through the Services.
        </Paragraph>
        <Paragraph>
          <strong className="font-medium text-white/80">
            Merger, Sale, or Other Asset Transfers.
          </strong>{" "}
          We may transfer your information to service providers, advisors,
          potential transactional partners, or other third parties in connection
          with the consideration, negotiation, or completion of a corporate
          transaction in which we are acquired by or merged with another company
          or we sell, liquidate, or transfer all or a portion of our assets. The
          use of your information following any of these events will be governed
          by the provisions of this Privacy Policy in effect at the time the
          applicable information was collected.
        </Paragraph>

        <SectionHeading>Consent</SectionHeading>
        <Paragraph>
          We may also disclose your information with your permission.
        </Paragraph>

        <SectionHeading>Your Choices</SectionHeading>
        <SubHeading>Sharing Preferences</SubHeading>
        <Paragraph>
          We provide you with settings to allow you to set your sharing
          preferences for pages you create via our Services. By default,
          Applications you create on our Services are visible only to you. If
          you would like, you may choose to share your Applications with
          individuals you choose to invite to your page or alternatively you
          might share your page publicly. To change whether your page is
          private, shared with invited Users, or is publicly viewable, you can
          adjust the settings for that page.
        </Paragraph>
        <SubHeading>Marketing Communications</SubHeading>
        <Paragraph>
          You can unsubscribe from our promotional emails via the link provided
          in the emails. Even if you opt out of receiving promotional messages
          from us, you will continue to receive administrative messages from us.
        </Paragraph>

        <SectionHeading>Third Parties</SectionHeading>
        <Paragraph>
          Our Services may contain links to other websites, products, or services
          that we do not own or operate. We are not responsible for the privacy
          practices of these third parties. Please be aware that this Privacy
          Policy does not apply to your activities on these third party services
          or any information you disclose to these third parties. We encourage
          you to read their privacy policies before providing any information to
          them.
        </Paragraph>

        <SectionHeading>Security</SectionHeading>
        <Paragraph>
          We make reasonable efforts to protect your information by using
          physical and electronic safeguards designed to improve the security of
          the information we maintain. However, as no electronic transmission or
          storage of information can be entirely secure, we can make no
          guarantees as to the security or privacy of your information.
        </Paragraph>

        <SectionHeading>Children&apos;s Privacy</SectionHeading>
        <Paragraph>
          We do not knowingly collect, maintain, or use personal information
          from children under 13 years of age, and no part of our Services is
          directed to children. If you learn that a child has provided us with
          personal information in violation of this Privacy Policy, then you may
          alert us at{" "}
          <a
            href="mailto:vishal@getharmony.ai"
            className="text-[#9ff690] underline underline-offset-2 transition hover:text-white"
          >
            vishal@getharmony.ai
          </a>
          .
        </Paragraph>

        <SectionHeading>International Visitors</SectionHeading>
        <Paragraph>
          Our Services are hosted in the United States and intended for visitors
          located within the United States. If you choose to use the Services
          from the European Union or other regions of the world with laws
          governing data collection and use that may differ from U.S. law, then
          please note that you are transferring your personal information outside
          of those regions to the United States for storage and processing. Also,
          we may transfer your data from the U.S. to other countries or regions
          in connection with storage and processing of data, fulfilling your
          requests, and operating the Services. By providing any information,
          including personal information, on or to the Services, you consent to
          such transfer, storage, and processing.
        </Paragraph>

        <SectionHeading>Update Your Information or Pose a Question</SectionHeading>
        <Paragraph>
          You can update your account information or close your account through
          your account settings. If you close your account, all the spaces you
          have created with that account will be deleted. You may also choose to
          delete an individual space, while preserving your account and the rest
          of your spaces, via your space settings. If you have questions about
          your privacy on the Services or this privacy policy, please contact us
          at{" "}
          <a
            href="mailto:vishal@getharmony.ai"
            className="text-[#9ff690] underline underline-offset-2 transition hover:text-white"
          >
            vishal@getharmony.ai
          </a>
          .
        </Paragraph>

        <SectionHeading>Changes to this Privacy Policy</SectionHeading>
        <Paragraph>
          We will post any adjustments to the Privacy Policy on this page, and
          the revised version will be effective when it is posted. If we
          materially change the ways in which we use or share personal
          information previously collected from you through the Services, we
          will notify you through the Services, by email, or other communication.
        </Paragraph>

        <SectionHeading>Contact Information</SectionHeading>
        <Paragraph>
          If you have any questions, comments, or concerns about our processing
          activities, please email us at{" "}
          <a
            href="mailto:vishal@getharmony.ai"
            className="text-[#9ff690] underline underline-offset-2 transition hover:text-white"
          >
            vishal@getharmony.ai
          </a>{" "}
          or write to us at:
        </Paragraph>
        <Paragraph>
          Sarg Innovation Labs, Inc.
          <br />
          Robertsganj, Uttar Pradesh, India 231216
        </Paragraph>
        <p className="mt-10 text-[15px] text-white/45">
          Last Updated: April 10, 2024
        </p>
      </main>
    </div>
  );
}
