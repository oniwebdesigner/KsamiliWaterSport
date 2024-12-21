import React from "react";
import HightlightsImage from "../../../public/tour-highlights.webp";
import Image from "next/image";

export default function Highlights({ paragraphs }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto mt-8 flex items-start space-x-6 py-5">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          src={HightlightsImage.src}
          alt="Highlights Icon"
          width={50}
          height={40}
          quality={100}
          className="rounded-md"
        />
      </div>

      {/* Text Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Highlights</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {paragraphs.map((paragraph, index) => (
            <li key={index}>{paragraph}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
