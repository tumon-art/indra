import Image from "next/future/image";
import { projectData } from "../store/data";

export default function Projects() {
  return (
    <div className=" mt-24 sm:mt-42 font-lato">
      <div className=" relative ">
        <div
          className=" inline-block bg-primary text-lg
         px-4 py-1 font-extrabold text-white"
        >
          {projectData.title}
          <div
            className=" absolute w-full h-4 left-0 
          bottom-0 z-[-1] bg-primary"
          ></div>
        </div>
      </div>

      {/* === Images/Works ===  */}
      <div className=" mt-5 grid gap-6 md:grid-cols-5 md:grid-rows-2">
        <div className=" relative md:col-start-1 md:col-end-3">
          <Image
            src={projectData.item1.img}
            alt="img"
            className=" h-60 md:h-full md:w-full object-cover"
          />
          <span
            className=" absolute z-50 bottom-0 right-0 bg-primary 
            cursor-pointer hover:ring-8 ring-dim text-white px-6 py-2"
          >
            {projectData.item1.btnText}
          </span>
        </div>

        <div className=" relative md:col-start-3 md:col-end-6 md:row-start-1 md:row-end-3">
          <Image
            src={projectData.item3.img}
            alt="img"
            className=" h-60  md:h-full md:w-full object-cover"
          />
          <span
            className=" absolute z-50 bottom-0 right-0 bg-primary 
            cursor-pointer hover:ring-8 ring-dim text-white px-6 py-2"
          >
            {projectData.item3.btnText}
          </span>
        </div>

        <div className=" relative md:col-start-1 md:col-end-3">
          <Image
            src={projectData.item2.img}
            alt="img"
            className=" h-60 md:h-full md:w-full object-cover "
          />
          <span
            className=" absolute z-50 bottom-0 right-0 bg-primary 
            cursor-pointer hover:ring-8 ring-dim text-white px-6 py-2"
          >
            {projectData.item2.btnText}
          </span>
        </div>
      </div>
    </div>
  );
}
