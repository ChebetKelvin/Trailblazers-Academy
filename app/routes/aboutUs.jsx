import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FaSchool,
  FaBookOpen,
  FaChalkboardTeacher,
  FaFutbol,
  FaMusic,
  FaLaptop,
  FaLeaf,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] bg-[url('https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/475979642_599967799456456_6400914091058201724_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHi9qL9EOIznPlO6iXy78T__cacESE5RE39xpwRITlETUNreuTVCoAQBx8ILLtHwBZLnEEjx5isisYPqKjzgaG-&_nc_ohc=YyPbUluAuC4Q7kNvwHYUclT&_nc_oc=AdkaK5w9rd13LIzN3-jhjQnyV1oUe1v7M9Op6e2hNl_F2QxrGDX_NpK-qFWIwxT3Bwc&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=0CzP32WveIZHvnG1M50wsA&oh=00_AfbxGIpV3VfaARScCBzlnKA8QgILTU7zU8PeWA25tINliQ&oe=68DDF1AD')] 
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
              title: "Our History / Journey",
              desc: `Founded in 2022, Meru Trailblazers Academy began with a dream to 
              create a school where children love learning and grow with values.`,
              bg: "bg-white",
            },
            {
              icon: <FaBookOpen className="text-4xl text-[#0097d7]" />,
              title: "Academic Approach",
              desc: `We blend CBC with creative teaching. Small class sizes ensure 
              attention, while interactive lessons build teamwork and confidence.`,
              bg: "bg-[#f0f9fc]",
            },
            {
              icon: <FaLaptop className="text-4xl text-[#0097d7]" />,
              title: "Facilities & Environment",
              desc: `Modern library, computer lab, spacious classrooms, and safe 
              playgrounds. Spaces designed to foster holistic growth.`,
              bg: "bg-white",
            },
            {
              icon: <FaChalkboardTeacher className="text-4xl text-[#0097d7]" />,
              title: "Our Teachers & Staff",
              desc: `Passionate mentors who guide learners with patience, care, 
              and professionalism.`,
              bg: "bg-[#f0f9fc]",
            },
            {
              icon: <FaFutbol className="text-4xl text-[#0097d7]" />,
              title: "Extracurricular Activities",
              desc: `A vibrant mix of sports, arts, music, dance, taekwondo, swimming, French, fun clubs, and playtime that nurture creativity, talents, and confidence beyond academics..`,
              bg: "bg-white",
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

      {/* Head Teacher Message */}
      <section className="py-16 bg-[#f0faff]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1658498616816-541ad6767f94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwd29tYW4lMjBpbiUyMGElMjBzdWl0fGVufDB8fDB8fHww"
              alt="Director"
              className="rounded-xl shadow-lg object-cover w-1/2"
            />
          </div>
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-[#0097d7] mb-6">
              Message from the Director
            </h2>
            <blockquote className="italic text-lg text-gray-600 leading-relaxed mb-4">
              “Every child deserves to be seen, heard, and supported. At Meru
              Trailblazers Academy, we are committed to creating a place where
              children thrive academically and emotionally. We walk hand in hand
              with parents to ensure each child shines in their own special
              way.”
            </blockquote>
            <p className="mt-4 font-semibold text-gray-800">
              — Mrs. Jane Mwangi, Director
            </p>
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
