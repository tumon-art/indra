import { ReactNode } from "react";

export default function SocialSVG1({
  styles,
  children,
}: {
  styles: string;
  children: ReactNode;
}) {
  return (
    <svg
      className={styles}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
      <path
        d="M12.8333 18.3333V25.6667H18.3333V38.5H25.6666V25.6667H31.1666L32.9999 18.3333H25.6666V14.6667C25.6666 14.1804 25.8597 13.7141 26.2036 13.3703C26.5474 13.0265 27.0137 12.8333 27.4999 12.8333H32.9999V5.5H27.4999C25.0688 5.5 22.7372 6.46577 21.0181 8.18485C19.299 9.90394 18.3333 12.2355 18.3333 14.6667V18.3333H12.8333Z"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
