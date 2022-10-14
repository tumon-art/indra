import Image from "next/future/image";
import { logo } from "../../public";
import { headerData } from "../store/data";

export default function Navbar() {
  return (
    <div className=" bg-red-100 flex justify-between items-center px-10 h-24">
      <Image
        src={logo}
        height="60"
        alt="logo"
        className=" object-cover cursor-pointer"
      />

      <ol className=" flex gap-10">
        {headerData.link.map((links: string, i: any) => (
          <li key={i}>
            <span className=" cursor-pointer text-md font-medium">{links}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
