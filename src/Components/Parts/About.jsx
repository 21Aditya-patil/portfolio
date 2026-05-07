function About() {
  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "HTML",
    "Tailwind",
    "Git & GitHub",
  ];

  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
          About Me
        </h1>

        <div className="mt-4 rounded-xl border border-white/10 p-4 transition-all hover:-translate-y-1">
          <p className="mb-6 text-gray-300">
            Aspiring web developer and IT student, learning Web Development and
            building practical, user-friendly web solutions.
          </p>

          <div className="rounded-xl px-0 py-6 transition-all sm:px-6">
            <h2 className="text-2xl font-bold">Skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-3xl bg-blue-500/10 px-5 py-3 text-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl px-0 py-6 transition-all sm:px-6">
            <h2 className="text-2xl font-bold">Education</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <ul className="list-inside list-disc leading-[1.8] text-gray-300">
                <li>
                  <strong>
                    Bachelor of Science in Information Technology (BSc-IT)
                  </strong>{" "}
                  - Mumbai University
                </li>
                <li>
                  <strong>Relevant Coursework</strong>: Earned Bootstrap
                  certification in responsive and component-based front-end
                  design.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
