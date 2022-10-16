// About Section in Home Page
import Image from "next/future/image";
import { logo } from "../../../public";
import Shape1 from "../svg/Shape1";

export default function AboutSection() {
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
          <div
            className=" bg-dim sm:bg-white relative isolate
           sm:px-12 w-full py-5 sm:py-10"
          >
            <div
              className=" hidden sm:block absolute top-[-60px] h-[700px] 
            z-[-1] w-[1000px] bg-dim right-[-20px] rotate-6"
            ></div>
            {/* === About Text === */}

            <div
              className=" relative justify-center text-center
               text-white sm:text-textDark 
              flex sm:inline-block overflow-hidden"
            >
              <div
                className=" absolute w-3/5 h-full z-[-1] top-0
               bg-primary "
              ></div>{" "}
              <p className=" font-bold font-lato sm:px-2 sm:py-2">About </p>
            </div>

            {/* === LOGO & NAME === */}
            <div
              className="font-lato flex justify-center sm:justify-start
             gap-5 items-center"
            >
              <Image
                src={logo}
                className=" sm:h-[130px] h-[90px] w-[60px] sm:w-[100px]
                 object-contain"
                alt="logo"
              />

              <h2 className=" font-bold text-xl sm:text-2xl"> SUNDEVIL </h2>
            </div>

            {/* === DESC SECT === */}
            <p
              className=" text-center sm:text-left px-5 font-semibold text-xs
             sm:text-sm sm:w-4/6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* === SECITON 02 === */}
          <div className=" w-full h-full"> sect2</div>
        </div>
      </div>
    </div>
  );
}
