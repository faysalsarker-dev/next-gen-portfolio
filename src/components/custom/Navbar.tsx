
'use client'
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ChevronDown, Globe2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { label: "Start", href: "/" },
  { label: "DeFi Network", href: "/defi" },
  { label: "Crypto Labs", href: "/labs" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Exchange", href: "/exchange" },
]

export default function CyberpunkNavbar() {
  const navRef = useRef(null)
  const controls = useAnimation()
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useGSAP(() => {
    gsap.from(".nav-link", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed top-0 w-full z-50 transition-transform duration-500 backdrop-blur-lg border-b border-white/10",
        visible ? "translate-y-0" : "-translate-y-full",
        "bg-background/50 bg-glass glass"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-lg font-semibold tracking-wide">Fynex</div>

        {/* Nav Links Centered */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-6 text-sm">
          {navItems.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Link
                href={item.href}
                className={cn(
                  "nav-link transition-colors",
                  pathname === item.href
                    ? "text-white font-semibold"
                    : "text-white/70 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-white/80 hover:text-white border border-white/10 bg-white/5 backdrop-blur-md p-2"
              >
                <Globe2 className="w-5 h-5" />
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background/60 backdrop-blur-md text-white border border-white/10">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>বাংলা</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="bg-primary text-white hover:bg-primary/90 shadow-[0_0_14px_#782EFA]">
            Let’s Talk
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" className="text-white">
            ☰
          </Button>
        </div>
      </div>
    </header>
  )
}
