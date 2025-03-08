"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.github.com/orgs/Night-of-Owls/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching projects:", error)
        setLoading(false)
      })
  }, [])

  const toggleProjects = () => {
    setVisibleProjects((prev) => (prev === 6 ? projects.length : 6))
  }

  if (loading) {
    return <div>Loading projects...</div>
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our award-winning hackathon projects and ongoing initiatives. Each project represents our commitment
            to innovation and quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description || "No description available."}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.map((tech) => (
                    <span key={tech} className="text-xs bg-secondary px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Link
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </Link>
                  {project.homepage && (
                    <Link
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 6 && (
          <div className="mt-8 text-center">
            <Button onClick={toggleProjects} variant="outline">
              {visibleProjects === 6 ? (
                <>
                  See More <ChevronDown className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  See Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

