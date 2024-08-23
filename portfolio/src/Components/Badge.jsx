export default function Badge(props) {
  return (
    <div className="inline-block dark:bg-white bg-black dark:text-black text-white text-xs px-2 py-1 rounded-md">
      <h1>{props.text}</h1>
    </div>
  );
}
