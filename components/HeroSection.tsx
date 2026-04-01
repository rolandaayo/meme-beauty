"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const handleBooking = () => {
    setShowPopup(false);
    router.push("/booking");
  };

  return (
    <section
      className="min-h-[700px] flex items-center justify-center py-20 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/bg.jpg)",
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Elevate Your <span className="text-yellow-300">Beauty</span>
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Experience luxury eyelash extensions and professional pedicure
            services. Transform your look with MEME BEAUTYWORLD.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={handleBooking}
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-colors font-bold text-base animate-bounce"
            >
              Book Your Appointment
            </button>
            <Link
              href="/gallery"
              className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/20 transition-colors font-bold text-base"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center border border-gray-200">
            <h2 className="text-2xl font-bold text-black mb-4">
              Welcome to MEME BEAUTYWORLD!
            </h2>
            <p className="text-black mb-6 text-base leading-relaxed">
              We’re excited to have you here. Book your appointment now!
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleBooking}
                className="bg-black text-white px-5 py-3 rounded-full font-bold hover:bg-gray-900 transition-colors text-sm"
              >
                Book a Session
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="border border-gray-300 text-black px-5 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
