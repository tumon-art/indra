import Image from "next/future/image";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <Image
            src="/vercel.svg"
            style={{ display: "inline" }}
            alt="Vercel Logo"
            width={72}
            height={16}
          />
        </a>
      </footer>
    </>
  );
}
