export default function Value() {
  const values = [
    {
      title: "Build",
      text: "Full-stack projects with clear interfaces, clean routing, and practical user flows.",
    },
    {
      title: "Test",
      text: "Structured test cases, bug tracking, and reliability checks across software and hardware systems.",
    },
    {
      title: "Automate",
      text: "Data-driven workflows, scraping tools, and repeatable systems that reduce manual effort.",
    },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-kicker">About Me</p>
            <h2 className="mt-3 text-4xl font-extrabold leading-none text-black md:text-6xl">
              Practical software, tested properly.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-gray-600 lg:ml-auto">
            I like building useful systems that are easy to understand, easy to
            test, and polished enough for real people to use.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((value, index) => (
            <article
              key={value.title}
              className="paper-card focus-lift border-t-4 border-t-blue-400 p-6"
            >
              <p className="text-sm font-bold text-gray-400">
                0{index + 1}
              </p>
              <h3 className="mt-8 text-3xl font-extrabold text-black">
                {value.title}
              </h3>
              <p className="mt-4 leading-7 text-gray-600">{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
