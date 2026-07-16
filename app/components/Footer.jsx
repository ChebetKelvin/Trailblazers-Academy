import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://web.facebook.com/merutrailblazersacademy/?_rdc=1&_rdr#",
      label: "Facebook",
      color: "hover:bg-[#1877f2]",
    },
    {
      icon: <FaYoutube />,
      href: "https://www.youtube.com/@merutrailblazersacademy7431",
      label: "YouTube",
      color: "hover:bg-[#ff0000]",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/merutrailblazersacademy",
      label: "Instagram",
      color: "hover:bg-[#e4405f]",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/254720206783",
      label: "WhatsApp",
      color: "hover:bg-[#25D366]",
    },
  ];

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Admissions", to: "/admissions" },
    { name: "News & Updates", to: "/news" },
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <footer className="bg-[#0097d7] text-white pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: School Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Meru Trailblazers Academy</h2>
          <p className="text-white/90 leading-relaxed">
            Nurturing young minds through education, creativity, and values.
            Every child deserves the best start in life.
          </p>

          {/* Social Links */}
          <div className="flex space-x-3 pt-2">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white/20 p-3 rounded-full hover:bg-yellow-400 hover:text-[#0097d7] transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0097d7]`}
                aria-label={`Visit our ${item.label} page`}
              >
                <span aria-hidden="true">{item.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5 relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-yellow-400"></span>
          </h3>
          <nav aria-label="Footer navigation">
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-white/90 hover:text-yellow-300 transition-colors duration-300 focus:outline-none focus:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-5 relative inline-block">
            Contact Us
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-yellow-400"></span>
          </h3>
          <address className="not-italic space-y-4">
            <p className="flex items-center gap-3 hover:text-yellow-300 transition-colors">
              <FaMapMarkerAlt className="flex-shrink-0" aria-hidden="true" />
              <span>Meru, Kenya</span>
            </p>
            <p className="flex items-center gap-3 hover:text-yellow-300 transition-colors">
              <FaPhoneAlt className="flex-shrink-0" aria-hidden="true" />
              <a
                href="tel:+254720206783"
                className="hover:underline focus:outline-none focus:underline"
                aria-label="Call us: +254 720 206 783"
              >
                +254 720 206 783
              </a>
            </p>
            <p className="flex items-center gap-3 hover:text-yellow-300 transition-colors">
              <FaEnvelope className="flex-shrink-0" aria-hidden="true" />
              <a
                href="mailto:info@merutrailblazers.ac.ke"
                className="hover:underline focus:outline-none focus:underline"
                aria-label="Email us: info@merutrailblazers.ac.ke"
              >
                merutrailblazers@gmail.com
              </a>
            </p>
          </address>
        </div>

        {/* Column 4: Quick Contact/Newsletter (optional) */}
        <div>
          <h3 className="text-lg font-semibold mb-5 relative inline-block">
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-yellow-400"></span>
          </h3>
          <div className="space-y-4">
            <p className="text-white/90">
              Visit us or call to schedule a campus tour.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-yellow-400 text-[#0097d7] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0097d7]"
              aria-label="Go to contact page"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mt-12 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-white/80 text-sm">
          <p>
            © {currentYear} Meru Trailblazers Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="hover:text-yellow-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-yellow-300 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
