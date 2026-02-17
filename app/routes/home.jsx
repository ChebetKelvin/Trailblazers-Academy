import Hero from "../components/Hero";
import HomePage from "../components/Homepage";
import NewsSection from "../components/NewsPage";

// Home.jsx
export function meta() {
  return [
    // === PRIMARY META TAGS ===
    {
      title: "Meru Trailblazers Academy | Premier CBC School in Meru", // 52 chars (optimal)
    },
    {
      name: "description",
      content:
        "Premier CBC school in Meru: Nursery (Creche 2-KG2) & Primary (Grade 1-6). Modern facilities, swimming pool, transport. Call 0720 206 783.", // 158 chars
    },
    {
      name: "keywords",
      content:
        "Meru Trailblazers Academy, best school in Meru, CBC schools Meru, nursery school Meru, primary school Meru, school with swimming pool Meru",
    },

    // === ROBOTS & CANONICAL (CRITICAL ADDITIONS) ===
    {
      name: "robots",
      content: "index, follow",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://merutrailblazers.com",
    },

    // === OPEN GRAPH TAGS ===
    {
      property: "og:title",
      content: "Meru Trailblazers Academy | Best CBC School in Meru",
    },
    {
      property: "og:description",
      content:
        "Quality CBC education in Meru. Fees from KES 13,000/term. Modern facilities. Call 0720 206 783.",
    },
    {
      property: "og:image",
      content: "https://merutrailblazers.com/og-home.jpg",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:url",
      content: "https://merutrailblazers.com",
    },
    {
      property: "og:type",
      content: "website",
    },

    // === TWITTER CARDS ===
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Meru Trailblazers Academy",
    },
    {
      name: "twitter:description",
      content: "Best CBC school in Meru. Nursery & Primary. Call 0720 206 783.",
    },
    {
      name: "twitter:image",
      content: "https://merutrailblazers.com/twitter-image.jpg",
    },

    // === SIMPLE STRUCTURED DATA (JSON-LD) ===
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Meru Trailblazers Academy",
        url: "https://merutrailblazers.com",
        telephone: "+254720206783",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Meru",
          addressCountry: "KE",
        },
        description:
          "Premier CBC school in Meru offering nursery and primary education",
        foundingDate: "2022",
      },
    },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <HomePage />
      <NewsSection />
    </main>
  );
}
