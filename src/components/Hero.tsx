import Image from "next/future/image";
import { hero1 } from "../../public";

export default function Hero() {
  return (
    <div className=" relative ring-2">
      <div>
        <Image
          src={hero1}
          className=" scale-x-[-1] w-full object-cover 
          h-[500px] brightness-70"
          alt="hero"
        />
      </div>
      <div
        className=" absolute bottom-0 bg-blured
       text-textWhite  w-full text-center font-lato text-4xl font-extrabold py-5"
      >
        <span className="">SUNDEVIL Underground Construction</span>
      </div>
    </div>
  );
}
