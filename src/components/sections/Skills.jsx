import { skills } from "@/data/skills";

export default function SkillsPreview() {
  const getSkillName = (url) => {
    const skill = url.split("/icons/")[1]?.split("/")[0];
    return skill ? skill.replace("cplusplus", "c++") : "skill";
  };

  return (
    <section className="section-pad paper-grid border-b border-gray-200">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="section-kicker">Toolbox</p>
            <h2 className="mt-3 text-4xl font-extrabold leading-none text-black md:text-6xl">
              Skills
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-gray-600 md:ml-auto">
            A practical stack for building frontends, backend services,
            automation tools, and database-backed applications.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((url, index) => (
            <div
              key={index}
              className="paper-card focus-lift group flex min-h-36 flex-col items-center justify-center gap-4 p-5 text-center"
            >
              <img
                src={url}
                alt={`${getSkillName(url)} logo`}
                className="h-16 w-16 object-contain transition duration-300"
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
