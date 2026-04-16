import { experiences } from "@/data/work";

export default function Experience() {
  return (
    <div className="py-10 px-15">
      {/* Main Heading */}
      <div className="max-w-5xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-center">Work Experience</h1>
      </div>

      {/* Main Content box */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-8">
          {experiences.map((w) => (
            <div
              key={w.id}
              className="p-8 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">{w.title}</h2>
                  <p className="text-blue-400 font-medium">{w.company}</p>
                </div>
                <span className="text-neutral-400 text-l font-medium font-sans">
                  {w.date}
                </span>
              </div>

              <ul className="list-disc ml-5 space-y-2 text-gray-300">
                {w.description.map((b) => (
                  <li key={b.id}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
