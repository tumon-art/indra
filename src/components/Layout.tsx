import Image from "next/image";
import FooterContainer from "./footer/FooterContainer";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
      {/* <FooterContainer /> */}
    </>
  );
}
