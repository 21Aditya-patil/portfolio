import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-[rgba(10,10,10,0.8)] shadow-lg backdrop-blur-lg">
        <nav className="mx-auto max-w-5xl px-4">
          <div className="flex h-16 items-center justify-between">
            <a
              href="#home"
              className="text-xl font-bold transition-all hover:-translate-y-0.5"
            >
              addy
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
                .Dev
              </span>
            </a>

            <button
              type="button"
              className="z-40 cursor-pointer text-2xl md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Open navigation menu"
            >
              <FiMenu />
            </button>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white transition-all hover:-translate-y-0.5 hover:text-blue-500"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://github.com/21Aditya-patil"
                className="text-2xl text-white transition-all hover:-translate-y-0.5 hover:text-blue-500"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-patil-280891281/"
                className="text-2xl text-white transition-all hover:-translate-y-0.5 hover:text-blue-500"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`fixed left-0 top-0 z-40 flex w-full flex-col items-center justify-center bg-[rgba(10,10,10,0.9)] backdrop-blur-3xl transition-all duration-500 ease-in-out ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="absolute right-6 top-6 z-50 cursor-pointer text-3xl text-white"
          aria-label="Close navigation menu"
        >
          <AiOutlineClose />
        </button>

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`my-4 text-3xl font-semibold text-white transition-all duration-300 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            {link.label}
          </a>
        ))}

        <div className="mt-4 flex gap-5 text-3xl">
          <a
            href="https://github.com/21Aditya-patil"
            className="text-white transition-colors hover:text-blue-500"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-patil-280891281/"
            className="text-white transition-colors hover:text-blue-500"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
