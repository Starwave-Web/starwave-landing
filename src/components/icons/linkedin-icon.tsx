import { type ElementRef, type SVGProps } from "react";
const LinkedInIcon = (props: SVGProps<ElementRef<"svg">>) => {
  return (
    <svg
      {...props}
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15.8008" r="15" fill="inherit" />
      <path
        d="M8.22154 22.8596H11.3056V12.8752H8.22154V22.8596Z"
        fill="black"
      />
      <path
        d="M7.94116 9.68774C7.94116 10.6721 8.73555 11.469 9.76359 11.469C10.7449 11.469 11.5393 10.6721 11.5393 9.68774C11.5393 8.70337 10.7449 7.85962 9.76359 7.85962C8.73555 7.85962 7.94116 8.70337 7.94116 9.68774Z"
        fill="black"
      />
      <path
        d="M19.8103 22.8596H22.9412V17.3752C22.9412 14.7034 22.3337 12.594 19.2028 12.594C17.7075 12.594 16.6795 13.4377 16.2589 14.2346H16.2122V12.8752H13.2683V22.8596H16.3524V17.9377C16.3524 16.6252 16.586 15.3596 18.2215 15.3596C19.8103 15.3596 19.8103 16.8596 19.8103 17.9846V22.8596Z"
        fill="black"
      />
    </svg>
  );
};

export default LinkedInIcon;
