import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import GithubIcon from "@/assets/github.svg";

export default function Projects() {
  return (
    <section className="py-10 px-6 bg-gray-950 min-h-screen">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h1 className="text-5xl md:text-6xl text-white font-medium tracking-tight">
          Projects
        </h1>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-10">
          {projects.map((p) => (
            <div
              key={p.id}
              className=" hover:scale- [1.02] flex flex-col md:flex-row items-stretch bg-gray-100 hover:border-blue-300 border-2 border-transparent rounded-xl relative z-0 hover:z-50 transition-all duration-300"
            >
              {/* LEFT SIDE: TEXT CONTENT */}
              <div className="flex-1 p-8 flex flex-col justify-center rounded-l-xl">
                {/*<Link to={`/projects/${p.id}`}> --- potential link */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-700 transition-colors">
                  {p.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-6">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-900 font-bold hover:text-black transition-transform duration-300 hover:scale-105 origin-left"
                  >
                    <img
                      src={GithubIcon}
                      alt="GitHub logo"
                      className="w-6 h-7"
                    />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE: IMAGE POP-OUT */}
              <div className="md:w-72 lg:w-80 h-64 md:h-auto relative rounded-r-xl overflow-visible">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-contain rounded-xl 
                             transition-all duration-400 ease-in-out
                             hover:scale-130 
                             hover:z-50 
                             hover:relative 
                             hover:-translate-x-10
                             hover:origin-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
