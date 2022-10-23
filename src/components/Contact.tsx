import Image from "next/future/image";
import { contact1 } from "../../public";
import { contactData } from "../store/data";
import Contact1 from "../store/svg/contact/Contact1";

export default function Contact() {
  return (
    <div className=" font-lato mt-20 h-full w-full ring-8 grid col-span-10">
      {/* === SECTION 01 === */}
      <section className=" col-start-1 col-end-6 flex bg-dim">
        <Image src={contact1} alt="img" className=" w-52 object-cover" />
        <div className=" flex  flex-col items-center px-10 justify-center">
          <h1 className=" text-4xl whitespace-pre-line px-6 py-6 text-center text-primary font-extrabold">
            {contactData.sec1.title}
          </h1>

          <div className=" grid my-6 justify-center">
            {contactData.sec1.smallText.map((each, i) => {
              return (
                <div key={i} className=" flex gap-3 my-1 items-center">
                  <span className=" h-2 w-2 bg-primary"></span>
                  <p className=""> {each} </p>
                </div>
              );
            })}
          </div>

          <div className=" bg-primary py-2 gap-4 px-4 flex justify-center">
            <Contact1 styles=" text-white w-8" />
            <p className=" text-white text-xl">{contactData.sec1.phone}</p>
          </div>
        </div>
      </section>

      {/* === SECTION 02 === */}
      <section className=" col-start-6 col-end-11 h-full">
        <Image src={contactData.sect2.img} alt="img" className=" h-full" />
      </section>
    </div>
  );
}
