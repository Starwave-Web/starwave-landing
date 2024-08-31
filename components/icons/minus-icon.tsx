import { type ElementRef, type SVGProps } from "react";

const MinusIcon = (props: SVGProps<ElementRef<"svg">>) => {
  return (
    <svg
      {...props}
      width="58"
      height="59"
      viewBox="0 0 58 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
      <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
    </svg>
  );
};

export default MinusIcon;
