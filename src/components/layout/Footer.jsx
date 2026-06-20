import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { navlinks } from "@/data/layout";

export default function Footer() {
  return (
    <footer className="dark-grid border-t border-white/10 text-white">
      <div className="section-shell py-10">
        <div className="grid gap-8 md:grid-cols-[0.8fr_0.2fr_1fr] md:items-start">
          <div>
            <p className="section-kicker">Portfolio</p>
            <h2 className="mt-3 text-3xl font-extrabold">Hemish Patel</h2>
            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-400">
              Software Engineering student building full-stack systems,
              automation workflows, and AI-focused projects.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gray-500">
              Navigation
            </p>
            <div className="mt-4 grid gap-2">
              {navlinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-blue-300"
                >
                  {link.name}
                  <ArrowUpRight
                    size={14}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="border-l-2 border-blue-400 pl-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
              Open To Work
            </p>
            <p className="mt-3 text-lg font-bold leading-snug">
              Graduate Software Engineering and Internship Opportunities.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 bg-blue-400 px-4 py-3 text-sm font-bold text-black transition hover:bg-white"
            >
              Contact Me
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4  pt-6 text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Hemish Patel.</p>
          <p>Auckland, New Zealand</p>
        </div>
      </div>
    </footer>
  );
}
