'use client';
import React from 'react';
import { FaShareAlt, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import BookingForm from '../tour-destination/BookingForm';
import MapComponent from '../components/map';
import { Cards, Description, Gallery, TourDetails, TourInfo, PopularFeatures, Highlights, IncludedExcluded, TravelItinerary, FAQBooking } from '../components/book-tours';
import ContactInformation from '../components/book-tours/ContactInformation';
import QuestionForm from '../components/book-tours/QuestionForm';

export default function Page() {
  const highlightParagraphs = [
    "Enjoy the pristine waters of Ksamil Islands that are only accessible by boat.",
    "Take amazing photos around the islands.",
    "Enjoy the adrenaline of the Speedboat.",
    "Swim and sunbathe at one of the beaches of the islands."
  ];

  const includedItems = [
    "Skipper",
    "All taxes and fees"
  ];

  const excludedItems = [
    "Food and drinks",
    "Hotel pickup and drop-off"
  ];

  const paragraph = [
    "Experience a 20-minute speedboat trip around the stunning Islands of Ksamil. Your journey begins as you meet your skipper at our designated starting point and board a comfortable speedboat.",
    "Feel the thrill as we sail around the islands, offering you the chance to capture breathtaking photos along the way.",
    "We’ll then dock at one of the islands for about two hours, giving you enough time to swim in crystal-clear waters and bask on a picturesque beach. This stop is the perfect opportunity to unwind and immerse yourself in the natural beauty of the area before we head back to our starting point."
  ];

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

        <p className="text-gray-800 text-md leading-relaxed flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-600 text-xl" />
          Islets of Ksamil, Rr. 4 Ishujt, Ksamil, Bashkia Sarandë, Vlorë County, Southern Albania, 9706, Albania.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <Gallery />
          <TourDetails
            price="20 €"
            MaxCapacity="Maximum Capacity: 20"
            hours="3 hours"
          />
          <section className="mt-5">
            <Description
              title="Description"
              paragraphs={paragraph}
            />
          </section>
          <section className="py-5">
            <TourInfo hours={"3 hours"} people={"5-15 people"} />
          </section>
          <PopularFeatures />
          <Highlights paragraphs={highlightParagraphs} />
          <section className="mt-8">
            <IncludedExcluded included={includedItems} excluded={excludedItems} />
          </section>
          <TravelItinerary />
          <div className="py-5"></div>
          <MapComponent />
          <FAQBooking />
          <Cards />
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Information & Highlights
          </h2>
          <section className="list-disc list-inside text-gray-700 space-y-3">
            <BookingForm />
          </section>
          <ContactInformation />
          <QuestionForm />
        </div>
      </div>
    </section>
  );
}
