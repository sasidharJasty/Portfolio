import * as React from "react";

export default function Project(props: {
  title: string;
  img: string;
  img_class?: string;
  description: string;
  date: string;
  onClick?: () => void;
  tags: string[];
}) {
  const handleClick = () => {
    console.log("Project clicked:", props.title);

    if (props.onClick) {
      props.onClick();
    } else {
      console.log("No onClick prop passed");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="
        relative
        z-20
        w-[380px]
        h-fit
        border
        border-neutral-200
        bg-neutral-50
        dark:border-neutral-700
        dark:bg-neutral-900
        dark:text-neutral-100
        text-neutral-900
        rounded-2xl
        pb-4
        pt-0.5
        shadow-lg
        overflow-hidden
        group
        cursor-pointer
        hover:shadow-2xl
        hover:scale-105
        transition-all
        duration-300
      "
    >
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          className={`w-full rounded-t-2xl transition-transform duration-500 group-hover:scale-105 ${
            props.img_class || ""
          }`}
          src={props.img}
          alt={props.title}
        />
      </div>

      {/* Content */}
      <div className="px-4 mt-4">
        <div className="flex justify-between items-start gap-4">
          <h1 className="text-xl font-bold">
            {props.title}
          </h1>

          <p className="text-neutral-400 text-xs font-medium whitespace-nowrap">
            {props.date}
          </p>
        </div>

        <p className="text-[--paragraph] text-sm my-3 leading-relaxed line-clamp-3">
          {props.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {props.tags.map((tag, index) => (
            <span
              key={index}
              className="
                bg-neutral-200
                text-neutral-800
                dark:bg-neutral-800
                dark:text-neutral-300
                h-fit
                w-fit
                text-[10px]
                font-semibold
                rounded-full
                px-3
                py-1
                uppercase
                tracking-wider
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Click indicator */}
        <div className="flex gap-3 mt-6">
          <span className="text-xs font-bold text-neutral-500 group-hover:text-blue-500 transition-colors">
            Click for details ↗
          </span>
        </div>
      </div>
    </div>
  );
}
