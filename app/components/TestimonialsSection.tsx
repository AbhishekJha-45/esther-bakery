'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Cake } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    quote: "Esther's cakes are simply divine! They've been our go-to for family celebrations for years.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "Michael Chen",
    quote: "The attention to detail in every pastry is remarkable. It's not just food, it's art!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "Emily Rodriguez",
    quote: "I ordered a custom cake for my daughter's birthday, and it exceeded all expectations. Thank you, Esther!",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-amber-800 mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg border border-amber-100 relative"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-amber-400 rounded-full p-2 shadow-md">
                <Cake className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center mb-4 space-x-4">
                <div className="w-16 h-16 mr-4 rounded-full border-2 border-amber-400 overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-amber-800">{testimonial.name}</h3>
              </div>
              <p className="text-amber-900 italic relative pl-6">
                <span className="absolute top-0 left-0 text-4xl text-amber-400">"</span>
                {testimonial.quote}
                <span className="absolute bottom-0 right-0 text-4xl text-amber-400">"</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Decorative background"
          layout="fill"
          objectFit="cover"
          className="opacity-5"
        />
      </div>
    </section>
  )
}

