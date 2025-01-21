import React from 'react';
import Image from 'next/image';
import backgroundImage from '../../public/ksamil.jpg';
import CustomButton from './BookNowButton';

export default function Boat() {
  const images = [backgroundImage, backgroundImage];

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <header className="mb-4">
          <hr className="my-5 border-gray-700 h-[2px] w-48 mx-auto sm:mx-0" />
          <h1 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl text-center sm:text-start font-bold">
            Boat Tour Nr 1
          </h1>
        </header>

        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <aside className="sm:col-span-1 flex items-center">
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Experience an exhilarating speedboat ride around the stunning Three Islands of Ksamil. Enjoy free time to relax and swim on one of the picturesque islands. Start your adventure by meeting your friendly skipper at the designated starting point and boarding a comfortable speedboat. Embark on a thrilling 20-minute cruise around the breathtaking islands, capturing unforgettable photos and feeling the rush of adrenaline. After your exciting boat tour, unwind with a 2-hour stop on one of the stunning islands. Swim in crystal-clear waters, sunbathe on pristine beaches, and immerse yourself in the natural beauty of the surroundings. Conclude your unforgettable journey by returning to the starting point, with memories to cherish.
            </p>
          </aside>

          <figure className="sm:col-span-1 lg:col-span-2 grid grid-rows-2 gap-4 justify-center">
            <section className="grid grid-cols-2 gap-4">
              {images.map((img, index) => (
                <picture
                  key={index}
                  className="relative aspect-square w-32 sm:w-40 lg:w-60 h-32 sm:h-40 lg:h-60"
                >
                  <Image
                    src={img}
                    alt="Boat Tour Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </picture>
              ))}
            </section>
            <section className="grid grid-cols-2 gap-4">
              {images.map((img, index) => (
                <picture
                  key={index}
                  className="relative aspect-square w-32 sm:w-40 lg:w-60 h-32 sm:h-40 lg:h-60"
                >
                  <Image
                    src={img}
                    alt="Boat Tour Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </picture>
              ))}
            </section>
          </figure>
        </article>

        <footer className="mt-6 text-center sm:text-start">
          <CustomButton label="Book Tour 1" href="/page-url" className="text-sm px-6 py-3" />
        </footer>
      </section>

      {/* section 2 */}
      <section className="mb-16">
        <header className="mb-4">
          <hr className="my-5 border-gray-700 h-[2px] w-48 mx-auto sm:mx-0" />
          <h1 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl text-center sm:text-start font-bold">
            Boat Tour Nr 2
          </h1>
        </header>

        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <figure className="sm:col-span-1 lg:col-span-2 grid grid-rows-2 gap-4 justify-center">
            <section className="grid grid-cols-2 gap-4">
              {images.map((img, index) => (
                <picture
                  key={index}
                  className="relative aspect-square w-32 sm:w-40 lg:w-60 h-32 sm:h-40 lg:h-60"
                >
                  <Image
                    src={img}
                    alt="Boat Tour Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </picture>
              ))}
            </section>
            <section className="grid grid-cols-2 gap-4">
              {images.map((img, index) => (
                <picture
                  key={index}
                  className="relative aspect-square w-32 sm:w-40 lg:w-60 h-32 sm:h-40 lg:h-60"
                >
                  <Image
                    src={img}
                    alt="Boat Tour Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </picture>
              ))}
            </section>
          </figure>

          <aside className="sm:col-span-1 flex flex-col justify-center">
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Discover the hidden gems of Ksamil with Boat Tour Nr 2. This incredible journey takes you on a relaxed cruise to explore the beauty of the coastline. With a professional guide, you'll visit unique locations, soak up the sun, and create lasting memories. Enjoy a 2-hour break on a pristine island where you can indulge in swimming, snorkeling, or simply relaxing on the beach. Whether you're seeking adventure or tranquility, this tour offers a perfect mix of both.
            </p>

            <footer className="mt-6 text-center sm:text-start">
              <CustomButton label="Book Tour 2" href="/page-url" className="text-sm px-6 py-3" />
            </footer>
          </aside>
        </article>
      </section>
    </main>
  );
}
