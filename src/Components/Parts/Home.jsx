function Home() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-4 pt-16"
    >
      <div className="z-20 mx-auto max-w-3xl text-center">
        <h1 className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-7xl">
          Hi, I'm Aditya Patil
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
          I'm a passionate IT student and aspiring web developer, currently
          diving deep into MERN stack and modern web technologies. I enjoy
          building practical, user-friendly solutions and am always eager to
          learn and take on new challenges.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded bg-blue-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded border border-blue-500 px-6 py-3 font-medium text-blue-400 transition hover:-translate-y-0.5 hover:bg-blue-500/10"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
