import profileImg from "@/assets/profile1.png";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="paper-grid border-b border-gray-200">
      <div className="section-shell grid min-h-[calc(100vh-72px)] items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="section-kicker">Final Year Software Engineer</p>
          <h1 className="section-title max-w-3xl text-black">
            Hi, I'm{" "}
            <span className="text-blue-500 transition-colors duration-300 hover:text-blue-400">
              Hemish Patel
            </span>
          </h1>

          <div className="mt-8 max-w-2xl space-y-6 border-l-2 border-black pl-5">
            <p className="text-2xl font-semibold leading-tight text-gray-950 md:text-3xl">
              Final Year{" "}
              <span className="text-blue-500">Software Engineering</span>{" "}
              student at AUT, specializing in full-stack systems and{" "}
              <span className="text-blue-500">interpretable AI</span>.
            </p>

            <p className="text-lg leading-8 text-gray-700 md:text-xl">
              Currently deep-diving into{" "}
              <span className="border-b-2 border-blue-300 text-gray-950">
                Machine Learning
              </span>{" "}
              and automated{" "}
              <span className="border-b-2 border-blue-300 text-gray-950">
                Web Scraping
              </span>{" "}
              to create data-driven applications.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="focus-lift inline-flex items-center gap-2 bg-black px-6 py-4 font-bold text-white shadow-xl shadow-black/10 hover:bg-blue-500"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="focus-lift inline-flex items-center gap-2 border border-black bg-white px-6 py-4 font-bold text-black hover:border-blue-500 hover:text-blue-500"
            >
              Get in Touch
              <Mail size={18} />
            </Link>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
            {["React", "Node.js", "Automation"].map((item) => (
              <div
                key={item}
                className="border border-gray-300 bg-white/80 px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] text-gray-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[430px]">
          <div className="absolute -left-5 top-8 hidden h-full w-full border-2 border-black md:block" />
          <div className="relative border-2 border-black bg-white p-3 shadow-2xl shadow-gray-300/70">
            <img
              src={profileImg}
              alt="Hemish"
              className="aspect-[4/5] w-full object-cover grayscale transition duration-500 hover:grayscale-0"
            />
            <div className="absolute -right-4 bottom-8 border-2 border-black bg-blue-400 px-5 py-4 text-black shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                Auckland
              </p>
              <p className="text-2xl font-extrabold">NZ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
