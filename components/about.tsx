"use client"

import { motion } from "framer-motion"
import { Code, Palette, Lightbulb, Trophy, Rocket, Users } from "lucide-react"

const skills = [
  { name: "Web Development", icon: Code, color: "text-blue-500" },
  { name: "UI/UX Design", icon: Palette, color: "text-purple-500" },
  { name: "Problem Solving", icon: Lightbulb, color: "text-yellow-500" },
  { name: "Hackathon Winners", icon: Trophy, color: "text-green-500" },
  { name: "Rapid Prototyping", icon: Rocket, color: "text-red-500" },
  { name: "Team Collaboration", icon: Users, color: "text-indigo-500" },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-muted-foreground mb-6">
              Night Owls is a community of passionate developers and designers who came together to build something for the welfare of society from their learning. We specialize in creating innovative solutions using modern web technologies.
            </p>
            <p className="text-muted-foreground mb-6">
              Our mission is to solve real-world problems through elegant code and thoughtful design. We believe in the
              power of technology to make a positive impact on people's lives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2 p-4 rounded-lg bg-card shadow-md"
                >
                  <skill.icon className={`h-8 w-8 ${skill.color}`} />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

