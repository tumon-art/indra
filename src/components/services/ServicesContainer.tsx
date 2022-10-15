import { serviceCardData } from "../../store/data";
import ServicesCards from "./ServicesCards";

export default function ServicesContainer() {
  return (
    <div className=" h-[444px] sm:gap-24 md:gap-36 lg:gap-60 sm:flex justify-center m-2">
      {serviceCardData.map((each, i) => {
        return <ServicesCards key={i} svg={each.svg} text={each.text} />;
      })}
    </div>
  );
}
