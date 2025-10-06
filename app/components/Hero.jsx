import { Link } from "react-router";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white overflow-hidden">
      {/* Background overlay with school image */}
      <div className="absolute inset-0">
        <img
          src="/kids.webp"
          alt="Meru Trailblazers Academy Students"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-blue-900/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col md:flex-row items-center gap-10">
        {/* Left side content */}
        <div className="text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Welcome to{" "}
            <span className="text-[#fb0269]">Meru Trailblazers Academy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-lg md:text-xl max-w-xl text-gray-100"
          >
            More than a school — a place where excellence meets care. Through
            the CBC system, we grow curious thinkers, creative dreamers, and
            children of strong character
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#fb0269] text-blue-900 font-bold rounded-xl shadow-lg hover:bg-yellow-500 transition"
            >
              Apply Now
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Right side fun illustration or mascot */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:block"
        >
          <img
            src="/logo-trailblazers.jpg" // School logo here
            alt="School Logo"
            className="w-72 h-72 rounded-lg object-contain drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
