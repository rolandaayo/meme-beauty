'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('lashes')

  const beforeAfterItems = {
    lashes: [
      {
        id: 1,
        title: 'Classic Volume',
        before: '😊',
        after: '✨',
        description: 'Beautiful classic lash extensions'
      },
      {
        id: 2,
        title: 'Natural Enhancement',
        before: '👁️',
        after: '💫',
        description: 'Subtle yet stunning enhancement'
      },
      {
        id: 3,
        title: 'Mega Volume',
        before: '👀',
        after: '🌟',
        description: 'Bold and dramatic transformation'
      },
      {
        id: 4,
        title: 'Hybrid Lashes',
        before: '🙂',
        after: '✨',
        description: 'Perfect balanced look'
      },
    ],
    pedicures: [
      {
        id: 5,
        title: 'Hot Pink Gel',
        before: '🦶',
        after: '💗',
        description: 'Vibrant gel pedicure design'
      },
      {
        id: 6,
        title: 'French Tips',
        before: '👣',
        after: '👑',
        description: 'Classic French manicure style'
      },
      {
        id: 7,
        title: 'Ombre Design',
        before: '🦶',
        after: '🎨',
        description: 'Beautiful ombre gradient design'
      },
      {
        id: 8,
        title: 'Floral Art',
        before: '👣',
        after: '🌸',
        description: 'Custom floral nail art'
      },
    ]
  }

  const items = selectedCategory === 'lashes' ? beforeAfterItems.lashes : beforeAfterItems.pedicures

  return (
    <main className="bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-beauty-pink to-beauty-rose py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-lg text-white opacity-90 max-w-2xl mx-auto">
            See the transformation and quality of our work
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-16">
            <button
              onClick={() => setSelectedCategory('lashes')}
              className={`px-8 py-3 rounded-full font-bold transition-colors ${
                selectedCategory === 'lashes'
                  ? 'bg-beauty-pink text-white'
                  : 'bg-beauty-light text-gray-900 hover:bg-beauty-rose'
              }`}
            >
              Lash Extensions
            </button>
            <button
              onClick={() => setSelectedCategory('pedicures')}
              className={`px-8 py-3 rounded-full font-bold transition-colors ${
                selectedCategory === 'pedicures'
                  ? 'bg-beauty-pink text-white'
                  : 'bg-beauty-light text-gray-900 hover:bg-beauty-rose'
              }`}
            >
              Pedicures
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-beauty-light to-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-pink-200"
              >
                {/* Before/After Comparison */}
                <div className="flex h-80 overflow-hidden">
                  {/* Before */}
                  <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center border-r-4 border-pink-300">
                    <div className="text-6xl mb-4">{item.before}</div>
                    <p className="text-sm font-semibold text-gray-600">Before</p>
                  </div>

                  {/* After */}
                  <div className="flex-1 bg-gradient-to-br from-beauty-rose to-beauty-pink flex flex-col items-center justify-center text-white">
                    <div className="text-6xl mb-4">{item.after}</div>
                    <p className="text-sm font-semibold">After</p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Track Record</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <p className="text-4xl font-bold text-beauty-pink mb-2">2000+</p>
              <p className="text-gray-600 font-semibold">Happy Clients</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <p className="text-4xl font-bold text-beauty-pink mb-2">98%</p>
              <p className="text-gray-600 font-semibold">Satisfaction Rate</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <p className="text-4xl font-bold text-beauty-pink mb-2">5★</p>
              <p className="text-gray-600 font-semibold">Average Rating</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <p className="text-4xl font-bold text-beauty-pink mb-2">5+</p>
              <p className="text-gray-600 font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
