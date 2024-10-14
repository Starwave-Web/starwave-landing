import { type ElementRef, type SVGProps } from "react";

const MinusIcon = (props: SVGProps<ElementRef<"svg">>) => {
  return (
    <svg
      {...props}
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="29" cy="29" r="28.5" fill="#F3F3F3" stroke="#191A23" />
      <path d="M16 31.5V26H41V31.5H16Z" fill="#191A23" />
    </svg>
  );
};

export default MinusIcon;
