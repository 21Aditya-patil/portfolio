import Projectboxes from "./Projectboxes";

const projects = [
  {
    name: "LoopIn - College Social Networking Platform",
    description:
      "Built a full-stack real-time social platform for college communities with announcements, events, and student updates. Implemented JWT authentication and role-based access control for admin, faculty, and student roles.",
    github: "https://github.com/21Aditya-patil/LoopIn",
    live: "https://loop-in-bice.vercel.app/",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
  },
  {
    name: "Imagger - AI Text to Image Generator",
    description:
      "Built an AI-powered web app generating images from natural language prompts via the Stability AI REST API. Handled async API responses with loading states, error fallbacks, and a responsive dynamic UI.",
    github: "https://github.com/21Aditya-patil/Imagger-AI-Image-Generator",
    live: "https://imagger-ai-image-generator.vercel.app/",
    skills: ["React.js", "Node.js", "External API", "Tailwind CSS"],
  },
  {
    name: "Lead Management System - Mini CRM",
    description:
      "Developed a full-stack CRM with CRUD operations, status pipeline, and RESTful APIs backed by a relational PostgreSQL schema. Built a responsive dashboard for lead tracking, filtering, and status management.",
    github: "https://github.com/21Aditya-patil/lead-manager",
    live: "https://github.com/21Aditya-patil/lead-manager",
    skills: ["PostgreSQL", "Express.js", "React.js", "Node.js"],
  },
  {
    name: "Weather App",
    description:
      "This simple weather app, built using HTML, CSS, and JavaScript, allows you to easily check the weather conditions of various cities.",
    github: "https://github.com/21Aditya-patil/weather-app",
    live: "https://weather-app-seven-chi-79.vercel.app/",
    skills: ["Javascript", "API", "HTML"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
          Projects
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Projectboxes key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;