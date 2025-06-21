import React from "react";
import Projectboxes from "./Projectboxes"
import { useState } from "react";

function Projects() {
  const [name, setName] = useState("")
  const [disc, setDisc] = useState("")
  const [links, setLinks] = useState("")
  const [skills, setSkills] = useState([])
  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-bold text-center text-3xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Projectboxes 
          setName={"Github Profile Explorer"}
          setDisc={"Built a React-based web app to explore GitHub profiles via search and navigate to user profiles. This project helped me refresh my React skills."}
          setLinks={"https://github-profile-explorer-woad.vercel.app/"}
          setSkills={["React", "Tailwind", "API"]}
          />

          <Projectboxes 
          setName={"Weather App"}
          setDisc={"This simple weather app, built using HTML, CSS, and JavaScript, allows you to easily check the weather conditions of various cities."}
          setLinks={"https://weather-app-seven-chi-79.vercel.app/"}
          setSkills={["Javascript", "API", "HTML"]}
          /> 

          <Projectboxes 
          setName={"Landing Page"}
          setDisc={"Created a landing page of shoe brand using React, HTML and CSS."}
          setLinks={"https://landing-page-orcin-delta.vercel.app/"}
          setSkills={["React", "Tailwind", "API"]}
          />

          <Projectboxes 
          setName={"Dice Game"}
          setDisc={"The simple dice game where we have to guess the number displayed on dice"}
          setLinks={"https://dice-game-delta-vert.vercel.app/"}
          setSkills={["React", "Tailwind", "HTML"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
