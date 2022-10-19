import Image from "next/future/image";
import a from "next/link";
import { footerData } from "../../store/data";
import ContactSVG1 from "../../store/svg/footer/contact/ContactSVG1";
import ContactSVG2 from "../../store/svg/footer/contact/ContactSVG2";
import ContactSVG3 from "../../store/svg/footer/contact/ContactSVG3";
import SocialSVG1 from "../../store/svg/footer/social/SocialSVG1";
import SocialSVG2 from "../../store/svg/footer/social/SocialSVG2";
import SocialSVG3 from "../../store/svg/footer/social/SocialSVG3";
import SocialSVG4 from "../../store/svg/footer/social/SocialSVG4";

export default function FooterContainer() {
  return (
    <footer className=" relative grid items-center bg-dim font-lato">
      <div className=" md:flex justify-evenly">
        {/* === SECTION 01 ===  */}
        <section className=" flex flex-col justify-center">
          <Image src={footerData.sect1.svg} alt="svg" />
          <h1
            className=" text-4xl my-6 font-extrabold
           tracking-widest text-primary"
          >
            {footerData.sect1.title}
          </h1>

          <p className=" w-72 font-bold text-textDark">
            {footerData.sect1.text}
          </p>
        </section>
        {/* === SECTION 02 ===  */}
        <section className=" flex flex-col items-center justify-center gap-6">
          <h1 className=" text-xl text-primary"> {footerData.sect2.title} </h1>

          <div className="flex-col flex gap-4 text-primary">
            <div className=" flex gap-4">
              <ContactSVG1 styles=" w-5 h-auto" />
              <p className=" text-textDark text-sm font-normal">
                {footerData.sect2.text1}
              </p>
            </div>
            <div className=" flex gap-4">
              <ContactSVG2 styles=" w-5 h-auto" />
              <p className=" text-textDark text-sm font-normal">
                {footerData.sect2.text2}
              </p>
            </div>
            <div className=" flex gap-4">
              <ContactSVG3 styles=" w-5 h-auto" />
              <p className=" text-textDark text-sm font-normal">
                {footerData.sect2.text3}
              </p>
            </div>
          </div>
        </section>
        {/* === SECTION 03 ===  */}
        <section className="flex flex-col items-center justify-center gap-6">
          <h1 className=" text-xl text-primary"> {footerData.sect3.title} </h1>

          <div className=" flex-col flex gap-4 text-primary">
            <div className=" flex items-center gap-4">
              <div className=" w-2 h-2 bg-primary"></div>
              <p className=" text-textDark text-sm">{footerData.sect3.text1}</p>
            </div>

            <div className=" flex items-center gap-4">
              <div className=" w-2 h-2 bg-primary"></div>
              <p className=" text-textDark text-sm">{footerData.sect3.text2}</p>
            </div>

            <div className=" flex items-center gap-4">
              <div className=" w-2 h-2 bg-primary"></div>
              <p className=" text-textDark text-sm">{footerData.sect3.text3}</p>
            </div>
          </div>
        </section>
      </div>
      {/* === SOCIAL LINKS 04 ===  */}
      <section className=" lg:absolute lg:right-0 bg-lime-300">
        <div className=" bg-primary flex gap-5 px-2 py-5 lg:flex-col items-center justify-center">
          <a href="/">
            <SocialSVG1 styles=" cursor-pointer text-white w-5 h-auto">
              <title> {footerData.social.one.title} </title>
            </SocialSVG1>
          </a>
          <a href={footerData.social.two.href}>
            <SocialSVG2 styles=" cursor-pointer text-white w-5 h-auto">
              <title> {footerData.social.two.title} </title>
            </SocialSVG2>
          </a>
          <a href={footerData.social.three.href}>
            <SocialSVG3 styles=" cursor-pointer text-white w-5 h-auto">
              <title> {footerData.social.three.title} </title>
            </SocialSVG3>
          </a>
          <a href={footerData.social.four.href}>
            <SocialSVG4 styles=" cursor-pointer text-white w-5 h-auto">
              <title> {footerData.social.four.title} </title>
            </SocialSVG4>
          </a>
        </div>
      </section>

      <div
        className=" w-full text-center bg-primary
         text-textWhite py-2 font-bold text-xs"
      >
        {footerData.copyright}
      </div>
    </footer>
  );
}
