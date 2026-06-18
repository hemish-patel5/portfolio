import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="paper-grid min-h-screen">
      <div className="section-shell section-pad">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-kicker">Project Archive</p>
            <h1 className="section-title text-black">Projects</h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-gray-600 lg:ml-auto">
            A collection of practical web applications focused on searching,
            booking, storing, and presenting user-driven information.
          </p>
        </div>

        <div className="mt-14 grid gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="blueprint-card focus-lift group grid text-white md:grid-cols-[1fr_0.9fr]"
            >
              <div className="flex flex-col justify-between p-6 md:p-9">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-blue-300">
                    0{index + 1} / Project
                  </p>
                  <h2 className="mt-6 text-4xl font-extrabold leading-none text-white md:text-5xl">
                    {project.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to={`/projects/${project.id}`}
                    className="focus-lift inline-flex items-center gap-2 bg-blue-400 px-5 py-3 font-bold text-black hover:bg-white"
                  >
                    View Details
                    <ArrowUpRight size={18} />
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-lift inline-flex items-center gap-2 border border-white/20 px-5 py-3 font-bold text-white hover:border-blue-300 hover:text-blue-300"
                  >
                    <ExternalLink size={18} />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center border-t border-white/10 bg-white p-6 md:border-l md:border-t-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-80 w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
