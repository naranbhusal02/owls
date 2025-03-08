"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Lightbulb, Users } from "lucide-react"

const sections = [
  {
    id: "innovation",
    icon: Lightbulb,
    title: "Innovative Solutions",
    content: "Crafting cutting-edge web experiences",
  },
  { id: "code", icon: Code, title: "Clean Code", content: "Building robust and scalable applications" },
  {
    id: "collaboration",
    icon: Users,
    title: "Collaborative Approach",
    content: "Working together to bring ideas to life",
  },
]

export default function Homepage() {
  const [activeSection, setActiveSection] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - left) / width
        const y = (e.clientY - top) / height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    controls.start({
      background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, var(--gradient-start), var(--gradient-end))`,
    })
  }, [mousePosition, controls])

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center overflow-hidden relative"
      style={
        {
          "--gradient-start": "var(--primary)",
          "--gradient-end": "var(--background)",
        } as React.CSSProperties
      }
    >
      <motion.div
        className="absolute inset-0 z-0"
        animate={controls}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />

      <div className="container mx-auto px-4 z-10">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Night Owls
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className={`bg-card p-6 rounded-lg shadow-lg ${index === activeSection ? "ring-2 ring-primary" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <section.icon className="w-12 h-12 mb-4 text-primary" />
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              <p className="text-muted-foreground">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Discover Our Story
            <ArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

