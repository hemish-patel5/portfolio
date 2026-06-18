import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 6);

  return (
    <section className="dark-grid section-pad text-white">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Selected Work</p>
            <h2 className="mt-3 text-4xl font-extrabold leading-none md:text-6xl">
              Featured Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="focus-lift inline-flex w-fit items-center gap-2 border border-white/20 px-5 py-3 font-bold text-gray-200 hover:border-blue-400 hover:text-blue-300"
          >
            View All
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="blueprint-card focus-lift group grid min-h-[460px] content-between p-6"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-sm font-bold uppercase tracking-[0.24em] text-blue-300">
                    Project
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="text-gray-500 transition group-hover:text-blue-300"
                  />
                </div>
                <h3 className="mt-8 text-3xl font-extrabold leading-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-4 leading-7 text-gray-400">
                  {p.description}
                </p>
              </div>

              <div className="relative z-10 mt-8 overflow-hidden border border-white/10 bg-white p-3">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-44 w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
