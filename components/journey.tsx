"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Award,
  Users,
  Rocket,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const milestones = [
  {
    year: 2024,
    title: "Night Owls Founded",
    description:
      "Started with a team of passionate developers during a hackathon",
    icon: Calendar,
    image: "/placeholder.svg?height=400&width=600",
    stats: "3 founding members",
  },
  {
    year: 2021,
    title: "First Major Project Launch",
    description:
      "Successfully delivered our first enterprise-scale application",
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
  {
    year: 2024,
    title: "Global Expansion",
    description:
      "Opened our first international office, taking on projects from clients around the world",
    icon: Globe,
    image: "/placeholder.svg?height=400&width=600",
    stats: "Clients in 10+ countries",
  },
];

export default function Journey() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollTimeline = (direction: "left" | "right") => {
    if (timelineRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      timelineRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleMilestoneClick = (index: number) => {
    setActiveIndex(index);
    if (timelineRef.current) {
      const milestoneElement = timelineRef.current.children[
        index
      ] as HTMLElement;
      milestoneElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <section id="journey" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From our humble beginnings to becoming an industry leader, explore
            the key moments that have shaped Night Owls.
          </p>
        </motion.div>

        <div className="relative mb-12">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            onClick={() => scrollTimeline("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
            onClick={() => scrollTimeline("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <div
            ref={timelineRef}
            className="flex overflow-x-auto space-x-8 pb-4 scrollbar-hide"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`flex-shrink-0 w-40 text-center cursor-pointer ${
                  index === activeIndex
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => handleMilestoneClick(index)}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-2">
                  <milestone.icon className="w-8 h-8 mx-auto" />
                </div>
                <div className="font-bold">{milestone.year}</div>
                <div className="text-sm">{milestone.title}</div>
                <div
                  className={`w-full h-1 mt-2 ${
                    index === activeIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src={milestones[activeIndex].image || "/placeholder.svg"}
                alt={milestones[activeIndex].title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {milestones[activeIndex].title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {milestones[activeIndex].description}
              </p>
              <div className="bg-card p-4 rounded-lg shadow-md">
                <h4 className="font-semibold mb-2">Key Achievement</h4>
                <p>{milestones[activeIndex].stats}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
