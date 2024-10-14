import { type ElementRef, type SVGProps } from "react";

const FacebookIcon = (props: SVGProps<ElementRef<"svg">>) => {
  return (
    <svg
    {...props}
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 15.8921C30 7.55535 23.2863 0.800781 15 0.800781C6.71371 0.800781 0 7.55535 0 15.8921C0 23.4377 5.44355 29.7054 12.6411 30.8008V20.2734H8.83064V15.8921H12.6411V12.6061C12.6411 8.83324 14.879 6.70342 18.2661 6.70342C19.9597 6.70342 21.6532 7.00768 21.6532 7.00768V10.7196H19.7782C17.9032 10.7196 17.2984 11.8758 17.2984 13.0929V15.8921H21.4718L20.8065 20.2734H17.2984V30.8008C24.496 29.7054 30 23.4377 30 15.8921Z"
        fill="inherit"
      />
    </svg>
  );
};

export default FacebookIcon;
