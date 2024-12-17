import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "white" | "link"
  size?: "default" | "sm" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500",
          "disabled:pointer-events-none disabled:opacity-50",
          "px-6 py-3 min-h-[48px]",
          {
            "bg-purple-600 text-white hover:bg-purple-700 shadow-lg": variant === "default",
            "bg-white text-purple-600 hover:bg-gray-50": variant === "white",
            "border-2 border-purple-600 text-purple-600 hover:bg-purple-50": variant === "outline",
          },
          {
            "text-sm px-4 py-2 min-h-[40px]": size === "sm",
            "text-lg px-8 py-4 min-h-[56px]": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button" 