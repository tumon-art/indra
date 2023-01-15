import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { logo } from "../../public";
import { headerData } from "../store/data";
import useStore from "../store/states";

interface Typemaps {
  route: string;
  name: string;
}

export default function Navbar() {
  const { currentRoute, setCurrentRoute } = useStore();
  const [sidebar, setsidebar] = useState<boolean>(false);

  return (
    <div
      className=" relative shadow-xl flex justify-between items-center 
    px-4 sm:px-10 h-16 sm:h-24"
    >
      <Image
        src={logo}
        alt="logo"
        className=" h-10 sm:h-14 w-auto object-contain cursor-pointer"
      />

      <ol className=" hidden sm:flex gap-14">
        {headerData.link.map((links: Typemaps, i: any) => (
          <li
            key={i}
            className={`flex isolate justify-center ${
              currentRoute == links.route && "text-textWhite"
            }`}
          >
            {currentRoute == links.route && (
              <div
                className=" absolute bg-primary top-[-40px] 
              h-28 w-20 z-[-1]"
              >
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

      {/* === SIDEBAR === */}
      <div className="sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-primary cursor-pointer"
          onClick={() => setsidebar(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <div
        className={` sm:hidden absolute right-0 w-[70vw] transition-transform
         top-0 bg-primary 
        h-[100vh] ${sidebar ? "translate-x-0" : "translate-x-96"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 absolute cursor-pointer left-0 h-6"
          onClick={() => setsidebar(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <ol className=" h-full flex flex-col items-center justify-center gap-5">
          {headerData.link.map((links: Typemaps, i: any) => (
            <li
              key={i}
              className={`flex isolate justify-center ${
                currentRoute == links.route && "text-textWhite"
              }`}
            >
              {currentRoute == links.route && (
                <div
                  className="absolute top-[-40px] 
                    h-28 w-20 z-[-1]"
                ></div>
              )}
              <Link href={links.route}>
                <span
                  onClick={() => setCurrentRoute(links.route)}
                  className=" relative text-base text-white font-semibold cursor-pointer"
                >
                  {links.name}
                  <div
                    className=" top-0 absolute w-full hover:w-9 transition-all h-3
                   bg-white my-2"
                  ></div>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
