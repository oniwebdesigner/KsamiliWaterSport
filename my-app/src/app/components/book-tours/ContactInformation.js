import React from 'react';
import { FaHeadphones, FaEnvelope } from 'react-icons/fa';

export default function ContactInformation() {
  return (
    <section className="bg-white shadow-lg rounded-lg p-6 mx-auto mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Information</h1>
      
      {/* Phone Section */}
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <FaHeadphones className="text-blue-500 text-2xl" />
        </div>
        <div>
          <p className="w-auto text-lg font-semibold text-gray-800">Phone</p>
          <p className="text-gray-600">+355 695 223 077</p>
        </div>
      </div>

      {/* Email Section */}
      <div className="flex items-center gap-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <FaEnvelope className="text-blue-500 text-2xl" />
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-800">Email</p>
          <p className="text-gray-600">ksamiliwatersports@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
