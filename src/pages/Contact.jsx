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
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Get In Touch</p>
          <h1 className="section-title text-black">Contact Me</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Open to graduate software engineering roles, internships, and
            collaborations around full-stack systems, automation, and AI.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6">
          <div className="grid gap-6">
            <div className="blueprint-card p-7 text-center">
              <div className="relative z-10">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-200">
                  Links
                </p>
                <h2 className="mt-4 text-4xl font-extrabold text-white">
                  Find Me Online
                </h2>

                <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
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

            <div className="grid gap-3 sm:grid-cols-2">
              {contact.map((item) => {
                const Icon = contactIcons[item.id] || Mail;

                return (
                  <div
                    key={item.id}
                    className=" focus-lift flex flex-col items-center gap-4 p-5 text-center text-black"
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
        </div>
      </div>
    </section>
  );
}
