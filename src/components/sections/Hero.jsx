import profileImg from "@/assets/profile1.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-[50vh] flex items-center justify-center px-6 py-10">
      {/* Main Container: 
          - flex-col for mobile (stacked)
          - md:flex-row for desktop (side-by-side)
      */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Writing Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Name / Greeting */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight">
            Hi!, I'm{" "}
            <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-default">
              Hemish Patel
            </span>
          </h1>

          {/* Main Bio Section */}
          <div className="mt-8 space-y-6 max-w-2xl">
            <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight">
              Final Year{" "}
              <span className="text-blue-400">Software Engineering</span>{" "}
              student at AUT, specializing in full-stack systems and{" "}
              <span className="text-blue-400">interpretable AI</span>.
            </p>

            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Currently deep-diving into{" "}
              <span className=" text-gray-400 hover:text-gray-700 border-b border-gray-800 pb-0.5">
                Machine Learning
              </span>{" "}
              and automated{" "}
              <span className="text-gray-400 hover:text-gray-700 border-b border-gray-800 pb-0.5">
                Web Scraping
              </span>{" "}
              to create data-driven applications.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-5">
            <Link
              to="/projects"
              className="px-8 py-4 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-blue-500/20"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-black text-gray-200 rounded-xl font-bold hover:bg-gray-900 hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-black/20"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative">
            <img
              src={profileImg}
              alt="Hemish"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl hover:scale-[1.22] shadow-2xl transition-all duration-500"
            />
            {/* Decorative background accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-300 -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
