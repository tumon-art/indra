import Image from "next/future/image";
import { hero1, hero2, hero3, hero4 } from "../../public";

export default function Hero() {
  return (
    <div className=" relative ring-2">
      <div>
        <Image
          quality={100}
          src={hero4}
          className=" w-full object-cover h-[500px] brightness-70"
          alt="hero"
        />
      </div>
      <div className=" absolute bottom-0 font-lato bg-blured text-textWhite text-center w-full text-4xl font-extrabold py-5">
        <span className="">SUNDEVIL Underground Construction</span>
      </div>
    </div>
  );
}
