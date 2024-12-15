// pages/JetSkiRental.js
import Image from 'next/image';
import TextSection from '../components/TextSection';
import backgroundImage from '../../public/ksamil.jpg';
import BookNowButton from '../components/BookNowButton';

export default function JetSkiRental({ buttonLabel }) {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between">
      {/* Hero Section Component */}
      <TextSection
        mainTitle="JET SKI"
        subtitle="RENTAL KSAMIL"
        buttonLabel="Book Now"
      />

      {/* Content Section Below Hero Section */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-800 text-center mt-10 font-extrabold">
        Rent a Jet Ski in Ksamil, Albania and enjoy the ride
      </h1>
      <section className="relative z-10 grid grid-cols-1 sm:grid-cols-2 mt-16 px-4 mb-10 gap-10">
        <article>
          <p className="text-gray-800">
            Jet Ski Ksamil. One of the most exciting and well-liked activities we provide to discover Ksamil and the surrounding isles is jet skiing, which is ideal for people who enjoy speed and trying new things. It gives riders the chance to travel and train in complete safety while taking in incredible views and surroundings. Ksamili Water Sports is strategically located within a bend of the beach that always offers flat water conditions.
          </p>
          <figure className="relative h-80 mt-5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-lg overflow-hidden">
            <Image
              src={backgroundImage} 
              alt="Background Image"
              layout="fill" 
              objectFit="cover" 
              quality={100} 
              priority 
            />
          </figure>
        </article>
        <article>
          <figure className="relative h-80 mb-5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-lg overflow-hidden">
            <Image
              src={backgroundImage} 
              alt="Background Image"
              layout="fill" 
              objectFit="cover" 
              quality={100} 
              priority 
            />
          </figure>
          <p className="text-gray-800">
            Well-maintained jet skis are a pleasure to ride and a testament to responsible ownership. These sleek watercraft are great cared for, ensuring optimal performance and safety on the water. Safety features are regularly checked and maintained, providing peace of mind for both the rider and others enjoying the water. Ultimately, a well-maintained jet ski promises exhilarating adventures and memorable experiences on the waves. This is why our jet skis are always well maintained.
          </p>
        </article>
      </section>

      {/* What to Know Section */}
      <section className="bg-gray-900 mb-5">
        <h1 className="text-6xl text-center font-extrabold text-white py-6">What to Know Before Booking</h1>
        <aside className="text-white max-w-4xl mx-auto px-4">
          <ul className="list-disc space-y-4 text-xl mb-5 pl-8">
            <li>Be ready to get wet.</li>
            <li>Life jackets provided by us.</li>
            <li>Up to two people per jet ski. The driver doesn’t need to have a boat license.</li>
            <li>Once you go out, it will be necessary to respect the entire time of your ride.</li>
            <li>Pregnant women are not allowed on our jet ski. Furthermore, we strongly suggest people with heart and back problems or other health conditions to contact a doctor before doing the activity.</li>
          </ul>
        </aside>
        
        {/* Book Now Button spanning full width */}
        <section className="w-full flex justify-center mb-5">
          <BookNowButton label={buttonLabel} />
        </section>
      </section>
    </section>
  );
}
