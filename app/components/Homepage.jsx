import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
  FaChalkboardTeacher,
  FaBook,
  FaFutbol,
  FaSmile,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Counter({ end, duration = 1600, suffix = "", startOnView = true }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const rafRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    let startTs = null;

    function step(timestamp) {
      if (!startTs) startTs = timestamp;
      const progress = Math.min((timestamp - startTs) / duration, 1);
      const current = Math.floor(progress * end);
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    }

    function start() {
      if (startedRef.current) return;
      startedRef.current = true;
      rafRef.current = requestAnimationFrame(step);
    }

    if (startOnView && ref.current) {
      const obs = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
              start();
              observer.disconnect();
            }
          });
        },
        { threshold: [0.4] }
      );
      obs.observe(ref.current);
      return () => {
        obs.disconnect();
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    } else {
      start();
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }
  }, [end, duration, startOnView]);

  return (
    <span ref={ref} className="font-bold" aria-hidden="true">
      {value}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      {/* Welcome / Intro Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#f0f9fc] via-white to-blue-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0097d7]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#fb0269]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ffdd00]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-6">
                <div className="w-2 h-2 bg-[#fb0269] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[#0097d7]">
                  Premier CBC Institution
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gray-900 block">Welcome to</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097d7] to-[#007bb5] block">
                  Meru Trailblazers
                </span>
                <span className="text-gray-800 block">Academy</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Where young minds thrive in safety and joy. Our school blends
                academic excellence with play, creativity, and
                character-building — guided by the CBC curriculum to nurture
                confident, well-rounded learners.
              </p>

              {/* Key Features List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "CBC Curriculum",
                  "French Language",
                  "Sports & Arts",
                  "Taekwondo",
                  "Swimming",
                  "Music & Dance",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#0097d7] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="group px-8 py-4 bg-gradient-to-r from-[#0097d7] to-[#007bb5] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <span>Learn More About Us</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-[#0097d7] font-semibold rounded-xl border-2 border-[#0097d7] hover:bg-[#0097d7]/5 transition-all duration-300"
                >
                  Schedule a Visit
                </Link>
              </div>
            </motion.div>

            {/* Right: Image with Card Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/staff.jpg"
                  alt="Happy children learning at Meru Trailblazers Academy"
                  className="w-full h-[500px] object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                {/* Floating Testimonial */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#0097d7] rounded-full flex items-center justify-center text-white font-bold">
                      MT
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        "A nurturing environment that brings out the best in
                        every child"
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-[#ffdd00] text-sm" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ffdd00] rounded-2xl rotate-12 shadow-lg flex items-center justify-center">
                <FaHeart className="text-white text-2xl" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#fb0269] rounded-2xl -rotate-12 shadow-lg flex items-center justify-center text-white font-bold">
                EST.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Parents Choose Us */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0097d7]/10 rounded-full mb-4">
              <div className="w-2 h-2 bg-[#0097d7] rounded-full"></div>
              <span className="text-sm font-semibold text-[#0097d7]">
                Trust & Excellence
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Parents <span className="text-[#0097d7]">Trust Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We create a safe, supportive, and inspiring learning environment
              where children grow academically, socially, and emotionally.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FaChalkboardTeacher className="text-[#0097d7]" />,
                title: "Caring Teachers",
                desc: "Our teachers are loving mentors, guiding children with patience and encouragement.",
                img: "caring.jpg",
                color: "from-blue-500/20 to-blue-100",
                stats: "15:1 Student Ratio",
              },
              {
                icon: <FaBook className="text-[#0097d7]" />,
                title: "Strong Academics",
                desc: "We provide a learner-centered foundation under the CBC system, nurturing skills in reading, writing, and problem-solving, while also enriching learners with foreign languages like French.",
                img: "children.jpg",
                color: "from-emerald-500/20 to-emerald-100",
                stats: "100% CBC Compliance",
              },
              {
                icon: <FaFutbol className="text-[#0097d7]" />,
                title: "Fun Activities",
                desc: "Through sports, music, dance, taekwondo, swimming and playtime, children discover their talents while learning, growing, and having fun.",
                img: "/fun.jpg",
                color: "from-amber-500/20 to-amber-100",
                stats: "10+ Activities",
              },
              {
                icon: <FaSmile className="text-[#0097d7]" />,
                title: "Happy Kids",
                desc: "We focus on your child's happiness, confidence, and friendships.",
                img: "swimming.jpg",
                color: "from-rose-500/20 to-rose-100",
                stats: "98% Happy Parents",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  {/* Image Container with Gradient */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30`}
                    ></div>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                      <div className="text-2xl">{item.icon}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Stats */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="text-sm font-semibold text-[#0097d7]">
                        {item.stats}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { label: "Certified Teachers", value: "100%" },
              { label: "Safe Environment", value: "24/7" },
              { label: "Parent Satisfaction", value: "98%" },
              { label: "Years Excellence", value: "3+" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#0097d7] mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 bg-gradient-to-br from-[#0097d7] via-[#007bb5] to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTVjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTUgMTUtNi43MTYgMTUtMTUtNi43MTYtMTUtMTUtMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#ffdd00]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
                <FaStar className="text-[#ffdd00]" />
                <span className="font-semibold">Limited Spots Available</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Give Your Child the
                <span className="block text-[#ffdd00] mt-2">
                  Best Start in Life
                </span>
              </h2>

              <div className="w-32 h-1 bg-[#ffdd00] mx-auto rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto opacity-95 font-light">
              Enroll your child today and let them grow in a caring, supportive,
              and exciting environment designed to nurture their potential.
            </p>

            {/* CTA Button */}
            <div>
              <Link
                to="/admissions"
                className="group inline-flex items-center gap-3 px-12 py-5 bg-white text-[#0097d7] text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <span>Enroll Now</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <p className="mt-4 text-white/80 text-sm">
                Or call us at{" "}
                <span className="font-bold">+254 XXX XXX XXX</span>
              </p>
            </div>

            {/* Stats with Counter */}
            <div className="pt-12 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                {[
                  {
                    value: (
                      <Counter
                        end={1000}
                        suffix="+"
                        startOnView={true}
                        duration={1800}
                      />
                    ),
                    label: "Happy Families",
                    icon: "👨‍👩‍👧‍👦",
                  },
                  {
                    value: (
                      <Counter
                        end={5}
                        suffix="+"
                        startOnView={true}
                        duration={1400}
                      />
                    ),
                    label: "Years Experience",
                    icon: "🏆",
                  },
                  {
                    value: (
                      <Counter
                        end={100}
                        suffix="%"
                        startOnView={true}
                        duration={1600}
                      />
                    ),
                    label: "Satisfaction Rate",
                    icon: "⭐",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="text-5xl mb-4">{stat.icon}</div>
                    <div className="text-5xl font-bold mb-2 text-[#ffdd00]">
                      {stat.value}
                    </div>
                    <div className="text-lg font-medium opacity-90">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-white/70 text-sm mb-4">
                Trusted by parents across Meru County
              </p>
              <div className="flex flex-wrap justify-center gap-8 opacity-80">
                <div className="text-center">
                  <div className="text-2xl">🏅</div>
                  <div className="text-sm">Quality Education</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl">🛡️</div>
                  <div className="text-sm">Safe Environment</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl">❤️</div>
                  <div className="text-sm">Caring Staff</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
