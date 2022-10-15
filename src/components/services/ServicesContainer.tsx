import Image from "next/future/image";
import { hero2 } from "../../../public";
import { serviceCardData } from "../../store/data";
import ServicesCards from "./ServicesCards";

export default function ServicesContainer() {
  return (
    <section className=" my-52">
      <div className=" relative flex justify-center">
        <div className=" absolute sm:gap-24 top-[-120px] md:gap-36 lg:gap-60 sm:flex justify-center m-2">
          {serviceCardData.map((each, i) => {
            return (
              <ServicesCards key={i} svg={each.svg} i={i} text={each.text} />
            );
          })}
        </div>
        <Image
          src={hero2}
          className="h-[500px] w-full object-cover"
          alt="heor2"
        />
      </div>
    </section>
  );
}
