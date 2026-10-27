import { skills } from "@/data/skills";
import SkillCard from "@/components/ui/SkillCard";

export default function SkillsPreview() {
  return (
    <section className="circuit-board section-pad bg-slate-50">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <h2 className="mt-3 text-4xl font-extrabold leading-none text-black md:text-6xl">
              Skills
            </h2>
          </div>

        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
