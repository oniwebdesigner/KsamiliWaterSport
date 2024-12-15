'use client';
import React, { useRef } from 'react';

const Carousel = () => {
  const images = [
    'https://images.pexels.com/photos/19941441/pexels-photo-19941441/free-photo-of-albania-himare-albanian-coast-albanian-riviera-mediterranean-sea-canoeing-kayaking.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19941441/pexels-photo-19941441/free-photo-of-albania-himare-albanian-coast-albanian-riviera-mediterranean-sea-canoeing-kayaking.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19941441/pexels-photo-19941441/free-photo-of-albania-himare-albanian-coast-albanian-riviera-mediterranean-sea-canoeing-kayaking.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19941441/pexels-photo-19941441/free-photo-of-albania-himare-albanian-coast-albanian-riviera-mediterranean-sea-canoeing-kayaking.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19941441/pexels-photo-19941441/free-photo-of-albania-himare-albanian-coast-albanian-riviera-mediterranean-sea-canoeing-kayaking.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19941441/pexels-photo-19941441/free-photo-of-albania-himare-albanian-coast-albanian-riviera-mediterranean-sea-canoeing-kayaking.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19941441/pexels-photo-19941441/free-photo-of-albania-himare-albanian-coast-albanian-riviera-mediterranean-sea-canoeing-kayaking.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19941441/pexels-photo-19941441/free-photo-of-albania-himare-albanian-coast-albanian-riviera-mediterranean-sea-canoeing-kayaking.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300; // Move 1 image to the left
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300; // Move 1 image to the right
    }
  };

  return (
    <section className="relative w-full lg:block hidden">
      {/* Carousel Container */}
      <section
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide w-full"
        style={{ scrollBehavior: 'smooth' }}
      >
        {images.map((img, idx) => (
          <section key={idx} className="flex-shrink-0 w-[350px]">
            <img
              src={img}
              alt={`Image ${idx + 1}`}
              className="w-full h-[250px] object-cover rounded-lg"
            />
          </section>
        ))}
      </section>

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 z-10"
        style={{ left: '0' }}
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 z-10"
        style={{ right: '0' }}
      >
        ❯
      </button>
    </section>
  );
};

export default Carousel;
