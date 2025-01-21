import BookNowButton from '../components/BookNowButton';
import React from "react";

const Paragraphs = ({ title, items, showButton = false }) => {
  return (
    <section className="bg-gray-800 px-4 md:px-10 lg:px-20 pb-5">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold text-gray-100 py-6 mt-10">
        {title}
      </h1>
      <aside className="text-gray-100 max-w-4xl mx-auto">
        <ul className="list-disc space-y-4 text-sm sm:text-lg md:text-xl mb-10 mt-10 pl-4 md:pl-8">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {showButton && (
          <section className="flex justify-center mt-5 mb-5">
            <BookNowButton />
          </section>
        )}
      </aside>
    </section>
  );
};

export default Paragraphs;
