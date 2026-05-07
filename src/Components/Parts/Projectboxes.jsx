function Projectboxes({ name, description, github, live, skills }) {
  return (
    <article className="flex h-full min-h-[320px] flex-col justify-between rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1 hover:border-blue-500/30">
      <div>
        <h2 className="mb-3 text-xl font-semibold leading-snug">{name}</h2>
        <p className="mb-6 text-sm leading-6 text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-3xl bg-blue-500/10 px-4 py-1 text-sm text-blue-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded border border-blue-500 py-2 text-sm font-medium text-blue-400 transition-all hover:-translate-y-1 hover:bg-blue-500/10"
        >
          GitHub
        </a>
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded bg-blue-600 py-2 text-sm font-medium text-white transition-all hover:-translate-y-1 hover:bg-blue-700"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
}

export default Projectboxes;