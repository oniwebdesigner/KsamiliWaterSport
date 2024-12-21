'use client';

import React from 'react';
import { FaShareAlt, FaHeart } from 'react-icons/fa';
import BookingForm from '../tour-destination/BookingForm';
import MapComponent from '../components/map';
import { Cards, Description, Gallery, TourDetails, TourInfo, PopularFeatures, Highlights, IncludedExcluded, TravelItinerary, FAQBooking } from '../components/book-tours';
import ContactInformation from '../components/book-tours/ContactInformation';
import QuestionForm from '../components/book-tours/QuestionForm';

export default function Page() {
  const highlightParagraphs = [
    "Swim in a concealed cave at Pulëbardha and Pasqyrat Beach.",
    "Pass by and see Kep Merli and Dema's antique wall.",
    "Swim and snorkel at the Cave of Pigeons.",
    "Swim, snorkel and sunbath at one of the Three islands of Ksamil.",
    "Swim at the Mirror beach, ranked as the beach with the bluest water in the world"
  ];

  const includedItems = [
    "Guide",
    "1 bottle of water",
    "1 cola",
    "Use of Snorkelling equipment",
    "All taxes and fees"
  ];

  const excludedItems = [
    "Food",
    "Hotel pickup and drop-off"
  ];
  const paragraph = [
    "Experience the ultimate adventure with our speedboat tour to Pulebardha Beach and Pigeon Cave! Dive into history as you explore Dema’s antique wall, swim and snorkel in the crystal-clear waters of Pigeon Cave, and unwind on the pristine shores of Ksamil’s three islands. Book your unforgettable snorkeling trip now!",
    "We are pleased to present a boat trip that gives you the opportunity to visit some of the most beautiful beaches of Ksamil.",
    "What will you see:",
    "– Kep Merli",
    "– Pulbardha Beach (Seagull beach)",
    "– Pasqyra Beach (Mirror beach)",
    "– Dema’s Antique wall",
    "– Shpella e pellumbave (Cave of Pigeons)",
    "– Three Islands",
    "Embark on an unforgettable adventure that begins with a quick 10-minute ride from our starting point to Kep Merli, where breathtaking coastal views await. After a 7-minute stop, we sail to Pulbardha and Pasqyrat beaches, staying for 10-15 minutes to admire the rugged shoreline, crystal-clear waters, and learn about the area’s rich history.",
    "As we journey, you’ll see Dema’s antique wall, part of the Monastery of Shen Gjergji, post-war bunkers, and the fascinating history behind them. Discover a hidden cave at Pulbardha Beach (Seagull Beach) where you can swim through and emerge on the other side.",
    "Next, a ten-minute boat ride takes us to the mesmerizing Shpella e Pullumbave (Pigeon Cave), renowned for its stunning rock formations and a captivating blue cave. We stay for 20-30 minutes, offering ample time for swimming."
  ];
  

  return (
    <section className="mt-32 px-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl md:text-3xl font-bold text-black">
            Speedboat Tour to Pulebardha Beach, Pigeon Cave and Three Islands
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
          Shpella e Pellumbave Ksamil.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <Gallery />
          <TourDetails
            price="20 €"
            maxCapacity="Maximum Capacity: 20"
            hours="3 hours"
          />
          <section className="mt-5">
            <Description
             title="Description"
             bold="Starting Time: 11:00"
             paragraphs={paragraph}
            />
          </section>
          <section className="py-5">
            <TourInfo hours="4 hours" people="5-15 people" />
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
