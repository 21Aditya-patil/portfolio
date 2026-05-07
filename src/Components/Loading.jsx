import { useEffect, useState } from "react";

export const Loading = ({ onDone }) => {
  const [text, setText] = useState("");
  const [zoomed, setZoomed] = useState(false);
  const fullText = "addy.Dev";

  useEffect(() => {
    let index = 0;
    let zoomTimer;
    let doneTimer;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index += 1;

      if (index > fullText.length) {
        clearInterval(interval);

        zoomTimer = setTimeout(() => {
          setZoomed(true);
          doneTimer = setTimeout(onDone, 600);
        }, 1000);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(zoomTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-gray-100 wrapit${
        zoomed ? " zoomed" : ""
      }`}
    >
      <div className="mb-4 text-4xl font-bold">
        {text}
        <span className="ml-1 animate-blink">|</span>
      </div>
      <div className="relative h-1 w-[200px] overflow-hidden rounded bg-gray-800">
        <div className="h-full w-[40%] animate-loading-bar bg-blue-500 shadow-[0_0_15px_blue]" />
      </div>
    </div>
  );
};
