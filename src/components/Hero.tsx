import Image from "next/future/image";
import { hero1 } from "../../public";

export default function Hero() {
  return (
    <div>
      <Image src={hero1} alt="hero" />
    </div>
  );
}
