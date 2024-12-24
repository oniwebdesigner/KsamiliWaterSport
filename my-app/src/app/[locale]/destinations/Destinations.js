import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import DestinationCard from '../../components/DestinationCard';

export default function Destinations() {
  return (
    <section className="px-6 py-12 bg-gray-50">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
        {/* Title Section */}
        <section className="ml-0 md:ml-10 text-center md:text-left">
          <h3 className="text-blue-600 text-lg md:text-2xl font-medium mb-3 md:mb-5">
            Places to Visit
          </h3>
          <h1 className="text-blue-900 text-3xl md:text-6xl font-extrabold">
            DESTINATIONS
          </h1>
        </section>

        {/* Button Section */}
        <a
          href="https://wa.me/yourwhatsappnumber"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 md:mt-0 bg-yellow-400 text-black flex items-center justify-center px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-yellow-500 transition duration-300 text-sm md:text-base"
        >
          <FaWhatsapp className="mr-2 text-lg md:text-xl" />
          Book Now
        </a>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <DestinationCard
          image="https://images.pexels.com/photos/12266668/pexels-photo-12266668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Ksamil Three Isles"
          description="Three little, but breathtaking isles of Ksamil."
        />
        <DestinationCard
          image="https://images.pexels.com/photos/12266668/pexels-photo-12266668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Tongo Island"
          description="Unique experience and for sure one that will get a whole day full of fun."
        />
        <DestinationCard
          image="https://images.pexels.com/photos/12266668/pexels-photo-12266668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Ali Pasha's Castle"
          description="Located at the mouth of the Vivari Channel in the Butrint National Park."
        />
      </section>
    </section>
  );
}
