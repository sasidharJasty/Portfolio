export default function Project(props) {
  return (
    <div className="w-[380px] h-fit border-neutral-200 bg-neutral-50 rounded-lg pb-2 pt-0.5 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100">
      <img className="rounded-t-lg" src={props.img} alt={props.title}></img>
      <div className="px-2 mt-2">
        <h1  target="_blank" className="text-xl no-underline">
          {props.title}
        </h1>
        <p className="text-neutral-300 text-sm mb-1">{props.date}</p>
        <p className="text-[--paragraph] text-sm my-2">{props.description}</p>
        <div className="flex space-x-1 mt-3 w-full overflow-scroll">
          {props.tags.map((tag, index) => (
            <p
              key={index}
              className="bg-gray-200 text-gray-800 h-fit w-fit text-xs dark:bg-neutral-800 dark:text-gray-300 rounded px-2 py-0.5"
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="flex mt-2">
        {props.GitLink ? (
          <a
            href={props.GitLink}
            target="_blank"
            className="dark:bg-neutral-100 bg-neutral-800 p-2 py-1 rounded-md h-fit mr-2   text-white dark:text-black  w-fit text-sm"
          >
            Github ↗
          </a>
        ) : null
        }
        {props.link ? (
          <a
            href={props.link}
            target="_blank"
            className="dark:bg-neutral-100 bg-neutral-800 p-2 py-1 rounded-md h-fit  ml-2 text-white dark:text-black  w-fit text-sm"
          >
            Visit ↗
          </a>
        ) : null
        }</div>
        
      </div>
    </div>
  );
}
