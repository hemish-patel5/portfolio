import profileImg from "@/assets/profile1.png";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="relative grid min-h-[calc(100svh-72px)] w-full place-items-center px-6 pb-24 pt-12 sm:px-10 lg:px-16">
        <div className="grid w-full max-w-[800px] items-center gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-20">
          <div className="max-w-md">
            <p className="ml-1 text-base font-semibold text-blue-500">
              Software Engineer
            </p>
            <h1 className="mt-8 text-4xl font-extrabold leading-[0.95] text-black sm:text-5xl">
              Hi, I'm
              <br />
              <span className="typing-name text-blue-500 transition-colors duration-300 hover:text-blue-400">
                Hemish Patel
              </span>
            </h1>
            <p className="mt-7 text-lg leading-7 text-gray-700">
              I'm a final-year Software Engineering student at AUT, focused on
              full-stack development, embedded systems, and machine learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="rounded-[1.25rem] border-2 border-black bg-white px-6 py-3 text-lg font-bold text-black shadow-[5px_6px_0_#111827] transition duration-150 ease-out hover:translate-x-[3px] hover:translate-y-[4px] hover:scale-[0.98] hover:text-blue-500 hover:shadow-[2px_2px_0_#111827] active:translate-x-[5px] active:translate-y-[6px] active:scale-[0.96] active:shadow-none"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="rounded-[1.25rem] border-2 border-black bg-white px-6 py-3 text-lg font-bold text-black shadow-[5px_6px_0_#111827] transition duration-150 ease-out hover:translate-x-[3px] hover:translate-y-[4px] hover:scale-[0.98] hover:text-blue-500 hover:shadow-[2px_2px_0_#111827] active:translate-x-[5px] active:translate-y-[6px] active:scale-[0.96] active:shadow-none"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[350px]">
            <div className="absolute -right-3 -top-3 h-20 w-20 bg-blue-400" />
            <div className="relative border border-black bg-white p-2">
              <img
                src={profileImg}
                alt="Hemish Patel"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>

        <a
          href="#featured-projects"
          aria-label="Scroll to featured projects"
          className="absolute bottom-7 left-1/2 grid h-11 w-11 -translate-x-1/2 place-items-center text-black transition hover:text-blue-500"
        >
          <ArrowDown size={21} strokeWidth={1.7} />
        </a>
      </div>
    </section>
  );
}
