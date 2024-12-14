import React from 'react';
import Image from 'next/image';
import KsamilImage from '../../public/ksamili.jpg';

export default function About() {
  return (
    <section className="bg-gray-900 text-center p-6">
      {/* Header Section */}
      <header className="mb-6">
        <h3 className="text-yellow-400 pt-5 text-lg sm:text-xl">Sea La Vie!</h3>
        <h1 className="text-4xl sm:text-xl md:text-4xl lg:text-6xl p-5 font-extrabold">About Us</h1>
      </header>

      {/* Main Content Section */}
      <article className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-6">
        {/* Image Section - Left */}
        <figure className="relative w-full lg:w-1/2 h-[500px] sm:h-[500px] lg:h-[600px]">
          <Image
            src={KsamilImage}
            alt="Scenic view of Ksamil"
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </figure>

        {/* Text Section - Right */}
        <section className="lg:w-1/2 text-white text-left flex flex-col justify-between">
          {/* Quote Section */}
          <blockquote className="text-9xl text-center sm:text-7xl md:text-8xl lg:p-5">"</blockquote>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl text-yellow-400 font-semibold mb-24">
            The cure for anything is salt water: sweat, tears or the sea.
          </h2>

          {/* Paragraphs */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              “Ksamili Water Sports” is a fun company in Ksamil, Albania, where you can enjoy water sports. Since 2018, we offer activities like jet skiing, kayaking, speed boat trips, and more in the beautiful waters of Ksamil. Our friendly guides keep you safe and make sure you have a great time exploring the coast.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              As locals, we always welcome you to Ksamil, and ensure you have a great experience with our services. Our jet skis are well maintained, the kayaks are so much fun, and we have some transparent ones. The speed boat is fast and comfortable. Whether you’re looking for excitement or relaxation, come join us for some water fun in Ksamil!
            </p>
          </section>
        </section>
      </article>
    </section>
  );
}
