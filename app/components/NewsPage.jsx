// components/FeaturedNews.jsx
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowRight, FaNewspaper } from "react-icons/fa";
import newsData from "../news";

export default function FeaturedNews() {
  const featuredNews = newsData.slice(0, 3); // Show all 3 since you have only 3

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fb0269]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0097d7]/10 rounded-full mb-6">
            <FaNewspaper className="text-[#0097d7]" />
            <span className="text-sm font-semibold text-[#0097d7]">
              Latest Updates
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            School <span className="text-[#0097d7]">News & Updates</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay informed about our latest announcements, events, and
            achievements
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredNews.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <Link
                to={`/news/${news.id}`}
                className="block h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-[#0097d7]/30"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold rounded-full">
                      {news.category || "Update"}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <FaCalendarAlt className="w-3 h-3" />
                    <span>{news.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {news.desc}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm text-[#0097d7] font-semibold group-hover:text-blue-600">
                      Read More
                    </span>
                    <FaArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0097d7] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/news"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0097d7] to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
          >
            <span>View All News & Announcements</span>
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
