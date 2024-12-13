import React from 'react';

export default function Presentation({ title, paragraphs }) {
  return (
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 sm:p-10">
        <header>
          <h1 className="text-black text-2xl sm:text-3xl lg:text-5xl font-bold break-words font-embrace ">
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
      </section>
  );
}
