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
      <div className=" ring-2 ring-primary h-28"></div>
    </div>
  );
}
