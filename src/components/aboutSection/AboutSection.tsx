// About Section in Home Page
import Shape1 from "../svg/Shape1";

export default function AboutSection() {
  return (
    <div>
      <div className=" flex gap-24 justify-center">
        {["0", "1", "2"].map((each, i) => {
          return <Shape1 styles={`text-primary w-56 h-10`} key={i} />;
        })}
      </div>
      <div className=" rounded-xl ring-2 overflow-hidden ring-primary h-28">
        <div className=" flex h-full">
          <div className=" bg-dim px-14 py-6 w-full">
            {/* === About Text === */}
            <div className=" relative inline-block overflow-hidden">
              <div className=" absolute w-3/5 h-full z-[-1] top-0 bg-primary "></div>
              <p className=" font-bold font-lato px-2 py-1"> About </p>
            </div>
          </div>
          <div className=" w-full h-full"></div>
        </div>
      </div>
    </div>
  );
}
