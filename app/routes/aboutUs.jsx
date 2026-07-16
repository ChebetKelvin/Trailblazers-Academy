import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FaSchool,
  FaBookOpen,
  FaChalkboardTeacher,
  FaFutbol,
  FaLaptop,
  FaHeart,
  FaUsers,
  FaTrophy,
  FaStar,
  FaArrowRight,
  FaLightbulb,
  FaShieldAlt,
  FaHandsHelping,
  FaEye,
} from "react-icons/fa";

import { FaBullseye as FaTarget } from "react-icons/fa";

export function meta() {
  return [
    // === PRIMARY META TAGS ===
    {
      title: "About Meru Trailblazers Academy | Mission, Vision & Values",
    },
    {
      name: "description",
      content:
        "Founded 2022: Premier CBC school in Meru with 200+ students, 25+ staff, 98% parent satisfaction. Discover our mission, vision & values.",
    },
    {
      name: "keywords",
      content:
        "about Meru Trailblazers, school mission Meru, school vision Meru, school values Meru, CBC school philosophy",
    },

    // === CRITICAL SEO TAGS ===
    {
      name: "robots",
      content: "index, follow",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://merutrailblazers.com/about",
    },

    // === OPEN GRAPH TAGS ===
    {
      property: "og:title",
      content: "About Meru Trailblazers Academy | Meru's Premier CBC School",
    },
    {
      property: "og:description",
      content:
        "Founded 2022: 200+ students, 25+ staff, 98% parent satisfaction. Learn about Meru's leading CBC school.",
    },
    {
      property: "og:image",
      content: "https://merutrailblazers.com/about-og.png",
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
      property: "og:url",
      content: "https://merutrailblazers.com/about",
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
      content: "About Meru Trailblazers Academy",
    },
    {
      name: "twitter:description",
      content:
        "Founded 2022: Premier CBC school in Meru with 200+ students and 98% parent satisfaction.",
    },
    {
      name: "twitter:image",
      content: "https://merutrailblazers.com/twitter-image.jpg",
    },

    // === SIMPLE STRUCTURED DATA ===
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Meru Trailblazers Academy",
        description:
          "Learn about Meru's premier CBC school. Founded 2022, 200+ students, 98% parent satisfaction.",
        url: "https://merutrailblazers.com/about",
        mainEntity: {
          "@type": "EducationalOrganization",
          name: "Meru Trailblazers Academy",
          foundingDate: "2022",
          numberOfEmployees: "25+",
          description: "Premier CBC school in Meru",
        },
      },
    },
  ];
}

