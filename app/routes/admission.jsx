import { Link } from "react-router";
import {
  FaUserGraduate,
  FaCalendarAlt,
  FaPhoneAlt,
  FaCheckCircle,
  FaFileAlt,
  FaReceipt,
  FaArrowRight,
  FaComments,
} from "react-icons/fa";
import { motion } from "framer-motion";

export function meta() {
  return [
    // === PRIMARY META TAGS ===
    {
      title: "Admissions 2026 | Meru Trailblazers Academy",
    },
    {
      name: "description",
      content:
        "Apply to Meru Trailblazers Academy for the 2026 academic year. Nursery and Primary admissions open. Call 0720 206 783 or contact us online.",
    },
    {
      name: "keywords",
      content:
        "Meru school admissions, CBC school Meru, nursery admissions Meru, primary school Meru",
    },

    // === CRITICAL SEO TAGS ===
    {
      name: "robots",
      content: "index, follow",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://merutrailblazers.com/admissions",
    },

    // === OPEN GRAPH TAGS ===
    {
      property: "og:title",
      content: "Admissions 2026 - Meru Trailblazers Academy",
    },
    {
      property: "og:description",
      content: "Nursery & Primary admissions open for 2026. Call 0720 206 783.",
    },
    {
      property: "og:image",
      content: "https://merutrailblazers.com/update1.png",
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
      content: "https://merutrailblazers.com/admissions",
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
      content: "Admissions 2026 - Meru Trailblazers Academy",
    },
    {
      name: "twitter:description",
      content: "Nursery & Primary admissions open for 2026.",
    },
    {
      name: "twitter:image",
      content: "https://merutrailblazers.com/admissions-twitter.jpg",
    },

    // === SIMPLE STRUCTURED DATA ===
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "EducationEvent",
        name: "2026 Admissions - Meru Trailblazers Academy",
        description: "Nursery and Primary school admissions for 2026",
        startDate: "2026-01-15",
        endDate: "2026-12-15",
        location: {
          "@type": "Place",
          name: "Meru Trailblazers Academy",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Meru",
            addressCountry: "KE",
          },
        },
      },
    },
  ];
}

