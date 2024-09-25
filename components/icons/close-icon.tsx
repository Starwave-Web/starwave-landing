import { type ElementRef, type SVGProps } from "react";

const CloseIcon = (props: SVGProps<ElementRef<"svg">>) => {
  return (
    <svg
    {...props}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6208 15.8032C17.8622 16.0447 17.9979 16.3721 17.9979 16.7136C17.9979 17.0551 17.8622 17.3825 17.6208 17.624C17.3793 17.8654 17.0518 18.0011 16.7104 18.0011C16.3689 18.0011 16.0415 17.8654 15.8 17.624L9 10.8218L2.19785 17.6218C1.9564 17.8633 1.62893 17.9989 1.28747 17.9989C0.946013 17.9989 0.61854 17.8633 0.377092 17.6218C0.135644 17.3804 3.59785e-09 17.0529 0 16.7115C-3.59785e-09 16.37 0.135644 16.0425 0.377092 15.8011L7.17924 9.00107L0.379234 2.19892C0.137786 1.95748 0.00214212 1.63 0.00214212 1.28854C0.00214212 0.947084 0.137786 0.619611 0.379234 0.378163C0.620682 0.136715 0.948155 0.00107086 1.28961 0.00107086C1.63107 0.00107085 1.95855 0.136715 2.19999 0.378163L9 7.18031L15.8021 0.377092C16.0436 0.135644 16.3711 -5.68871e-09 16.7125 0C17.054 5.68871e-09 17.3815 0.135644 17.6229 0.377092C17.8644 0.618539 18 0.946013 18 1.28747C18 1.62893 17.8644 1.9564 17.6229 2.19785L10.8208 9.00107L17.6208 15.8032Z"
        fill="white"
      />
    </svg>
  );
};

export default CloseIcon;
