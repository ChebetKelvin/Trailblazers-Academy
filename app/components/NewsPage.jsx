import { Link } from "react-router";
import newsData from "../news";

export default function NewsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#0097d7] mb-12">
          News & Updates
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0097d7] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <Link
                  to={`/news/${item.id}`}
                  className="inline-block px-4 py-2 bg-[#0097d7] text-white rounded-lg hover:bg-[#007bb5] transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
