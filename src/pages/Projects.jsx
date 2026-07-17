import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { skillIcons } from "@/data/skills";

export default function Projects() {
  return (
    <section className="paper-grid min-h-screen">
      <div className="section-shell section-pad">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <h1 className="section-title text-black">Projects</h1>
          </div>
        </div>

        <div className="mt-14 grid gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="blueprint-card focus-lift group/card grid min-h-[450px] text-white md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]"
            >
              <div className="min-w-0 flex flex-col justify-between p-6 md:p-9">
                <div>
                  <h2 className="mt-6 text-4xl font-extrabold leading-none text-white md:text-5xl">
                    {project.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-6 text-gray-100">
                    {project.description}
                  </p>
                  <div
                    className="mt-6 flex flex-nowrap items-center justify-center gap-3"
                    aria-label="Technologies used"
                  >
                    {project.skills?.map((skill) => (
                      <div
                        key={skill}
                        className="focus-lift group flex min-h-24 items-center justify-center text-center"
                        title={skill}
                      >
                        <div className="liquid-glass liquid-glass--project bg-white">
                          <img
                            src={skillIcons[skill]}
                            alt={`${skill} logo`}
                            className="liquid-glass__icon"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-lift inline-flex items-center gap-2 bg-gray-100 px-5 py-3 font-bold text-black hover:bg-white"
                  >
                    {/* <ExternalLink size={18} /> */}
                    Try Me
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-lift inline-flex items-center gap-2 border bg-black border-white/20 px-5 py-3 font-bold text-white hover:border-blue-300"
                  >
                    {/* <ExternalLink size={18} /> */}
                    View Details
                  </a>
                </div>
              </div>

              <div className="relative z-10 flex min-w-0 items-center justify-center border-t border-white/10 bg-white p-6 md:border-l md:border-t-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-80 w-full object-contain transition duration-500 group-hover/card:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
