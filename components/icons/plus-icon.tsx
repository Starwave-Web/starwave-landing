import { type ElementRef, type SVGProps } from "react";

const PlusIcon = (props: SVGProps<ElementRef<"svg">>) => {
  return (
    <svg
      {...props}
      width="58"
      height="59"
      viewBox="0 0 58 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="29" cy="29.5001" r="28.5" fill="#F3F3F3" stroke="#191A23" />
      <path
        d="M25.6 41.5801V31.8601H16V26.2201H25.6V16.5001H31.48V26.2201H41.08V31.8601H31.48V41.5801H25.6Z"
        fill="#191A23"
      />
    </svg>
  );
};

export default PlusIcon;
