import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { useState, useEffect } from "react";

import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

import "./app.css";
import Footer from "./components/Footer";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }) {
  let [isOpen, setIsOpen] = useState(false);

  let navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "News", path: "/news" },
    { name: "Admissions", path: "/admissions" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll effect for translucent navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <nav
          className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-white text-gray-800 shadow-lg"
              : "bg-white/80 text-gray-800 backdrop-blur-md"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo + Name */}
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="/logo-trailblazers.jpg"
                  alt="Meru Trailblazers Academy Logo"
                  className="h-14 w-14 object-contain"
                />
                <span className="font-bold text-lg tracking-wide text-[#0097d7]">
                  Meru Trailblazers Academy
                </span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8 font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative group py-2"
                  >
                    <span className="text-gray-700 group-hover:text-[#0097d7] transition-colors duration-300">
                      {link.name}
                    </span>
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0097d7] transition-all duration-300 group-hover:w-full ${
                        location.pathname === link.path ? "w-full" : ""
                      }`}
                    />
                  </Link>
                ))}

                {/* CTA Button */}
                <Link
                  to="/admissions"
                  className="ml-4 px-5 py-2 bg-[#0097d7] text-white rounded-lg shadow-md hover:bg-[#007bb5] transition-all duration-300 font-semibold hover:shadow-lg hover:-translate-y-0.5"
                >
                  Enroll Now
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-md text-[#0097d7] hover:bg-gray-100/50 focus:outline-none transition-colors duration-200"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen
                ? "max-h-96 opacity-100 bg-white/95 backdrop-blur-md border-t border-gray-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                    location.pathname === link.path
                      ? "bg-[#0097d7]/10 text-[#0097d7]"
                      : "text-gray-700 hover:bg-gray-100/50 hover:text-[#0097d7]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="pt-2">
                <Link
                  to="/admissions"
                  className="block px-4 py-3 bg-[#0097d7] text-white rounded-lg shadow-md hover:bg-[#007bb5] transition-colors duration-300 font-semibold text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
