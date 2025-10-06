import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { FaChalkboardTeacher, FaBook, FaFutbol, FaSmile } from "react-icons/fa";

/**
 * Counter component
 * - end: target number
 * - duration: animation duration in ms
 * - suffix: string appended (e.g. "+"
 * - startOnView: if true, animation begins when the counter is scrolled into view
 */
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
    <span ref={ref} aria-hidden="true">
      {value}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Welcome / Intro Section */}
      <section className="py-20 bg-[#f0f9fc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0097d7] mb-6">
              Welcome to Meru Trailblazers Academy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Where young minds thrive in safety and joy. Our school blends
              academic excellence with play, creativity, and character-building
              — guided by the CBC curriculum to nurture confident, well-rounded
              learners.
            </p>
            <Link
              to="/about"
              className="px-6 py-3 bg-[#0097d7] text-white rounded-lg shadow-lg hover:bg-[#007bb5] transition-all"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="/staff.jpg"
              alt="Happy children learning at Meru Trailblazers Academy"
              className="rounded-xl shadow-lg object-cover w-full h-80 lg:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Why Parents Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0097d7]">
              Why Parents Trust Us
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              We create a safe, supportive, and inspiring learning environment
              where children grow academically, socially, and emotionally.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <FaChalkboardTeacher className="text-[#0097d7] text-3xl" />
                ),
                title: "Caring Teachers",
                desc: "Our teachers are loving mentors, guiding children with patience and encouragement.",
                img: "caring.jpg",
              },
              {
                icon: <FaBook className="text-[#0097d7] text-3xl" />,
                title: "Strong Academics",
                desc: "We provide a learner-centered foundation under the CBC system, nurturing skills in reading, writing, and problem-solving, while also enriching learners with foreign languages like French.",
                img: "children.jpg",
              },
              {
                icon: <FaFutbol className="text-[#0097d7] text-3xl" />,
                title: "Fun Activities",
                desc: "Through sports, music, dance, taekwondo, swimming and playtime, children discover their talents while learning, growing, and having fun.",
                img: "/fun.jpg",
              },
              {
                icon: <FaSmile className="text-[#0097d7] text-3xl" />,
                title: "Happy Kids",
                desc: "We focus on your child’s happiness, confidence, and friendships.",
                img: "swimming.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white  rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition"
              >
                {/* Image on top */}
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center ">
                  <div className="flex justify-center mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#0097d7]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-r from-[#0097d7] to-[#007bb5] text-white text-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white/15 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/10"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Give Your Child the
                <span className="block text-[#ffdd00]">
                  {" "}
                  Best Start in Life
                </span>
              </h2>
              <div className="w-24 h-1 bg-[#ffdd00] mx-auto rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto opacity-95">
              Enroll your child today and let them grow in a caring, supportive,
              and exciting environment designed to nurture their potential.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/admissions"
                className="px-10 py-4 text-lg font-semibold bg-white text-[#0097d7] rounded-full shadow-lg hover:bg-gray-100 transition"
              >
                Enroll Now <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-[#ffdd00]">
                  <Counter
                    end={1000}
                    suffix="+"
                    startOnView={true}
                    duration={1800}
                  />
                </div>
                <p className="text-sm opacity-90">Happy Families</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-[#ffdd00]">
                  <Counter
                    end={3}
                    suffix="+"
                    startOnView={true}
                    duration={1400}
                  />
                </div>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-[#ffdd00]">
                  <Counter
                    end={100}
                    suffix="%"
                    startOnView={true}
                    duration={1600}
                  />
                </div>
                <p className="text-sm opacity-90">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
