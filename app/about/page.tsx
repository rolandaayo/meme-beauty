import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Award, Heart, Sparkles, Users } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do and it shows in every service'
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Excellence in every detail, every time'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building relationships with our valued clients'
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Always learning the latest beauty trends'
  },
]

const team = [
  {
    name: 'Meme',
    role: 'Founder & Lead Lash Technician',
    specialty: 'Mega Volume Lashes',
    bio: '5+ years of experience in lash extensions. Certified and trained by industry experts.'
  },
  {
    name: 'Jessica',
    role: 'Senior Pedicure Specialist',
    specialty: 'Nail Art Design',
    bio: 'Passionate about nail design and creating custom art pieces for our clients.'
  },
  {
    name: 'Sarah',
    role: 'Lash Technician',
    specialty: 'Classic & Hybrid Lashes',
    bio: 'Dedicated to providing natural-looking lash extensions that enhance beauty.'
  },
  {
    name: 'Michelle',
    role: 'Pedicure Technician',
    specialty: 'Luxury Spa Pedicures',
    bio: 'Specialized in relaxation techniques and creating a spa-like experience.'
  },
]

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-beauty-pink to-beauty-rose text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About MEME BEAUTYWORLD</h1>
          <p className="text-lg opacity-90">Dedicated to beauty, quality, and exceptional service</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gradient-to-r from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded with a passion for beauty, MEME BEAUTYWORLD started as a dream to provide premium beauty services that go beyond expectations. What began as a small salon has grown into a trusted destination for beauty enthusiasts.
              </p>
              <p className="text-lg text-gray-600">
                We believe beauty is more than just appearance—it&apos;s about feeling confident and empowered. Every service we provide is crafted with care, using only premium products and techniques perfected through years of experience.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl h-96 flex items-center justify-center shadow-lg overflow-hidden">
              <img 
                src="/salon-interior.jpg" 
                alt="Our beautiful salon" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-beauty-pink text-center">
                  <Icon size={40} className="text-beauty-pink mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-r from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="bg-gradient-to-br from-pink-50 to-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="bg-gradient-to-r from-beauty-pink to-beauty-rose h-32"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-beauty-pink font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-xs mb-3"><strong>Specialty:</strong> {member.specialty}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-beauty-pink to-beauty-rose text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Beauty Community</h2>
          <p className="text-lg mb-8 opacity-90">Experience the MEME BEAUTYWORLD difference today</p>
          <a
            href="/contact"
            className="inline-block bg-white text-beauty-pink px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-bold text-lg"
          >
            Book Your Appointment
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
