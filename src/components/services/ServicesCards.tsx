import Shape1 from "../svg/Shape1";

interface Props {
  svg: SVGAElement | any;
  text: string;
  i: number;
}
export default function ServicesCards({ svg, text, i }: Props) {
  return (
    <>
      {i == 2 ? (
        <div
          className=" relative h-32 overflow-hidden w-32 ring-primar bg-primary flex
flex-col justify-top pt-2 items-center "
        >
          <div className=" text-textWhite w-12 h-12">{svg}</div>
          <p className=" text-center font-semibold text-sm text-textWhite">
            {text}
          </p>
          <Shape1 styles="text-textWhite absolute bottom-[-2px] right-[-2px]" />
        </div>
      ) : (
        <div
          className=" relative h-32 overflow-hidden w-32 ring-2 ring-primary bg-dim flex
  flex-col justify-top pt-2 items-center "
        >
          <div className=" text-primary w-12 h-12">{svg}</div>
          <p className=" text-center font-semibold text-sm text-primary">
            {text}
          </p>
          <Shape1 styles="text-primary absolute bottom-[-2px] right-[-2px]" />
        </div>
      )}
    </>
  );
}
