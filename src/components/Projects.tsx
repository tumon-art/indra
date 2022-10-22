import { headerData } from "../store/data";

export default function Projects() {
  return (
    <div className="mt-24 relative sm:mt-42 font-lato">
      <div>
        <div
          className=" inline-block bg-primary text-lg
         px-4 py-1 font-extrabold text-white"
        >
          {headerData.link[4].name}
          <div
            className=" absolute w-full h-2 left-0 
          bottom-0 z-[-1] bg-primary"
          ></div>
        </div>
      </div>
    </div>
  );
}
