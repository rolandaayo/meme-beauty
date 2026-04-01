import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import FeaturedServices from '@/components/FeaturedServices'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      {/* Featured Services */}
      <div className="bg-gradient-to-br from-pink-100 via-pink-50 to-white">
        <FeaturedServices />
      </div>

      {/* Why Choose Us Section - Flexbox with Text Left, Image Right */}
      <section className="py-20 bg-gradient-to-r from-white via-pink-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content - Left */}
            <div className="flex-1 order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose MEME BEAUTYWORLD</h2>
              <p className="text-lg text-gray-600 mb-6">
                We&apos;re dedicated to providing the highest quality beauty services with a personal touch. Our experienced team uses only premium products and techniques.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-beauty-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Professional Technicians</h3>
                    <p className="text-gray-600 text-sm">Certified and experienced beauty professionals</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-beauty-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Premium Products</h3>
                    <p className="text-gray-600 text-sm">Only the best materials for your beauty needs</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-beauty-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Hygienic Environment</h3>
                    <p className="text-gray-600 text-sm">Strictly maintained sanitation standards</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-beauty-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Custom Designs</h3>
                    <p className="text-gray-600 text-sm">Personalized nail art and lash styles</p>
                  </div>
                </li>
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-beauty-pink text-white px-8 py-3 rounded-full hover:bg-beauty-dark transition-colors font-bold"
              >
                Learn More <ArrowRight size={20} />
              </Link>
            </div>

            {/* Image - Right */}
            <div className="flex-1 order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-full min-h-96">
                <img 
                  src="/lashes-hero.jpg" 
                  alt="Professional eyelash extensions" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section - Flexbox with Image Left, Text Right */}
      <section className="py-20 bg-beauty-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image - Left */}
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-full min-h-96">
                <img 
                  src="/pedicure-hero.jpg" 
                  alt="Luxury pedicure with nail art" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content - Right */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Pedicure Excellence</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our pedicure services go beyond ordinary. We combine relaxation, luxury, and expert craftsmanship to deliver results that last.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Spa Experience</h3>
                  <p className="text-gray-600 text-sm">Indulge in foot massages and hot stone therapy</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Nail Art Designs</h3>
                  <p className="text-gray-600 text-sm">Custom designs and trendy nail art styles</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Long-Lasting Polish</h3>
                  <p className="text-gray-600 text-sm">Gel and traditional polish options available</p>
                </div>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-beauty-pink text-white px-8 py-3 rounded-full hover:bg-beauty-dark transition-colors font-bold"
              >
                Explore Pedicure Services <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className="bg-gradient-to-b from-pink-50 to-white">
        <TestimonialsCarousel />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-beauty-pink to-beauty-rose">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Look?</h2>
          <p className="text-lg mb-8 opacity-90">
            Book your appointment today and experience the MEME BEAUTYWORLD difference
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-beauty-pink px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-bold text-lg"
          >
            Book Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
