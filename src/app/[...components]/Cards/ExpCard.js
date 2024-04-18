import Image from "next/image";
import { classNames } from "../helper/CommonFunctions";

export default function ExpCard({ item }) {
  var keys = Object.keys(item.details);

  return (
    <div className="relative flex flex-row my-6 mr-1 items-center text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl w-full">
      <div className={classNames(item.displayButton ? "mt-6" : "my-6", "mx-6")}>
        <div
          className={classNames(
            "",
            item.name.includes("Bristlecone", 0) ? "pt-3.5" : ""
          )}
        >
          <Image width={500} height={300} src={item.image} alt={item.name} />
        </div>
      </div>
      <div
        className={classNames(
          item.displayButton ? "" : "pb-6 hidden",
          "p-6 pt-4 mt-auto"
        )}
      >
        <h1 className="block my-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {item.name}
        </h1>
        {keys.map((key) => (
          <h5
            className="block mb-2 font-sans antialiased leading-snug tracking-normal"
            key={key}
          >
            <span className="text-lg font-medium">{key}: </span>
            <span>{item.details[key]}</span>
          </h5>
        ))}
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          Projects
        </button>
      </div>
    </div>
  );
}
