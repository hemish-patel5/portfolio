import { useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { projects } from "@/data/projects";
import { skillIcons } from "@/data/skills";

const getProjectImages = (project) =>
  project.gallery?.length
    ? project.gallery
    : [{ src: project.image, alt: project.title }];

export default function Projects() {
  const [expandedImage, setExpandedImage] = useState(null);

  return (
    <section className="circuit-board min-h-screen bg-slate-50">
      <div className="section-shell section-pad">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <h1 className="section-title text-black">Projects</h1>
          </div>
        </div>

        <div className="mt-14 grid gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="blueprint-card focus-lift group/card grid min-h-[450px] text-white md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]"
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
                  {project.link?.trim() && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="press-button inline-flex items-center gap-2 bg-gray-100 px-5 py-3 font-bold text-black hover:bg-white"
                    >
                      Try Me
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press-button inline-flex items-center gap-2 border-white/20 bg-black px-5 py-3 font-bold text-white hover:border-blue-300"
                  >
                    View Details
                  </a>
                </div>
              </div>

              <div className="relative z-10 flex min-h-[380px] min-w-0 items-center justify-center overflow-hidden border-t border-white/10 bg-white p-4 md:min-h-0 md:border-l md:border-t-0">
                <div
                  className={`relative grid h-full min-h-[350px] w-full gap-3 overflow-hidden ${
                    getProjectImages(project).length > 1
                      ? "grid-cols-2"
                      : "grid-cols-1"
                  }`}
                >
                  {getProjectImages(project).map((image, imageIndex) => {
                    const isExpanded =
                      expandedImage?.projectId === project.id &&
                      expandedImage?.imageIndex === imageIndex;

                    return (
                      <button
                        key={image.src}
                        type="button"
                        aria-label={`${isExpanded ? "Collapse" : "Enlarge"} ${image.alt}`}
                        aria-expanded={isExpanded}
                        className={`${
                          isExpanded
                            ? "absolute inset-0 z-20"
                            : "relative min-w-0"
                        } group/image grid place-items-center overflow-hidden bg-slate-50 p-2 outline-none transition-[inset] duration-300`}
                        onClick={() =>
                          setExpandedImage(
                            isExpanded
                              ? null
                              : { projectId: project.id, imageIndex },
                          )
                        }
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className={`${
                            isExpanded
                              ? "h-full w-full"
                              : "mx-auto max-h-[260px] w-[82%]"
                          } object-contain transition-all duration-300 group-hover/image:scale-[1.02]`}
                        />
                        <span className="absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-black text-white shadow-md">
                          {isExpanded ? (
                            <Minimize2 size={11} aria-hidden="true" />
                          ) : (
                            <Maximize2 size={11} aria-hidden="true" />
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
