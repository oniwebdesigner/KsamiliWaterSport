// components/HeroSection.js

import Image from "next/image";
import backgroundImage from '../../public/ksamil.jpg';
import BookNowButton from "./BookNowButton";

const TextSection = ({ mainTitle, subtitle, buttons }) => {
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

          {/* Buttons Section */}
          <section className="mt-8 flex flex-col gap-4 sm:flex-col md:flex-row md:gap-8">
            {buttons?.map((button, index) => (
              <BookNowButton
                key={index}
                label={button.label}
                href={button.href}
                className={button.className || ""}
              />
            ))}
          </section>
        </section>
      </article>
    </section>
  );
};

export default TextSection;
