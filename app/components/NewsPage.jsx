// components/FeaturedNews.jsx
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowRight, FaNewspaper } from "react-icons/fa";
import newsData from "../news";

export default function FeaturedNews() {
  const featuredNews = newsData.slice(0, 3); // Show all 3 since you have only 3

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-wide text-[#0097d7] uppercase">
            Latest Updates
          </span>

          <h2 className="font-display text-3xl lg:text-4xl font-medium text-slate-900 mt-3">
            School <span className="text-[#0097d7]">News & Updates</span>
          </h2>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4 leading-relaxed">
            Stay informed about our latest announcements, events, and
            achievements
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredNews.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group"
            >
              <Link
                to={`/news/${news.id}`}
                className="block h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold rounded-full">
                      {news.category || "Update"}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/45 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <FaCalendarAlt className="w-3 h-3" />
                    <span>{news.date}</span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3">
                    {news.desc}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm text-[#0097d7] font-semibold">
                      Read More
                    </span>
                    <FaArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0097d7] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/news"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0097d7] text-white font-semibold rounded-full hover:bg-[#0082ba] hover:shadow-lg transition-all duration-300"
          >
            <span>View All News & Announcements</span>
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
