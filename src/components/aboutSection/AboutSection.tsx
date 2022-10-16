// About Section in Home Page
import Image from "next/future/image";
import { logo } from "../../../public";
import Shape1 from "../svg/Shape1";

export default function AboutSection() {
  return (
    <div>
      <div className=" flex gap-28 justify-center">
        {["0", "1", "2"].map((each, i) => {
          return <Shape1 styles={`text-primary w-42 h-8`} key={i} />;
        })}
      </div>
      <div className=" rounded-xl ring-2 overflow-hidden ring-primary">
        <div className=" flex h-full">
          {/* === SECITON 01 === */}
          <div className=" relative isolate px-12 py-10 w-full">
            <div className=" absolute top-[-60px] h-[700px] z-[-1] w-[1000px] bg-dim right-[-20px] rotate-6"></div>
            {/* === About Text === */}
            <div className=" relative inline-block overflow-hidden">
              <div className=" absolute w-3/5 h-full z-[-1] top-0 bg-primary "></div>
              <p className=" font-bold font-lato px-2 py-1"> About </p>
            </div>

            {/* === LOGO & NAME === */}
            <div className="font-lato flex gap-5 items-center">
              <Image
                src={logo}
                className=" h-[130px] w-[100px] object-contain"
                alt="logo"
              />

              <h2 className=" font-bold text-2xl"> SUNDEVIL </h2>
            </div>

            {/* === DESC SECT === */}
            <p className=" font-semibold text-sm w-4/6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* === SECITON 02 === */}
          <div className=" w-full h-full"></div>
        </div>
      </div>
    </div>
  );
}
