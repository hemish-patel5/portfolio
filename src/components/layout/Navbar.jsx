import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="relative border-b border-gray-800 bg-black text-white w-full font-sans">
      {/* MAIN NAV BAR */}
      <div className="flex items-center justify-between px-0 md:px-8 h-16">
        {/* 1. Logo Section (Added pl-8 for mobile) */}
        <div className="pl-8 md:pl-0 md:w-1/3">
          <h1 className="text-xl font-semibold tracking-tight whitespace-nowrap">
            Hemish Patel
          </h1>
        </div>

        {/* 2. Desktop Links */}
        <div className="hidden md:flex w-1/3 h-full justify-center text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="px-6 flex items-center hover:bg-gray-800 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* 3. Mobile Menu Button Container */}
        <div className="md:w-1/3 h-full flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden h-full px-5 flex items-center hover:bg-gray-800 transition-colors"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-[63px] left-0 w-full bg-black border-b border-gray-800 z-50">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="px-8 py-5 border-t border-gray-900 hover:bg-gray-800 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
