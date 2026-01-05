import { useNavigate, useParams } from "react-router";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaShareAlt,
  FaBookmark,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaEye,
  FaTag,
  FaChevronRight,
} from "react-icons/fa";
import { Calendar, Clock, User, Heart, MessageCircle } from "lucide-react";
import newsData from "../news";

export default function NewsDetail() {
  const { id } = useParams();
  const newsItem = newsData.find((item) => item.id === parseInt(id));
  let navigate = useNavigate();

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50">
        <div className="text-center">
          <div className="text-6xl mb-4">📰</div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            News Not Found
          </h1>
          <p className="text-slate-600 mb-8">
            The article you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/news")}
            className="px-8 py-3 bg-gradient-to-r from-[#0097d7] to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Back to News
          </button>
        </div>
      </div>
    );
  }

  // Format date
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Calculate reading time
  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  // Related articles (simulate based on category)
  const relatedArticles = newsData
    .filter(
      (item) => item.id !== newsItem.id && item.category === newsItem.category
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTVjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTUgMTUtNi43MTYgMTUtMTUtNi43MTYtMTUtMTUtMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 mb-8"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to News</span>
          </motion.button>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <FaTag className="text-blue-300" />
              <span className="text-sm font-semibold">
                {newsItem.category || "News"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              {newsItem.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-white/80 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(newsItem.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>
                  {calculateReadingTime(newsItem.fullDesc || newsItem.desc)}
                </span>
              </div>
              {newsItem.author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>By {newsItem.author}</span>
                </div>
              )}
              {newsItem.views && (
                <div className="flex items-center gap-2">
                  <FaEye className="w-4 h-4" />
                  <span>{newsItem.views} views</span>
                </div>
              )}
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-4">
              <span className="text-white/70">Share:</span>
              <div className="flex gap-3">
                {[
                  {
                    icon: <FaFacebook />,
                    color: "hover:bg-blue-600",
                    label: "Facebook",
                  },
                  {
                    icon: <FaTwitter />,
                    color: "hover:bg-sky-500",
                    label: "Twitter",
                  },
                  {
                    icon: <FaLinkedin />,
                    color: "hover:bg-blue-700",
                    label: "LinkedIn",
                  },
                  {
                    icon: <FaWhatsapp />,
                    color: "hover:bg-green-500",
                    label: "WhatsApp",
                  },
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color} hover:text-white`}
                    aria-label={`Share on ${social.label}`}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article Content - 2 columns */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl mb-12"
              >
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Image Caption */}
                {newsItem.imageCaption && (
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 max-w-lg">
                    <p className="text-sm text-slate-600">
                      {newsItem.imageCaption}
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Article Body */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="prose prose-lg max-w-none"
              >
                {/* Full Description */}
                <div className="text-lg lg:text-xl text-slate-700 leading-relaxed space-y-6 mb-12">
                  {newsItem.fullDesc?.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-6">
                      {paragraph}
                    </p>
                  )) || <p className="mb-6">{newsItem.desc}</p>}
                </div>

                {/* Key Points (if available) */}
                {newsItem.keyPoints && (
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      Key Highlights
                    </h3>
                    <ul className="space-y-4">
                      {newsItem.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-[#0097d7] to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-xs font-bold">
                              ✓
                            </span>
                          </div>
                          <span className="text-slate-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Quote (if available) */}
                {newsItem.quote && (
                  <div className="relative my-12">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0097d7] to-cyan-500 rounded-full"></div>
                    <blockquote className="pl-8 italic text-2xl text-slate-700 font-light leading-relaxed">
                      "{newsItem.quote}"
                      {newsItem.quoteAuthor && (
                        <div className="mt-4 text-lg font-medium text-slate-900">
                          — {newsItem.quoteAuthor}
                        </div>
                      )}
                    </blockquote>
                  </div>
                )}
              </motion.article>

              {/* Tags */}
              {newsItem.tags && (
                <div className="mb-12">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {newsItem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-br from-white to-white/80 text-slate-700 rounded-full border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive Actions */}
              <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-t border-b border-slate-200">
                <div className="flex gap-4">
                  <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-white to-white/90 rounded-xl border border-slate-200 hover:border-slate-300 transition-all">
                    <Heart className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-slate-700">
                      {newsItem.likes || 42} Likes
                    </span>
                  </button>
                  <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-white to-white/90 rounded-xl border border-slate-200 hover:border-slate-300 transition-all">
                    <MessageCircle className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-slate-700">Comment</span>
                  </button>
                  <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-white to-white/90 rounded-xl border border-slate-200 hover:border-slate-300 transition-all">
                    <FaBookmark className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-slate-700">Save</span>
                  </button>
                </div>

                <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0097d7] to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                  <FaShareAlt />
                  <span>Share Article</span>
                </button>
              </div>
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-8">
              {/* Author Card (if available) */}
              {newsItem.author && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="bg-gradient-to-br from-white to-white/90 rounded-2xl p-6 border border-slate-200 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    About the Author
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0097d7] to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {newsItem.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        {newsItem.author}
                      </div>
                      <div className="text-sm text-slate-600">
                        School Administrator
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Bringing you the latest updates and insights from Meru
                    Trailblazers Academy.
                  </p>
                </motion.div>
              )}

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="bg-gradient-to-br from-white to-white/90 rounded-2xl p-6 border border-slate-200 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    Related Articles
                  </h3>
                  <div className="space-y-6">
                    {relatedArticles.map((article) => (
                      <div
                        key={article.id}
                        className="group cursor-pointer"
                        onClick={() => navigate(`/news/${article.id}`)}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 group-hover:text-[#0097d7] transition-colors line-clamp-2">
                              {article.title}
                            </h4>
                            <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(article.date)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="bg-gradient-to-br from-[#0097d7] to-blue-600 rounded-2xl p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                <p className="text-white/90 mb-6 text-sm">
                  Get the latest news and announcements directly in your inbox.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-white text-[#0097d7] font-semibold rounded-xl hover:bg-white/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <button
              onClick={() => navigate(-1)}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-white to-white/90 rounded-2xl border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaArrowLeft className="text-[#0097d7] group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-sm text-slate-500">Previous</div>
                <div className="font-semibold text-slate-900">Back to News</div>
              </div>
            </button>

            <button
              onClick={() => navigate("/news")}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0097d7] to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>View All Articles</span>
              <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
