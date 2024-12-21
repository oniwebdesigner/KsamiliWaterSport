import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Ksamili from '../../../public/ksamili.jpg'; // Replace with your actual image path

export default function Cards() {
  return (
    <>
      <h1 className="text-2xl font-bold text-black py-5">You might also like</h1>
      <section className="flex flex-col md:flex-row gap-4">
        {/* Card 1 */}
        <div className="overflow-hidden w-full md:w-1/2">
          <div className="relative">
            <Image
              src={Ksamili}
              alt="Jet Ski Rental"
              className="w-full h-80 object-cover"
              quality={100}
            />
            {/* Price tag inside the image */}
            <div className="absolute bottom-0 left-0 bg-white text-gray-600 text-lg font-bold px-4 py-2 shadow-md rounded-tr-lg">
              <span className="text-gray-600 text-sm">From </span>
              <span className="text-blue-600 text-xl font-bold">70 €</span>
            </div>
          </div>
          <div className="p-4">
            <Link href="/jet-ski-rental" passHref>
              <h3 className="font-semibold text-lg text-gray-900 cursor-pointer hover:underline">
                30 minutes Jet Ski Rental in Ksamil
              </h3>
            </Link>
            <p className="text-sm text-gray-900 flex items-center gap-1 mt-1">
              <FaMapMarkerAlt className="text-blue-600" />
              Ksamil
            </p>
            <p className="mt-2 text-sm text-gray-900">Enjoy an exciting jet ski ride and explore the beautiful waters of Ksamil.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <Image
              src={Ksamili}
              alt="Speedboat Tour"
              className="w-full h-80 object-cover"
              quality={100}
            />
            {/* Price tag inside the image */}
            <div className="absolute bottom-0 left-0 bg-white text-gray-600 text-lg font-bold px-4 py-2 shadow-md rounded-tr-lg">
              <span className="text-gray-600 text-sm">From </span>
              <span className="text-blue-600 text-xl font-bold">40 €</span>
            </div>
          </div>
          <div className="p-4">
            <Link href="/speedboat-tour" passHref>
              <h3 className="font-semibold text-lg text-gray-900 cursor-pointer hover:underline">
                Speedboat Tour to Pulebardha Beach
              </h3>
            </Link>
            <p className="text-sm text-gray-900 flex items-center gap-1 mt-1">
              <FaMapMarkerAlt className="text-blue-600" />
              Ksamil
            </p>
            <p className="mt-2 text-sm text-gray-900">Explore the breathtaking Pulebardha Beach with a high-speed speedboat tour.</p>
          </div>
        </div>
      </section>
    </>
  );
}
