import { type ElementRef, type SVGProps } from "react";

const CheckMarkIcon = (props: SVGProps<ElementRef<"svg">>) => {
  return (
    <svg
    {...props}
      width="41"
      height="42"
      viewBox="0 0 41 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20.5" cy="21" r="20.5" fill="#B9FF66" />
      <path
        d="M9 21.7568L16.3333 28.9815L31 13.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckMarkIcon;
