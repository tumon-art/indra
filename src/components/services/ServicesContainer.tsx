import { motion } from "framer-motion";
import Image from "next/image";
import { hero2 } from "../../../public";
import { serviceCardData } from "../../store/data";
import ServicesCards from "./ServicesCards";

export default function ServicesContainer() {
  return (
    <section className=" mt-24 sm:mt-52">
      <div className=" relative flex justify-center">
        <motion.div
          initial={{ translateX: 425 }}
          whileInView={{ translateX: 0 }}
          viewport={{ once: true }}
          className=" absolute gap-5 sm:gap-24 top-[-80px]
           sm:top-[-119px] md:gap-36 
        lg:gap-60 flex justify-center m-2"
        >
          {serviceCardData.map((each, i) => {
            return (
              <ServicesCards key={i} svg={each.svg} i={i} text={each.text} />
            );
          })}
        </motion.div>
        <Image
          src={hero2}
          className=" h-[300px] sm:h-[500px] w-full object-cover"
          alt="heor2"
        />
        <motion.div
          initial={{ translateX: 425 }}
          whileInView={{ translateX: 0 }}
          viewport={{ once: true }}
          className=" absolute shadow-2xl bg-primary bottom-[-20px]
           sm:bottom-[-40px] text-textWhite
           text-center font-lato text-sm sm:text-4xl font-extrabold
          px-10 sm:px-20 py-4 sm:py-8 rotate-[-1.24deg]"
        >
          SUNDEVIL Underground Construction
        </motion.div>
      </div>
    </section>
  );
}
