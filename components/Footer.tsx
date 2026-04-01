import Link from "next/link";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">MEME BEAUTYWORLD</h3>
            <p className="text-beauty-rose text-sm">
              Premium eyelash and pedicure services for the confident you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2 text-sm text-black">
              <li>
                <Link
                  href="/"
                  className="text-black hover:text-pink-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-beauty-rose transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-beauty-rose transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-beauty-rose transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-beauty-rose" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-beauty-rose" />
                <span>info@memebeautyworld.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-beauty-rose" />
                <span>123 Beauty Lane, NY 10001</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-beauty-rose p-2 rounded-full hover:bg-beauty-pink transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-beauty-rose p-2 rounded-full hover:bg-beauty-pink transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-beauty-rose pt-8 text-center text-sm">
          <p>
            &copy; 2024 MEME BEAUTYWORLD. All rights reserved. | Crafted with
            care 💅
          </p>
        </div>
      </div>
    </footer>
  );
}
