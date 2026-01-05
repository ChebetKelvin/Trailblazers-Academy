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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50 p-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">📰</div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Article Not Found
          </h1>
          <p className="text-slate-600 mb-8">
            The article you're looking for doesn't exist or may have been moved.
          </p>
          <button
            onClick={() => navigate("/news")}
            className="px-6 py-3 bg-gradient-to-r from-[#0097d7] to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 w-full md:w-auto"
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
      month: "short", // Changed from 'long' for mobile
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

  // Related articles
  const relatedArticles = newsData
    .filter(
      (item) => item.id !== newsItem.id && item.category === newsItem.category
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 ">
      {/* Hero Header - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden pt-15">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTVjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTUgMTUtNi43MTYgMTUtMTUtNi43MTYtMTUtMTUtMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 xl:py-24">
          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 md:mb-6">
              <FaTag className="text-blue-300 text-xs md:text-sm" />
              <span className="text-xs md:text-sm font-semibold">
                {newsItem.category || "News"}
              </span>
            </div>

            {/* Title - Responsive Typography */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 md:mb-8">
              {newsItem.title}
            </h1>

            {/* Meta Information - Stack on Mobile */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 md:gap-6 text-white/80 mb-6 md:mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-sm md:text-base">
                  {formatDate(newsItem.date)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-sm md:text-base">
                  {calculateReadingTime(newsItem.fullDesc || newsItem.desc)}
                </span>
              </div>
              {newsItem.author && (
                <div className="flex items-center gap-2">
                  <User className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-sm md:text-base">
                    By {newsItem.author}
                  </span>
                </div>
              )}
              {newsItem.views && (
                <div className="flex items-center gap-2">
                  <FaEye className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-sm md:text-base">
                    {newsItem.views} views
                  </span>
                </div>
              )}
            </div>

            {/* Social Share - Responsive Layout */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
              <span className="text-white/70 text-sm md:text-base">Share:</span>
              <div className="flex gap-2 md:gap-3">
                {[
                  {
                    icon: <FaFacebook className="text-sm md:text-base" />,
                    color: "hover:bg-blue-600",
                    label: "Facebook",
                  },
                  {
                    icon: <FaTwitter className="text-sm md:text-base" />,
                    color: "hover:bg-sky-500",
                    label: "Twitter",
                  },
                  {
                    icon: <FaLinkedin className="text-sm md:text-base" />,
                    color: "hover:bg-blue-700",
                    label: "LinkedIn",
                  },
                  {
                    icon: <FaWhatsapp className="text-sm md:text-base" />,
                    color: "hover:bg-green-500",
                    label: "WhatsApp",
                  },
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 ${social.color} hover:text-white`}
                    aria-label={`Share on ${social.label}`}
                    style={{ touchAction: "manipulation" }}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Responsive Layout */}
      <section className="py-8 md:py-12 lg:py-16 xl:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {/* Article Content - Full width on mobile, 2 columns on desktop */}
            <div className="lg:col-span-2">
              {/* Featured Image - Responsive Height */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg md:shadow-xl lg:shadow-2xl mb-8 md:mb-10 lg:mb-12"
              >
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] xl:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Image Caption - Responsive Positioning */}
                {newsItem.imageCaption && (
                  <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 bg-white/90 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 max-w-full md:max-w-lg">
                    <p className="text-xs md:text-sm text-slate-600">
                      {newsItem.imageCaption}
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Article Body - Responsive Typography */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-none"
              >
                {/* Full Description */}
                <div className="text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed md:leading-loose space-y-4 md:space-y-6 mb-8 md:mb-10 lg:mb-12">
                  {newsItem.fullDesc?.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 md:mb-6">
                      {paragraph}
                    </p>
                  )) || <p className="mb-4 md:mb-6">{newsItem.desc}</p>}
                </div>

                {/* Key Points - Responsive Spacing */}
                {newsItem.keyPoints && (
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl md:rounded-2xl p-6 md:p-8 mb-8 md:mb-10 lg:mb-12">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">
                      Key Highlights
                    </h3>
                    <ul className="space-y-3 md:space-y-4">
                      {newsItem.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-[#0097d7] to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                            <span className="text-white text-xs font-bold">
                              ✓
                            </span>
                          </div>
                          <span className="text-slate-700 text-sm md:text-base">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Quote - Responsive Typography */}
                {newsItem.quote && (
                  <div className="relative my-8 md:my-10 lg:my-12">
                    <div className="absolute -left-2 md:-left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0097d7] to-cyan-500 rounded-full"></div>
                    <blockquote className="pl-4 md:pl-6 lg:pl-8 italic text-lg md:text-xl lg:text-2xl text-slate-700 font-light leading-relaxed md:leading-loose">
                      "{newsItem.quote}"
                      {newsItem.quoteAuthor && (
                        <div className="mt-3 md:mt-4 text-base md:text-lg font-medium text-slate-900">
                          — {newsItem.quoteAuthor}
                        </div>
                      )}
                    </blockquote>
                  </div>
                )}
              </motion.article>

              {/* Tags - Responsive Wrap */}
              {newsItem.tags && (
                <div className="mb-8 md:mb-10 lg:mb-12">
                  <h4 className="text-base md:text-lg font-semibold text-slate-900 mb-3 md:mb-4">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {newsItem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-br from-white to-white/80 text-slate-700 text-xs md:text-sm rounded-full border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer active:scale-95"
                        style={{ touchAction: "manipulation" }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive Actions - Stack on Mobile */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-between gap-4 py-6 md:py-8 border-t border-b border-slate-200">
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <button
                    className="group flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-br from-white to-white/90 rounded-xl border border-slate-200 hover:border-slate-300 transition-all active:scale-95"
                    style={{ touchAction: "manipulation" }}
                  >
                    <Heart className="w-4 h-4 md:w-5 md:h-5 text-rose-500 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-slate-700 text-sm md:text-base">
                      {newsItem.likes || 42} Likes
                    </span>
                  </button>
                  <button
                    className="group flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-br from-white to-white/90 rounded-xl border border-slate-200 hover:border-slate-300 transition-all active:scale-95"
                    style={{ touchAction: "manipulation" }}
                  >
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-slate-700 text-sm md:text-base">
                      Comment
                    </span>
                  </button>
                  <button
                    className="group flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-br from-white to-white/90 rounded-xl border border-slate-200 hover:border-slate-300 transition-all active:scale-95"
                    style={{ touchAction: "manipulation" }}
                  >
                    <FaBookmark className="w-4 h-4 md:w-5 md:h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-slate-700 text-sm md:text-base">
                      Save
                    </span>
                  </button>
                </div>

                <button
                  className="group flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-[#0097d7] to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all active:scale-95 w-full sm:w-auto"
                  style={{ touchAction: "manipulation" }}
                >
                  <FaShareAlt className="text-sm md:text-base" />
                  <span className="text-sm md:text-base">Share Article</span>
                </button>
              </div>
            </div>

            {/* Sidebar - Hidden on small mobile, shown on tablet+ */}
            <div className="space-y-6 md:space-y-8">
              {/* Author Card */}
              {newsItem.author && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="bg-gradient-to-br from-white to-white/90 rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-200 shadow-lg"
                >
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 md:mb-6">
                    About the Author
                  </h3>
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#0097d7] to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0">
                      {newsItem.author.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900 text-sm md:text-base truncate">
                        {newsItem.author}
                      </div>
                      <div className="text-xs md:text-sm text-slate-600">
                        School Administrator
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm">
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
                  className="bg-gradient-to-br from-white to-white/90 rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-200 shadow-lg"
                >
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 md:mb-6">
                    Related Articles
                  </h3>
                  <div className="space-y-4 md:space-y-6">
                    {relatedArticles.map((article) => (
                      <div
                        key={article.id}
                        className="group cursor-pointer"
                        onClick={() => navigate(`/news/${article.id}`)}
                        style={{ touchAction: "manipulation" }}
                      >
                        <div className="flex items-start gap-3 md:gap-4">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden flex-shrink-0">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-slate-900 group-hover:text-[#0097d7] transition-colors line-clamp-2 text-sm md:text-base">
                              {article.title}
                            </h4>
                            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-slate-500 mt-1 md:mt-2">
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
                className="bg-gradient-to-br from-[#0097d7] to-blue-600 rounded-xl md:rounded-2xl p-4 md:p-6 text-white"
              >
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                  Stay Updated
                </h3>
                <p className="text-white/90 mb-4 md:mb-6 text-xs md:text-sm">
                  Get the latest news and announcements directly in your inbox.
                </p>
                <form className="space-y-3 md:space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 md:py-3 bg-white text-[#0097d7] font-semibold rounded-lg md:rounded-xl hover:bg-white/90 transition-colors active:scale-95 text-sm md:text-base"
                    style={{ touchAction: "manipulation" }}
                  >
                    Subscribe
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer - Mobile Optimized */}
      <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4 md:gap-6">
            <button
              onClick={() => navigate(-1)}
              className="group flex items-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 bg-gradient-to-br from-white to-white/90 rounded-xl md:rounded-2xl border border-slate-200 hover:border-slate-300 shadow-md md:shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 w-full sm:w-auto"
              style={{ touchAction: "manipulation" }}
            >
              <FaArrowLeft className="text-[#0097d7] text-sm md:text-base group-hover:-translate-x-1 transition-transform" />
              <div className="text-left min-w-0 flex-1 sm:flex-none">
                <div className="text-xs md:text-sm text-slate-500">
                  Previous
                </div>
                <div className="font-semibold text-slate-900 text-sm md:text-base truncate">
                  Back to News
                </div>
              </div>
            </button>

            <button
              onClick={() => navigate("/news")}
              className="group flex items-center justify-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-[#0097d7] to-blue-600 text-white font-semibold rounded-xl md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 w-full sm:w-auto"
              style={{ touchAction: "manipulation" }}
            >
              <span className="text-sm md:text-base">View All Articles</span>
              <FaChevronRight className="text-sm md:text-base group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
