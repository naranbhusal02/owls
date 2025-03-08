"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Award, Users, Rocket } from "lucide-react"

const milestones = [
  {
    year: 2020,
    title: "Night Owls Founded",
    description: "Started with a team of passionate developers during a hackathon",
    icon: Calendar,
    image: "/placeholder.svg?height=400&width=600",
    stats: "5 founding members",
  },
  {
    year: 2021,
    title: "First Major Project Launch",
    description: "Successfully delivered our first enterprise-scale application",
    icon: Rocket,
    image: "/placeholder.svg?height=400&width=600",
    stats: "10,000+ users",
  },
  {
    year: 2022,
    title: "Team Expansion",
    description: "Grew our team and moved to a new office space",
    icon: Users,
    image: "/placeholder.svg?height=400&width=600",
    stats: "15+ team members",
  },
  {
    year: 2023,
    title: "Industry Recognition",
    description: "Won multiple awards for innovation and excellence",
    icon: Award,
    image: "/placeholder.svg?height=400&width=600",
    stats: "3 major awards",
  },
]

export default function Story() {
  return (
    <section id="story" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to industry recognition, our story is one of passion, innovation, and continuous
            growth.
          </p>
        </motion.div>

        <div className="space-y-24">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-2xl shadow-xl"
                  >
                    <Image
                      src={milestone.image || "/placeholder.svg"}
                      alt={milestone.title}
                      width={600}
                      height={400}
                      className="object-cover aspect-video"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-lg font-semibold">{milestone.stats}</p>
                    </div>
                  </motion.div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                    <milestone.icon className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-4xl font-bold text-primary">{milestone.year}</h3>
                  <div className="h-px flex-1 bg-primary/30" />
                </div>
                <h4 className="text-2xl font-semibold">{milestone.title}</h4>
                <p className="text-muted-foreground text-lg">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

