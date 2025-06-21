import React from "react";

function Projectboxes({ setName, setDisc, setLinks, setSkills }) {
  return (
    <div className="p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-blue-500/30 h-[300px] flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-2">{setName}</h2>
        <p className="text-sm mb-6">{setDisc}</p>
        <div className="flex flex-wrap gap-4">
          {setSkills.map((i, key) => (
            <span
              key={key}
              className="bg-blue-500/10 text-blue-500 rounded-3xl px-4 py-1 cursor-pointer"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 bg-blue-800 rounded-xl p-1 transition-all hover:-translate-y-1">
        <a href={setLinks} className="text-white-500 ">
          View Project
        </a>
      </div>
    </div>
  );
}

export default Projectboxes;
