// components/CardContent.js
import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

// const [isTwoColumn, setIsTwoColumn] = useState(false); 

const CardContent = ({
  imageSrc,
  location,
  title,
  description,
  price,
  originalPrice,
  buttonText,
}) => {
  return (
    <aside className="mt-16 lg:mt-0 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-auto lg:h-[500px] relative">
      {/* Buttons Top Right */}
      <div className="absolute top-4 right-4 flex space-x-2 z-10">
        <button className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition">
          Buton 1
        </button>
        <button className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition">
          Buton 2
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[250px] lg:h-full">
        <Image
          src={imageSrc}
          alt={`${location} Background`}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="rounded-t-lg lg:rounded-none"
        />
      </div>

      {/* Card Content */}
      <section className="p-4 lg:p-6 flex flex-col space-y-3 bg-white">
        <div className="flex">
          <FaMapMarkerAlt className="text-blue-500" />
          <p className="text-black ml-1">{location}</p>
        </div>

        {/* Title */}
        <h3 className="text-base lg:text-lg font-semibold text-gray-800 lg:mt-10">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs lg:text-sm text-gray-600">{description}</p>

        <div className="border-t-2 border-gray-500 my-4 lg:my-6"></div>

        {/* Price Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-2 lg:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-blue-500 font-bold text-xl lg:text-2xl">
              {price} €
            </span>
            <span className="text-gray-400 line-through text-base lg:text-xl">
              {originalPrice} €
            </span>
          </div>
          <button className="bg-gray-200 text-gray-500 font-semibold py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300 w-full lg:w-auto text-sm lg:text-base">
            {buttonText}
          </button>
        </div>
      </section>

    </aside>
  );
};

export default CardContent;
