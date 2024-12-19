'use client';
import React from 'react';

export default function ContactForm() {
  return (
    <section className="bg-gray-800 min-h-screen flex flex-col items-center py-16 px-4">
      <form className="w-full bg-white px-8 py-10 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Your Name */}
          <div>
            <label className="block text-gray-600 text-sm md:text-base mb-2" htmlFor="name">
              Your name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full border border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-500 text-sm md:text-base rounded p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Your Email */}
          <div>
            <label className="block text-gray-600 text-sm md:text-base mb-2" htmlFor="email">
              Your email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full border border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-500 text-sm md:text-base rounded p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="mt-6">
          <label className="block text-gray-600 text-sm md:text-base mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            className="w-full border border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-500 text-sm md:text-base rounded p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Your Message */}
        <div className="mt-6">
          <label className="block text-gray-600 text-sm md:text-base mb-2" htmlFor="message">
            Your message (optional)
          </label>
          <textarea
            id="message"
            placeholder="Write your message here..."
            rows="5"
            className="w-full border border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-500 text-sm md:text-base rounded p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold px-6 py-2 text-sm md:text-base hover:bg-blue-600 transition-all duration-300"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  );
}
