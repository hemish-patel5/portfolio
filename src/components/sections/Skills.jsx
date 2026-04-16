import { skills } from "@/data/skills";

export default function SkillsPreview() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Skills</h2>
        <div className="py-10 flex flex-wrap justify-center gap-8">
          {skills.map((url, index) => (
            <div
              key={index}
              className="p-4 bg-gray-300 border border-gray-300 rounded-lg hover:scale-[1.1] transition-colors"
            >
              <img src={url} className="w-22 h-22" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
