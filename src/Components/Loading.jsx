import { useState, useEffect } from "react";

export const Loading = ({ onDone }) => {
  const [text, setText] = useState("");
  const [zoomed, setZoomed] = useState(false); // Add zoomed state
  const fulltext = "addy.Dev";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fulltext.substring(0, index));
      index++;

      if (index > fulltext.length) {
        clearInterval(interval);

        setTimeout(() => {
          setZoomed(true); // Trigger zoom
          setTimeout(() => {
            onDone();
          }, 600); // Wait for zoom animation before onDone
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black text-gray-100 flex flex-col justify-center items-center wrapit${
        zoomed ? " zoomed" : ""
      }`}
    >
      <div className="mb-4 text-4xl font- bold">
        {text}
        <span className="animate-blink ml-1"> | </span>
      </div>
      <div className="w-[200px] h-1 bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full  bg-blue-500 shadow-[0_0_15px_blue] animate-loading-bar"></div>
      </div>
    </div>
  );
};
