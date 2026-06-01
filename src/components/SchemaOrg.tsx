import { modules } from "@/data/modules";

/* ── JSON-LD Structured Data for SEO & GEO ── */

const SITE_URL = "https://webdev-learning.id";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Webdev Learning",
  url: SITE_URL + "/",
  description:
    "Platform pembelajaran web development gratis — 27 modul, 170+ chapter dari fundamental hingga spesialisasi.",
  inLanguage: "id",
  potentialAction: {
    "@type": "SearchAction",
    target: SITE_URL + "/modul?level={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Webdev Learning",
  url: SITE_URL + "/",
  logo: SITE_URL + "/apple-touch-icon.png",
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
      url: `${SITE_URL}/modul/${mod.id}`,
      provider: {
        "@type": "EducationalOrganization",
        name: "Webdev Learning",
      },
      courseMode: "online",
      educationalLevel: mod.level,
      teaches: mod.subtitle,
      about: {
        "@type": "Thing",
        name: mod.topic,
      },
      keywords: [mod.topic, mod.level, "Web Development", "Tutorial Indonesia"].join(", "),
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
      item: item.url ? SITE_URL + item.url : undefined,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ── LearningResource Schema (for chapters) ── */
export function SchemaOrgArticle({
  title,
  description,
  moduleTitle,
  chapterNum,
  moduleId,
  chapterId,
  topic,
  keywords,
}: {
  title: string;
  description: string;
  moduleTitle: string;
  chapterNum: string;
  moduleId?: number;
  chapterId?: string;
  topic?: string;
  keywords?: string[];
}) {
  const schema: Record<string, unknown> = {
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
      url: SITE_URL + "/",
    },
    inLanguage: "id",
    educationalLevel: "Pemula hingga Lanjut",
    teaches: description,
    learningResourceType: "chapter",
    position: chapterNum,
    author: {
      "@type": "EducationalOrganization",
      name: "Webdev Learning",
      url: SITE_URL + "/",
    },
    mainEntityOfPage: moduleId && chapterId
      ? `${SITE_URL}/modul/${moduleId}/chapter/${chapterId}`
      : undefined,
    about: topic
      ? {
          "@type": "Thing",
          name: topic,
        }
      : undefined,
    keywords: keywords
      ? keywords.join(", ")
      : [moduleTitle, "Web Development", "Tutorial Indonesia"].join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ── FAQPage Schema (for reflective questions) ── */
export function SchemaOrgFAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ── HowTo Schema (for code examples & tutorials) ── */
export function SchemaOrgHowTo({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string; code?: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime: "PT15M",
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.code
        ? {
            tool: {
              "@type": "HowToTool",
              name: "Code Editor",
            },
          }
        : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
