import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Image 
      src="/toll-consult_logo_purple.svg"
      alt="TOLL Legal Consulting"
      width={150}
      height={81}
      className={cn("w-auto", className)}
      priority
    />
  )
} 