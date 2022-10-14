import Image from "next/future/image";
import Link from "next/link";
import { logo } from "../../public";
import { headerData } from "../store/data";
import useStore from "../store/states";

interface Typemaps {
  route: string;
  name: string;
}

export default function Navbar() {
  const { currentRoute, setCurrentRoute } = useStore();

  return (
    <div className=" relative flex justify-between items-center px-10 h-24">
      <Image
        src={logo}
        height="60"
        alt="logo"
        className=" object-cover cursor-pointer"
      />

      <ol className="flex gap-14">
        {headerData.link.map((links: Typemaps, i: any) => (
          <li
            key={i}
            className={`flex isolate justify-center ${
              currentRoute == links.route && "text-textWhite"
            }`}
          >
            {currentRoute == links.route && (
              <div className=" absolute bg-primary top-[-40px] h-28 w-20 z-[-1]">
                Hei
              </div>
            )}
            <Link href={links.route}>
              <span
                onClick={() => setCurrentRoute(links.route)}
                className=" text-base font-semibold cursor-pointer"
              >
                {links.name}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
