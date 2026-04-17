import { experiences } from "@/data/work";

export default function Experience() {
  return (
    <div className="py-10 px-5 bg-gray-950">
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
                {w.description.map((b) => (
                  <li key={b.id}>{b}</li>
                ))}
              </ul>
              {w.images && w.images.length > 0 && (
                <div className="flex gap-6 overflow-x-auto py-8 px-5 snap-x snap-mandatory">
                  {w.images.map((i) => (
                    /* 1. Added 'group' and 'relative' to the container */
                    <div
                      key={i.id}
                      className="group relative flex-shrink-0 cursor-pointer"
                    >
                      {/* 2. The Image with your hover filters */}
                      <img
                        src={i}
                        alt="Work highlight"
                        className="h-48 w-72 object-cover rounded-lg border border-gray-700 transition-all duration-300 group-hover:opacity-50 group-hover:brightness-125"
                      />

                      {/* 3. The "See More" overlay - hidden by default, visible on group-hover */}
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
