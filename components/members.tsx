"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Twitter,
  Linkedin,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const members = [
  {
    id: 1,
    name: "Narayan Bhusal",
    role: "Moderator",
    image: "https://iili.io/2yBChFV.png",
    github: "https://github.com/naranbhusal02",
    twitter: "https://twitter.com/naranbhusal02",
    linkedin: "https://linkedin.com/in/naranbhusal02",
    website: "https://naranbhusal02.me",
  },
  {
    id: 2,
    name: "Nayan Acharya",
    role: "Moderator",
    image: "https://iili.io/2Z7vNls.jpg",
    github: "https://github.com/nayan135",
    twitter: "https://twitter.com/NoOneKnows135",
    linkedin: "https://linkedin.com/in/nayan-acharya",
    website: "https://nayan135.com.np",
  },
  {
    id: 3,
    name: "Mission Acharya",
    role: "Moderator",
    image: "https://iili.io/2yLtERR.jpg",
    github: "https://github.com/JCT-B",
    twitter: "https://twitter.com/JCT-B",
    linkedin: "https://linkedin.com/in/mission-acharya",
    website: "https://janesmith.design",
  },
  {
    id: 4,
    name: "Shasank Shrestha",
    role: "Developer",
    image: "https://iili.io/2yx6cVs.png",
    github: "https://github.com/shasank00",
    twitter: "https://twitter.com/alexjohnson",
    linkedin: "https://linkedin.com/in/shasank-shrestha",
    website: "https://alexjohnson.dev",
  },
  {
    id: 5,
    name: "Sanjog Pandey",
    role: "Developer",
    image: "https://iili.io/32sxAle.png",
    github: "https://github.com/sarahwilson",
    twitter: "https://twitter.com/sarahwilson",
    linkedin: "https://linkedin.com/in/sanjog-pandey",
    website: "https://sarahwilson.pm",
  },
  {
    id: 6,
    name: "Prazwal Roka",
    role: "Developer",
    image: "https://iili.io/32sIsPS.png",
    github: "https://github.com/sarahwilson",
    twitter: "https://twitter.com/sarahwilson",
    linkedin: "https://linkedin.com/in/prazwal-roka",
    website: "https://sarahwilson.pm",
  },
  {
    id: 7,
    name: "Nishan Regmi",
    role: "Developer",
    image: "https://iili.io/2rQSlI4.jpg",
    github: "https://github.com/nishandotdev",
    twitter: "https://twitter.com/nishanregmi",
    linkedin: "https://linkedin.com/in/nishan-regmi",
    website: "https://nishanregmi.info.np",
  },
  {
    id: 8,
    name: "Rabin Chudali",
    role: "Developer",
    image: "https://iili.io/2yt9vbs.jpg",
    github: "https://github.com/sarahwilson",
    twitter: "https://twitter.com/sarahwilson",
    linkedin: "https://linkedin.com/in/rabin-chudali",
    website: "https://sarahwilson.pm",
  },
];

export default function Members() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        behavior: "smooth",
        left: scrollAmount,
      });
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the talented individuals who make up our team. Each member
            brings unique skills and perspectives to our projects.
          </p>
        </motion.div>

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
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <AnimatePresence>
              {members.map((member) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex-shrink-0 w-[300px] snap-start"
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-lg p-6 flex flex-col items-center">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-muted-foreground mb-6">{member.role}</p>
                    <div className="flex gap-4">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                        <span className="sr-only">Twitter</span>
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                      >
                        <Globe className="w-5 h-5" />
                        <span className="sr-only">Website</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
