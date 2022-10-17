import { footerData } from "../../store/data";

export default function FooterContainer() {
  return (
    <footer className=" h-96 flex bg-dim font-lato">
      {/* === SECTION 01 ===  */}
      <section></section>
      {/* === SECTION 02 ===  */}
      <section></section>
      {/* === SECTION 03 ===  */}
      <section></section>
      <div
        className=" self-end w-full text-center bg-primary text-textWhite
         py-2 font-bold text-lg"
      >
        {footerData.copyright}
      </div>
    </footer>
  );
}
