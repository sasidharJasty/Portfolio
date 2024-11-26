import { useState } from "react";
import Badge from "./Badge";

export default function Experience(props) {
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
      className="w-full relative flex flex-col cursor-pointer my-2"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center">
        <img
          src={props.img}
          className={`w-[50px] h-[50px] p-[5px] object-contain rounded-xl ${props.img_class}`}
          alt={props.title}
        />
        <div className="ml-2 flex flex-col">
          <h1
            className={`font-medium text-sm flex text-left w-fit ml-0 transition-transform duration-300 `}
          >
            {props.title}
            <span
              className={`text-neutral-500 dark:text-white font-normal transition-all duration-300 ${
                isHovered
                  ? "opacity-100 translate-x-1"
                  : "opacity-0 -translate-x-6"
              }`}
            >
              {isDescriptionVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform transition-all scale-75 duration-300 ease-out rotate-90"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform transition-all scale-75 duration-300 ease-out"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              )}
            </span>
          </h1>
          <p className="text-xs text-neutral-600 dark:text-neutral-300 ml-0">
            {props.short_description}
          </p>
        </div>
        <div className="absolute top-0 right-0 justify-items-end ">
          <h3 className="text-neutral-500 text-sm right-0">
            {props.time_line}
          </h3>
          {props.children}
        </div>
      </div>

      {/* Smooth description transition */}
      <div
        className={`p-2 text-sm ml-[55px] bg-neutral-100 dark:bg-transparent text-neutral-700 dark:text-neutral-200 rounded-md transition-all duration-300 overflow-hidden ${
          isDescriptionVisible
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
        style={{ transitionProperty: "max-height, opacity" }}
      >
        <p>{props.description}</p>
      </div>
    </div>
  );
}
