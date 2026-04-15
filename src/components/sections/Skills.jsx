export default function SkillsPreview() {
  const skills = [
    "React",
    "JavaScript",
    "Python",
    "Machine Learning",
    "ESP32",
    "Embedded Systems",
  ];

  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">Skills</h2>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span key={skill} className="px-4 py-2 border rounded">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
