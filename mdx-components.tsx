import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

// Required by @next/mdx with the App Router. Maps the HTML that markdown
// compiles to onto styled, dark-theme components that match the brand. Lock to
// the type scale in CLICKFUNNELS.md: one body size (text-lg leading-8), serif
// gradient headings, JetBrains-mono inline labels.

const ACCENT = "#9ff690";

// Markdown images (`![alt](/blog/slug/x.png)`) compile to a plain <img> with no
// width/height, which next/image refuses to render. When dimensions are known
// (e.g. a static-imported image) we hand off to next/image for WebP/AVIF + lazy
// loading; otherwise we fall back to a styled, lazy native <img> so a build
// never breaks on a hand-written markdown image. Alt text always flows through.
function MdxImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { src, alt = "", width, height } = props;
  // Markdown wraps a lone image in a <p>, so this must return phrasing content
  // only (a bare <img>), per the Next.js MDX guide's global `img` mapping. No
  // <figure>/<figcaption> wrapper, which is block-level and breaks <p> nesting.
  // When dimensions are known we use next/image (WebP/AVIF + lazy); otherwise a
  // hand-written markdown image (no dims) falls back to a styled lazy <img> so
  // the build never breaks. Alt text always carries through for SEO/a11y.
  if (src && width && height) {
    return (
      <Image
        {...(props as ImageProps)}
        sizes="(max-width: 720px) 92vw, 720px"
        className="my-10 h-auto w-full rounded-xl"
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === "string" ? src : undefined}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="my-10 h-auto w-full rounded-xl"
    />
  );
}

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1
      className="mt-0 max-w-2xl font-normal leading-[1.1] text-white text-[32px] md:text-[40px]"
      style={{ fontFamily: "var(--font-schibsted)" }}
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      className="mt-16 scroll-mt-28 max-w-2xl font-normal leading-[1.15] text-white text-[26px] md:text-[32px]"
      style={{ fontFamily: "var(--font-schibsted)" }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      className="mt-10 scroll-mt-28 max-w-2xl font-normal leading-[1.2] text-white text-[21px] md:text-[24px]"
      style={{ fontFamily: "var(--font-schibsted)" }}
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-6 text-lg leading-8 text-white/75">{children}</p>
  ),
  a: ({ href = "", children }) => {
    const external = /^https?:\/\//.test(href);
    const className =
      "underline decoration-[#9ff690]/50 underline-offset-4 transition hover:decoration-[#9ff690]";
    const style = { color: ACCENT };
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {children}
      </a>
    ) : (
      <Link href={href} className={className} style={style}>
        {children}
      </Link>
    );
  },
  ul: ({ children }) => (
    <ul className="mt-6 space-y-3 text-lg leading-8 text-white/75">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    // Numbered lists use the decimal marker only, so hide the shared green-dot
    // bullet and drop the bullet indent inside <ol>.
    <ol className="mt-6 list-decimal space-y-3 pl-5 text-lg leading-8 text-white/75 marker:text-white/40 [&>li]:pl-0 [&_.mdx-bullet]:hidden">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="relative pl-5">
      <span
        className="mdx-bullet absolute left-0 top-3 h-1.5 w-1.5"
        style={{ backgroundColor: ACCENT }}
        aria-hidden
      />
      {children}
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-8 border-l-2 border-[#9ff690] pl-5 text-lg italic leading-8 text-white/70">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-12 border-white/10" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  code: ({ children }) => (
    <code
      className="rounded bg-white/10 px-1.5 py-0.5 text-[0.9em] text-white"
      style={{ fontFamily: "var(--font-jetbrains)" }}
    >
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre
      className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-white/85"
      style={{ fontFamily: "var(--font-jetbrains)" }}
    >
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full border-collapse text-left text-base text-white/75">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-white/20 py-3 pr-6 font-medium text-white">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-white/10 py-3 pr-6 align-top">{children}</td>
  ),
  img: MdxImage,
  // Optimized inline image for posts. Literal lowercase <img> in MDX is not
  // routed through this map, so use <PostImage width=.. height=.. /> to get
  // next/image (WebP/AVIF + lazy loading + no layout shift).
  PostImage: (props: ImageProps) => (
    <Image
      {...props}
      sizes="(max-width: 720px) 92vw, 720px"
      className="my-10 h-auto w-full rounded-xl"
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
