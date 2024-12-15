// components/HeroSection.js

import Image from "next/image";
import backgroundImage from '../../public/ksamil.jpg';
import BookNowButton from "./BookNowButton";

const TextSection = ({ mainTitle, subtitle, buttonLabel }) => {
  return (
    <section className="relative w-full min-h-screen">
      {/* Hero Section with Background Image */}
      <article className="relative w-full min-h-screen">
        <Image
          src={backgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="absolute inset-0 z-0"
        />

        {/* Hero Content centered */}
        <section className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center text-white">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mt-64">
            {mainTitle}
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
            {subtitle}
          </h1>

          {/* Button Section centered */}
          <section className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 mt-5">
            <BookNowButton label={buttonLabel} />
          </section>
        </section>
      </article>
     </section>
  );
};

export default TextSection;
