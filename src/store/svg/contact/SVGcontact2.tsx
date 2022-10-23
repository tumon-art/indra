import { ReactNode } from "react";

interface Props {
  styles: string;
}

export default function SVGcontact2({ styles }: Props) {
  return (
    <svg
      className={styles}
      viewBox="0 0 254 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0L254 15V53H0V0Z"
        fill="currentColor"
      />
    </svg>
  );
}
