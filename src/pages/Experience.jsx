import { useState } from "react";
import { Calendar, MapPin, X, ZoomIn } from "lucide-react";
import { experiences, images } from "@/data/work";

export default function Experience() {
  const [openImage, setOpenImage] = useState(null);
  const activeImage = images.find((i) => i.id === openImage);

  return (
    <section className="paper-grid min-h-screen">
      {openImage && activeImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4 text-white backdrop-blur"
          onClick={() => setOpenImage(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            className="absolute right-4 top-4 z-[90] grid h-12 w-12 place-items-center border border-white/20 bg-white/10 text-white transition hover:border-blue-300 hover:text-blue-300"
            onClick={(event) => {
              event.stopPropagation();
              setOpenImage(null);
            }}
          >
            <X size={26} />
          </button>

          <div
            className="grid max-h-[90vh] w-full max-w-6xl overflow-y-auto border border-white/15 bg-black shadow-2xl md:grid-cols-[1.1fr_0.9fr] md:overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-[320px] items-center justify-center bg-gray-950">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="h-full max-h-[70vh] w-full object-contain md:object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-10">
              <p className="section-kicker">Work Snapshot</p>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
                {activeImage.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="section-shell section-pad">
        <div className="grid gap-8 ">
          <div>
            <p className="section-kicker">Experience</p>
            <h1 className="section-title text-black">Work Experience</h1>
          </div>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gray-300 md:block" />

          <div className="grid gap-8">
            {experiences.map((work, index) => (
              <article
                key={work.id}
                className="relative grid gap-5 md:grid-cols-[3rem_1fr]"
              >
                <div className="hidden md:block">
                  <div className="relative z-10 grid h-8 w-8 place-items-center border-2 border-black bg-blue-400 text-sm font-extrabold text-black">
                    {index + 1}
                  </div>
                </div>

                <div className="blueprint-card focus-lift p-6 text-white md:p-8">
                  <div className="relative z-10">
                    <div className="flex flex-col gap-6 border-b border-white/10 pb-6 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.24em] text-black">
                          {work.company}
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
                          {work.title}
                        </h2>
                      </div>

                      <div className="grid gap-3 text-sm font-semibold text-blue-200">
                        <span className="inline-flex items-center gap-2">
                          <Calendar size={16} className="text-blue-200" />
                          {work.date}
                        </span>
                        {work.location && (
                          <span className="inline-flex items-center gap-2">
                            <MapPin size={16} className="text-blue-200" />
                            {work.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="mt-6 grid gap-3 text-gray-100">
                      {work.description.map((item) => (
                        <li key={item} className="flex gap-3 leading-7">
                          <span className="mt-3 h-2 w-2 shrink-0 bg-white" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {work.images && work.images.length > 0 && (
                      <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
                        {work.images.map((image, imageIndex) => (
                          <button
                            key={image}
                            type="button"
                            className="group relative h-44 w-64 shrink-0 overflow-hidden border border-white/10 bg-gray-950"
                            onClick={() => setOpenImage(imageIndex + 1)}
                          >
                            <img
                              src={image}
                              alt={`${work.title} highlight ${imageIndex + 1}`}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                            />
                            <span className="absolute inset-0 grid place-items-center opacity-0 transition group-hover:opacity-100">
                              <span className="inline-flex items-center gap-2 bg-white px-4 py-3 text-sm font-bold text-black">
                                <ZoomIn size={16} />
                                View
                              </span>
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
