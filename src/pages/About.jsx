import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="paper-grid min-h-screen">
      <div className="section-shell section-pad">
        <div className="max-w-4xl">
          <p className="section-kicker">About</p>
          <h1 className="section-title text-black">Software with a practical edge.</h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-700">
            I am a final year Software Engineering student at AUT, focused on
            full-stack development, system testing, automation, and
            interpretable AI.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["Full-stack", "Testing", "Automation"].map((item) => (
              <div
                key={item}
                className="paper-card border-t-4 border-t-blue-400 p-6"
              >
                <h2 className="text-2xl font-extrabold text-black">{item}</h2>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="focus-lift mt-10 inline-flex items-center gap-2 bg-black px-6 py-4 font-bold text-white hover:bg-blue-500"
          >
            Contact Me
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
