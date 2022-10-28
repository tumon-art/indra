import Image from "next/image";
import { contact1 } from "../../public";
import { contactData } from "../store/data";
import Contact1 from "../store/svg/contact/Contact1";
import SVGcontact2 from "../store/svg/contact/SVGcontact2";

export default function Contact() {
  return (
    <div
      id={contactData.id}
      className=" font-lato mt-20 h-full w-full gap-5 sm:gap-0 grid col-span-10"
    >
      {/* === SECTION 01 === */}
      <section className=" lg:col-start-1 lg:col-end-6 flex  bg-dim">
        <Image
          src={contact1}
          alt="img"
          className=" w-32 md:w-52 object-cover"
        />
        <div className=" flex  flex-col items-center w-full sm:px-10 justify-center">
          <h1
            className=" text-lg md:text-xl lg:text-4xl whitespace-pre-line 
            sm:px-6 sm:py-6 text-center text-primary font-extrabold"
          >
            {contactData.sec1.title}
          </h1>

          <div className=" grid my-3 sm:my-6 justify-center">
            {contactData.sec1.smallText.map((each, i) => {
              return (
                <div key={i} className=" flex gap-3 my-1 items-center">
                  <span className=" h-2 w-2 bg-primary"></span>
                  <p
                    className=" text-xs font-sans font-medium md:font-lato 
                    whitespace-nowrap sm:text-base"
                  >
                    {each}
                  </p>
                </div>
              );
            })}
          </div>

          <div className=" bg-primary my-4 py-2 gap-2 sm:gap-4 px-4 flex items-center justify-center">
            <Contact1 styles=" text-white sm:w-8 w-4" />
            <p className=" text-white font-sans md:font-lato text-xs md:text-xl">
              {contactData.sec1.phone}
            </p>
          </div>
        </div>
      </section>

      {/* === SECTION 02 === */}
      <section
        className=" flex justify-center relative lg:col-start-6 lg:col-end-11
       overflow-hidden h-full"
      >
        <Image
          src={contactData.sect2.img}
          alt="img"
          className=" h-full w-full object-cover"
        />
        <SVGcontact2 styles="absolute bottom-0 min-w-full text-primary h-32 sm:h-44 " />
        <h1
          className=" whitespace-pre-line left-10 sm:left-20 text-xl sm:text-3xl font-extrabold
         text-white z-40 absolute bottom-5 sm:bottom-10"
        >
          {contactData.sect2.title}
        </h1>
      </section>
    </div>
  );
}
