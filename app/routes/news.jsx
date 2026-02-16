import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaUser,
  FaEye,
  FaSearch,
  FaFilter,
  FaNewspaper,
  FaArrowRight,
  FaTag,
  FaBookmark,
} from "react-icons/fa";
import { Calendar, User, Search, ChevronRight } from "lucide-react";
import newsData from "../news";

// NewsPage.jsx
export function meta() {
  return [
    { title: "Latest News & Updates | Meru Trailblazers Academy" },
    {
      name: "description",
      content:
        "Latest news, events, and achievements from Meru Trailblazers Academy. School announcements, sports updates, and cultural events in Meru.",
    },
    {
      property: "og:title",
      content: "News & Updates - Meru Trailblazers Academy",
    },
    { property: "og:url", content: "https://merutrailblazers.com/news" },
  ];
}

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories
  const categories = ["All", ...new Set(newsData.map((item) => item.category))];

  // Filter news
  const filteredNews = newsData.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Format date for sorting
  const formatDateForSort = (dateString) => {
    return new Date(dateString);
  };

  // Sort by date (newest first)
  const sortedNews = [...filteredNews].sort(
    (a, b) => formatDateForSort(b.date) - formatDateForSort(a.date),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden pt-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTVjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTUgMTUtNi43MTYgMTUtMTUtNi43MTYtMTUtMTUtMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <FaNewspaper className="text-blue-300" />
              <span className="text-sm font-semibold">SCHOOL UPDATES</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                News
              </span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Stay updated with announcements, events, and achievements from
              Meru Trailblazers Academy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 text-gray-700 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0097d7] focus:border-transparent shadow-sm"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-[#0097d7] to-blue-600 text-white shadow-lg"
                        : "bg-white text-slate-700 hover:bg-slate-50 shadow-md hover:shadow-lg border border-slate-200"
                    }`}
                  >
                    <FaTag className="text-sm" />
                    <span>{category}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Results Info */}
            <div className="mt-8 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {selectedCategory === "All"
                    ? "All News"
                    : `${selectedCategory} News`}
                </h3>
                <p className="text-slate-600">
                  Showing {filteredNews.length} of {newsData.length} articles
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
                  <FaBookmark className="w-4 h-4" />
                  <span className="text-sm font-medium">Save Search</span>
                </button>
              </div>
            </div>
          </div>

          {/* News Grid */}
          {sortedNews.length > 0 ? (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {sortedNews.map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <Link
                    to={`/news/${news.id}`}
                    className="block h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-[#0097d7]/30"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-slate-700 text-xs font-semibold rounded-lg shadow-sm">
                          {news.category || "Update"}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            <span>{news.date}</span>
                          </div>
                          {news.author && (
                            <div className="flex items-center gap-2">
                              <User className="w-3 h-3" />
                              <span>{news.author}</span>
                            </div>
                          )}
                        </div>
                        {news.views && (
                          <div className="flex items-center gap-2">
                            <FaEye className="w-3 h-3" />
                            <span>{news.views}</span>
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                        {news.title}
                      </h3>

                      <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                        {news.desc}
                      </p>

                      {/* Tags */}
                      {news.tags && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {news.tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                          {news.tags.length > 3 && (
                            <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                              +{news.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Read More */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <span className="text-sm font-semibold text-[#0097d7] group-hover:text-blue-600">
                          Read Full Article
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0097d7] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">📰</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                No news articles found
              </h3>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="px-8 py-3 bg-gradient-to-r from-[#0097d7] to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 lg:p-12 text-white overflow-hidden">
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="lg:w-2/3">
                    <h3 className="text-3xl font-bold mb-4">
                      Never Miss an Update
                    </h3>
                    <p className="text-white/80 mb-6 max-w-2xl">
                      Subscribe to our newsletter and get the latest news,
                      announcements, and event invitations delivered directly to
                      your inbox.
                    </p>
                  </div>
                  <div className="lg:w-1/3">
                    <form className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                      <button
                        type="submit"
                        className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-white/90 transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                    <p className="text-white/60 text-sm mt-4">
                      By subscribing, you agree to our Privacy Policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Recent Highlights */}
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Recent Highlights
              </h3>
              <div className="space-y-4">
                {newsData.slice(0, 3).map((news) => (
                  <Link
                    key={news.id}
                    to={`/news/${news.id}`}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-[#0097d7]/30 hover:shadow-md transition-all"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 line-clamp-1">
                        {news.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                        <Calendar className="w-3 h-3" />
                        <span>{news.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Admissions", path: "/admissions", icon: "📝" },
                  { label: "Calendar", path: "/calendar", icon: "📅" },
                  { label: "Gallery", path: "/gallery", icon: "🖼️" },
                  { label: "Contact", path: "/contact", icon: "📞" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="group p-4 bg-white rounded-xl border border-slate-200 hover:border-[#0097d7]/30 hover:shadow-md transition-all flex flex-col items-center justify-center text-center"
                  >
                    <div className="text-2xl mb-2">{link.icon}</div>
                    <div className="font-medium text-slate-900 group-hover:text-[#0097d7]">
                      {link.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
