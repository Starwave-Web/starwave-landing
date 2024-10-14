import { type ElementRef, type SVGProps } from "react";


const HamburgerMenu = (props: SVGProps<ElementRef<"svg">>) => {
  return (
    <svg
      width="30"
      height="21"
      viewBox="0 0 30 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.8999 1.75439H28.1363"
        stroke="black"
        strokeWidth="2.18637"
        strokeLinecap="round"
      />
      <path
        d="M1.8999 10.5H28.1363"
        stroke="black"
        strokeWidth="2.18637"
        strokeLinecap="round"
      />
      <path
        d="M1.8999 19.2456H28.1363"
        stroke="black"
        strokeWidth="2.18637"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HamburgerMenu;
