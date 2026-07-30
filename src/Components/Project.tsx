import { useState } from "react";

export default function Project(props: {
  title: string;
  img: string;
  img_class?: string;
  description: string;
  date: string;
  onClick?: () => void;
  tags: string[];
}) {
  return (
    <div
      onClick={props.onClick}
      className="w-[380px] h-fit border-neutral-200 bg-neutral-50 rounded-2xl pb-4 pt-0.5 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 border shadow-lg overflow-hidden group cursor-pointer"
    >
      <div className="overflow-hidden">
        <img
          className="rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
          src={props.img}
          alt={props.title}
        />
      </div>
      <div className="px-4 mt-4">
        <div className="flex justify-between items-start">
          <h1 className="text-xl font-bold no-underline">
            {props.title}
          </h1>
          <p className="text-neutral-400 text-xs font-medium">{props.date}</p>
        </div>
        <p className="text-[--paragraph] text-sm my-3 leading-relaxed line-clamp-3">
          {props.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {props.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-neutral-200 text-neutral-800 h-fit w-fit text-[10px] font-semibold dark:bg-neutral-800 dark:text-neutral-300 rounded-full px-3 py-1 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-6">
          <span className="text-xs font-bold text-neutral-500 group-hover:text-blue-500 transition-colors">
            Click for details ↗
          </span>
        </div>
      </div>
    </div>
  );
}
