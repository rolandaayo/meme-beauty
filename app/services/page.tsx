import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Sparkles, Wand2 } from 'lucide-react'
import Link from 'next/link'

const lashServices = [
  {
    id: 1,
    name: 'Classic Eyelashes',
    description: 'Natural-looking lash extensions with timeless appeal',
    price: '$149',
    duration: '60 min',
    details: ['Individual hand-tied lashes', 'Natural look', 'Long-lasting', '4-week fill-ups']
  },
  {
    id: 2,
    name: 'Mega Volume Lashes',
    description: 'Bold, dramatic lashes for that showstopping effect',
    price: '$199',
    duration: '75 min',
    details: ['Volume fan technique', 'Dramatic impact', 'Full coverage', '4-week fill-ups']
  },
  {
    id: 3,
    name: 'Hybrid Lashes',
    description: 'Perfect blend of classic and volume lashes',
    price: '$179',
    duration: '70 min',
    details: ['Mix of classic & volume', 'Balanced look', 'Textured finish', '4-week fill-ups']
  },
  {
    id: 4,
    name: 'Lash Refill',
    description: 'Maintain your beautiful lashes with regular touch-ups',
    price: '$89',
    duration: '45 min',
    details: ['Maintain previous set', 'Add lost lashes', 'Check lash health', 'Every 3-4 weeks']
  },
]

const pedicureServices = [
  {
    id: 5,
    name: 'Classic Pedicure',
    description: 'Traditional pedicure with polish application',
    price: '$55',
    duration: '45 min',
    details: ['Nail trim & shape', 'Cuticle care', 'Foot massage', 'Polish of choice']
  },
  {
    id: 6,
    name: 'Gel Pedicure',
    description: 'Long-lasting gel polish for beautiful feet',
    price: '$75',
    duration: '60 min',
    details: ['Gel polish application', 'UV cured', 'Lasts 3-4 weeks', 'Chip-resistant']
  },
  {
    id: 7,
    name: 'Luxury Spa Pedicure',
    description: 'Complete pampering experience with premium treatments',
    price: '$120',
    duration: '90 min',
    details: ['Hot stone massage', 'Exfoliating scrub', 'Deep conditioning', 'Gel polish']
  },
  {
    id: 8,
    name: 'Nail Art Pedicure',
    description: 'Custom nail art designs for your special occasion',
    price: '$95',
    duration: '75 min',
    details: ['Custom designs', 'Trendy patterns', 'Gel polish', 'Professional finish']
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <Navbar />
      
      {/* Services Header */}
      <section className="py-12 bg-gradient-to-r from-beauty-pink to-beauty-rose text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Services</h1>
          <p className="text-lg opacity-90">Discover our complete range of beauty services</p>
        </div>
      </section>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Lash Services */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles size={32} className="text-beauty-pink" />
            <h2 className="text-3xl font-bold text-gray-900">Eyelash Extensions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lashServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow border-t-4 border-beauty-pink">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-beauty-pink">{service.price}</span>
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-beauty-pink rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="w-full bg-beauty-pink text-white py-2 rounded-lg hover:bg-beauty-dark transition-colors font-semibold text-center block"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Pedicure Services */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Wand2 size={32} className="text-beauty-rose" />
            <h2 className="text-3xl font-bold text-gray-900">Pedicure Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pedicureServices.map((service) => (
              <div key={service.id} className="bg-gradient-to-br from-pink-50 to-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow border-t-4 border-beauty-rose">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-beauty-rose">{service.price}</span>
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-beauty-rose rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="w-full bg-beauty-rose text-white py-2 rounded-lg hover:bg-pink-700 transition-colors font-semibold text-center block"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-beauty-pink to-beauty-rose text-white mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Appointment?</h2>
          <p className="text-lg mb-8 opacity-90">Let us help you achieve your beauty goals</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-beauty-pink px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-bold text-lg"
          >
            Schedule Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
