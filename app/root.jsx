import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { useState } from "react";

import { Link } from "react-router";
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
    { name: "Admissions", path: "/admissions" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <nav className="bg-white text-gray-800 shadow-md fixed w-full top-0 left-0 z-50">
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
                    className="hover:text-blue-600 hover:underline"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* CTA Button */}
                <Link
                  to="/admissions"
                  className="ml-4 px-5 py-2 bg-[#0097d7] text-white rounded-lg shadow-md hover:bg-[#007bb5] transition-colors font-semibold"
                >
                  Enroll Now
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-md text-[#0097d7] hover:bg-gray-100 focus:outline-none"
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
              <div className="px-4 pt-2 pb-3 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-3 py-2 rounded-md hover:bg-gray-100 text-gray-800"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <Link
                  to="/admissions"
                  className="block mt-2 px-4 py-2 bg-[#0097d7] text-white rounded-md shadow-md hover:bg-[#007bb5] transition-colors font-semibold text-center"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          )}
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
