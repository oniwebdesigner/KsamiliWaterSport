import React from 'react';
import TextSection from '../components/TextSection';
import Ksamil from '../../public/ksamil.jpg';
import Image from 'next/image';
import Paragraphs from '../components/paragraps';
import BookNowButton from '../components/BookNowButton'

export default function page() { 
  const photoTitles = [
    "Family Friendly",
    "Social Media Photo",
    "Exploring Ksamil",
    "Physical Fitness",
    "Improved Balance",
    "Fun with Friends"
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <TextSection
        mainTitle="KAYAK & PEDAL BOAT"
        subtitle="RENTAL IN KSAMIL"
        buttons={[
          { label: "Book Now", href: "/book-tour-1", className: "bg-yellow-500 hover:bg-yellow-600" },
        ]}
        backgroundImage={Ksamil}
      />

      {/* New Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 md:px-10 lg:px-20 items-stretch mb-5">
        {/* Text Column */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Enjoy your holidays
          </h2>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Kayak & Pedal Boat Rental in Ksamil
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            Kayaking in Ksamil is a unique experience to get in touch with nature and discover the wonders of the coast and the isles around it. A solo tour, or with the whole family, is a relaxing and enjoyable activity to enjoy in absolute freedom the magnificent landscapes and views of Ksamil beach.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            We offer multiple styles of kayaks for every level of experience. Beginners will enjoy the sit-on-top kayaks. These boats are extremely stable and easy to stay on. Available in multiple sizes, we will be sure to fit you with a boat that matches your skill level.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            Among the various Water Sports you can practice on the beach, Kayaking does not require specific skills or athletic training like a jet ski, except for good swimming ability. Kayaking is a safe, pleasant, and healthy activity suitable for the whole family; an exciting and unforgettable experience in contact with nature.
          </p>
        </div>

        {/* Image Column */}
        <figure className="relative h-full shadow-lg overflow-hidden">
          <Image
            src={Ksamil}
            alt="Kayaking in Ksamil"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </figure>
      </section>
      
      <Paragraphs
        title="Benefits of kayaking"
        items={[
          "Physical Fitness: Kayaking offers a full-body workout, engaging muscles in the arms, shoulders, back, and core. It improves heart health by increasing heart rate and promoting circulation.",
          "Low Impact Exercise: Gentle on the joints, kayaking is suitable for people of all ages and fitness levels.",
          "Weight Management: Kayaking burns calories and boosts metabolism, aiding in weight loss and management.",
          "Improved Balance and Coordination: Kayaking requires balance and coordination, enhancing motor skills.",
          "Connection with Nature: Kayaking allows exploration of natural environments and wildlife encounters of Ksamil isles and its surroundings.",
        ]}
      />

      {/* Grid Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 md:px-10 lg:px-20">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex flex-col items-center text-center relative mb-3">
            <div className="relative w-full h-96 shadow-lg overflow-hidden">
              <Image
                src={Ksamil}
                alt={`Photo ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
              {/* Title Overlay */}
              <h3 className="absolute bottom-10 left-3 text-white text-2xl font-semibold p-2 transform translate-x-1 translate-y-1 line-clamp-2">
                {photoTitles[index]}
              </h3>
            </div>
          </div>
        ))}
      </section>

       <Paragraphs
        title="Benefits of Pedal Boats"
        items={[
          "Physical Fitness: Pedaling a boat provides a lower body workout, targeting leg muscles. They are gentle on the joints, suitable for people with joint issues.",
          "Family-Friendly: Pedal boats can accommodate multiple passengers, making them great for families.",
          "Safety: Pedal boats are stable and easy to maneuver, making them suitable for beginners. They allow passengers to sit back and enjoy the scenery of Ksamil isles while pedaling.",
          "Affordable Recreation: Pedal boating is an affordable recreational activity suitable for all budgets.",
        ]}
      />
  <section className="text-gray-700 flex justify-center items-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
    <figure className="relative h-auto shadow-lg overflow-hidden">
      <Image
        src={Ksamil}
        alt="Kayaks and Pedal Boats in Ksamil"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
    </figure>

    <div className="space-y-6 flex flex-col justify-center items-center px-4 md:px-10 text-start">
      <h2 className="text-3xl md:text-4xl font-extrabold mt-10 mb-10">
        Kayaks and Pedal Boats for Fun Exploration
      </h2>
      <p className="text-lg md:text-xl mb-10">
        Ksamil Water Sports offers for rental different types and sizes of kayaks, stand-up paddle boards, and pedal boats. Whether you're looking for a solo adventure or a family outing, we have options to suit all preferences and skill levels. Contact us now for more info and to book your exciting water adventure in Ksamil!
      </p>
      <div className="w-full flex justify-start">
        <BookNowButton 
        className='mb-10'/>
      </div>
    </div>
  </div>
</section>


    </section>
  );
}
