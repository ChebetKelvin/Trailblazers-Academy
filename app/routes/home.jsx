import Hero from "../components/Hero";
import HomePage from "../components/Homepage";
import NewsSection from "../components/NewsPage";

export function meta() {
  return [
    { title: "Meru Trailblazers Academy | Best School in Meru" },
    {
      name: "description",
      content:
        "Meru Trailblazers Academy offers quality education, modern facilities, experienced teachers, and comprehensive curriculum. Admissions open for nursery, primary, and secondary students.",
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
