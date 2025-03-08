import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Night Owls. All rights reserved.
            </p>
          </div>
          <nav className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
              About
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary">
              Projects
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/nightowls"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground/10 p-2 rounded-full hover:bg-foreground/20 transition-colors"
            >
              <Github className="h-5 w-5 text-foreground" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com/nightowls"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground/10 p-2 rounded-full hover:bg-foreground/20 transition-colors"
            >
              <Twitter className="h-5 w-5 text-foreground" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com/company/nightowls"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground/10 p-2 rounded-full hover:bg-foreground/20 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-foreground" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://instagram.com/nightowls"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground/10 p-2 rounded-full hover:bg-foreground/20 transition-colors"
            >
              <Instagram className="h-5 w-5 text-foreground" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

