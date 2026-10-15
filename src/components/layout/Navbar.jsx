import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navlinks } from "@/data/layout";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-slate-50/90 text-black backdrop-blur">
      <div className="section-shell flex h-[72px] items-center justify-between md:h-[94px] md:justify-center">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3 md:hidden"
        >
          <span className="leading-tight">
            <span className="block text-lg font-bold text-black">
              Hemish Patel
            </span>
            <span className="block text-xs uppercase tracking-[0.22em] text-blue-500">
              Portfolio
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          {navlinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                aria-current={isActive ? "page" : undefined}
                className={`px-5 py-3 text-lg font-semibold transition ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-700 hover:text-blue-500"
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
          className="grid h-11 w-11 place-items-center border border-black/20 text-black transition hover:border-blue-500 hover:text-blue-500 md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full w-full border-b border-black/10 bg-slate-50 text-black shadow-2xl md:hidden">
          <div className="section-shell py-4">
            {navlinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                aria-current={pathname === link.path ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={`block border-t border-black/10 px-1 py-4 text-lg font-semibold transition first:border-t-0 ${
                  pathname === link.path
                    ? "text-blue-500"
                    : "text-gray-700 hover:text-blue-500"
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
