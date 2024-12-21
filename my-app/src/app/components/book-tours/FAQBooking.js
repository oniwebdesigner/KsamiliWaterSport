'use client';
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion((prev) => (prev === index ? null : index));
  };

  const faqData = [
    {
      question: 'Where do we meet for our boat trip?',
      answer: 'You will meet at the designated meeting point near the port at 8:30 am. We will provide further details via email.',
    },
    {
      question: 'What time does the trip start?',
      answer: 'The boat trip starts at 9:00 am. Please arrive at least 15 minutes before the departure time.',
    },
    {
      question: 'How do I pay for the trip?',
      answer: 'Payments can be made online through our secure payment gateway. You can also pay via cash on the day of the tour.',
    },
    {
      question: 'What type of boats are used for the tour?',
      answer: 'We use comfortable, high-speed boats equipped with life jackets for your safety. The boats have ample space for seating and luggage.',
    },
    {
      question: 'What should we wear for the tour?',
      answer: 'We recommend wearing comfortable clothes, sunscreen, and swimwear. Don\'t forget your camera for amazing photos!',
    },
    {
      question: 'Can I bring my dog?',
      answer: 'Unfortunately, pets are not allowed on the tour for safety and comfort reasons.',
    },
  ];

  return (
    <div className="rounded-lg max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
      
      {/* FAQ Section */}
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="overflow-hidden transition-all duration-500 ease-in-out">
            <div
              onClick={() => toggleQuestion(index)}
              className={`cursor-pointer rounded-lg p-4 border transition-all duration-500 ${
                selectedQuestion === index ? 'shadow-xl' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
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
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
