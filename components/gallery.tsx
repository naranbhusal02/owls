"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Calendar, Users, BookOpen, Video, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", label: "ALL EVENTS" },
  { id: "community", label: "COMMUNITY MEETUPS", icon: Users },
  { id: "training", label: "TRAINING SESSIONS", icon: BookOpen },
  { id: "webinar", label: "WEBINARS", icon: Video },
  { id: "upcoming", label: "UPCOMING EVENTS", icon: Calendar },
]

const events = [
  {
    id: 1,
    title: "Web Development Workshop",
    description:
      "Hands-on session covering modern web development practices and tools. Participants will learn about the latest frameworks and best practices in frontend and backend development.",
    category: "training",
    images: [
      "https://iili.io/2yWYPWX.jpg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    date: "March 15, 2025",
    location: "Tech Hub",
    attendees: 30,
    duration: "6 hours",
  },
  {
    id: 2,
    title: "Community Meetup",
    description:
      "Monthly gathering of developers to share knowledge and experiences. This event features lightning talks, networking sessions, and collaborative problem-solving exercises.",
    category: "community",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    date: "March 20, 2025",
    location: "Innovation Center",
    attendees: 50,
    duration: "3 hours",
  },
  {
    id: 3,
    title: "AI in Web Applications",
    description:
      "Online session about integrating AI capabilities in web apps. Learn how to leverage machine learning models and natural language processing in your web projects.",
    category: "webinar",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    date: "April 1, 2025",
    location: "Virtual",
    attendees: 100,
    duration: "2 hours",
  },
  {
    id: 4,
    title: "Future of Web Technologies",
    description:
      "Explore emerging trends and technologies shaping the future of web development. This session covers topics like WebAssembly, Edge Computing, and Progressive Web Apps.",
    category: "webinar",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    date: "April 15, 2025",
    location: "Virtual",
    attendees: 150,
    duration: "2.5 hours",
  },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const slideInContainerRef = useRef<HTMLDivElement>(null)

  const filteredEvents = events.filter((event) => activeCategory === "all" || event.category === activeCategory)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400
      scrollContainerRef.current.scrollBy({ behavior: "smooth", left: scrollAmount })
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedEvent && slideInContainerRef.current && !slideInContainerRef.current.contains(event.target as Node)) {
        setSelectedEvent(null)
      }
    }

    if (selectedEvent) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [selectedEvent])

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Events & Gallery</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="flex gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 ${
                activeCategory === category.id ? "bg-white text-black" : "hover:bg-white/10"
              }`}
            >
              {category.icon && <category.icon className="w-4 h-4 mr-2" />}
              {category.label}
            </Button>
          ))}
        </div>

        <div className="relative mt-8">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <AnimatePresence>
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex-shrink-0 w-[400px] snap-start"
                >
                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <Image
                      src={event.images[0] || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                        <p className="text-sm text-white/80 line-clamp-2">{event.description}</p>
                        <div className="flex items-center justify-between text-sm pt-2">
                          <span className="text-white/60">{event.date}</span>
                          <button className="text-white flex items-center gap-2 hover:text-white/80">
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              ref={slideInContainerRef}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute inset-y-0 right-0 w-full md:w-2/3 lg:w-1/2 bg-background shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4"
                  onClick={() => setSelectedEvent(null)}
                >
                  <X className="h-6 w-6" />
                </Button>
                <h2 className="text-3xl font-bold mb-4">{selectedEvent.title}</h2>
                <p className="text-muted-foreground mb-6">{selectedEvent.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-1">Date</h3>
                    <p>{selectedEvent.date}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p>{selectedEvent.location}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Attendees</h3>
                    <p>{selectedEvent.attendees}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Duration</h3>
                    <p>{selectedEvent.duration}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Event Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedEvent.images.map((image, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${selectedEvent.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

