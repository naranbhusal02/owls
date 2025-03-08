import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Gallery from "@/components/gallery"
import Journey from "@/components/journey"
import Contact from "@/components/contact"
import Members from "@/components/members"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Members />
      <Projects />
      <Gallery />
      <Contact />
    </>
  )
}

