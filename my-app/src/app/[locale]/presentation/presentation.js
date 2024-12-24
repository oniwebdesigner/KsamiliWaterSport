import React from 'react';
import Image from 'next/image';

export default function Presentation({ title, paragraphs, imageSrc, overlayText }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 sm:p-10">
      <section className="flex flex-col justify-center lg:col-span-1">
        <h1 className="text-black text-2xl sm:text-3xl lg:text-5xl font-bold break-words font-embrace">
          {title}
        </h1>
      </section>

      <section className="flex flex-col gap-6 lg:col-span-1">
        <p className="text-gray-800 text-base sm:text-lg lg:text-2xl">
          {paragraphs[0]}
        </p>
        <p className="text-gray-800 text-base sm:text-lg lg:text-2xl">
          {paragraphs[1]}
        </p>
      </section>

      {/* Image Section */}
      <figure className="relative w-full h-[150px] sm:h-[200px] lg:h-[250px] lg:col-span-2">
        <Image
          src={imageSrc}
          alt="Description of Image"
          fill
          className="rounded-lg shadow-lg object-cover"
        />

        {/* Overlay text */}
        {overlayText && (
          <figcaption className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center">
            {overlayText}
          </figcaption>
        )}
      </figure>
    </section>
  );
}
