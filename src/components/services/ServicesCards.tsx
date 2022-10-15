import { shapeSVG } from "../../store/data";

interface Props {
  svg: SVGAElement | any;
  text: string;
}
export default function ServicesCards({ svg, text }: Props) {
  return (
    <div
      className=" relative h-32 overflow-hidden w-32 ring-2 ring-primary bg-dim flex
      flex-col justify-top pt-2 items-center "
    >
      <div className=" text-primary w-12 h-12">{svg}</div>
      <p className=" text-center font-semibold text-sm text-primary">{text}</p>
      <span className=" text-primary absolute bottom-[-2px] right-[-2px]">
        {shapeSVG.shape1}
      </span>
    </div>
  );
}
