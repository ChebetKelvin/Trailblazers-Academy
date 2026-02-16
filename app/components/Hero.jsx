import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { useRef, useCallback } from "react";

export default function Hero() {
  // Refs to prevent multiple confetti triggers
  const hasTriggeredWelcomeRef = useRef(false);
  const hasTriggeredStatsRef = useRef(false);

  // School colors for confetti
  const schoolColors = ["#0097d7", "#fb0269", "#ffdd00", "#ffffff"];

  // Trigger confetti when "Meru Trailblazers" text appears
  const triggerWelcomeConfetti = useCallback(() => {
    if (hasTriggeredWelcomeRef.current) return;
    hasTriggeredWelcomeRef.current = true;

    // Left side confetti
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: 0.5 },
      colors: schoolColors,
      startVelocity: 25,
      decay: 0.9,
    });

    // Right side confetti
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 55,
      origin: { x: 0.9, y: 0.5 },
      colors: schoolColors,
      startVelocity: 25,
      decay: 0.9,
    });

    // Center burst
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
      colors: schoolColors,
      startVelocity: 30,
      decay: 0.9,
    });

    // Add some star-shaped confetti for sparkle
    confetti({
      particleCount: 30,
      spread: 70,
      origin: { y: 0.4 },
      colors: ["#ffdd00", "#fb0269"],
      shapes: ["star"],
      startVelocity: 20,
    });
  }, [schoolColors]);

  // Trigger confetti when stats appear
  const triggerStatsConfetti = useCallback(() => {
    if (hasTriggeredStatsRef.current) return;
    hasTriggeredStatsRef.current = true;

    confetti({
      particleCount: 50,
      spread: 45,
      origin: { y: 0.7 },
      colors: ["#0097d7", "#fb0269", "#ffdd00"],
      startVelocity: 20,
      decay: 0.9,
    });
  }, []);

  // Handle Apply Now button click
  const handleApplyClick = useCallback(() => {
    // Celebration burst
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: schoolColors,
      startVelocity: 30,
      decay: 0.9,
      ticks: 400,
    });

    // Left cannon
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.5 },
        colors: ["#fb0269", "#ffdd00"],
      });
    }, 100);

    // Right cannon
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.5 },
        colors: ["#0097d7", "#ffffff"],
      });
    }, 200);
  }, [schoolColors]);

  // Handle Virtual Tour button click
  const handleTourClick = useCallback(() => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#0097d7", "#ffffff", "#93c5fd"],
      shapes: ["circle"],
      startVelocity: 20,
    });

    // Paper-like confetti
    confetti({
      particleCount: 40,
      spread: 45,
      origin: { y: 0.5, x: 0.5 },
      colors: ["#ffdd00", "#fb0269"],
      shapes: ["square"],
      startVelocity: 15,
    });
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-15">
      {/* Premium Background with layered effects */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400"></div>

        {/* School image with sophisticated overlay */}
        <div className="absolute inset-0">
          <img
            src="/school2.jpg"
            alt="Meru Trailblazers Academy Students"
            className="w-full h-full object-cover"
          />
          {/* Multi-layered overlay for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-blue-900/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-blue-900/20 to-blue-900/40"></div>
        </div>
      </div>

      {/* Content Container with subtle glass morphism effect */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge/Accreditation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <div className="w-2 h-2 bg-[#fb0269] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-white">
                CBC Excellence Since 2022
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-white block">Welcome to</span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  onAnimationComplete={triggerWelcomeConfetti}
                  className="bg-gradient-to-r from-[#fb0269] to-pink-500 bg-clip-text text-transparent inline-flex items-center gap-2"
                >
                  Meru Trailblazers
                  <Sparkles className="w-8 h-8 text-yellow-400 inline-block" />
                </motion.span>
                <span className="text-white block">Academy</span>
              </h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg sm:text-xl lg:text-2xl text-blue-100 font-light max-w-2xl leading-relaxed"
              >
                Where excellence meets care. Nurturing curious thinkers,
                creative dreamers, and children of strong character through
                Kenya's CBC system.
              </motion.p>
            </div>

            {/* Stats/Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              onAnimationComplete={triggerStatsConfetti}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20"
            >
              {[
                { value: "100%", label: "Quality Education" },
                { value: "5+", label: "Years Experience" },
                { value: "A", label: "Rating" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <Link
                to="/contact"
                onClick={handleApplyClick}
                className="group relative px-8 py-4 bg-[#fb0269] text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl hover:shadow-[#fb0269]/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-white/40 transition-all"></div>
              </Link>

              <Link
                to="/about"
                onClick={handleTourClick}
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                <span>Virtual Tour</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - School Logo/Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Floating card effect */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#fb0269] to-blue-500 rounded-3xl blur-xl opacity-30"></div>

              {/* Logo container with glass effect */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl">
                <img
                  src="/logo-trailblazers.jpg"
                  alt="Meru Trailblazers Academy Logo"
                  className="w-64 h-64 lg:w-80 lg:h-80 object-contain rounded-lg"
                />

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#fb0269] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">★</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">EST.</span>
                </div>
              </div>

              {/* Floating testimonial badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 right-8 bg-white text-blue-900 px-4 py-2 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="text-yellow-500">★★★★★</div>
                  <span className="font-bold">5.0</span>
                  <span className="text-sm">Parent Rating</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Explore More</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
