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

export default function AboutPage() {
  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 opacity-90"></div>
          <img
            src="/swing.jpg"
            alt="Meru Trailblazers Academy Campus"
            className="w-full h-full object-cover"
          />
          {/* Multi-layered overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-black/60"></div>
        </div>

        {/* Animated decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#fb0269]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#ffdd00]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <FaStar className="text-[#ffdd00]" />
              <span className="text-white font-semibold">Since 2022</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white block">About Our</span>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-gradient-to-r from-[#ffdd00] via-yellow-400 to-[#ffdd00] bg-clip-text text-transparent block"
              >
                Academy
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Nurturing young minds, building strong values, and preparing
              innovative leaders for tomorrow's world through holistic
              education.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12"
            >
              {[
                { value: "200+", label: "Students", icon: "👨‍🎓" },
                { value: "25+", label: "Dedicated Staff", icon: "👩‍🏫" },
                { value: "3+", label: "Years Excellence", icon: "🏆" },
                { value: "100%", label: "CBC Compliance", icon: "📚" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
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

      {/* Who We Are */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0097d7]/10 rounded-full mb-6">
                  <div className="w-2 h-2 bg-[#0097d7] rounded-full"></div>
                  <span className="text-sm font-semibold text-[#0097d7]">
                    Our Story
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Who <span className="text-[#0097d7]">We Are</span>
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Meru Trailblazers Academy is more than just a school — it's a
                  vibrant community where learning comes alive. We provide a
                  nurturing environment where children feel safe, valued, and
                  inspired to reach their full potential.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Safe & Secure Environment",
                  "Holistic Development",
                  "CBC Curriculum Excellence",
                  "Experienced Faculty",
                  "Modern Facilities",
                  "Parent Partnership",
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#0097d7] rounded-full"></div>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0097d7] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <span>Schedule a Campus Tour</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image with Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/students.jpg"
                  alt="Happy students at Meru Trailblazers Academy"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0097d7] rounded-full flex items-center justify-center text-white">
                    <FaHeart />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">98%</div>
                    <div className="text-sm text-gray-600">
                      Parent Satisfaction
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic">
                  "A home away from home where our child thrives every day."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0097d7]/10 rounded-full mb-6">
              <FaLightbulb className="text-[#ffdd00]" />
              <span className="text-sm font-semibold text-[#0097d7]">
                Our Foundation
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Mission & <span className="text-[#0097d7]">Vision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The guiding principles that shape our educational approach
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0097d7] to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0097d7] to-blue-600 rounded-2xl flex items-center justify-center mb-8">
                  <FaTarget className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  To empower children with comprehensive knowledge, creativity,
                  and core values that prepare them for academic excellence and
                  a fulfilling, purpose-driven life.
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-[#0097d7] mb-3">
                    Key Focus Areas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Academic Excellence",
                      "Character Building",
                      "Skill Development",
                      "Holistic Growth",
                    ].map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-[#0097d7] rounded-full text-sm"
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
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#fb0269] to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-pink-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#fb0269] to-pink-500 rounded-2xl flex items-center justify-center mb-8">
                  <FaEye className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  To raise confident, compassionate, and innovative leaders who
                  will positively transform their communities and make
                  meaningful contributions to the global society.
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-[#fb0269] mb-3">
                    Future Goals:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Global Citizens",
                      "Community Leaders",
                      "Innovators",
                      "Change Makers",
                    ].map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-pink-50 text-[#fb0269] rounded-full text-sm"
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

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0097d7]/10 rounded-full mb-6">
              <FaShieldAlt className="text-[#0097d7]" />
              <span className="text-sm font-semibold text-[#0097d7]">
                Our Foundation
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-[#0097d7]">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every aspect of our educational approach
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaTrophy className="text-3xl" />,
                title: "Excellence",
                desc: "Striving for the highest standards in academics, character, and personal development.",
                color: "from-blue-500 to-blue-600",
                tags: ["Quality", "Achievement", "Standards"],
              },
              {
                icon: <FaHandsHelping className="text-3xl" />,
                title: "Integrity",
                desc: "Building honesty, responsibility, and ethical behavior in every learner.",
                color: "from-emerald-500 to-emerald-600",
                tags: ["Honesty", "Ethics", "Responsibility"],
              },
              {
                icon: <FaLightbulb className="text-3xl" />,
                title: "Creativity",
                desc: "Encouraging curiosity, innovation, and out-of-the-box thinking.",
                color: "from-amber-500 to-amber-600",
                tags: ["Innovation", "Curiosity", "Expression"],
              },
              {
                icon: <FaHeart className="text-3xl" />,
                title: "Care",
                desc: "Providing a loving, safe, and supportive environment for all.",
                color: "from-rose-500 to-rose-600",
                tags: ["Compassion", "Safety", "Support"],
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Gradient Header */}
                  <div className={`h-3 bg-gradient-to-r ${value.color}`}></div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-white rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                      {/* CORRECT - Applies gradient only to the icon */}
                      <div className={"text-3xl "}>{value.icon}</div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{value.desc}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {value.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {[
              {
                icon: <FaSchool className="text-3xl" />,
                title: "Our Journey",
                desc: `Founded in 2022, Meru Trailblazers Academy was born from a vision to create 
                a school where children not only love learning but also grow with strong values, 
                discipline, and curiosity. From our humble beginnings, we've continued to nurture 
                young minds with excellence, care, and a commitment to holistic education.`,
                image: "/schoollife.jpg",
                align: "left",
              },
              {
                icon: <FaBookOpen className="text-3xl" />,
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
                icon: <FaLaptop className="text-3xl" />,
                title: "Facilities & Environment",
                desc: `Our learning environment is purposefully designed to support both academic 
                and personal growth. We offer a well-equipped computer lab, modern library, 
                spacious and well-lit classrooms, and secure playgrounds that encourage active play. 
                Every space is crafted to inspire creativity, collaboration, and holistic development.`,
                image: "/Bus.jpg",
                align: "left",
              },
              {
                icon: <FaChalkboardTeacher className="text-3xl" />,
                title: "Our Teachers & Staff",
                desc: `Our dedicated team of teachers and support staff are the heart of our school. 
                Each educator is passionate about nurturing potential, guiding learners with 
                patience, creativity, and professionalism. Together, they create an engaging 
                and supportive environment where every child feels valued and inspired to excel.`,
                image: "/staff2.jpg",
                align: "right",
              },
              {
                icon: <FaFutbol className="text-3xl" />,
                title: "Extracurricular Activities",
                desc: `We offer a vibrant mix of sports, arts, music, dance, taekwondo, swimming, 
                French, fun clubs, and playtime — all designed to nurture creativity, develop 
                talents, and build confidence beyond the classroom. Our co-curricular program 
                helps every learner explore their passions and grow holistically.`,
                image: "/swing.jpg",
                align: "left",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${item.align === "right" ? "lg:grid-flow-dense" : ""}`}
              >
                <div
                  className={`${item.align === "right" ? "lg:col-start-2" : ""}`}
                >
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#0097d7]/10 rounded-xl flex items-center justify-center">
                      <div className="text-[#0097d7]">{item.icon}</div>
                    </div>
                    <div className="text-sm font-semibold text-[#0097d7] bg-[#0097d7]/10 px-4 py-2 rounded-full">
                      Section {index + 1}
                    </div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {item.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {item.desc}
                  </p>

                  <Link
                    to={`/${item.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="inline-flex items-center gap-2 text-[#0097d7] font-semibold hover:text-[#007bb5] transition-colors group"
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>

                <div
                  className={`relative ${item.align === "right" ? "lg:col-start-1" : ""}`}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ffdd00] rounded-2xl rotate-12 shadow-lg flex items-center justify-center">
                    <div className="text-white font-bold">{index + 1}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-br from-[#0097d7] via-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/10 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTVjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTUgMTUtNi43MTYgMTUtMTUtNi43MTYtMTUtMTUtMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-5"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <FaUsers className="text-[#ffdd00]" />
              <span className="font-semibold">Join Our Community</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Join Our
              <span className="block text-[#ffdd00] mt-2">
                Educational Family?
              </span>
            </h2>

            <p className="text-xl opacity-95 max-w-2xl mx-auto">
              Enroll your child today and give them the foundation for a
              successful future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                to="/admissions"
                className="group px-10 py-4 bg-white text-[#0097d7] font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <span>Begin Enrollment Process</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Schedule a Visit
              </Link>
            </div>

            <p className="text-white/70 text-sm pt-8">
              Limited spots available for the upcoming academic year
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
