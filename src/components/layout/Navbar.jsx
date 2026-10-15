import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navlinks } from "@/data/layout";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <nav
      className={
        isHome
          ? "relative z-50 bg-slate-50 text-black"
          : "sticky top-0 z-50 border-b border-white/10 bg-black/95 text-white backdrop-blur"
      }
    >
      <div
        className={`flex h-[72px] items-center ${
          isHome
            ? "section-shell justify-between md:justify-center"
            : "section-shell justify-between"
        }`}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className={`group items-center gap-3 ${
            isHome ? "flex md:hidden" : "flex"
          }`}
        >
          <span className="leading-tight">
            <span
              className={`block text-lg font-bold ${
                isHome ? "text-black" : "text-white"
              }`}
            >
              Hemish Patel
            </span>
            <span
              className={`block text-xs uppercase tracking-[0.22em] ${
                isHome ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Portfolio
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navlinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-sm font-semibold transition ${
                  isHome
                    ? isActive
                      ? "text-blue-500"
                      : "text-gray-700 hover:text-blue-500"
                    : isActive
                      ? "bg-white text-black"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
          className={`grid h-11 w-11 place-items-center border transition md:hidden ${
            isHome
              ? "border-black/20 text-black hover:border-blue-500 hover:text-blue-500"
              : "border-white/15 text-white hover:border-blue-400 hover:text-blue-300"
          }`}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div
          className={`absolute left-0 top-full w-full border-b shadow-2xl md:hidden ${
            isHome
              ? "border-black/10 bg-slate-50 text-black"
              : "border-white/10 bg-black text-white"
          }`}
        >
          <div className="section-shell py-4">
            {navlinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block border-t px-1 py-4 text-lg font-semibold transition first:border-t-0 ${
                  isHome ? "border-black/10" : "border-white/10"
                } ${
                  pathname === link.path
                    ? "text-blue-500"
                    : isHome
                      ? "text-gray-700 hover:text-blue-500"
                      : "text-gray-300 hover:text-white"
                }`}
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
