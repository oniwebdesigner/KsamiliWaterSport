import React from 'react';
import Carousel from '../components/Carousel';

export default function Activities() {
  return (
    <>
      <section className="text-center justify-center bg-gray-900 px-4 py-12 sm:px-8 sm:py-14 md:py-16 lg:py-20">
        {/* Section Header */}
        <h2 className="text-yellow-400 text-lg sm:text-2xl font-medium mb-4 sm:mb-6">
          Let the sea set you free
        </h2>
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
          Activities
        </h1>
        {/* Carousel Section */}
        <article className="px-2 sm:px-6 lg:px-16">
          <Carousel />
        </article>
      </section>
    </>
  );
}
