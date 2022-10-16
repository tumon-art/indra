// About Section in Home Page
import Shape1 from "../svg/Shape1";
import AboutSection1 from "./AboutSection1";

export default function AboutSections() {
  return (
    <div>
      <div className=" flex gap-5 sm:gap-28 justify-center">
        {["0", "1", "2"].map((each, i) => {
          return <Shape1 styles={`text-primary w-20 h-4`} key={i} />;
        })}
      </div>
      <div className=" rounded-xl ring-2 overflow-hidden ring-primary">
        <div className=" sm:flex h-full">
          {/* === SECITON 01 === */}
          <AboutSection1 />
          {/* === SECITON 02 === */}
          <div className=" w-full h-full"> sect2</div>
        </div>
      </div>
    </div>
  );
}
