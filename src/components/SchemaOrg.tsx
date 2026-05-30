import { modules } from "@/data/modules";

/* ── JSON-LD Structured Data for SEO ── */

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Webdev Learning",
  url: "https://webdev-learning.id/",
  description:
    "Platform pembelajaran web development gratis — 27 modul, 170+ chapter dari fundamental hingga spesialisasi.",
  inLanguage: "id",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://webdev-learning.id/modul?level={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Webdev Learning",
  url: "https://webdev-learning.id/",
  logo: "https://webdev-learning.id/og-image.jpg",
  description:
    "Platform pembelajaran web development berbahasa Indonesia dengan metode analogi, kode praktis, dan refleksi mandiri.",
  sameAs: [],
};

const courseListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: modules.map((mod, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Course",
      name: mod.title,
      description: mod.description,
      url: `https://webdev-learning.id/modul/${mod.id}`,
      provider: {
        "@type": "EducationalOrganization",
        name: "Webdev Learning",
      },
      courseMode: "online",
      educationalLevel: mod.level,
      teaches: mod.subtitle,
    },
  })),
};

export function SchemaOrgWebsite() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
      />
    </>
  );
}

/* ── Breadcrumb Schema ── */
export function SchemaOrgBreadcrumb({
  items,
}: {
  items: { name: string; url?: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url ? `https://webdev-learning.id${item.url}` : undefined,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ── Article Schema (for chapters) ── */
export function SchemaOrgArticle({
  title,
  description,
  moduleTitle,
  chapterNum,
}: {
  title: string;
  description: string;
  moduleTitle: string;
  chapterNum: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: title,
    description: description,
    isPartOf: {
      "@type": "Course",
      name: moduleTitle,
    },
    provider: {
      "@type": "EducationalOrganization",
      name: "Webdev Learning",
      url: "https://webdev-learning.id/",
    },
    inLanguage: "id",
    educationalLevel: "Pemula hingga Lanjut",
    teaches: description,
    learningResourceType: "chapter",
    position: chapterNum,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
