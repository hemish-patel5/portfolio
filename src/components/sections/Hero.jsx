import profileImg from "@/assets/profile1.png";

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
          <h1 className="text-4xl font-bold text-black">
            Hi!, I'm
            <span className=" font-bold tracking-wider hover:text-blue-300 transition-colors duration-200">
              {" "}
              Hemish Patel
            </span>
          </h1>

          <h2 className="mt-6 text-xl text-gray-600 leading-relaxed max-w-xl">
            💻 Final Year Software Engineering Student
          </h2>
          <h2 className="mt-6 text-xl text-gray-600 leading-relaxed max-w-xl">
            Interested in full-stack development and machine learning. Currently
            exploring Machine Learning and Web Scraping
          </h2>

          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="/projects"
              className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Contact Me
            </a>
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
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
