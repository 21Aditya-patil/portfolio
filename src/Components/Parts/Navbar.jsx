import React, { useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <>
      <div className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 ">
            <a href="#home" className="font-bold text-xl transition-all hover:-translate-y-0.5">
              addy
              <span className="bg-gradient-to-r font-bold text-2xl from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                .Dev
              </span>
            </a>

            <div
              className="md:hidden cursor-pointer z-40"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <FiMenu />
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-white hover:text-blue-500 transition-all hover:-translate-y-0.5"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-blue-500 transition-all hover:-translate-y-0.5"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-white hover:text-blue-500 transition-all hover:-translate-y-0.5"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-white hover:text-blue-500 transition-all hover:-translate-y-0.5"
              >
                Contact
              </a>
              <a
                href="https://github.com/21Aditya-patil"
                className="text-white text-2xl hover:text-blue-500 transition-all hover:-translate-y-0.5"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-patil-280891281/"
                className="text-white text-2xl hover:text-blue-500 transition-all hover:-translate-y-0.5"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed w-full top-0 left-0 bg-[rgba(10,10,10,0.8)] z-40 backdrop-blur-3xl flex flex-col justify-center items-center transition-all duration-500 ease-in-out
            ${
              menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }
          `}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl cursor-pointer z-50"
        >
          <AiOutlineClose />
        </button>

        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className={`text-3xl font-semibold transform transition-transform duration-300 text-white my-4
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className={`text-3xl font-semibold transform transition-transform duration-300 text-white my-4
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className={`text-3xl font-semibold transform transition-transform duration-300 text-white my-4
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className={`text-3xl font-semibold transform transition-transform duration-300 text-white my-4
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
        >
          Contact
        </a>
        <div className="flex gap-4">
          <a
                href="https://github.com/21Aditya-patil"
                className="text-white hover:text-blue-500 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-patil-280891281/"
                className="text-white hover:text-blue-500 transition-colors"
              >
                <FaLinkedin />
              </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
