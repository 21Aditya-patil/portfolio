import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="flex justify-center items-center min-h-screen relative mb-0"
    >
      <div className="text-center z-20 px-4 ">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
          Hi, I'm Aditya Patil
        </h1>
        <p className="max-w-lg mx-auto text-md mb-8">
          I'm a passionate IT student and aspiring web developer, currently
          diving deep into MERN stack and modern web technologies. I enjoy
          building practical, user-friendly solutions and am always eager to
          learn and take on new challenges.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="py-3 px-6 bg-blue-500 font-medium rounded transition overflow-hidden relative hover:-translate-y-0.5 " 
          >View Projects</a>

          <a href="#contact" className="py-3 px-6 border border-blue-500 text-blue-500 font-medium rounded transition overflow-hidden relative hover:-translate-y-0.5 hover:bg-blue-500/10" 
          >Contact</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
