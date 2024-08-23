export default function Project(props) {
  return (
    <div className="w-[380px] h-fit border-neutral-200 bg-neutral-50 rounded-lg pb-2 pt-0.5 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100">
      <img className="rounded-t-lg" src={props.img} alt={props.title}></img>
      <div className="px-2 mt-2">
        <a href={props.link} target="_blank" className="text-xl no-underline">
          {props.title} ↗
        </a>
        <p className="text-[--paragraph] text-sm my-2">{props.description}</p>
        {props.GitLink ? (
          <a
            href={props.GitLink}
            target="_blank"
            className="text-md no-underline"
          >
            Github ↗
          </a>
        ) : null}
        <div className="flex space-x-2 mt-2">
          {props.tags.map((tag, index) => (
            <p
              key={index}
              className="bg-gray-200 text-gray-800 h-fit dark:bg-neutral-800 dark:text-gray-300 rounded px-2 py-0.5"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
