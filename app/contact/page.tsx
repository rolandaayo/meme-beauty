'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const services = [
  'Classic Eyelashes',
  'Mega Volume Lashes',
  'Hybrid Lashes',
  'Lash Refill',
  'Classic Pedicure',
  'Luxury Gel Pedicure',
  'Spa Pedicure Package',
  'Nail Art Design',
]

const faqItems = [
  {
    question: 'How long do lash extensions last?',
    answer: 'Lash extensions typically last 4-6 weeks before needing a refill. We recommend touch-ups every 3-4 weeks for optimal look.'
  },
  {
    question: 'How long is a gel pedicure appointment?',
    answer: 'A standard gel pedicure takes about 60 minutes. Spa packages with massage may take 90 minutes.'
  },
  {
    question: 'Do you offer gift certificates?',
    answer: 'Yes! Contact us for gift certificate options. Perfect for birthdays and special occasions.'
  },
  {
    question: 'Can I book same-day appointments?',
    answer: 'While we prefer advance booking, same-day appointments may be available. Call us to check availability!'
  },
  {
    question: 'What should I do to prepare for my appointment?',
    answer: 'For lashes: arrive with clean, makeup-free eyes. For pedicures: arrive with clean feet. Both services are relaxing - just sit back and enjoy!'
  },
]

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-pink-50 via-white to-pink-50 min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-r from-beauty-pink to-beauty-rose text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg opacity-90">Book your appointment or send us a message</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-beauty-pink">
              <div className="flex items-center gap-4 mb-2">
                <MapPin size={24} className="text-beauty-pink" />
                <h3 className="text-lg font-bold text-gray-900">Location</h3>
              </div>
              <p className="text-gray-600">123 Beauty Lane, Fashion City, FC 12345</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-beauty-rose">
              <div className="flex items-center gap-4 mb-2">
                <Phone size={24} className="text-beauty-rose" />
                <h3 className="text-lg font-bold text-gray-900">Phone</h3>
              </div>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-pink-400">
              <div className="flex items-center gap-4 mb-2">
                <Mail size={24} className="text-pink-400" />
                <h3 className="text-lg font-bold text-gray-900">Email</h3>
              </div>
              <p className="text-gray-600">info@memebeautyworld.com</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-pink-300">
              <div className="flex items-center gap-4 mb-2">
                <Clock size={24} className="text-pink-300" />
                <h3 className="text-lg font-bold text-gray-900">Hours</h3>
              </div>
              <p className="text-gray-600 text-sm">Mon-Fri: 9AM - 6PM<br/>Sat: 10AM - 5PM<br/>Sun: Closed</p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <BookingForm />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-white to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <details key={idx} className="group bg-white rounded-lg shadow-md p-6 border-l-4 border-beauty-pink">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                  {item.question}
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-gray-600 mt-4 text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitted(true)
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          message: '',
        })
        setSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Schedule Your Appointment</h2>

      {submitted ? (
        <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
          <div className="text-4xl mb-4">✓</div>
          <h3 className="text-2xl font-bold text-green-700 mb-2">Booking Confirmed!</h3>
          <p className="text-green-600 mb-4">Thank you for your appointment request. We&apos;ll contact you soon to confirm.</p>
          <p className="text-gray-600">Check your email for confirmation details.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-beauty-pink focus:ring-2 focus:ring-pink-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-beauty-pink focus:ring-2 focus:ring-pink-200"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Phone & Service Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-beauty-pink focus:ring-2 focus:ring-pink-200"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                Select Service *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-beauty-pink focus:ring-2 focus:ring-pink-200"
              >
                <option value="">Choose a service...</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date & Time Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-gray-900 mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-beauty-pink focus:ring-2 focus:ring-pink-200"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-semibold text-gray-900 mb-2">
                Preferred Time *
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-beauty-pink focus:ring-2 focus:ring-pink-200"
              >
                <option value="">Select a time...</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
              Additional Notes
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-beauty-pink focus:ring-2 focus:ring-pink-200"
              placeholder="Any special requests or questions? Let us know..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-beauty-pink to-beauty-rose text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Booking...' : 'Book Appointment'}
          </button>

          <p className="text-sm text-gray-600 text-center">
            We&apos;ll contact you within 24 hours to confirm your appointment.
          </p>
        </form>
      )}
    </div>
  )
}
