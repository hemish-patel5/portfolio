import profileImg from "@/assets/profile1.png";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="relative grid min-h-[calc(100svh-72px)] w-full place-items-center px-6 pb-24 pt-12 sm:px-10 md:min-h-[calc(100svh-94px)] lg:px-16">
        <div className="grid w-full max-w-[1040px] items-center gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-20 lg:gap-24">
          <div className="max-w-lg">
            <p className="ml-1 translate-y-2 text-base font-semibold text-blue-500 lg:text-xl">
              Graduate Software Engineer
            </p>
            <h1 className="mt-8 text-4xl font-extrabold leading-[0.95] text-black sm:text-5xl lg:mt-10 lg:text-[4rem]">
              Hi, I'm
              <br />
              <span className="typing-name text-blue-500 transition-colors duration-300 hover:text-blue-400">
                Hemish Patel
              </span>
            </h1>
            <p className="mt-7 text-lg leading-7 text-gray-700 lg:mt-9 lg:text-2xl lg:leading-9">
              I'm a final-year Software Engineering student at AUT, focused on
              full-stack development, embedded systems, and machine learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 lg:mt-10 lg:gap-5">
              <Link
                to="/projects"
                className="rounded-[1.25rem] border-2 border-black bg-white px-6 py-3 text-lg font-bold text-black shadow-[5px_6px_0_#111827] transition duration-150 ease-out hover:translate-x-[3px] hover:translate-y-[4px] hover:scale-[0.98] hover:text-blue-500 hover:shadow-[2px_2px_0_#111827] active:translate-x-[5px] active:translate-y-[6px] active:scale-[0.96] active:shadow-none lg:rounded-[1.5rem] lg:px-8 lg:py-4 lg:text-xl"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="rounded-[1.25rem] border-2 border-black bg-white px-6 py-3 text-lg font-bold text-black shadow-[5px_6px_0_#111827] transition duration-150 ease-out hover:translate-x-[3px] hover:translate-y-[4px] hover:scale-[0.98] hover:text-blue-500 hover:shadow-[2px_2px_0_#111827] active:translate-x-[5px] active:translate-y-[6px] active:scale-[0.96] active:shadow-none lg:rounded-[1.5rem] lg:px-8 lg:py-4 lg:text-xl"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[350px] lg:max-w-[455px]">
            <div className="absolute -right-3 -top-3 h-20 w-20 bg-blue-400 lg:-right-4 lg:-top-4 lg:h-[104px] lg:w-[104px]" />
            <div className="relative border border-black bg-white p-2 lg:p-3">
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
