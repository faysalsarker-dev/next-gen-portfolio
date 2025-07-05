'use client'

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const links = [
  { name: "Start", href: "#" },
  { name: "DeFi Methods", href: "#" },
  { name: "Crypto Labs", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Exchange", href: "#" },
]

export default function Navbar() {
  return (
    <header className="fixed bg-[#1B1427] top-0 z-50 w-full border-b backdrop-blur  dark:bg-zinc-900/50 dark:supports-[backdrop-filter]:bg-zinc-900/30">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-black dark:text-white">
          Fynex
        </Link>

        {/* Center Menu */}
    <div className="glassy  flex-1 flex items-center justify-center border-2 border-red-500 h-full">
            <nav className=" hidden md:flex space-x-6 text-sm font-medium text-muted-foreground">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="transition hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
    
    </div>
        {/* Right: Region Dropdown + Contact Button */}
        <div className="flex items-center space-x-2">
          {/* Region Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-sm font-normal">
                Region <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>🇺🇸 USA</DropdownMenuItem>
              <DropdownMenuItem>🇪🇺 Europe</DropdownMenuItem>
              <DropdownMenuItem>🌏 Asia</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Contact Button */}
          <Button variant="default" className="text-sm">
            Contact
          </Button>
        </div>
      </div>
    </header>
  )
}
