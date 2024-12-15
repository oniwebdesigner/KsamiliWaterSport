import React from 'react';

export default function DestinationCard({ image, title, description }) {
  return (
    <section className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer">
      {/* Image Section */}
      <figure>
        <img
          src={image}
          alt={title}
          className="w-full h-[65vh] object-cover transform group-hover:scale-110 transition duration-300"
        />

        {/* Overlay for Text */}
        <figcaption className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition duration-300"></figcaption>

        {/* Text Content */}
        <article className="absolute bottom-6 left-6 right-6">
          <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-200 text-sm">{description}</p>
        </article>
      </figure>
    </section>
  );
}
