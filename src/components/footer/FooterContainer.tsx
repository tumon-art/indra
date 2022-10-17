import Image from "next/future/image";
import { footerData } from "../../store/data";
import ContactSVG1 from "../../store/svg/footer/contact/ContactSVG1";
import ContactSVG2 from "../../store/svg/footer/contact/ContactSVG2";
import ContactSVG3 from "../../store/svg/footer/contact/ContactSVG3";

export default function FooterContainer() {
  return (
    <footer className="bg-dim font-lato">
      <div className=" h-96 flex justify-evenly">
        {/* === SECTION 01 ===  */}
        <section className=" ring-2">
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
        <section className=" ring-2">
          <h1 className=" text-xl text-primary"> {footerData.sect2.title} </h1>

          <div className=" text-primary">
            <div>
              <ContactSVG1 styles=" w-4 h-auto" />
            </div>
            <div>
              <ContactSVG2 styles=" w-4 h-auto" />
            </div>
            <div>
              <ContactSVG3 styles=" w-4 h-auto" />
            </div>
          </div>
        </section>
        {/* === SECTION 03 ===  */}
        <section className=" ring-2">
          <h1 className=" text-xl text-primary"> {footerData.sect3.title} </h1>
        </section>
      </div>
      <div
        className=" w-full text-center bg-primary
         text-textWhite py-2 font-bold text-sm"
      >
        {footerData.copyright}
      </div>
    </footer>
  );
}
