import React from 'react';
import Image from 'next/image';

export default function Presentation({ title, paragraphs, imageSrc, overlayText }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 sm:p-10">
      {/* Kolona e Parë: Titulli dhe Paragrafët */}
      <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <header>
          <h1 className="text-black text-2xl sm:text-3xl lg:text-5xl font-bold break-words font-embrace">
            {title}
          </h1>
        </header>
        <article className="text-gray-800 text-base sm:text-lg lg:text-2xl">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 sm:mb-6">
              {paragraph}
            </p>
          ))}
        </article>
      </div>

      {/* Seksioni i Imazhit */}
      <div className="relative w-full h-[150px] sm:h-[200px] lg:h-[250px] lg:col-span-2">
        <Image
          src={imageSrc} // Përdorim prop-in për foton
          alt="Description of Image"
          fill
          className="rounded-lg shadow-lg object-cover"
        />

        {/* Shkrimi që shfaqet mbi imazh */}
        {overlayText && (
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {overlayText}
          </h1>
        )}
      </div>
    </section>
  );
}
