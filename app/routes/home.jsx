import Hero from "../components/Hero";
import HomePage from "../components/Homepage";
import NewsSection from "../components/NewsPage";

// Home.jsx
export function meta() {
  return [
    {
      title:
        "Meru Trailblazers Academy | Best CBC Primary & Nursery School in Meru",
    },
    {
      name: "description",
      content:
        "Meru Trailblazers Academy: Premier CBC school in Meru. Nursery (Creche 2-KG2) & Primary (Grade 1-6). Modern facilities, swimming, transport. Call 0720 206 783.",
    },
    {
      name: "keywords",
      content:
        "Meru Trailblazers Academy, best school in Meru, CBC schools Meru, private school Meru, nursery school Meru, primary school Meru, Creche 2 Meru, KG 1 Meru, KG 2 Meru, Grade 1-6 Meru, school fees Meru, school with swimming pool Meru, school with transport Meru",
    },
    {
      property: "og:title",
      content: "Meru Trailblazers Academy | Best CBC School in Meru",
    },
    {
      property: "og:description",
      content:
        "Quality CBC education in Meru for nursery and primary students. Fees from KES 13,000/term. Modern facilities. Call 0720 206 783.",
    },
    {
      property: "og:image",
      content: "https://merutrailblazers.com/og-home.jpg",
    },
    { property: "og:url", content: "https://merutrailblazers.com" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Meru Trailblazers Academy" },
    {
      name: "twitter:description",
      content: "Best CBC school in Meru. Nursery & Primary. Call 0720 206 783.",
    },
    {
      name: "twitter:image",
      content: "https://merutrailblazers.com/twitter-image.jpg",
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
