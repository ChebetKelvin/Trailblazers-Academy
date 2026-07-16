import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Font import — move into your root layout once it's shared across pages */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&display=swap');
        .font-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
      `}</style>

      {/* Premium Background with layered effects */}
      <div className="absolute inset-0">
        {/* Base gradient */}

        {/* School image with sophisticated overlay */}
        <div className="absolute inset-0">
          <img
            src="/school2.webp"
            alt="Meru Trailblazers Academy Students"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b4e]/90 via-[#0d2b4e]/70 to-[#0097d7]/60"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge/Accreditation */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/15"
            >
              <div className="w-1.5 h-1.5 bg-[#fb0269] rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold tracking-wide text-white/90 uppercase">
                CBC Excellence Since 2022
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-5">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.05] tracking-tight">
                <span className="text-white block">Welcome to</span>
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  onAnimationComplete={triggerWelcomeConfetti}
                  className="bg-gradient-to-r from-[#fb0269] to-rose-400 bg-clip-text text-transparent block"
                >
                  Meru Trailblazers
                </motion.span>
                <span className="text-white block">Academy</span>
              </h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg lg:text-xl text-blue-100/80 font-light max-w-xl leading-relaxed mx-auto lg:mx-0"
              >
                Where excellence meets care. Nurturing curious thinkers,
                creative dreamers, and children of strong character through
                Kenya's CBC system.
              </motion.p>
            </div>

            {/* Stats/Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              onAnimationComplete={triggerStatsConfetti}
              className="grid grid-cols-3 gap-4 pt-7 border-t border-white/10 max-w-sm mx-auto lg:mx-0"
            >
              {[
                { value: "100%", label: "Quality Education" },
                { value: "5+", label: "Years Experience" },
                { value: "A", label: "Rating" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-display text-2xl font-semibold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-blue-200/70 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                onClick={handleApplyClick}
                className="group px-8 py-4 bg-[#fb0269] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-[#e0055e] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/about"
                onClick={handleTourClick}
                className="group px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Virtual Tour</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - School Logo/Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Subtle glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#fb0269]/30 to-[#0097d7]/30 rounded-[2rem] blur-2xl"></div>

              {/* Logo container with glass effect */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/15 p-8 shadow-2xl">
                <img
                  src="/logo-trailblazers.jpg"
                  alt="Meru Trailblazers Academy Logo"
                  className="w-60 h-60 lg:w-72 lg:h-72 object-contain rounded-xl"
                />
              </div>

              {/* Floating rating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 right-6 bg-white rounded-2xl shadow-lg px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#ffdd00] text-sm tracking-tight">
                    ★★★★★
                  </span>
                  <span className="font-display font-semibold text-slate-900">
                    5.0
                  </span>
                  <span className="text-xs text-slate-500">Parent Rating</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/50">
            <span className="text-xs tracking-wide uppercase mb-2">
              Explore More
            </span>
            <div className="w-5 h-9 border border-white/25 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 bg-white/50 rounded-full mt-2"
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
