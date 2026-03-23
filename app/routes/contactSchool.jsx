import { useState, useRef } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaClock,
  FaUser,
  FaPaperPlane,
  FaWhatsapp,
  FaYoutube,
  FaStar,
  FaShieldAlt,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationDot, FaCircleCheck } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

export function meta() {
  return [
    // === PRIMARY META TAGS ===
    {
      title: "Contact Meru Trailblazers Academy | Phone, Email & Location", // 58 chars (optimal)
    },
    {
      name: "description",
      content:
        "Contact Meru Trailblazers Academy: 0720 206 783 | info@merutrailblazers.ac.ke. Hours: Mon-Fri 8am-4pm, Sat 9am-1pm. Visit our Meru campus.", // 158 chars
    },
    {
      name: "keywords",
      content:
        "contact Meru Trailblazers, Meru school phone number, Meru school email, Meru school location, school contact Meru",
    },

    // === CRITICAL SEO TAGS ===
    {
      name: "robots",
      content: "index, follow",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://merutrailblazers.com/contact",
    },

    // === OPEN GRAPH TAGS ===
    {
      property: "og:title",
      content:
        "Contact Us - Meru Trailblazers Academy | Phone, Email & Location",
    },
    {
      property: "og:description",
      content:
        "Call 0720 206 783 | Email: info@merutrailblazers.ac.ke. Hours: Mon-Fri 8am-4pm, Sat 9am-1pm. Visit our Meru campus.",
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
      property: "og:image:alt",
      content: "Meru Trailblazers Academy school entrance and campus",
    },
    {
      property: "og:url",
      content: "https://merutrailblazers.com/contact",
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
      content: "Contact Meru Trailblazers Academy",
    },
    {
      name: "twitter:description",
      content:
        "Call 0720 206 783 | Email: info@merutrailblazers.ac.ke | Visit our Meru campus",
    },
    {
      name: "twitter:image",
      content: "https://merutrailblazers.com/twitter-image.jpg",
    },
    {
      name: "twitter:image:alt",
      content: "Meru Trailblazers Academy school entrance",
    },

    // === SIMPLE STRUCTURED DATA ===
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Meru Trailblazers Academy",
        url: "https://merutrailblazers.com/contact",
        description: "Get in touch with Meru Trailblazers Academy",
        mainEntity: {
          "@type": "EducationalOrganization",
          name: "Meru Trailblazers Academy",
          telephone: "+254720206783",
          email: "info@merutrailblazers.ac.ke",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Meru",
            addressCountry: "KE",
          },
          openingHours: ["Mo-Fr 08:00-16:00", "Sa 09:00-13:00"],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+254720206783",
            contactType: "customer service",
            availableLanguage: ["English", "Swahili"],
          },
        },
      },
    },
  ];
}

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formRef = useRef();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_mc3shsb", // from EmailJS
        "template_uemmmiv", // contact template
        formRef.current, // form reference
        "dOOPtlrMOwUQ757MN", // public key
      );

      setFormSubmitted(true);
      e.target.reset();
    } catch (error) {
      console.error("Email error:", error);
      alert("Failed to send message. Try again.");
    }

    setIsSubmitting(false);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  const faqs = [
    {
      question: "What is the admission process?",
      answer:
        "Parents fill in the online admission form or visit the school, pay the KES 1,000 admission fee, and provide required documents. Uniforms are purchased directly at the school.",
      icon: "📋",
    },
    {
      question: "When do school terms start?",
      answer:
        "We follow the Kenyan Ministry of Education calendar. Usually, terms start in January, May, and September. Admission is open year-round for new learners.",
      icon: "📅",
    },
    {
      question: "Do you offer transportation?",
      answer:
        "Yes, we provide safe school transport for learners within designated routes around Meru. Details and fees are shared during admission.",
      icon: "🚌",
    },
    {
      question: "Can parents visit the school before admission?",
      answer:
        "Absolutely! Parents are welcome to schedule a visit and meet our teachers, view facilities, and learn more about our academic approach.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      question: "What curriculum do you follow?",
      answer:
        "We follow the Competency-Based Curriculum (CBC) as prescribed by the Kenyan Ministry of Education, enriched with co-curricular activities.",
      icon: "📚",
    },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Our Location",
      details: "Meru, Kenya",
      subtext: "Central location in Meru County",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone Numbers",
      details: "0720 206 783 / 0717 522 603",
      subtext: "Call us for immediate assistance",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Address",
      details: "info@merutrailblazers.ac.ke",
      subtext: "We reply within 24 hours",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Office Hours",
      details: "Mon – Fri: 8:00 AM – 4:00 PM",
      subtext: "Appointments available on request",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const socialMedia = [
    {
      icon: <FaFacebook />,
      name: "Facebook",
      color: "hover:bg-blue-600",
      link: "https://web.facebook.com/merutrailblazersacademy",
    },
    {
      icon: <FaWhatsapp />,
      name: "WhatsApp",
      color: "hover:bg-green-500",
      link: "https://wa.me/254720206783",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
      link: "https://www.instagram.com/merutrailblazersacademy",
    },
    {
      icon: <FaYoutube />,
      name: "YouTube",
      color: "hover:bg-red-600",
      link: "https://www.youtube.com/@merutrailblazersacademy7431",
    },
  ];

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#0097d7] via-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#ffdd00]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#fb0269]/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <FaPaperPlane className="text-[#ffdd00]" />
              <span className="font-semibold">Connect With Us</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Get in <span className="text-[#ffdd00]">Touch</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light"
            >
              We're here to help with admissions, inquiries, and school visits.
              Reach out and let's start the conversation.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {[
                { value: "24/7", label: "Online Support", icon: "💬" },
                { value: "1hr", label: "Response Time", icon: "⚡" },
                { value: "98%", label: "Satisfaction", icon: "😊" },
                { value: "2022", label: "Established", icon: "🎯" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-12">
                {/* Section Header */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0097d7]/10 rounded-full mb-6">
                    <FaLocationDot className="text-[#0097d7]" />
                    <span className="text-sm font-semibold text-[#0097d7]">
                      Contact Details
                    </span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Contact <span className="text-[#0097d7]">Information</span>
                  </h2>

                  <p className="text-xl text-gray-600 leading-relaxed">
                    Have questions about admissions, curriculum, or visiting the
                    school? We're here to help you every step of the way.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                        {/* Icon with Gradient */}
                        <div
                          className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-6`}
                        >
                          <div className="text-white">{info.icon}</div>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        <div className="text-lg font-semibold text-gray-800 mb-2">
                          {info.details}
                        </div>
                        <div className="text-sm text-gray-500">
                          {info.subtext}
                        </div>

                        {/* Hover Line */}
                        <div
                          className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${info.color} transition-all duration-300 mt-4 rounded-full`}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Connect On Social Media
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {socialMedia.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={`w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 ${social.color} border border-gray-200`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                    <FaShieldAlt className="text-[#0097d7] text-xl" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Safe & Secure
                      </div>
                      <div className="text-sm text-gray-600">
                        Verified Institution
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl">
                    <FaGraduationCap className="text-emerald-600 text-xl" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        CBC Certified
                      </div>
                      <div className="text-sm text-gray-600">
                        Ministry Approved
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
                {/* Form Header */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fb0269]/10 rounded-full mb-8">
                  <FaPaperPlane className="text-[#fb0269]" />
                  <span className="text-sm font-semibold text-[#fb0269]">
                    Send Message
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h3>

                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you
                  within 24 hours. All fields are required for better
                  assistance.
                </p>

                {/* Success Message */}
                <AnimatePresence>
                  {formSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mb-8 p-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl"
                    >
                      <div className="flex items-center gap-3">
                        <FaCircleCheck className="text-2xl" />
                        <div>
                          <div className="font-bold text-lg">
                            Message Sent Successfully!
                          </div>
                          <div className="text-sm opacity-90">
                            We'll contact you within 24 hours. Thank you for
                            reaching out.
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Contact Form */}
                <form
                  ref={formRef}
                  className="space-y-8"
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <FaUser />
                      </div>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Your Full Name"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0097d7] focus:border-transparent"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <FaEnvelope />
                      </div>
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email Address"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0097d7] focus:border-transparent"
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <FaPhone />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0097d7] focus:border-transparent"
                      />
                    </div>

                    {/* Subject Field */}
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <FaGraduationCap />
                      </div>
                      <select
                        name="subject"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0097d7] focus:border-transparent appearance-none"
                      >
                        <option value="">Select Subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="fees">Fees & Payment</option>
                        <option value="academics">Academic Program</option>
                        <option value="visit">Schedule a Visit</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your message here... Please include any specific questions or requirements"
                      rows="6"
                      required
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0097d7] focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-gradient-to-r from-[#0097d7] to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FaPaperPlane />
                        </>
                      )}
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-4">
                      By submitting, you agree to our privacy policy. We respect
                      your data.
                    </p>
                  </div>
                </form>

                {/* Alternative Contact */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <p className="text-center text-gray-600 mb-4">
                    Prefer to talk directly?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:0720206783"
                      className="flex-1 py-3 bg-green-50 text-green-700 font-semibold rounded-xl hover:bg-green-100 transition-colors flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp className="text-lg" />
                      WhatsApp Now
                    </a>
                    <a
                      href="tel:0720206783"
                      className="flex-1 py-3 bg-blue-50 text-blue-700 font-semibold rounded-xl hover:bg-blue-100 transition-colors flex items-center justify-center gap-2"
                    >
                      <FaPhone className="text-lg" />
                      Call Directly
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="py-24 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Section Header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0097d7]/10 rounded-full mb-6">
                <FaMapMarkerAlt className="text-[#0097d7]" />
                <span className="text-sm font-semibold text-[#0097d7]">
                  Visit Our Campus
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Find Us on the <span className="text-[#0097d7]">Map</span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visit Meru Trailblazers Academy at our campus. Use the map below
                to get precise directions or schedule a guided tour.
              </p>
            </div>

            {/* Map Container */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Map */}
              <div className="lg:col-span-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <iframe
                    title="Meru Trailblazers Academy Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.25999827671!2d37.659945099999995!3d0.0739232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178823a1a08944f3%3A0xf3ce1fdfc7122f03!2sMeru%20Trailblazers%20Academy!5e0!3m2!1sen!2ske!4v1759002794131!5m2!1sen!2ske"
                    width="100%"
                    height="500"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[500px] border-0"
                  />
                </div>
              </div>

              {/* Working Hours & Info */}
              <div className="space-y-8">
                {/* Working Hours Card */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <FaClock className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Working Hours
                      </h3>
                      <div className="text-gray-600">Plan your visit</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        day: "Monday - Friday",
                        time: "8:00 AM - 4:00 PM",
                        note: "Full office operations",
                      },
                      {
                        day: "Saturday",
                        time: "9:00 AM - 1:00 PM",
                        note: "By appointment only",
                      },
                      {
                        day: "Sunday",
                        time: "Closed",
                        note: "Emergency contact available",
                      },
                    ].map((schedule, index) => (
                      <div
                        key={index}
                        className="pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-gray-900">
                            {schedule.day}
                          </span>
                          <span className="font-bold text-[#0097d7]">
                            {schedule.time}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {schedule.note}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact Card */}
                <div className="bg-gradient-to-br from-[#0097d7] to-blue-600 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">
                    Need Immediate Help?
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="tel:0720206783"
                      className="flex items-center gap-3 p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
                    >
                      <FaPhone className="text-xl" />
                      <div>
                        <div className="font-semibold">Emergency Line</div>
                        <div className="text-sm opacity-90">0720 206 783</div>
                      </div>
                    </a>
                    <a
                      href="mailto:info@merutrailblazers.ac.ke"
                      className="flex items-center gap-3 p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
                    >
                      <FaEnvelope className="text-xl" />
                      <div>
                        <div className="font-semibold">Email Support</div>
                        <div className="text-sm opacity-90">24/7 Response</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Section Header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0097d7]/10 rounded-full mb-6">
                <FaStar className="text-[#0097d7]" />
                <span className="text-sm font-semibold text-[#0097d7]">
                  Common Questions
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked{" "}
                <span className="text-[#0097d7]">Questions</span>
              </h2>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find quick answers to the most common questions from parents and
                prospective students.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              <AnimatePresence>
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{faq.icon}</div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <FaChevronDown
                        className={`text-[#0097d7] transform transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-6 pt-2">
                            <div className="pl-12 border-l-2 border-[#0097d7]">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Still Have Questions? */}
            <div className="text-center pt-12">
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-3xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Can't find what you're looking for? Our team is ready to help.
                </p>
                <a
                  href="mailto:info@merutrailblazers.ac.ke"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0097d7] to-blue-600 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  <span>Contact Support Team</span>
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
