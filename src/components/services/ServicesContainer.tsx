import { serviceCardData } from "../../store/data";
import ServicesCards from "./ServicesCards";

export default function ServicesContainer() {
  return (
    <div className=" h-[444px] ring-2 m-2">
      {serviceCardData.map((each, i) => {
        return <ServicesCards key={i} svg={each.svg} text={each.text} />;
      })}
    </div>
  );
}
