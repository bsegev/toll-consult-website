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
          "inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          "disabled:pointer-events-none disabled:opacity-50",
          "px-6 py-3 min-h-[48px]",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg": variant === "default",
            "bg-foreground text-primary hover:bg-foreground/90": variant === "white",
            "border-2 border-primary text-primary hover:bg-primary/10": variant === "outline",
            "text-primary underline-offset-4 hover:underline": variant === "link",
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