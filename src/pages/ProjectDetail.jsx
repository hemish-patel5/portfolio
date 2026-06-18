import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="paper-grid min-h-screen">
        <div className="section-shell section-pad">
          <p className="section-kicker">Not Found</p>
          <h1 className="mt-3 text-5xl font-extrabold text-black">
            Project not found
          </h1>
          <Link
            to="/projects"
            className="focus-lift mt-8 inline-flex items-center gap-2 bg-black px-5 py-3 font-bold text-white hover:bg-blue-500"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="paper-grid min-h-screen">
      <div className="section-shell section-pad">
        <Link
          to="/projects"
          className="focus-lift inline-flex items-center gap-2 border border-black bg-white px-4 py-3 font-bold text-black hover:border-blue-500 hover:text-blue-500"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Project Detail</p>
            <h1 className="mt-4 text-5xl font-extrabold leading-none text-black md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 text-xl leading-9 text-gray-700">
              {project.description}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-lift mt-8 inline-flex items-center gap-2 bg-black px-5 py-3 font-bold text-white hover:bg-blue-500"
            >
              <ExternalLink size={18} />
              View Repository
            </a>
          </div>

          <div className="border-2 border-black bg-white p-4 shadow-2xl shadow-gray-300/70">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-10 border-y-2 border-black py-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-blue-500">
            Notes
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-700">
            {project.details}
          </p>
        </div>
      </div>
    </section>
  );
}
