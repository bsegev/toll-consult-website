"use client"

import { LinkedinIcon, TwitterIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-purple-500/20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Link href="/">
                <Image 
                  src="/toll-consult_logo_purple.png"
                  alt="TOLL Legal Consulting"
                  width={200}
                  height={83}
                  className="w-auto h-[60px] transform-gpu"
                  priority
                />
              </Link>
              <p className="text-gray-400 text-base">
                Strategic legal counsel for businesses and individuals.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <span className="sr-only">LinkedIn</span>
                  <LinkedinIcon className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <span className="sr-only">Twitter</span>
                  <TwitterIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Services</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <Link href="/business" className="text-base text-gray-400 hover:text-purple-300">
                        For Business
                      </Link>
                    </li>
                    <li>
                      <Link href="/personal" className="text-base text-gray-400 hover:text-purple-300">
                        For Individuals
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="text-base text-gray-400 hover:text-purple-300">
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Resources</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <Link href="/about" className="text-base text-gray-400 hover:text-purple-300">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-base text-gray-400 hover:text-purple-300">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <Link href="/about" className="text-base text-gray-400 hover:text-purple-300">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-base text-gray-400 hover:text-purple-300">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <Link href="/privacy" className="text-base text-gray-400 hover:text-purple-300">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="text-base text-gray-400 hover:text-purple-300">
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2024 Toll Legal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 