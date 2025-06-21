import React from "react";

function About() {
  const Skills = [
    "React",
    "JavaScript",
    "Nodejs",
    "HTML",
    "Tailwind",
    "Git & Github",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-bold text-center text-3xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
          About Me
        </h1>

        <div className="rounded-xl p-4 border border-white/10 hover:-translate-y-1 transition-all mt-4">
          <p className="mb-6">
            Aspiring web developer and IT student, learning Web Development and
            building practical, user-friendly web solutions.
          </p>

          <div className="rounded-xl py-6 px-10 hover:-translate-y-1 transition-all">
            <h1 className="text-2xl font-bold">💡Skills</h1>
            <div className="flex flex-wrap gap-2 mt-4">
              {Skills.map((i, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 rounded-3xl px-5 py-3"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl py-6 px-10 hover:-translate-y-1 transition-all">
            <h1 className="text-2xl font-bold">🏫 Education</h1>
            <div className="flex flex-wrap gap-2 mt-4">
              <ul className="list-disc list-inside leading-[1.6]">
                <li>
                  <strong>Bachelor of Science in Information Technology (BSc-IT)Bachelor of Science in Information Technology (BSc-IT)</strong> -
                  Mumbai University
                </li>
                <li>
                  <strong>Relavent Courwork</strong>: Earned Bootstrap certification in
                  responsive and component-based front-end design.
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
