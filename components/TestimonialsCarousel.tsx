'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  service: string
  comment: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    service: 'Classic Eyelashes',
    comment: 'Best lash extensions ever! They lasted so long and looked absolutely stunning. The team was super professional.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily Chen',
    service: 'Luxury Pedicure',
    comment: 'The pedicure was perfect. The nail art design was exactly what I wanted and the service was impeccable.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica Williams',
    service: 'Mega Volume Lashes',
    comment: 'I cannot stop getting compliments on my lashes! The team is so talented and makes you feel comfortable.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Amanda Davis',
    service: 'Spa Pedicure',
    comment: 'Relaxing, professional, and gorgeous results. I feel like royalty after every visit!',
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoplay])

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  const testimonial = testimonials[current]

  return (
    <section className="py-20 bg-gradient-to-br from-beauty-light to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">
            Join hundreds of happy customers who have transformed their beauty
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Testimonial Content */}
          <div className="mb-8">
            {/* Stars */}
            <div className="flex justify-center mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-beauty-gold text-beauty-gold"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-center text-xl text-gray-700 mb-6 italic">
              "{testimonial.comment}"
            </p>

            {/* Author */}
            <div className="text-center">
              <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
              <p className="text-beauty-pink font-semibold">{testimonial.service}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={goToPrevious}
              className="bg-beauty-light hover:bg-beauty-rose p-3 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-beauty-pink" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrent(idx)
                    setAutoplay(false)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    idx === current
                      ? 'bg-beauty-pink w-8'
                      : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="bg-beauty-light hover:bg-beauty-rose p-3 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-beauty-pink" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
