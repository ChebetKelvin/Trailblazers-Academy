import { useState, useEffect } from "react";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaExpand,
  FaDownload,
  FaHeart,
  FaShare,
  FaPlay,
  FaCamera,
  FaUsers,
  FaFutbol,
  FaBookOpen,
  FaMusic,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLiked, setIsLiked] = useState({});

  // Gallery categories with icons and counts
  const categories = [
    { id: "all", name: "All", icon: <FaCamera />, count: 24 },
    { id: "academics", name: "Academics", icon: <FaBookOpen />, count: 8 },
    { id: "sports", name: "Sports", icon: <FaFutbol />, count: 6 },
    { id: "events", name: "Events", icon: <FaUsers />, count: 5 },
    { id: "activities", name: "Activities", icon: <FaMusic />, count: 5 },
  ];

  const galleryImages = [
    {
      src: "/Bus.jpg",
      title: "School Transportation",
      category: "events",
      description: "Our safe and reliable school bus service",
      date: "2024-03-15",
      likes: 24,
    },
    {
      src: "/field.jpg",
      title: "Sports Day",
      category: "sports",
      description: "Annual inter-house sports competition",
      date: "2024-02-10",
      likes: 42,
    },
    {
      src: "/karate.jpg",
      title: "Martial Arts Training",
      category: "sports",
      description: "Taekwondo classes for self-defense",
      date: "2024-01-20",
      likes: 38,
    },
    {
      src: "/chess.jpg",
      title: "Chess Club",
      category: "activities",
      description: "Strategic thinking and concentration",
      date: "2024-03-05",
      likes: 29,
    },
    {
      src: "/class.jpg",
      title: "Interactive Learning",
      category: "academics",
      description: "Students engaged in classroom activities",
      date: "2024-02-28",
      likes: 56,
    },
    {
      src: "/pe.jpg",
      title: "Physical Education",
      category: "sports",
      description: "Fun and fitness on the playground",
      date: "2024-03-12",
      likes: 31,
    },
    {
      src: "/out.jpg",
      title: "Nature Exploration",
      category: "activities",
      description: "Outdoor learning adventures",
      date: "2024-02-15",
      likes: 47,
    },
    {
      src: "/pool.jpg",
      title: "Swimming Lessons",
      category: "sports",
      description: "Water safety and swimming skills",
      date: "2024-01-25",
      likes: 52,
    },
    {
      src: "/fun.jpg",
      title: "Annual Fun Day",
      category: "events",
      description: "Games and celebrations",
      date: "2024-03-08",
      likes: 68,
    },
    {
      src: "/students.jpg",
      title: "Class Photo",
      category: "academics",
      description: "Proud students of Grade 5",
      date: "2024-02-20",
      likes: 45,
    },
    {
      src: "/staff.jpg",
      title: "Teacher Training",
      category: "academics",
      description: "Professional development workshop",
      date: "2024-01-30",
      likes: 37,
    },
    {
      src: "/kids.webp",
      title: "Playtime",
      category: "activities",
      description: "Creative play and social interaction",
      date: "2024-03-01",
      likes: 61,
    },
  ];

  // Filter images based on category and search
  const filteredImages = galleryImages.filter((img) => {
    const matchesCategory =
      selectedCategory === "All" ||
      img.category === selectedCategory.toLowerCase();
    const matchesSearch =
      img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get current image index for lightbox navigation
  const currentIndex = selectedImage
    ? filteredImages.findIndex((img) => img.src === selectedImage.src)
    : -1;

  // Navigation functions for lightbox
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      switch (e.key) {
        case "Escape":
          setSelectedImage(null);
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  const handleLike = (imgSrc) => {
    setIsLiked((prev) => ({
      ...prev,
      [imgSrc]: !prev[imgSrc],
    }));
  };

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-5">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-700/70 to-blue-600/60"></div>
          <img
            src="/fun.jpg"
            alt="Meru Trailblazers Academy Gallery"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#fb0269]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#ffdd00]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <FaCamera className="text-[#ffdd00]" />
              <span className="font-semibold text-white">Visual Journey</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white block">School</span>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-gradient-to-r from-[#ffdd00] via-yellow-400 to-[#ffdd00] bg-clip-text text-transparent block"
              >
                Gallery
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light"
            >
              A visual journey through the vibrant life at Meru Trailblazers
              Academy
            </motion.p>

            {/* Gallery Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12"
            >
              {[
                {
                  value: galleryImages.length,
                  label: "Total Photos",
                  icon: "📸",
                },
                {
                  value: categories.length - 1,
                  label: "Categories",
                },
                { value: "Daily", label: "Updates" },
                { value: "2026", label: "Current Year" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Search and Filter */}
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.name
                        ? "bg-gradient-to-r from-[#0097d7] to-blue-600 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200"
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                    <span className="text-sm opacity-80">
                      ({category.count})
                    </span>
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full lg:w-96">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FaSearch />
                </div>
                <input
                  type="text"
                  placeholder="Search photos by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0097d7] focus:border-transparent shadow-sm"
                />
              </div>
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === "All"
                    ? "All Photos"
                    : `${selectedCategory} Photos`}
                </h3>
                <p className="text-gray-600">
                  Showing {filteredImages.length} of {galleryImages.length}{" "}
                  photos
                </p>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    {/* Image Container */}
                    <div
                      className="relative h-64 overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(image.src);
                          }}
                          className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        >
                          <FaHeart
                            className={`${isLiked[image.src] ? "text-[#fb0269]" : "text-gray-600"}`}
                          />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(image);
                          }}
                          className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        >
                          <FaExpand className="text-gray-600" />
                        </button>
                      </div>

                      {/* View Button */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-full py-2 bg-white/90 backdrop-blur-sm text-gray-900 font-semibold rounded-lg hover:bg-white transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>

                    {/* Image Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                          {image.title}
                        </h3>
                        <span className="text-xs px-3 py-1 bg-blue-100 text-[#0097d7] rounded-full font-medium">
                          {image.category}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {image.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{image.date}</span>
                          <div className="flex items-center gap-1">
                            <FaHeart
                              className={`text-sm ${isLiked[image.src] ? "text-[#fb0269]" : "text-gray-400"}`}
                            />
                            <span>
                              {image.likes + (isLiked[image.src] ? 1 : 0)}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedImage(image)}
                          className="text-[#0097d7] hover:text-blue-600 font-medium text-sm flex items-center gap-1 "
                        >
                          View Full
                          <FaChevronRight className="text-xs" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Empty State */}
            {filteredImages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-6">📷</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  No photos found
                </h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                  Try selecting a different category or searching for something
                  else
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchTerm("");
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-[#0097d7] to-blue-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-black">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {selectedImage.title}
                      </h3>
                      <p className="text-white/80 mb-3">
                        {selectedImage.description}
                      </p>
                      <div className="flex items-center gap-6 text-white/70">
                        <span className="flex items-center gap-2">
                          <FaCalendarAlt className="text-sm" />
                          {selectedImage.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaHeart
                            className={`text-sm ${isLiked[selectedImage.src] ? "text-[#fb0269]" : ""}`}
                          />
                          {selectedImage.likes +
                            (isLiked[selectedImage.src] ? 1 : 0)}{" "}
                          likes
                        </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                          {selectedImage.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleLike(selectedImage.src)}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <FaHeart
                          className={`text-xl ${isLiked[selectedImage.src] ? "text-[#fb0269]" : "text-white"}`}
                        />
                      </button>
                      <button
                        onClick={() => window.open(selectedImage.src, "_blank")}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <FaDownload className="text-xl text-white" />
                      </button>
                      <button
                        onClick={() =>
                          navigator.share
                            ? navigator.share({
                                title: selectedImage.title,
                                text: selectedImage.description,
                                url: window.location.href,
                              })
                            : navigator.clipboard.writeText(
                                window.location.href
                              )
                        }
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <FaShare className="text-xl text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              {currentIndex > 0 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <FaChevronLeft className="text-2xl text-white" />
                </button>
              )}

              {currentIndex < filteredImages.length - 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <FaChevronRight className="text-2xl text-white" />
                </button>
              )}

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <FaTimes className="text-2xl text-white" />
              </button>

              {/* Counter */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
                {currentIndex + 1} / {filteredImages.length}
              </div>
            </motion.div>

            {/* Keyboard Hint */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
              Use ← → arrows to navigate, ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Gallery CTA */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#0097d7]/10 rounded-full">
              <FaPlay className="text-[#0097d7]" />
              <span className="font-semibold text-[#0097d7]">Coming Soon</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Video Gallery
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay tuned for our video gallery featuring school events,
              performances, and student achievements in motion.
            </p>

            <div className="pt-8">
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0097d7] to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <FaPlay />
                <span>Notify Me When Live</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
