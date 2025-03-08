"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const teamMembers = [
  { id: 1, name: "Alice Johnson", role: "Frontend Developer", image: "/placeholder.svg?height=400&width=400" },
  { id: 2, name: "Bob Smith", role: "Backend Developer", image: "/placeholder.svg?height=400&width=400" },
  { id: 3, name: "Charlie Brown", role: "UI/UX Designer", image: "/placeholder.svg?height=400&width=400" },
  { id: 4, name: "Diana Ross", role: "Project Manager", image: "/placeholder.svg?height=400&width=400" },
]

const milestones = [
  { year: 2020, event: "Night Owls founded" },
  { year: 2021, event: "First major project launch" },
  { year: 2022, event: "Team expansion" },
  { year: 2023, event: "Industry award win" },
]

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev + 1) % teamMembers.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const navigate = (newDirection: number) => {
    setDirection(newDirection)
    setActiveIndex((prev) => (prev + newDirection + teamMembers.length) % teamMembers.length)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">Our Story</h1>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="ml-8 mb-8 relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute -left-11 top-1 w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold">{milestone.year}</h3>
                <p className="text-muted-foreground">{milestone.event}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={{
                  enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (direction: number) => ({ x: direction < 0 ? 1000 : -1000, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <Image
                    src={teamMembers[activeIndex].image || "/placeholder.svg"}
                    alt={teamMembers[activeIndex].name}
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-semibold">{teamMembers[activeIndex].name}</h3>
                    <p className="text-muted-foreground">{teamMembers[activeIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={() => navigate(-1)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2"
              aria-label="Previous team member"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => navigate(1)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2"
              aria-label="Next team member"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Innovate", "Collaborate", "Elevate"].map((value, index) => (
              <motion.div
                key={value}
                className="bg-card p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-2">{value}</h3>
                <p className="text-muted-foreground">
                  {index === 0 && "Push the boundaries of what's possible in web development."}
                  {index === 1 && "Foster a culture of teamwork and knowledge sharing."}
                  {index === 2 && "Continuously improve our skills and deliver exceptional results."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

