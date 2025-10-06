import { useNavigate, useParams } from "react-router";
import newsData from "../news";

export default function NewsDetail() {
  const { id } = useParams();
  const newsItem = newsData.find((item) => item.id === parseInt(id));
  let navigate = useNavigate();

  if (!newsItem) {
    return <p className="text-center py-20">News not found.</p>;
  }

  return (
    <section className="py-20 bg-white mt-15">
      <div className="max-w-4xl mx-auto px-6">
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-full object-cover rounded-lg shadow-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-[#0097d7] mb-4">
          {newsItem.title}
        </h1>
        <p className="text-sm text-gray-500 mb-6">{newsItem.date}</p>
        <p className="text-lg text-gray-700 leading-relaxed">
          {newsItem.fullDesc}
        </p>
        <button
          className="px-4 py-2 mt-4 text-black rounded-lg bg-blue-500 hover:scale-105 transform duration-200 ease-in-out"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </section>
  );
}
