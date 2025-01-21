import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function IncludedExcluded({ included, excluded }) {
  return (
    <section className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Included & Excluded</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Included Section */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Included</h3>
          <ul className="space-y-2 text-gray-700">
            {included.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Excluded Section */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Excluded</h3>
          <ul className="space-y-2 text-gray-700">
            {excluded.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaTimesCircle className="text-red-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
}
