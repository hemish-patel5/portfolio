import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navlinks } from "@/data/layout";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/95 text-white backdrop-blur">
      <div className="section-shell flex h-[72px] items-center justify-between">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3"
        >
          <span className="grid h-10 w-10 place-items-center border border-blue-400 bg-blue-400 text-lg font-extrabold text-black transition group-hover:bg-white">
            HP
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-white">
              Hemish Patel
            </span>
            <span className="block text-xs uppercase tracking-[0.22em] text-gray-500">
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
                  isActive
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
          className="grid h-11 w-11 place-items-center border border-white/15 text-white transition hover:border-blue-400 hover:text-blue-300 md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full w-full border-b border-white/10 bg-black text-white shadow-2xl md:hidden">
          <div className="section-shell py-4">
            {navlinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block border-t border-white/10 px-1 py-4 text-lg font-semibold transition first:border-t-0 ${
                  pathname === link.path
                    ? "text-blue-300"
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