export default function AdmissionPage() {
  // Admission process steps
  const admissionSteps = [
    {
      step: 1,
      icon: <FaComments className="text-2xl" />,
      title: "Get in Touch",
      description:
        "Reach out via our contact page or phone with your child's details",
    },
    {
      step: 2,
      icon: <FaCalendarAlt className="text-2xl" />,
      title: "Schedule Interview",
      description: "We'll contact you to schedule a parent-student interview",
    },
    {
      step: 3,
      icon: <FaCheckCircle className="text-2xl" />,
      title: "Receive Offer",
      description: "Successful applicants receive admission offer letters",
    },
    {
      step: 4,
      icon: <FaReceipt className="text-2xl" />,
      title: "Complete Enrollment",
      description: "Submit required documents and complete fee payment",
    },
  ];

  return (
    <div className="font-sans text-slate-800 bg-gradient-to-b from-slate-50 via-white to-blue-50/60">
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-[#0B1220] via-[#0d2b4e] to-[#0097d7] text-white overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full">
              <FaUserGraduate className="text-[#ffdd00]" />
              <span className="text-sm font-medium tracking-wide">
                Limited Seats Available
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Begin Your Child's
              <span className="block text-[#ffdd00] mt-2">
                Educational Journey
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Join Meru Trailblazers Academy and be part of a community that
              values excellence, creativity, and holistic growth. Enroll today
              for the 2026 academic year.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 max-w-3xl mx-auto">
              {[
                { value: "15:1", label: "Student-Teacher Ratio" },
                { value: "98%", label: "Parent Satisfaction" },
                { value: "24/7", label: "Security" },
                { value: "100%", label: "CBC Curriculum" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-[#ffdd00]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/70 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="pt-6">
              <Link
                to="/contact?subject=Admission Inquiry"
                className="inline-flex items-center gap-3 px-9 py-4 bg-[#ffdd00] text-[#0B1220] font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Start Your Application <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-[#0097d7] tracking-wide uppercase">
              Simple 4-Step Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-3">
              Admission Process
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">
              Our streamlined admission process makes joining our academy simple
              and stress-free
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative"
              >
                <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#0097d7]/10 flex items-center justify-center text-[#0097d7]">
                      {step.icon}
                    </div>
                    <span className="text-xs font-semibold text-slate-400 tracking-wide">
                      STEP {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Apply CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 h-full border border-slate-100 shadow-sm">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0097d7]/10 rounded-full mb-6">
                  <FaFileAlt className="text-[#0097d7] text-sm" />
                  <span className="text-xs font-semibold text-[#0097d7] tracking-wide uppercase">
                    Requirements
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-7">
                  Admission Requirements
                </h3>

                <div className="space-y-5">
                  {[
                    {
                      title: "Completed admission form",
                      note: "Provided by our admissions team once you get in touch",
                    },
                    {
                      title: "Copy of birth certificate",
                      note: "Original copy for verification",
                    },
                    {
                      title: "Two recent passport-sized photographs",
                      note: "White background, recent (within 3 months)",
                    },
                    {
                      title: "Previous academic report (if applicable)",
                      note: "For students transferring from other schools",
                    },
                    {
                      title: "Parent/Guardian national ID copy",
                      note: "For identification purposes",
                    },
                  ].map((requirement, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <FaCheckCircle className="text-[#0097d7] mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-slate-900">
                          {requirement.title}
                        </div>
                        <div className="text-sm text-slate-500 mt-0.5">
                          {requirement.note}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Uniform Info */}
                <div className="mt-10 p-5 bg-[#0097d7]/5 rounded-xl border border-[#0097d7]/10">
                  <div className="font-semibold text-slate-900 mb-1">
                    School Uniform — Purchased Separately
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Uniforms are purchased directly by parents at the time of
                    admission to ensure proper fitting, quality, and comfort for
                    your child.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Apply CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-slate-100 shadow-sm h-full flex flex-col">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#ffdd00]/20 rounded-full mb-6 self-start">
                  <FaUserGraduate className="text-amber-600 text-sm" />
                  <span className="text-xs font-semibold text-amber-700 tracking-wide uppercase">
                    Apply Now
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Ready to Enroll Your Child?
                </h3>

                <p className="text-slate-500 mb-8 leading-relaxed">
                  Applications are handled directly by our admissions team. Send
                  us your child's details through our contact page and we'll get
                  back to you within 24 hours to schedule an interview — no
                  lengthy online form required.
                </p>

                <div className="space-y-3 mb-10">
                  {[
                    "Student's full name, date of birth & class applying for",
                    "Parent/guardian name and phone number",
                    "Any additional information we should know",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#0097d7] mt-1 flex-shrink-0 text-sm" />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto space-y-3">
                  <Link
                    to="/contact?subject=Admission Inquiry"
                    className="w-full py-4 bg-[#0097d7] text-white font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-[#0082ba] transition-colors duration-300"
                  >
                    Contact Admissions <FaArrowRight />
                  </Link>

                  <a
                    href="tel:0720206783"
                    className="w-full py-4 border border-slate-200 text-slate-700 font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors duration-300"
                  >
                    <FaPhoneAlt /> Call 0720 206 783
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-24 bg-gradient-to-br from-[#0B1220] via-[#0d2b4e] to-[#0097d7] text-white overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-7"
          >
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Questions About Admissions?
            </h2>

            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Our admissions team is here to help you every step of the way
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="tel:0720206783"
                className="px-9 py-4 bg-white text-[#0097d7] font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center gap-3"
              >
                <FaPhoneAlt />
                Call Now: 0720 206 783
              </a>

              <Link
                to="/contact?subject=Admission Inquiry"
                className="px-9 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                Contact Us Online
              </Link>
            </div>

            <p className="text-white/60 text-sm pt-6">
              Office Hours: Monday – Friday, 8:00 AM – 5:00 PM
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
