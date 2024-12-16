import React from 'react';
import Image from 'next/image';
import backgroundImage from '../../public/ksamil.jpg';
import CustomButton from './BookNowButton';

export default function Boat() {
  const images = [backgroundImage, backgroundImage];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Seksioni 1 */}
      <div className="mb-8">
        <div className="mb-4">
          <hr className="my-5 border-gray-700 h-2 w-48" />
          <h1 className="text-gray-900 text-3xl">Boat Tour Nr 1</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Teksti në të majtë */}
          <div className="sm:col-span-1 flex items-center">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-10">
              Experience an exhilarating speedboat ride around the stunning Three Islands of Ksamil. Enjoy free time to relax and swim on one of the picturesque islands. Start your adventure by meeting your friendly skipper at the designated starting point and boarding a comfortable speedboat. Embark on a thrilling 20-minute cruise around the breathtaking islands, capturing unforgettable photos and feeling the rush of adrenaline. After your exciting boat tour, unwind with a 2-hour stop on one of the stunning islands. Swim in crystal-clear waters, sunbathe on pristine beaches, and immerse yourself in the natural beauty of the surroundings. Conclude your unforgettable journey by returning to the starting point, with memories to cherish.
            </p>
          </div>

          {/* Fotot në anën e djathtë */}
          <div className="sm:col-span-1 lg:col-span-2 grid grid-rows-2 gap-5 justify-center">
            <div className="flex space-x-14">
              {images.map((img, index) => (
                <div key={index} className="relative aspect-square w-40 sm:w-60 h-40 sm:h-60">
                  <Image
                    src={img}
                    alt="Boat Tour Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-none"
                  />
                </div>
              ))}
            </div>
            <div className="flex space-x-14">
              {images.map((img, index) => (
                <div key={index} className="relative aspect-square w-40 sm:w-60 h-40 sm:h-60">
                  <Image
                    src={img}
                    alt="Boat Tour Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <CustomButton label="Book Tour 1" href="/page-url" className="custom-class text-sm px-4 py-2" />
      </div>

      {/* Seksioni 2 */}
      <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Fotot në të majtë */}
          <div className="sm:col-span-1 lg:col-span-2 grid grid-rows-2 gap-5 justify-center mt-5">
            <div className="flex space-x-14">
              {images.map((img, index) => (
                <div key={index} className="relative aspect-square w-40 sm:w-60 h-40 sm:h-60">
                  <Image
                    src={img}
                    alt="Boat Tour Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-none"
                  />
                </div>
              ))}
            </div>
            <div className="flex space-x-14">
              {images.map((img, index) => (
                <div key={index} className="relative aspect-square w-40 sm:w-60 h-40 sm:h-60">
                  <Image
                    src={img}
                    alt="Boat Tour Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Teksti në të djathtë */}
          <div className="sm:col-span-1 flex flex-col justify-center">
            <div className="mb-4">
              <hr className="my-5 border-gray-700 h-2 w-48" />
              <h1 className="text-gray-900 text-3xl">Boat Tour Nr 2</h1>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-3">
              Discover the hidden gems of Ksamil with Boat Tour Nr 2. This incredible journey takes you on a relaxed cruise to explore the beauty of the coastline. With a professional guide, you'll visit unique locations, soak up the sun, and create lasting memories. Enjoy a 2-hour break on a pristine island where you can indulge in swimming, snorkeling, or simply relaxing on the beach. Whether you're seeking adventure or tranquility, this tour offers a perfect mix of both.
            </p>
            <div className='mt-5'>
          <CustomButton label="Book Tour 1" href="/page-url" className="custom-class text-sm px-4 py-2" />
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
