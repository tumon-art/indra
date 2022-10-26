// About Section in Home Page
import { aboutSectionData } from "../../store/data";
import AboutSVG1 from "../../store/svg/aboutSection/AboutSVG1";
import AboutSVG2 from "../../store/svg/aboutSection/AboutSVG2";
import AboutSVG3 from "../../store/svg/aboutSection/AboutSVG3";
import Shape1 from "../../store/svg/Shape1";
import AboutSection1 from "./AboutSection1";

export default function AboutSections() {
  return (
    <div className=" mt-24 sm:mt-42">
      <div className=" flex gap-5 sm:gap-28 justify-center">
        {["0", "1", "2"].map((each, i) => {
          return (
            <Shape1
              styles={`text-primary w-20 h-4 sm:w-36 md:w-32 lg:h-6 `}
              key={i}
            />
          );
        })}
      </div>
      <div className=" rounded-xl ring-2 overflow-hidden ring-primary">
        <div className=" lg:flex h-full">
          {/* === SECITON 01 === */}
          <AboutSection1 />
          {/* === SECITON 02 === */}
          <div className=" w-full flex items-center justify-center my-5 sm:my-0 ">
            <div className=" grid px-10 font-semibold text-xs sm:text-sm ">
              <div className=" gap-4 my-2 flex items-center">
                <AboutSVG1 styles={`text-primary w-8 h-8`} />
                <span className="  whitespace-pre-line">
                  {aboutSectionData.desc[0]}
                </span>
              </div>
              <div className=" gap-4 my-2 flex items-center">
                <AboutSVG2 styles={`text-primary w-8 h-8`} />
                <span className="  whitespace-pre-line">
                  {aboutSectionData.desc[1]}
                </span>
              </div>
              <div className=" gap-4 my-2 flex items-center">
                <AboutSVG3 styles={`text-primary w-8 h-8`} />
                <span className="  whitespace-pre-line">
                  {aboutSectionData.desc[2]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
