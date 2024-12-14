import React from 'react';
import Image from 'next/image';

export default function Presentation({ title, paragraphs, imageSrc, overlayText }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 sm:p-10">
      {/* First Column: Title and Paragraphs */}
      <header className="lg:col-span-2">
        {/* Title */}
        <h1 className="text-black text-2xl sm:text-3xl lg:text-5xl font-bold break-words font-embrace">
          {title}
        </h1>
      </header>

      <article className="lg:col-span-2 text-gray-800 text-base sm:text-lg lg:text-2xl">
        {/* Paragraphs */}
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4 sm:mb-6">
            {paragraph}
          </p>
        ))}
      </article>

      {/* Image Section */}
      <figure className="relative w-full h-[150px] sm:h-[200px] lg:h-[250px] lg:col-span-2">
        <Image
          src={imageSrc} // Using the 'imageSrc' prop for the image
          alt="Description of Image"
          fill
          className="rounded-lg shadow-lg object-cover"
        />

        {/* Overlay text displayed on top of the image */}
        {overlayText && (
          <figcaption className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {overlayText}
          </figcaption>
        )}
      </figure>
    </section>
  );
}
