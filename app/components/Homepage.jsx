import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
  FaChalkboardTeacher,
  FaBook,
  FaFutbol,
  FaSmile,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
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
        { threshold: [0.4] },
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

// Elegant display font for headings, layered over the existing sans body font.
// Loaded locally to this component so it drops in without touching global CSS —
// feel free to move this <link>/@import into your root layout instead.
function DisplayFont() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&display=swap');
      .font-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
    `}</style>
  );
}

export default function HomePage() {
  return (
    <div className="font-sans text-slate-800 bg-gradient-to-b from-slate-50 via-white to-blue-50/60">
      <DisplayFont />

      {/* Welcome / Intro Section */}
      <section className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
        {/* Background decorative elements — soft, minimal */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0097d7]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#ffdd00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-full shadow-sm mb-7">
                <div className="w-1.5 h-1.5 bg-[#fb0269] rounded-full"></div>
                <span className="text-xs font-semibold tracking-wide text-[#0097d7] uppercase">
                  Premier CBC Institution
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-6">
                <span className="text-slate-900 block">Welcome to</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097d7] to-[#007bb5] block">
                  Meru Trailblazers
                </span>
                <span className="text-slate-900 block">Academy</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-9 max-w-xl mx-auto lg:mx-0">
                Where young minds thrive in safety and joy. Our school blends
                academic excellence with play, creativity, and
                character-building — guided by the CBC curriculum to nurture
                confident, well-rounded learners.
              </p>

              {/* Key Features List */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10 max-w-md mx-auto lg:mx-0">
                {[
                  "CBC Curriculum",
                  "French Language",
                  "Sports & Arts",
                  "Taekwondo",
                  "Swimming",
                  "Music & Dance",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#0097d7] text-sm flex-shrink-0" />
                    <span className="text-slate-600 text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/about"
                  className="group px-8 py-4 bg-[#0097d7] text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-[#0082ba] transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>Learn More About Us</span>
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-transparent text-slate-700 font-semibold rounded-full border border-slate-200 hover:border-[#0097d7] hover:text-[#0097d7] transition-all duration-300"
                >
                  Schedule a Visit
                </Link>
              </div>
            </motion.div>

            {/* Right: Image with Card Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/twitter-image.jpg"
                  alt="School building"
                  className="w-full h-[480px] object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent"></div>

                {/* Floating Testimonial */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 flex-shrink-0 bg-gradient-to-br from-[#0097d7] to-[#007bb5] rounded-full flex items-center justify-center text-white font-semibold text-sm font-display">
                      MT
                    </div>
                    <div>
                      <p className="text-sm text-slate-700 leading-snug">
                        "A nurturing environment that brings out the best in
                        every child"
                      </p>
                      <div className="flex items-center gap-0.5 mt-1.5">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-[#ffdd00] text-xs" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Single refined accent badge */}
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-lg px-5 py-3 border border-slate-100">
                <div className="font-display text-xl font-semibold text-[#0097d7] leading-none">
                  5+
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-1">
                  Years of Excellence
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Parents Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-wide text-[#0097d7] uppercase">
              Trust & Excellence
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-slate-900 mt-3">
              Why Parents Trust Us
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4 leading-relaxed">
              We create a safe, supportive, and inspiring learning environment
              where children grow academically, socially, and emotionally.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FaChalkboardTeacher />,
                title: "Caring Teachers",
                desc: "Our teachers are loving mentors, guiding children with patience and encouragement.",
                img: "caring.jpg",
                accent: "#0097d7",
                stats: "15:1 Student Ratio",
              },
              {
                icon: <FaBook />,
                title: "Strong Academics",
                desc: "A learner-centered foundation under the CBC system, nurturing reading, writing, and problem-solving, enriched with French.",
                img: "/images/image5.png",
                accent: "#fb0269",
                stats: "100% CBC Compliance",
              },
              {
                icon: <FaFutbol />,
                title: "Fun Activities",
                desc: "Through sports, music, dance, taekwondo, swimming and playtime, children discover their talents while having fun.",
                img: "/fun.jpg",
                accent: "#ffdd00",
                stats: "10+ Activities",
              },
              {
                icon: <FaSmile />,
                title: "Happy Kids",
                desc: "We focus on your child's happiness, confidence, and friendships.",
                img: "children.jpg",
                accent: "#0097d7",
                stats: "98% Happy Parents",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group"
              >
                <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div
                      className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm"
                      style={{ color: item.accent }}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-5">
                      {item.desc}
                    </p>
                    <div
                      className="pt-4 border-t border-slate-100 text-xs font-semibold"
                      style={{ color: item.accent }}
                    >
                      {item.stats}
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
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { label: "Certified Teachers", value: "100%" },
              { label: "Safe Environment", value: "24/7" },
              { label: "Parent Satisfaction", value: "98%" },
              { label: "Years Excellence", value: "5+" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-2xl font-semibold text-[#0097d7] mb-1">
                  {item.value}
                </div>
                <div className="text-xs text-slate-500 font-medium tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 bg-gradient-to-br from-[#0B1220] via-[#0d2b4e] to-[#0097d7] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#ffdd00]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-10"
          >
            {/* Header */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full">
                <FaStar className="text-[#ffdd00] text-sm" />
                <span className="text-sm font-medium">
                  Limited Spots Available
                </span>
              </div>

              <h2 className="font-display text-4xl lg:text-5xl font-medium leading-tight">
                Give Your Child the
                <span className="block text-[#ffdd00] mt-1">
                  Best Start in Life
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-white/75 leading-relaxed max-w-2xl mx-auto font-light">
              Enroll your child today and let them grow in a caring, supportive,
              and exciting environment designed to nurture their potential.
            </p>

            {/* CTA Button */}
            <div>
              <Link
                to="/admissions"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-[#ffdd00] text-[#0B1220] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Enroll Now</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="mt-4 text-white/60 text-sm">
                Or call us at{" "}
                <span className="font-semibold text-white/90">
                  +254 720 206 783
                </span>
              </p>
            </div>

            {/* Stats with Counter */}
            <div className="pt-10 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl mx-auto">
                {[
                  {
                    value: <Counter end={1000} suffix="+" duration={1800} />,
                    label: "Happy Families",
                  },
                  {
                    value: <Counter end={5} suffix="+" duration={1400} />,
                    label: "Years Experience",
                  },
                  {
                    value: <Counter end={100} suffix="%" duration={1600} />,
                    label: "Satisfaction Rate",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="text-center"
                  >
                    <div className="font-display text-4xl font-semibold mb-1 text-[#ffdd00]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/70 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-2">
              <p className="text-white/50 text-xs tracking-wide uppercase mb-4">
                Trusted by parents across Meru County
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm text-white/70">
                <span>Quality Education</span>
                <span className="w-1 h-1 bg-white/30 rounded-full hidden sm:block"></span>
                <span>Safe Environment</span>
                <span className="w-1 h-1 bg-white/30 rounded-full hidden sm:block"></span>
                <span>Caring Staff</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