export default function AboutPage() {
  return (
    <div className="font-sans text-slate-800 bg-gradient-to-b from-slate-50 via-white to-blue-50/60">
      {/* Font import — move into your root layout once shared across pages */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&display=swap');
        .font-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220] via-[#0d2b4e] to-[#0097d7]"></div>
          <img
            src="/twitter-image.jpg"
            alt="Meru Trailblazers Academy Campus"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-[#0B1220]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/15 rounded-full">
              <FaStar className="text-[#ffdd00] text-sm" />
              <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">
                Since 2022
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05]">
              <span className="text-white block">About Our</span>
              <span className="bg-gradient-to-r from-[#ffdd00] to-amber-300 bg-clip-text text-transparent block">
                Academy
              </span>
            </h1>

            {/* Motto — the standout moment */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex items-center justify-center gap-4 pt-2"
            >
              <span className="h-px w-10 sm:w-16 bg-[#ffdd00]/50"></span>
              <p className="font-display italic text-xl sm:text-2xl text-[#ffdd00] tracking-wide whitespace-nowrap">
                "A Tradition of Excellence"
              </p>
              <span className="h-px w-10 sm:w-16 bg-[#ffdd00]/50"></span>
            </motion.div>

            <p className="text-lg lg:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed font-light pt-2">
              Nurturing young minds, building strong values, and preparing
              innovative leaders for tomorrow's world through holistic
              education.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 max-w-2xl mx-auto border-t border-white/10 mt-6"
            >
              {[
                { value: "300+", label: "Students" },
                { value: "25+", label: "Dedicated Staff" },
                { value: "5+", label: "Years Excellence" },
                { value: "100%", label: "CBC Compliance" },
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

      {/* Who We Are */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-xs font-semibold tracking-wide text-[#0097d7] uppercase">
                  Our Story
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-medium text-slate-900 mt-3 mb-5">
                  Who We Are
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Meru Trailblazers Academy is more than just a school — it's a
                  vibrant community where learning comes alive. We provide a
                  nurturing environment where children feel safe, valued, and
                  inspired to reach their full potential.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Safe & Secure Environment",
                  "Holistic Development",
                  "CBC Curriculum Excellence",
                  "Experienced Faculty",
                  "Modern Facilities",
                  "Parent Partnership",
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-[#0097d7] rounded-full flex-shrink-0"></div>
                    <span className="text-slate-600 text-sm font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0097d7] text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-[#0082ba] transition-all duration-300 group"
              >
                <span>Schedule a Campus Tour</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image with Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/students.jpg"
                  alt="Happy students at Meru Trailblazers Academy"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/25 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-lg p-5 max-w-xs border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#0097d7]/10 rounded-full flex items-center justify-center text-[#0097d7]">
                    <FaHeart className="text-sm" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-slate-900 leading-none">
                      98%
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Parent Satisfaction
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 italic leading-snug">
                  "A home away from home where our child thrives every day."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-wide text-[#0097d7] uppercase">
              Our Foundation
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-slate-900 mt-3">
              Mission & Vision
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">
              The guiding principles that shape our educational approach
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-slate-100 shadow-sm h-full border-t-4 border-t-[#0097d7]">
                <div className="w-14 h-14 bg-[#0097d7]/10 rounded-2xl flex items-center justify-center mb-7">
                  <FaTarget className="text-[#0097d7] text-xl" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-slate-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                  To empower children with comprehensive knowledge, creativity,
                  and core values that prepare them for academic excellence and
                  a fulfilling, purpose-driven life.
                </p>
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Academic Excellence",
                      "Character Building",
                      "Skill Development",
                      "Holistic Growth",
                    ].map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#0097d7]/8 text-[#0097d7] rounded-full text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-slate-100 shadow-sm h-full border-t-4 border-t-[#fb0269]">
                <div className="w-14 h-14 bg-[#fb0269]/10 rounded-2xl flex items-center justify-center mb-7">
                  <FaEye className="text-[#fb0269] text-xl" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-slate-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                  To raise confident, compassionate, and innovative leaders who
                  will positively transform their communities and make
                  meaningful contributions to the global society.
                </p>
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Global Citizens",
                      "Community Leaders",
                      "Innovators",
                      "Change Makers",
                    ].map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#fb0269]/8 text-[#fb0269] rounded-full text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Motto Band — full-width standout moment */}
      <section className="relative py-20 bg-gradient-to-br from-[#0B1220] via-[#0d2b4e] to-[#0097d7] overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
              Our Motto
            </span>
            <p className="font-display italic text-3xl sm:text-4xl lg:text-5xl text-[#ffdd00] leading-snug">
              "A Tradition of Excellence"
            </p>
            <div className="flex justify-center pt-2">
              <span className="h-px w-24 bg-white/20"></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-wide text-[#0097d7] uppercase">
              Our Foundation
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-slate-900 mt-3">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">
              The principles that guide every aspect of our educational approach
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaTrophy />,
                title: "Excellence",
                desc: "Striving for the highest standards in academics, character, and personal development.",
                accent: "#0097d7",
                tags: ["Quality", "Achievement", "Standards"],
              },
              {
                icon: <FaHandsHelping />,
                title: "Integrity",
                desc: "Building honesty, responsibility, and ethical behavior in every learner.",
                accent: "#0B1220",
                tags: ["Honesty", "Ethics", "Responsibility"],
              },
              {
                icon: <FaLightbulb />,
                title: "Creativity",
                desc: "Encouraging curiosity, innovation, and out-of-the-box thinking.",
                accent: "#ffdd00",
                tags: ["Innovation", "Curiosity", "Expression"],
              },
              {
                icon: <FaHeart />,
                title: "Care",
                desc: "Providing a loving, safe, and supportive environment for all.",
                accent: "#fb0269",
                tags: ["Compassion", "Safety", "Support"],
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-7">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-lg"
                    style={{
                      backgroundColor: `${value.accent}14`,
                      color: value.accent,
                    }}
                  >
                    {value.icon}
                  </div>

                  <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {value.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {value.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 bg-slate-50 text-slate-500 rounded-full text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {[
              {
                icon: <FaSchool />,
                title: "Our Journey",
                desc: `Founded in 2022, Meru Trailblazers Academy was born from a vision to create
                a school where children not only love learning but also grow with strong values,
                discipline, and curiosity. From our humble beginnings, we've continued to nurture
                young minds with excellence, care, and a commitment to holistic education.`,
                image: "/schoollife.jpg",
                align: "left",
              },
              {
                icon: <FaBookOpen />,
                title: "Academic Approach",
                desc: `At our school, we offer a well-structured learning journey across
                two main levels — Pre-Primary (Creche 2, KG 1, KG 2) and Primary (Grade 1–Grade 6).
                Our curriculum follows the Competency-Based Curriculum (CBC) enriched with
                creative, experiential teaching. With small class sizes, every learner
                receives personalized attention, while interactive lessons inspire curiosity,
                teamwork, and confidence that lasts beyond the classroom.`,
                image: "/academics.jpg",
                align: "right",
              },
              {
                icon: <FaLaptop />,
                title: "Facilities & Environment",
                desc: `Our learning environment is purposefully designed to support both academic
                and personal growth. We offer a well-equipped computer lab, modern library,
                spacious and well-lit classrooms, and secure playgrounds that encourage active play.
                Every space is crafted to inspire creativity, collaboration, and holistic development.`,
                image: "/update2.png",
                align: "left",
              },
              {
                icon: <FaChalkboardTeacher />,
                title: "Our Teachers & Staff",
                desc: `Our dedicated team of teachers and support staff are the heart of our school.
                Each educator is passionate about nurturing potential, guiding learners with
                patience, creativity, and professionalism. Together, they create an engaging
                and supportive environment where every child feels valued and inspired to excel.`,
                image: "/staff2.jpg",
                align: "right",
              },
              {
                icon: <FaFutbol />,
                title: "Extracurricular Activities",
                desc: `We offer a vibrant mix of sports, arts, music, dance, taekwondo, swimming,
                French, fun clubs, and playtime — all designed to nurture creativity, develop
                talents, and build confidence beyond the classroom. Our co-curricular program
                helps every learner explore their passions and grow holistically.`,
                image: "/karate.jpg",
                align: "left",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${item.align === "right" ? "lg:grid-flow-dense" : ""}`}
              >
                <div
                  className={`${item.align === "right" ? "lg:col-start-2" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 bg-[#0097d7]/10 rounded-xl flex items-center justify-center text-[#0097d7]">
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
                      Section {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl lg:text-3xl font-medium text-slate-900 mb-5">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>

                <div
                  className={`relative ${item.align === "right" ? "lg:col-start-1" : ""}`}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[360px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/20 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-br from-[#0B1220] via-[#0d2b4e] to-[#0097d7] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#ffdd00]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full">
              <FaUsers className="text-[#ffdd00] text-sm" />
              <span className="text-sm font-medium">Join Our Community</span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-medium leading-tight">
              Ready to Join Our
              <span className="block text-[#ffdd00] mt-1">
                Educational Family?
              </span>
            </h2>

            <p className="text-lg text-white/75 max-w-xl mx-auto">
              Enroll your child today and give them the foundation for a
              successful future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/admissions"
                className="group px-9 py-4 bg-white text-[#0097d7] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Begin Enrollment Process</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="px-9 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Schedule a Visit
              </Link>
            </div>

            <p className="text-white/50 text-xs pt-6 tracking-wide uppercase">
              Limited spots available for the upcoming academic year
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
