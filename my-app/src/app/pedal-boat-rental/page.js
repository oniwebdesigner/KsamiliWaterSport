import React from 'react';
import TextSection from '../components/TextSection';
import Image from 'next/image';
import backgroundImage from '../../public/ksamil.jpg';
import BoatTour from '../components/BoatTour'

export default function page() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between">
      <TextSection
        mainTitle="JET SKI"
        subtitle="RENTAL KSAMIL"
        buttons={[
          { label: "BOOK TOUR 1", href: "/book-tour-1", className: "bg-yellow-500 hover:bg-yellow-600" },
          { label: "BOOK TOUR 2", href: "/book-tour-2", className: "bg-yellow-500 hover:bg-yellow-600" }
        ]}
      />
      
      {/* Grid Section */}
      <section className='grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 sm:px-12'>
        {/* Text Section */}
        <section className="flex flex-col justify-center items-start space-y-4">
          <h2 className='text-2xl sm:text-3xl font-semibold text-gray-800'>
            PRIVATE AND BOAT TOURS
          </h2>
          <h1 className='text-3xl sm:text-4xl text-gray-800'>
            BOAT TOUR KSAMIL
          </h1>
          <p className='text-gray-700 text-xl mb-2'>
            “Ready for an unforgettable adventure in Ksamil, Albania? Join us on our speed boat trip and let’s make some memories!"
          </p>
          <p className='text-gray-700 text-xl mb-2'>
            “Ready for an unforgettable adventure in Ksamil, Albania? Join us on our speed boat trip and let’s make some memories!"
          </p>
          <p className='text-gray-700 text-xl mb-2'>
            “Ready for an unforgettable adventure in Ksamil, Albania? Join us on our speed boat trip and let’s make some memories!"
          </p>
        </section>

        {/* Image Section */}
        <section>
          <figure className="relative h-64 sm:h-80 md:h-96 mt-5 shadow-lg rounded-lg overflow-hidden">
            <Image
              src={backgroundImage}
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </figure>
        </section>
      </section>

      {/* Another Grid Section */}
      <section className='grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 sm:px-12 mb-5'>
        {/* Image Section */}
        <section>
          <figure className="relative h-64 sm:h-80 md:h-96 mt-5 shadow-lg rounded-lg overflow-hidden">
            <Image
              src={backgroundImage}
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </figure>
        </section>

        {/* Text Section */}
        <section className="flex flex-col justify-center items-start space-y-4">
          <p className='text-gray-700 text-xl mb-2'>
            But the fun doesn’t stop there – snap incredible photos at Three Islands and Twin Isles, then immerse yourself in history at Ali Pasha Castle.
          </p>
          <p className='text-gray-700 text-xl mb-2'>
            See the ‘Dry Tree’ and Arameras beaches before reaching the stunning Tongo Island, where you’ll spend four unforgettable hours.
          </p>
          <p className='text-gray-700 text-xl mb-2'>
            Plus, we’ve got you covered with water, cola, snacks, fruits, and all the snorkeling gear you need.
          </p>
          <p className='text-gray-700 text-xl mb-2'>
            And if you’re feeling hungry, join us for a delicious barbecue at Tongo Island. So grab your friends and family, and let’s set sail for adventure!
          </p>
        </section>
      </section>
      <section className=''>
      <BoatTour/>
      </section>
    </section>
  );
}
