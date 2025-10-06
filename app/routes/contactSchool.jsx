import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGlobe,
  FaClock,
} from "react-icons/fa";

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the admission process?",
      answer:
        "Parents fill in the online admission form or visit the school, pay the KES 1,000 admission fee, and provide required documents. Uniforms are purchased directly at the school.",
    },
    {
      question: "When do school terms start?",
      answer:
        "We follow the Kenyan Ministry of Education calendar. Usually, terms start in January, May, and September. Admission is open year-round for new learners.",
    },
    {
      question: "Do you offer transportation?",
      answer:
        "Yes, we provide safe school transport for learners within designated routes around Meru. Details and fees are shared during admission.",
    },
    {
      question: "Can parents visit the school before admission?",
      answer:
        "Absolutely! Parents are welcome to schedule a visit and meet our teachers, view facilities, and learn more about our academic approach.",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="relative min-h-[40vh] bg-gradient-to-r from-[#0097d7] to-[#00c4ff] flex items-center justify-center text-white">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg opacity-90">
            We’d love to hear from you! Reach out for inquiries, admissions, or
            visits.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 bg-gradient-to-br from-[#f9fbfc] to-[#e6f9ff]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#0097d7] mb-6">
              Contact Information
            </h2>
            <p className="mb-8 text-lg opacity-80">
              Have questions about admissions, curriculum, or visiting the
              school? We’re here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-[#0097d7] text-2xl" />
                <p className="text-lg">Meru, Kenya</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-[#0097d7] text-2xl" />
                <p className="text-lg">0720 206 783 / 0717 522 603</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-[#0097d7] text-2xl" />
                <p className="text-lg">Miritikelvin0@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaGlobe className="text-[#0097d7] text-2xl" />
                <p className="text-lg">www.merutrailblazersacademy.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaClock className="text-[#0097d7] text-2xl" />
                <p className="text-lg">Mon – Fri: 8:00 AM – 4:00 PM</p>
              </div>
            </div>

            {/* Year Established */}
            <div className="mt-6 text-lg opacity-80">
              <strong>Year Established:</strong> 2022
            </div>

            {/* Social Media */}
            <div className="mt-8 flex space-x-6">
              <a
                href="#"
                className="text-[#0097d7] hover:text-[#00c4ff] transition"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="#"
                className="text-[#0097d7] hover:text-[#00c4ff] transition"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="#"
                className="text-[#0097d7] hover:text-[#00c4ff] transition"
              >
                <FaInstagram size={28} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">
            <h2 className="text-3xl font-bold text-[#0097d7] mb-6">
              Send Us a Message
            </h2>
            <form
              action="https://formspree.io/f/mjkvbqze"
              method="POST"
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0097d7] outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0097d7] outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0097d7] outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-[#0097d7] to-[#00c4ff] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map + Working Hours */}
      <section className="py-16 bg-gradient-to-r from-[#f0faff] via-white to-[#f0faff]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0097d7] mb-6 text-center">
            Find Us on the Map
          </h2>
          <p className="text-lg text-gray-600 mb-10 text-center">
            Visit Meru Trailblazers Academy at our campus. Use the map below to
            get precise directions.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0097d7]/20">
              <iframe
                title="Meru Trailblazers Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.25999827671!2d37.659945099999995!3d0.0739232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178823a1a08944f3%3A0xf3ce1fdfc7122f03!2sMeru%20Trailblazers%20Academy!5e0!3m2!1sen!2ske!4v1759002794131!5m2!1sen!2ske"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[450px] border-0"
              ></iframe>
            </div>

            {/* Working Hours */}
            <div className="bg-white h-fit rounded-2xl shadow-lg p-6 border border-[#0097d7]/10">
              <h3 className="text-2xl font-bold text-[#0097d7] mb-4">
                Working Hours
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">8:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">Closed</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0097d7] mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 text-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-gray-700 hover:bg-[#f0f9fc] transition"
                >
                  {faq.question}
                  <FaChevronDown
                    className={`transform transition ${
                      openIndex === index ? "rotate-180 text-[#0097d7]" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
