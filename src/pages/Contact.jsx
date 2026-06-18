import { Mail, MapPin, Phone, Send } from "lucide-react";
import GithubIcon from "@/assets/github.svg";
import LinkedInIcon from "@/assets/linkedin.png";
import { contact } from "@/data/contact";

const contactIcons = {
  EMAIL: Mail,
  Location: MapPin,
  availability: Send,
  "phone number": Phone,
};

export default function Contact() {
  return (
    <section className="paper-grid min-h-screen">
      <div className="section-shell section-pad">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="section-kicker">Get In Touch</p>
            <h1 className="section-title text-black">Contact Me</h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-gray-600 lg:ml-auto">
            Open to graduate software engineering roles, internships, and
            collaborations around full-stack systems, automation, and AI.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-6">
            <div className="blueprint-card p-7">
              <div className="relative z-10">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-300">
                  Links
                </p>
                <h2 className="mt-4 text-4xl font-extrabold text-white">
                  Find Me Online
                </h2>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <a
                    href="https://github.com/hemish-patel5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-lift inline-flex items-center justify-center gap-3 border border-white/15 bg-white px-5 py-4 font-bold text-black hover:border-blue-300 hover:bg-blue-400"
                  >
                    <img
                      src={GithubIcon}
                      alt=""
                      className="h-5 w-5 object-contain"
                    />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/hemish--patel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-lift inline-flex items-center justify-center gap-3 border border-white/15 bg-white px-5 py-4 font-bold text-black hover:border-blue-300 hover:bg-blue-400"
                  >
                    <img
                      src={LinkedInIcon}
                      alt=""
                      className="h-5 w-5 object-contain"
                    />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              {contact.map((item) => {
                const Icon = contactIcons[item.id] || Mail;

                return (
                  <div
                    key={item.id}
                    className="blueprint-card focus-lift flex items-start gap-4 p-5 text-white"
                  >
                    <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center bg-blue-400 text-black">
                      <Icon size={20} />
                    </span>
                    <span className="relative z-10">
                      <span className="block text-xs font-extrabold uppercase tracking-[0.2em] text-blue-300">
                        {item.id}
                      </span>
                      <span className="mt-1 block break-words text-lg font-bold">
                        {item.info}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <form
            className="blueprint-card p-6 text-white md:p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="relative z-10 border-b border-white/10 pb-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-blue-300">
                Message
              </p>
              <h2 className="mt-3 text-4xl font-extrabold leading-none">
                Send a note
              </h2>
            </div>

            <div className="relative z-10 mt-8 grid gap-5">
              <label className="block">
                <span className="text-sm font-bold text-gray-300">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full border border-white/15 bg-gray-950 px-4 py-3 text-base text-white placeholder-gray-600 transition focus:border-blue-400 focus:bg-black focus:ring-2 focus:ring-blue-400/20"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-gray-300">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full border border-white/15 bg-gray-950 px-4 py-3 text-base text-white placeholder-gray-600 transition focus:border-blue-400 focus:bg-black focus:ring-2 focus:ring-blue-400/20"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-gray-300">
                  Message
                </span>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project or question"
                  className="mt-2 w-full resize-none border border-white/15 bg-gray-950 px-4 py-3 text-base text-white placeholder-gray-600 transition focus:border-blue-400 focus:bg-black focus:ring-2 focus:ring-blue-400/20"
                />
              </label>
            </div>

            <button
              type="submit"
              className="focus-lift relative z-10 mt-6 inline-flex items-center gap-2 bg-blue-400 px-6 py-4 font-bold text-black hover:bg-white"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
