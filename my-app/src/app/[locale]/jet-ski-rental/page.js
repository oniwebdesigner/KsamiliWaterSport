import Image from 'next/image';
import TextSection from '../components/TextSection';
import backgroundImage from '../../public/ksamil.jpg';
import BookNowButton from '../components/BookNowButton';
import Carousel from '../components/Carousel';
import customImage from '../../public/ksamili.jpg';
import Paragraphs from '../components/paragraps';

export default function JetSkiRental({ buttonLabel }) {
  return (
    <section className="">
      {/* Hero Section Component */}
      <TextSection
        mainTitle="JET SKI"
        subtitle="RENTAL KSAMIL"
        buttons={[
          { label: "Book Now", href: "/book-now",},
        ]}
        backgroundImage={customImage}
      />

      {/* Content Section Below Hero Section */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 text-center mt-6 md:mt-10 font-extrabold px-4">
        Rent a Jet Ski in Ksamil, Albania and enjoy the ride
      </h1>
      <section className="relative z-10 grid grid-cols-1 sm:grid-cols-2 mt-8 md:mt-16 px-4 md:px-10 lg:px-20 mb-10 gap-8 md:gap-10">
        <article className='items-center text-center'>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl">
            Jet Ski Ksamil. One of the most exciting and well-liked activities we provide to discover Ksamil and the surrounding isles is jet skiing, which is ideal for people who enjoy speed and trying new things. It gives riders the chance to travel and train in complete safety while taking in incredible views and surroundings. Ksamili Water Sports is strategically located within a bend of the beach that always offers flat water conditions.
          </p>
          <figure className="relative h-64 sm:h-80 md:h-96 mt-5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-lg overflow-hidden">
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
        <article className='items-center text-center'>
          <figure className="relative h-64 sm:h-80 md:h-96 mb-5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-lg overflow-hidden">
            <Image
              src={backgroundImage}
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </figure>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl">
            Well-maintained jet skis are a pleasure to ride and a testament to responsible ownership. These sleek watercraft are great cared for, ensuring optimal performance and safety on the water. Safety features are regularly checked and maintained, providing peace of mind for both the rider and others enjoying the water. Ultimately, a well-maintained jet ski promises exhilarating adventures and memorable experiences on the waves. This is why our jet skis are always well maintained.
          </p>
        </article>
      </section>

      {/* What to Know Section */}
      <Paragraphs
        title="What to Know Before Booking"
        items={[
          "Be ready to get wet.",
          "Life jackets provided by us.",
          "Up to two people per jet ski. The driver doesn’t need to have a boat license.",
          "Once you go out, it will be necessary to respect the entire time of your ride.",
          "Pregnant women are not allowed on our jet ski. Furthermore, we strongly suggest people with heart and back problems or other health conditions to contact a doctor before doing the activity.",
        ]}
        showButton={true}
        />

      <section className="text-center px-4 md:px-10 lg:px-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 font-extrabold mb-5">
          Who is it for?
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-black mb-5">
          Jet skiing in Ksamil is always fun, and accessible to everybody. You don’t have to be experienced in this water activity to rent a jet ski with us, at Ksamili Water Sports.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-10">
          Our jet skis can be rented by one person, or two people. To drive it, the person needs to be over 16. That is the only restriction.
        </p>
        <Carousel />
        <section className="w-full flex justify-center mt-5 mb-5">
          <BookNowButton label={buttonLabel} />
        </section>
      </section>
    </section>
  );
}
