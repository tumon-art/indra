interface Props {
  svg: SVGAElement | any;
  text: string;
}
export default function ServicesCards({ svg, text }: Props) {
  console.log(svg);
  return (
    <div className="">
      <div className=" text-primary w-20 h-20">{svg}</div>

      <p> {text} </p>
    </div>
  );
}
