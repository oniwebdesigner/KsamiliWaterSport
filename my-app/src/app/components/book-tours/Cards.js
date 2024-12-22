import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Card({ imageSrc, altText, title, price, location, description, link }) {
  return (
    <div className="overflow-hidden w-full md:w-1/2">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={altText}
          className="w-full h-80 object-cover"
          quality={100}
        />
        {/* Price tag inside the image */}
        <div className="absolute bottom-0 left-0 bg-white text-gray-600 text-lg font-bold px-4 py-2 shadow-md rounded-tr-lg">
          <span className="text-gray-600 text-sm">From </span>
          <span className="text-blue-600 text-xl font-bold">{price} €</span>
        </div>
      </div>
      <div className="p-4">
        <Link href={link} passHref>
          <h3 className="font-semibold text-lg text-gray-900 cursor-pointer hover:underline">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-gray-900 flex items-center gap-1 mt-1">
          <FaMapMarkerAlt className="text-blue-600" />
          {location}
        </p>
        <p className="mt-2 text-sm text-gray-900">{description}</p>
      </div>
    </div>
  );
}
