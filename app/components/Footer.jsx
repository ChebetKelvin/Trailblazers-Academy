import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0097d7] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* School Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Meru Trailblazers Academy</h2>
          <p className="text-white/90 mb-4">
            Nurturing young minds through education, creativity, and values.
            Every child deserves the best start in life.
          </p>
          <div className="flex space-x-4">
            {[
              {
                icon: <FaFacebookF />,
                href: "https://web.facebook.com/merutrailblazersacademy/?_rdc=1&_rdr#",
              },
              { icon: <FaTwitter />, href: "#" },
              { icon: <FaInstagram />, href: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="bg-white/20 p-2 rounded-full hover:bg-yellow-400 hover:text-[#0097d7] transform hover:scale-110 transition duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", to: "/" },
              { name: "About Us", to: "/about" },
              { name: "Admissions", to: "/admissions" },
              { name: "News & Updates", to: "/news" },
              { name: "Contact", to: "/contact" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Academics</h3>
          <ul className="space-y-2">
            {["Kindergarten", "Lower Primary", "Clubs & Sports"].map(
              (item, index) => (
                <li
                  key={index}
                  className="hover:translate-x-2 transition-transform duration-300 cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center space-x-2 mb-3 hover:text-yellow-300 transition">
            <FaMapMarkerAlt /> <span>Meru, Kenya</span>
          </p>
          <p className="flex items-center space-x-2 mb-3 hover:text-yellow-300 transition">
            <FaPhoneAlt /> <span>+254 720206783</span>
          </p>
          <p className="flex items-center space-x-2 hover:text-yellow-300 transition">
            <FaEnvelope /> <span>Miritikelvin0@gmail.com</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-white/80 text-sm">
        © {new Date().getFullYear()} Meru Trailblazers Academy. All rights
        reserved.
      </div>
    </footer>
  );
}
