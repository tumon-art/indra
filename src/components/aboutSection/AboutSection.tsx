import { shapeSVG } from "../../store/data";

// About Section in Home Page
export default function AboutSection() {
  return (
    <div>
      <div className=" flex gap-24 justify-center">
        {["0", "1", "2"].map((each, i) => {
          return (
            <div className=" text-primary w-56 h-10" key={i}>
              {shapeSVG.shape1}
            </div>
          );
        })}
      </div>
      <div className=" ring-2 ring-primary h-28"></div>
    </div>
  );
}
