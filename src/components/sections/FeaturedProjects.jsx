import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 6);

  return (
    <section className="px-6 py-1">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center  mb-8">
          Featured Projects
        </h2>

        <div className="flex gap-6 overflow-x-auto py-4 px-5 snap-x snap-mandatory scrollbar-hide">
          {featured.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="min-w-[300px] md:min-w-[400px] snap-center"
            >
              {/* Main Card Container */}
              <div className=" hover:scale-[1.04] h-full bg-black border border-gray-800 p-8 rounded-2xl hover:border-gray-400 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Title in White */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {p.title}
                  </h3>

                  {/* Description in light gray for readability */}
                  <p className="text-gray-400 leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                </div>

                {/* Footer Link in White */}
                <div className="mt-8 flex items-center text-sm font-medium text-white group-hover:translate-x-2 transition-transform">
                  View Project <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
