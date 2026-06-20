import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white py-16">
      <div className="section-shell">
        <div className="grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="section-kicker">Next Step</p>
            <h2 className="mt-3 text-4xl font-extrabold leading-none text-black md:text-5xl">
              Let's Connect
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              I'm currently looking for Graduate Software Engineering
              opportunities.
            </p>
          </div>

          <Link
            to="/contact"
            className="focus-lift inline-flex w-fit items-center gap-2 bg-black px-6 py-4 font-bold text-white hover:bg-blue-500"
          >
            Contact Me
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
