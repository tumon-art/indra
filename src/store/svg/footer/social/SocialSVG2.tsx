import { ReactNode } from "react";

export default function SocialSVG2({
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
        d="M40.3334 7.35169C38.5001 8.25002 36.7034 8.61486 34.8334 9.16669C32.7782 6.84752 29.7312 6.71919 26.8034 7.81552C23.8756 8.91186 21.9579 11.5922 22.0001 14.6667V16.5C16.0509 16.6522 10.7526 13.9425 7.33341 9.16669C7.33341 9.16669 -0.333586 22.7939 14.6667 29.3334C11.2347 31.6195 7.81191 33.1614 3.66675 33C9.73142 36.3055 16.3406 37.4422 22.0624 35.7812C28.6257 33.8745 34.0194 28.9557 36.0892 21.5875C36.7067 19.3466 37.0133 17.0314 37.0004 14.707C36.9967 14.2505 39.7687 9.62502 40.3334 7.34986V7.35169Z"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
