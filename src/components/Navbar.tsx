import Image from "next/future/image";
import { logo } from "../../public";
import { headerData } from "../cms/data";

export default function Navbar() {
  return (
    <nav className=" bg-red-100 h-24">
      <Image src={logo} height="" alt="logo" />
    </nav>
  );
}
