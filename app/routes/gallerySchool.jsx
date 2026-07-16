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

export function meta() {
  return [
    // === PRIMARY META TAGS ===
    {
      title: "School Gallery | Meru Trailblazers Academy - Photos & Activities",
    },
    {
      name: "description",
      content:
        "Browse 24+ photos of Meru Trailblazers Academy. See our facilities, students, sports, swimming pool, taekwondo, and school life in Meru.",
    },
    {
      name: "keywords",
      content:
        "Meru school photos, school gallery Meru, Meru Trailblazers pictures, school facilities Meru, students activities Meru",
    },

    // === CRITICAL SEO TAGS ===
    {
      name: "robots",
      content: "index, follow",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://merutrailblazers.com/gallery",
    },

    // === OPEN GRAPH TAGS ===
    {
      property: "og:title",
      content:
        "School Gallery - Meru Trailblazers Academy | Photos & Activities",
    },
    {
      property: "og:description",
      content:
        "Browse 24+ photos of our facilities, students, sports, and school life in Meru.",
    },
    {
      property: "og:image",
      content: "https://merutrailblazers.com/fun.jpg",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:image:alt",
      content: "Students enjoying activities at Meru Trailblazers Academy",
    },
    {
      property: "og:url",
      content: "https://merutrailblazers.com/gallery",
    },
    {
      property: "og:type",
      content: "website",
    },

    // === TWITTER CARDS ===
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "School Gallery - Meru Trailblazers Academy",
    },
    {
      name: "twitter:description",
      content:
        "Browse photos of our facilities, students, and school life in Meru.",
    },
    {
      name: "twitter:image",
      content: "https://merutrailblazers.com/fun.jpg",
    },
    {
      name: "twitter:image:alt",
      content: "Students enjoying activities at Meru Trailblazers Academy",
    },

    // === SIMPLE STRUCTURED DATA ===
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        name: "Meru Trailblazers Academy Photo Gallery",
        description:
          "Browse 24+ photos of our school facilities, students, sports, and activities",
        url: "https://merutrailblazers.com/gallery",
        numberOfItems: "24",
        image: [
          {
            "@type": "ImageObject",
            url: "https://merutrailblazers.com/fun.jpg",
            caption:
              "Students enjoying activities at Meru Trailblazers Academy",
            representativeOfPage: "true",
          },
        ],
        publisher: {
          "@type": "EducationalOrganization",
          name: "Meru Trailblazers Academy",
        },
      },
    },
  ];
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLiked, setIsLiked] = useState({});

  // Gallery categories with icons and counts
  const categories = [
    { id: "all", name: "All", icon: <FaCamera />, count: 21 },
    { id: "academics", name: "Academics", icon: <FaBookOpen />, count: 5 },
    { id: "sports", name: "Sports", icon: <FaFutbol />, count: 5 },
    { id: "events", name: "Events", icon: <FaUsers />, count: 6 },
    { id: "activities", name: "Activities", icon: <FaMusic />, count: 5 },
  ];

  const galleryImages = [
    {
      src: "/Bus.jpg",
      title: "School Transportation",
      category: "events",
      description: "Our safe and reliable school bus service",
      date: "2025-03-15",
      likes: 24,
    },
    {
      src: "/field.jpg",
      title: "Sports Day",
      category: "sports",
      description: "Annual inter-house sports competition",
      date: "2025-02-10",
      likes: 42,
    },
    {
      src: "/karate.jpg",
      title: "Martial Arts Training",
      category: "sports",
      description: "Taekwondo classes for self-defense",
      date: "2025-01-20",
      likes: 38,
    },
    {
      src: "/chess.jpg",
      title: "Chess Club",
      category: "activities",
      description: "Strategic thinking and concentration",
      date: "2025-03-05",
      likes: 29,
    },
    {
      src: "/class.jpg",
      title: "Interactive Learning",
      category: "academics",
      description: "Students engaged in classroom activities",
      date: "2025-02-28",
      likes: 56,
    },
    {
      src: "/pe.jpg",
      title: "Physical Education",
      category: "sports",
      description: "Fun and fitness on the playground",
      date: "2025-03-12",
      likes: 31,
    },
    {
      src: "/out.jpg",
      title: "Nature Exploration",
      category: "activities",
      description: "Outdoor learning adventures",
      date: "2025-02-15",
      likes: 47,
    },
    {
      src: "/pool.jpg",
      title: "Swimming Lessons",
      category: "sports",
      description: "Water safety and swimming skills",
      date: "2025-01-25",
      likes: 52,
    },
    {
      src: "/fun.jpg",
      title: "Annual Fun Day",
      category: "events",
      description: "Games and celebrations",
      date: "2025-03-08",
      likes: 68,
    },
    {
      src: "/students.jpg",
      title: "Class Photo",
      category: "academics",
      description: "Proud students of Grade 5",
      date: "2025-02-20",
      likes: 45,
    },
    {
      src: "/staff.jpg",
      title: "Teacher Training",
      category: "academics",
      description: "Professional development workshop",
      date: "2025-01-30",
      likes: 37,
    },
    {
      src: "/images/image8.png",
      title: "Playtime",
      category: "activities",
      description: "Creative play and social interaction",
      date: "2025-03-01",
      likes: 61,
    },
    {
      src: "/images/image7.png",
      title: "Students Stage Performance",
      category: "events",
      description: "Annual talent show and performances",
      date: "2025-02-18",
      likes: 74,
    },
    {
      src: "/images/image2.png",
      title: "Sports Day",
      category: "sports",
      description: "Fun competitions and teamwork activities",
      date: "2025-03-10",
      likes: 89,
    },
    {
      src: "/update1.png",
      title: "School facilities",
      category: "activities",
      description: "Our school facilities",
      date: "2026-02-16",
      likes: 56,
    },
    {
      src: "/images/image5.png",
      title: "Graduation Day",
      category: "academics",
      description: "graduation day",
      date: "2025-02-05",
      likes: 48,
    },
    {
      src: "/images/image4.png",
      title: "Music Practice",
      category: "activities",
      description: "Singing and learning musical instruments",
      date: "2025-03-15",
      likes: 67,
    },
    {
      src: "/images/image9.png",
      title: "Our Director's",
      category: "academics",
      description: "School director's in graduation day",
      date: "2025-02-28",
      likes: 82,
    },
    {
      src: "/images/image3.png",
      title: "Morning Assembly",
      category: "events",
      description: "Daily prayers, announcements, and motivation",
      date: "2025-01-15",
      likes: 45,
    },
    {
      src: "/images/image1.png",
      title: "Field Trip",
      category: "events",
      description: "Outdoor learning and exploration",
      date: "2025-03-22",
      likes: 93,
    },
    {
      src: "/images/image10.png",
      title: "Graduation Day",
      category: "events",
      description: "Celebrating student achievements",
      date: "2025-04-01",
      likes: 120,
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
    <div className="font-sans text-slate-800 bg-gradient-to-b from-slate-50 via-white to-blue-50/60">
      {/* Font import — move into your root layout once shared across pages */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&display=swap');
        .font-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-20 pb-10">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220] via-[#0d2b4e] to-[#0097d7]"></div>
          <img
            src="/fun.jpg"
            alt="Meru Trailblazers Academy Gallery"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 via-[#0B1220]/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/15 rounded-full">
              <FaCamera className="text-[#ffdd00] text-sm" />
              <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">
                Visual Journey
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05]">
              <span className="text-white block">School</span>
              <span className="bg-gradient-to-r from-[#ffdd00] to-amber-300 bg-clip-text text-transparent block">
                Gallery
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed font-light">
              A visual journey through the vibrant life at Meru Trailblazers
              Academy
            </p>

            {/* Gallery Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-xl mx-auto border-t border-white/10 mt-4"
            >
              {[
                { value: galleryImages.length, label: "Total Photos" },
                { value: categories.length - 1, label: "Categories" },
                { value: "Daily", label: "Updates" },
                { value: "2026", label: "Current Year" },
              ].map((stat, index) => (
                <div key={index} className="text-center pt-6">
                  <div className="font-display text-2xl font-semibold text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Search and Filter */}
            <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2.5">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.name
                        ? "bg-[#0097d7] text-white shadow-md"
                        : "bg-white/80 text-slate-600 border border-slate-200 hover:border-[#0097d7]/40 hover:text-[#0097d7]"
                    }`}
                  >
                    <span className="text-xs">{category.icon}</span>
                    <span>{category.name}</span>
                    <span className="text-xs opacity-70">
                      ({category.count})
                    </span>
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full lg:w-80">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  <FaSearch />
                </div>
                <input
                  type="text"
                  placeholder="Search photos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0097d7]/40 focus:border-[#0097d7] text-sm"
                />
              </div>
            </div>

            {/* Results Info */}
            <div>
              <h3 className="font-display text-xl font-semibold text-slate-900">
                {selectedCategory === "All"
                  ? "All Photos"
                  : `${selectedCategory} Photos`}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Showing {filteredImages.length} of {galleryImages.length} photos
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Image Container */}
                    <div
                      className="relative h-56 overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Quick Actions */}
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(image.src);
                          }}
                          className="w-8 h-8 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        >
                          <FaHeart
                            className={`text-xs ${isLiked[image.src] ? "text-[#fb0269]" : "text-slate-500"}`}
                          />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(image);
                          }}
                          className="w-8 h-8 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        >
                          <FaExpand className="text-xs text-slate-500" />
                        </button>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[11px] px-2.5 py-1 bg-white/95 backdrop-blur-sm text-[#0097d7] rounded-full font-semibold capitalize">
                          {image.category}
                        </span>
                      </div>
                    </div>

                    {/* Image Info */}
                    <div className="p-5">
                      <h3 className="font-display text-base font-semibold text-slate-900 line-clamp-1 mb-1.5">
                        {image.title}
                      </h3>

                      <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">
                        {image.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-3 text-xs text-slate-400">
                          <span>{image.date}</span>
                          <div className="flex items-center gap-1">
                            <FaHeart
                              className={`text-[11px] ${isLiked[image.src] ? "text-[#fb0269]" : "text-slate-300"}`}
                            />
                            <span>
                              {image.likes + (isLiked[image.src] ? 1 : 0)}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedImage(image)}
                          className="text-[#0097d7] font-semibold text-xs flex items-center gap-1"
                        >
                          View
                          <FaChevronRight className="text-[10px]" />
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
                className="text-center py-20"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-[#0097d7]/10 flex items-center justify-center text-[#0097d7]">
                  <FaCamera className="text-xl" />
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
                  No photos found
                </h3>
                <p className="text-slate-500 max-w-md mx-auto mb-8 text-sm">
                  Try selecting a different category or searching for something
                  else
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchTerm("");
                  }}
                  className="px-7 py-3 bg-[#0097d7] text-white font-semibold rounded-full hover:bg-[#0082ba] hover:shadow-lg transition-all duration-300 text-sm"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1220]/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0B1220]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1220]/95 to-transparent p-8">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-white mb-2">
                        {selectedImage.title}
                      </h3>
                      <p className="text-white/70 mb-3 text-sm">
                        {selectedImage.description}
                      </p>
                      <div className="flex items-center gap-5 text-white/60 text-sm flex-wrap">
                        <span className="flex items-center gap-2">
                          <FaCalendarAlt className="text-xs" />
                          {selectedImage.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaHeart
                            className={`text-xs ${isLiked[selectedImage.src] ? "text-[#fb0269]" : ""}`}
                          />
                          {selectedImage.likes +
                            (isLiked[selectedImage.src] ? 1 : 0)}{" "}
                          likes
                        </span>
                        <span className="px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs capitalize">
                          {selectedImage.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleLike(selectedImage.src)}
                        className="w-11 h-11 flex items-center justify-center bg-white/10 border border-white/15 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <FaHeart
                          className={`text-sm ${isLiked[selectedImage.src] ? "text-[#fb0269]" : "text-white"}`}
                        />
                      </button>
                      <button
                        onClick={() => window.open(selectedImage.src, "_blank")}
                        className="w-11 h-11 flex items-center justify-center bg-white/10 border border-white/15 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <FaDownload className="text-sm text-white" />
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
                                window.location.href,
                              )
                        }
                        className="w-11 h-11 flex items-center justify-center bg-white/10 border border-white/15 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <FaShare className="text-sm text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              {currentIndex > 0 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 border border-white/15 rounded-full hover:bg-white/20 transition-colors"
                >
                  <FaChevronLeft className="text-lg text-white" />
                </button>
              )}

              {currentIndex < filteredImages.length - 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 border border-white/15 rounded-full hover:bg-white/20 transition-colors"
                >
                  <FaChevronRight className="text-lg text-white" />
                </button>
              )}

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center bg-white/10 border border-white/15 rounded-full hover:bg-white/20 transition-colors"
              >
                <FaTimes className="text-lg text-white" />
              </button>

              {/* Counter */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 border border-white/15 rounded-full text-white text-sm font-medium">
                {currentIndex + 1} / {filteredImages.length}
              </div>
            </motion.div>

            {/* Keyboard Hint */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-wide">
              Use ← → arrows to navigate, ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Gallery CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#0097d7]/10 rounded-full">
              <FaPlay className="text-[#0097d7] text-sm" />
              <span className="text-xs font-semibold text-[#0097d7] tracking-wide uppercase">
                Coming Soon
              </span>
            </div>

            <h2 className="font-display text-3xl lg:text-4xl font-medium text-slate-900">
              Video Gallery
            </h2>

            <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
              Stay tuned for our video gallery featuring school events,
              performances, and student achievements in motion.
            </p>

            <div className="pt-4">
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0097d7] text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-[#0082ba] transition-all duration-300">
                <FaPlay className="text-sm" />
                <span>Notify Me When Live</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
