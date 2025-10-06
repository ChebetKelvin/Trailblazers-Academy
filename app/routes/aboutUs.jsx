import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FaSchool,
  FaBookOpen,
  FaChalkboardTeacher,
  FaFutbol,
  FaLaptop,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] bg-[url('/swing.jpg')] bg-fixed
  bg-cover bg-center bg-no-repeat text-white"
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center py-24 mt-15">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            About Our School
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-95 drop-shadow-md">
            Nurturing young minds, building strong values, and preparing leaders
            of tomorrow.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-[#0097d7] mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600">
              Meru Trailblazers Academy is more than just a school — it’s a home
              of learning, creativity, and growth. We provide a nurturing
              environment where children feel safe, valued, and inspired to
              reach their full potential.
            </p>
          </div>
          {/* Image */}
          <div>
            <img
              src="/students.jpg"
              alt="Students learning"
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#f0faff]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-[#0097d7] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To empower children with knowledge, creativity, and values that
              prepare them for academic success and a fulfilling life.
            </p>
          </div>
          {/* Vision */}
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-[#0097d7] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To raise confident, compassionate, and innovative leaders who will
              positively impact the community and the world.
            </p>
          </div>
        </div>
      </section>

      {/* Journey, Approach, Facilities, Staff, Activities */}
      <section className="py-20 text-gray-800 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
          {[
            {
              icon: <FaSchool className="text-4xl text-[#0097d7]" />,
              title: "Our Journey",
              desc: `Founded in 2022, Meru Trailblazers Academy was born from a vision to create 
  a school where children not only love learning but also grow with strong values, 
  discipline, and curiosity. From our humble beginnings, we’ve continued to nurture 
  young minds with excellence, care, and a commitment to holistic education.`,
              bg: "bg-[#e9f8ff]", // unique light-blue shade for consistency
            },

            {
              icon: <FaBookOpen className="text-4xl text-[#0097d7]" />,
              title: "Academic Approach",
              desc: `At our school, we offer a well-structured learning journey across 
                    two main levels — Pre-Primary (Creche 2, KG 1, KG 2) and Primary (Grade 1–Grade 6). 
                    Our curriculum follows the Competency-Based Curriculum (CBC) enriched with 
                    creative, experiential teaching. With small class sizes, every learner 
                    receives personalized attention, while interactive lessons inspire curiosity, 
                    teamwork, and confidence that lasts beyond the classroom.`,
              bg: "bg-[#f0f9fc]",
            },

            {
              icon: <FaLaptop className="text-4xl text-[#0097d7]" />,
              title: "Facilities & Environment",
              desc: `Our learning environment is purposefully designed to support both academic 
  and personal growth. We offer a well-equipped computer lab, modern library, 
  spacious and well-lit classrooms, and secure playgrounds that encourage active play. 
  Every space is crafted to inspire creativity, collaboration, and holistic development.`,
              bg: "bg-[#e6f4fa]", // a slightly deeper light blue tone
            },

            {
              icon: <FaChalkboardTeacher className="text-4xl text-[#0097d7]" />,
              title: "Our Teachers & Staff",
              desc: `Our dedicated team of teachers and support staff are the heart of our school. 
  Each educator is passionate about nurturing potential, guiding learners with 
  patience, creativity, and professionalism. Together, they create an engaging 
  and supportive environment where every child feels valued and inspired to excel.`,
              bg: "bg-[#e8f7fd]", // soft blue variation for visual harmony
            },

            {
              icon: <FaFutbol className="text-4xl text-[#0097d7]" />,
              title: "Extracurricular Activities",
              desc: `We offer a vibrant mix of sports, arts, music, dance, taekwondo, swimming, 
  French, fun clubs, and playtime — all designed to nurture creativity, develop 
  talents, and build confidence beyond the classroom. Our co-curricular program 
  helps every learner explore their passions and grow holistically.`,
              bg: "bg-[#e3f6fb]", // distinct light blue shade for variation
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`${item.bg} p-8 rounded-xl shadow-md flex gap-6 items-start`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div>{item.icon}</div>
              <div>
                <h2 className="text-2xl font-bold text-[#0097d7] mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0097d7] mb-12">
            Our Core Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Excellence",
                desc: "Striving for the best in academics and character.",
                img: "https://plus.unsplash.com/premium_photo-1682309504951-43bae484e04d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVhbGl0eXxlbnwwfHwwfHx8MA%3D%3D",
              },
              {
                title: "Integrity",
                desc: "Building honesty and responsibility in every learner.",
                img: "https://images.unsplash.com/photo-1606823616265-3c84de4cfcff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZWdyaXR5fGVufDB8fDB8fHww",
              },
              {
                title: "Creativity",
                desc: "Encouraging curiosity, innovation, and new ideas.",
                img: "https://images.unsplash.com/photo-1613574714687-c33b9e90200d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JlYXRpdml0eXxlbnwwfHwwfHx8MA%3D%3D",
              },
              {
                title: "Care",
                desc: "Providing a loving, safe, and supportive environment.",
                img: "https://images.unsplash.com/photo-1617080090911-91409e3496ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcmUlMjBjaGlsZHxlbnwwfHwwfHx8MA%3D%3D",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-[#e6f7fc] p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center"
              >
                <img
                  src={value.img}
                  alt={value.title}
                  className="rounded-md mb-4 h-28 w-full object-cover"
                />
                <h3 className="text-xl font-semibold text-[#0097d7] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#0097d7] via-[#0023] to-[#007b] text-white text-center ">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Family?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Enroll your child today and give them the best start in life.
          </p>
          <Link
            to="/admissions"
            className="px-8 py-3 bg-white text-[#0097d7] font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
}
