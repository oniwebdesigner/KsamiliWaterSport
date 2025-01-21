import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const CardContent = ({
  imageSrc,
  location,
  title,
  description,
  price,
  originalPrice,
  buttonText,
  buttonLink,
}) => {
  return (
    <aside className="mt-16 lg:mt-0 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-auto lg:h-[500px] relative hover:scale-105 hover:shadow-lg transition-transform duration-300">
      {/* Image Section */}
      <section className="relative w-full h-[250px] lg:h-full">
        <Image
          src={imageSrc}
          alt={`${location} Background`}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="rounded-t-lg lg:rounded-none"
        />
      </section>

      {/* Card Content */}
      <section className="p-4 lg:p-6 flex flex-col space-y-3 bg-white">
        <section className="flex items-center">
          <FaMapMarkerAlt className="text-blue-500 text-lg" />
          <p className="text-gray-700 ml-2">{location}</p>
        </section>

        {/* Title */}
        <h3 className="text-base lg:text-lg font-semibold text-gray-700 lg:mt-10">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs lg:text-sm text-gray-600">{description}</p>

        <section className="border-t-2 border-gray-300 my-4 lg:my-6"></section>

        {/* Price Section */}
        <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-2 lg:space-y-0">
          <section className="flex items-center space-x-2">
            <span className="text-blue-500 font-bold text-xl lg:text-2xl">
              {price} €
            </span>
            <span className="text-red-500 line-through text-base lg:text-xl">
              {originalPrice} €
            </span>
          </section>
          <Link
            href={buttonLink}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full lg:w-auto text-sm lg:text-base text-center"
          >
            {buttonText}
          </Link>
        </section>
      </section>
    </aside>
  );
};

export default CardContent;
