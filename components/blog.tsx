"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Building Accessible Web Applications",
    excerpt: "Learn how to create web applications that are accessible to everyone, regardless of ability.",
    date: "March 15, 2025",
    image: "/placeholder.svg?height=200&width=300",
    url: "/blog/building-accessible-web-applications",
  },
  {
    id: 2,
    title: "The Future of React and Next.js",
    excerpt: "Exploring the latest features and future direction of React and Next.js development.",
    date: "March 1, 2025",
    image: "/placeholder.svg?height=200&width=300",
    url: "/blog/future-of-react-nextjs",
  },
  {
    id: 3,
    title: "Optimizing Performance with Tailwind CSS",
    excerpt: "Tips and tricks for building high-performance websites using Tailwind CSS.",
    date: "February 20, 2025",
    image: "/placeholder.svg?height=200&width=300",
    url: "/blog/optimizing-performance-tailwind",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Posts</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on development, design, and technology from the Night Owls team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-40">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <Link href={post.url} className="text-sm font-medium text-primary hover:underline">
                  Read More
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

