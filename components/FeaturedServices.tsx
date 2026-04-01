import { Sparkles, Wand2 } from 'lucide-react'
import Link from 'next/link'

export default function FeaturedServices() {
  const services = [
    {
      id: 1,
      title: 'Classic Eyelashes',
      description: 'Beautiful, natural-looking lash extensions',
      price: '$149',
    },
    {
      id: 2,
      title: 'Luxury Pedicure',
      description: 'Premium pedicure with gel polish',
      price: '$75',
    },
    {
      id: 3,
      title: 'Mega Volume Lashes',
      description: 'Full, dramatic lash extensions',
      price: '$199',
    },
    {
      id: 4,
      title: 'Spa Pedicure',
      description: 'Full spa treatment with massage',
      price: '$120',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our most popular services tailored to make you feel beautiful
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="bg-beauty-light rounded-lg p-6 hover:shadow-lg transition-shadow border border-pink-200"
            >
              <div className="w-12 h-12 bg-beauty-pink rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-beauty-pink">{service.price}</span>
                <Link
                  href="/contact"
                  className="text-beauty-pink hover:text-beauty-dark font-semibold text-sm"
                >
                  Book →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-beauty-pink text-white px-8 py-3 rounded-full hover:bg-beauty-dark transition-colors font-bold"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
