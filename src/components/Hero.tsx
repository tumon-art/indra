import Image from "next/image";
import { hero1 } from "../../public";

export default function Hero() {
  return (
    <div className=" relative">
      <div>
        <Image
          src={hero1}
          className=" scale-x-[-1] w-full object-cover 
           h-[300px] sm:h-[500px] brightness-70"
          alt="hero"
        />
      </div>
      <div
        className=" absolute bottom-0 bg-blured
       text-textWhite  w-full text-center font-lato
        text-xl sm:text-4xl font-extrabold py-3 sm:py-5"
      >
        <span className="">SUNDEVIL Underground Construction</span>
      </div>
    </div>
  );
}
