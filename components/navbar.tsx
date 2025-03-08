"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Palette } from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Night Owls</span>
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          <button onClick={() => scrollToSection("hero")} className="nav-link text-sm font-medium">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="nav-link text-sm font-medium">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="nav-link text-sm font-medium">
            Projects
          </button>
          <button onClick={() => scrollToSection("members")} className="nav-link text-sm font-medium">
           Members
          </button>
          <button onClick={() => scrollToSection("contact")} className="nav-link text-sm font-medium">
            Contact
          </button>
          {mounted && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Palette className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("forest")}>Forest</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("ocean")}>Ocean</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("sunset")}>Sunset</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </nav>

        <div className="md:hidden flex items-center">
          {mounted && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="mr-2">
                  <Palette className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("forest")}>Forest</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("ocean")}>Ocean</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("sunset")}>Sunset</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <button className="p-2" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection("hero")} className="text-sm font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-sm font-medium">
              Projects
            </button>
            <button onClick={() => scrollToSection("members")} className="text-sm font-medium">
             Members
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium">
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

