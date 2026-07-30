import { useState } from "react";
//import Badge from "./Badge";

export default function Experience(props: {
  title: string;
  img: string;
  img_class?: string;
  short_description: string;
  description: string;
  time_line: string;
  badge?: string;
  children?: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div
      className="w-full relative flex flex-col cursor-pointer my-1 p-2 rounded-2xl border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all duration-300 group"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center">
        <img
          src={props.img}
          className={`w-12 h-12 p-2 object-contain rounded-xl bg-white dark:bg-neutral-800 shadow-sm ${props.img_class}`}
          alt={props.title}
        />
        <div className="ml-4 flex flex-col">
          <div className="flex items-center gap-2">
            <h1
              className={`font-bold text-base flex items-center text-left w-fit ml-0 transition-all duration-300`}
            >
              {props.title}
              <span
                className={`text-neutral-500 dark:text-neutral-400 font-normal transition-all duration-300 ${
                  isHovered
                    ? "opacity-100 translate-x-1"
                    : "opacity-0 -translate-x-6"
                }`}
              >
                {isDescriptionVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transform transition-all scale-90 duration-300 ease-out rotate-90"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transform transition-all scale-90 duration-300 ease-out"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                )}
              </span>
            </h1>
          </div>
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300 ml-0">
            {props.short_description}
          </p>
        </div>
        <div className="absolute top-0 right-0 justify-items-end flex flex-col items-end">
          <h3 className="text-neutral-400 text-xs font-medium pt-5 pr-6">
            {props.time_line}
          </h3>
          <div className="mt-2">
            {props.children}
          </div>
        </div>
      </div>

      {/* Smooth description transition */}
      <div
        className={`ml-16 transition-all duration-300 ease-in-out grid ${
          isDescriptionVisible
            ? "grid-rows-[1fr] opacity-100 mt-3"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >

        <div className="overflow-hidden">


          <div className="text-sm  text-neutral-700 dark:text-neutral-300 rounded-xl px-4 pb-3">
            <div className="relative border-neutral-300 dark:border-neutral-700 ml-2">

                {props.description
                  .split("\n")
                  .filter(line => line.trim())
                  .map((line, index, arr) => (
                    <div key={index} className="relative pl-6 py-2">
                      {/* Vertical line */}
                      <span
                        className={`absolute left-0 border-l border-neutral-300 dark:border-neutral-700 ${
                          index === arr.length - 1
                            ? "top-0 h-5" // stops at connector (└)
                            : "top-0 bottom-0" // continues through (├)
                        }`}
                      />

                      {/* Horizontal connector */}
                      <span className="absolute left-0 top-5 w-4 border-t border-neutral-300 dark:border-neutral-700" />

                      <p className="leading-relaxed">{line}</p>
                    </div>
                  ))}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
