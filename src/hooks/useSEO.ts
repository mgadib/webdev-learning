import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
  canonicalPath?: string;
}

const DEFAULT_DESCRIPTION =
  "Belajar Web di Era AI. Platform pembelajaran web development gratis dengan 27 modul dan 170+ chapter — dari HTML, CSS, JavaScript, React, Backend, Database, sampai System Design.";

const SITE_URL = "https://webdev-learning.id";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export function useSEO({
  title,
  description,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
  canonicalPath,
}: SEOProps) {
  const fullTitle = title.includes("Webdev Learning")
    ? title
    : `${title} — Webdev Learning`;

  const canonicalUrl = canonicalPath
    ? `${SITE_URL}${canonicalPath}`
    : `${SITE_URL}${window.location.pathname}`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description || DEFAULT_DESCRIPTION);

    // Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalUrl);

    // OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", fullTitle);

    // OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc)
      ogDesc.setAttribute("content", description || DEFAULT_DESCRIPTION);

    // OG Type
    let ogTypeEl = document.querySelector('meta[property="og:type"]');
    if (ogTypeEl) ogTypeEl.setAttribute("content", ogType);

    // OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", canonicalUrl);

    // OG Image
    let ogImageEl = document.querySelector('meta[property="og:image"]');
    if (ogImageEl) ogImageEl.setAttribute("content", ogImage);

    // Twitter Title
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", fullTitle);

    // Twitter Description
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc)
      twDesc.setAttribute("content", description || DEFAULT_DESCRIPTION);

    // Twitter Image
    let twImage = document.querySelector('meta[name="twitter:image"]');
    if (twImage) twImage.setAttribute("content", ogImage);

    // Robots meta (noindex if needed)
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute(
      "content",
      noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large"
    );

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

    // Cleanup not needed - we want meta to persist
  }, [fullTitle, description, ogType, ogImage, noindex, canonicalUrl]);
}
