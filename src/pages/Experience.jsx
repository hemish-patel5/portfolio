import { useState } from "react";
import { experiences } from "@/data/work";
import { images } from "@/data/work";

export default function Experience() {
  const [openImage, setOpenImage] = useState(null);

  const activeImage = images.find((i) => i.id === openImage);

  return (
    <div className="py-10 px-5 bg-gray-950">
      {/* Modal created when Image is clicked */}
      {openImage && activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setOpenImage(null)}
        >
          <button
            className="absolute cursor-pointer top-4 right-4 text-white text-4xl md:text-5xl hover:text-gray-400 z-[60]"
            onClick={() => setOpenImage(null)}
          >
            ✕
          </button>

          {/* Container for Image and description - Changed to flex-col for mobile */}
          <div
            className="flex flex-col md:flex-row w-full max-w-5xl mx-auto overflow-hidden border border-gray-800 bg-black rounded-xl max-h-[90vh] overflow-y-auto md:overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Container for Image - Height fixed for mobile, auto for desktop */}
            <div className="w-full md:w-1/2 bg-neutral-900 flex items-center justify-center">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full h-auto max-h-[40vh] md:max-h-full md:h-full object-contain md:object-cover"
              />
            </div>

            {/* Container for Description */}
            <div className="w-full md:w-1/2 bg-black flex flex-col justify-center p-6 md:p-12">
              <h1 className="text-2xl md:text-4xl text-white font-bold mb-4">
                {activeImage.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Heading */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-5xl md:text-6xl text-white font-medium tracking-tight text-center">
          Work Experience
        </h1>
      </div>

      {/* Main Content box */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-8">
          {experiences.map((w) => (
            <div
              key={w.id}
              className="p-8 bg-black border border-gray-500 rounded-lg hover:scale-[1.02] transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-4xl font-bold text-white">{w.title}</h2>
                  <p className="text-2xl text-blue-400 font-medium">
                    {w.company}
                  </p>
                </div>
                <span className="text-neutral-400 text-xl font-medium font-sans">
                  {w.date}
                </span>
              </div>

              <ul className="list-disc ml-5 space-y-2 text-gray-300">
                {w.description.map((b, index) => (
                  <li key={index}>{b}</li>
                ))}
              </ul>

              {/* IMAGES */}
              {w.images && w.images.length > 0 && (
                <div className="flex gap-6 overflow-x-auto py-8 px-5 snap-x snap-mandatory">
                  {w.images.map((i, index) => (
                    <div
                      key={index}
                      className="group relative flex-shrink-0 cursor-pointer"
                      onClick={() => setOpenImage(index + 1)}
                    >
                      <img
                        src={i}
                        alt="Work highlight"
                        className="h-48 w-72 object-cover rounded-lg border border-gray-700 transition-transform duration-300 group-hover:opacity-50 group-hover:brightness-125"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                        <span className="text-white font-bold text-sm tracking-widest uppercase px-4 py-2 rounded-full">
                          See More
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
