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
        <section className=" flex flex-col items-center justify-center gap-6 ring-2">
          <h1 className=" text-xl text-primary"> {footerData.sect2.title} </h1>

          <div className="flex-col flex gap-4 text-primary">
            <div className=" flex gap-2">
              <ContactSVG1 styles=" w-5 h-auto" />
              <p className=" text-textDark text-sm font-normal">
                {footerData.sect2.text1}
              </p>
            </div>
            <div className=" flex gap-2">
              <ContactSVG2 styles=" w-5 h-auto" />
              <p className=" text-textDark text-sm font-normal">
                {footerData.sect2.text2}
              </p>
            </div>
            <div className=" flex gap-2">
              <ContactSVG3 styles=" w-5 h-auto" />
              <p className=" text-textDark text-sm font-normal">
                {footerData.sect2.text3}
              </p>
            </div>
          </div>
        </section>
        {/* === SECTION 03 ===  */}
        <section className="flex flex-col items-center justify-center gap-6 ring-2">
          <h1 className=" text-xl text-primary"> {footerData.sect3.title} </h1>

          <div className=" flex-col flex gap-4 text-primary">
            <div className=" flex items-center gap-2">
              <div className=" w-2 h-2 bg-primary"></div>
              <p> {footerData.sect3.text1} </p>
            </div>

            <div className=" flex gap-2">
              <div className=" w-2 h-2 bg-primary"></div>
              <p> {footerData.sect3.text2} </p>
            </div>

            <div className=" flex gap-2">
              <div className=" w-2 h-2 bg-primary"></div>
              <p> {footerData.sect3.text3} </p>
            </div>
          </div>
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
