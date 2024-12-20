'use client';
import React from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import Gallery from '../components/book-tours/Gallery';
import BookingForm from '../tour-destination/BookingForm';
import TourDetails from '../components/book-tours/TourDetails';
import Description from '../components/book-tours/Description';
import TourInfo from '../components/book-tours/TourInfo';
import PopularFeatures from '../components/book-tours/PopularFeatures';

export default function Page() {
  return (
    <section className="mt-32 px-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl md:text-3xl font-bold text-black">
            Ksamil: Three Islands Boat Tour
          </h1>
          <div className="flex gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer hover:shadow-lg">
              <FaShareAlt className="text-blue-500 text-xl hover:text-blue-600" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer hover:shadow-lg">
              <FaHeart className="text-blue-500 text-xl hover:text-blue-600" />
            </div>
          </div>
        </div>

        <p className="text-gray-800 text-lg leading-relaxed">
          Islets of Ksamil, Rr. 4 Ishujt, Ksamil, Bashkia Sarandë, Vlorë County, Southern Albania, 9706, Albania.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <Gallery />
          <TourDetails
          price="20 €"
          MaxCapacity="Maximum Capacity: 20"
          hours="3 hours"/>
          <section className='bg-gray-100 shadow-md mt-5'>
          <Description 
        title="Description" 
        paragraph="Experience a 20-minute speedboat trip around the stunning Islands of Ksamil. Your journey begins as you meet your skipper at our designated starting point and board a comfortable speedboat.

        Feel the thrill as we sail around the islands, offering you the chance to capture breathtaking photos along the way.
        
        We’ll then dock at one of the islands for about two hours, giving you enough time to swim in crystal-clear waters and bask on a picturesque beach. This stop is the perfect opportunity to unwind and immerse yourself in the natural beauty of the area before we head back to our starting point." 
      />
     
     </section>
     <section className='py-5'>
     <TourInfo hours={"3 hours"} people={"5-15 people"}/>
      </section>
      <PopularFeatures/>
        </div>
        <div className="col-span-1 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Information & Highlights
          </h2>
          <section className="list-disc list-inside text-gray-700 space-y-3">
            <BookingForm />
          </section>
        </div>
      </div>
    </section>
  );
}
