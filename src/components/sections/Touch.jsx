import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white py-16">
      <div className="section-shell">
        <div className="flex flex-col items-center py-10 text-center">
          <h2 className="mt-3 text-4xl font-extrabold leading-none text-black md:text-5xl">
            Let's Connect
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            I'm currently looking for Graduate Software Engineering
            opportunities.
          </p>
          <Link
            to="/contact"
            className="focus-lift mt-5 inline-flex w-fit items-center gap-2 bg-blue-400 px-6 py-4 font-bold text-white hover:bg-blue-500"
          >
            Contact Me
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
