"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, MenuItem } from "@/components/ui/navbar-menu"

export function Navigation() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Services">
        <div className="flex flex-col space-y-4 text-sm">
          <Link href="/business" className="text-gray-300 hover:text-purple-400">For Business</Link>
          <Link href="/personal" className="text-gray-300 hover:text-purple-400">For Individuals</Link>
        </div>
      </MenuItem>
      <Link href="/pricing" className="text-gray-300 hover:text-purple-400">
        Pricing
      </Link>
      <MenuItem setActive={setActive} active={active} item="Contact">
        <div className="flex flex-col space-y-4 text-sm">
          <Link href="/contact" className="text-gray-300 hover:text-purple-400">Get in Touch</Link>
          <Link href="/contact" className="text-gray-300 hover:text-purple-400">Book a Call</Link>
        </div>
      </MenuItem>
    </Menu>
  )
} 