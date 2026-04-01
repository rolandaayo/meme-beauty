"use client";
import Link from "next/link";
import { useState } from "react";

export default function BookingPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("Lash Extensions");

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 py-16">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-3xl shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Book Your Appointment
          </h1>
          <Link
            href="/"
            className="text-beauty-pink font-semibold hover:underline"
          >
            Back Home
          </Link>
        </div>

        <p className="text-gray-600 mb-6">
          Choose a date and time that works best for you. This calendar page
          includes a simple date picker and an appointment summary.
        </p>

        <form className="space-y-6">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="date"
            >
              Select Date
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-beauty-pink"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="time"
            >
              Select Time
            </label>
            <input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-beauty-pink"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="service"
            >
              Pick Service
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-beauty-pink"
            >
              <option>Lash Extensions</option>
              <option>Classic Pedicure</option>
              <option>Gel Manicure</option>
              <option>Facial Treatment</option>
            </select>
          </div>

          <button
            type="button"
            disabled={!date || !time}
            className="w-full bg-beauty-pink text-white py-3 rounded-xl font-bold hover:bg-beauty-dark disabled:opacity-60"
            onClick={() =>
              alert(
                `Appointment set for ${date} at ${time} (${service}). We will contact you soon!`,
              )
            }
          >
            Confirm Appointment
          </button>
        </form>

        <div className="mt-8 p-5 bg-pink-50 rounded-2xl border border-pink-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Your Next Appointment
          </h2>
          <p className="text-gray-700">
            Date: <strong>{date || "Not set"}</strong>
          </p>
          <p className="text-gray-700">
            Time: <strong>{time || "Not set"}</strong>
          </p>
          <p className="text-gray-700">
            Service: <strong>{service}</strong>
          </p>
        </div>
      </div>
    </main>
  );
}
