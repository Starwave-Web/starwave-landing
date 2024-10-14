import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import TopRightArrow from "@/components/icons/top-right-arrow"
import ArrowCircleIconOne from "@/components/icons/arrow-circle-icon-one"
import ArrowCircleIconTwo from "@/components/icons/arrow-circle-icon-two"

const buttonVariants = cva(
  "font-space text-white rounded-[14px] bg-primary-dark text-outlaw flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "py-[20px] px-[35px] text-white hover:bg-primary-dark/95",
        outline: "text-black bg-transparent border border-black !py-[20px] !px-[35px] hover:bg-primary-grey",
        secondary: "text-black bg-white !py-[20px] !px-[35px]",
        link: "text-primary-green",
        icon: "text-black"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      iconType: {
        dark: "",
        light: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      iconType: "dark"
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, iconType, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, iconType, className }))}
        ref={ref}
        {...props}
      >
        {variant === "icon" && (iconType === "dark" ? <ArrowCircleIconOne className="mr-[15px]" /> : <ArrowCircleIconTwo className="mr-[15px]" />)}
        {children}
        {variant === "link" && <TopRightArrow className="ml-[15px] fill-primary-green"/>}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
