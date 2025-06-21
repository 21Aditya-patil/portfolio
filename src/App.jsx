import React from "react"
import { Loading } from "./Components/Loading"
import Navbar from "./Components/Parts/Navbar";
import Home from "./Components/Parts/Home";
import About from "./Components/Parts/About";
import Projects from "./Components/Parts/Projects";
import Contact from "./Components/Parts/Contact";

import { useState } from "react";
import "./index.css";

function App() {

  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!loading && <Loading onDone={() => setLoading(true)} />}{""}
        <div className={`min-h-screen transition-opacity duration-1000 ${loading ? "opacity-100" : "opacity-0"}`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home />
          <About /> 
          <Projects />
          <Contact />
        </div>
    </>
  )
}

export default App
