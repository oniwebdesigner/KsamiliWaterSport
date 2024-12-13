import React from 'react';
import Image from 'next/image';
import KsamilImage from '../../public/ksamili.jpg';

export default function About() {
  return (
    <div className="bg-gray-900 justify-center items-center text-center p-6">
      {/* Header Section */}
      <h3 className="text-yellow-400 pt-5 text-2xl font-extrabold sm:text-4xl">Sea La Vie!</h3>
      <h1 className="text-4xl sm:text-xl md:text-4xl lg:text-6xl p-5 font-extrabold">About Us</h1>

      {/* Main Content Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-6">
        
        {/* Image Section - Left */}
        <div className="relative w-full lg:w-1/2 h-[500px] sm:h-[500px] lg:h-[600px]">
          <Image
            src={KsamilImage} // Using prop for the image
            alt="Description of Image"
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Section - Right */}
        <div className="lg:w-1/2 text-white text-left">
          
          {/* Quote Section */}
          <h1 className='text-9xl text-center sm:text-7xl md:text-8xl lg:p-5 p-2'>"</h1>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl text-yellow-400 font-semibold mb-4">
            The cure for anything is salt water: sweat, tears or the sea.
          </h1>

          {/* Flex container for paragraphs - two columns */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {/* First Paragraph */}
            <p className="text-sm sm:text-xs md:text-sm lg:text-lg">
              “Ksamili Water Sports” is a fun company in Ksamil, Albania, where you can enjoy water sports. Since 2018, we offer activities like jet skiing, kayaking, speed boat trips, and more in the beautiful waters of Ksamil. Our friendly guides keep you safe and make sure you have a great time exploring the coast.
            </p>

            {/* Second Paragraph */}
            <p className="text-sm sm:text-xs md:text-sm lg:text-lg">
              As locals, we always welcome you to Ksamil, and ensure you have a great experience with our services. Our jet skis are well maintained, the kayaks are so much fun, and we have some transparent ones. The speed boat is fast and comfortable. Whether you’re looking for excitement or relaxation, come join us for some water fun in Ksamil!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
