'use client';
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function FAQ({faqData = []}) {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <div className="rounded-lg max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
      
      {/* FAQ Section */}
      <div className="space-y-4">
        {faqData.map((faqData, index) => (
          <div key={index} className="overflow-hidden transition-all duration-500 ease-in-out">
            <div
              onClick={() => toggleQuestion(index)}
              className={`cursor-pointer rounded-lg p-4 border transition-all duration-500 ${
                selectedQuestion === index ? 'shadow-xl' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-800">{faqData.question}</span>
                {selectedQuestion === index ? (
                  <FaMinus className="text-gray-600 text-sm" />
                ) : (
                  <FaPlus className="text-gray-600 text-sm" />
                )}
              </div>
              <div
                className={`transition-all duration-500 ease-in-out mt-2 max-h-0 opacity-0 ${
                  selectedQuestion === index ? 'max-h-[500px] opacity-100' : ''
                }`}
              >
                <p className="text-gray-700 mt-2">{faqData.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
