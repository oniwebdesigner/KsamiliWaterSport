'use client';
import React from 'react';
import { FaShareAlt, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
// import BookingForm from '../tour-destination/BookingForm';
import MapComponent from '../components/map';
import KsamilImage from '../../public/ksamili.jpg';
import BookingTour from '../tour-destination/BookingTour';
import { 
  Cards, 
  Description, 
  Gallery, 
  TourDetails, 
  TourInfo, 
  PopularFeatures, 
  Highlights, 
  IncludedExcluded, 
  TravelItinerary, 
  FAQBooking 
} from '../components/book-tours';
import ContactInformation from '../components/book-tours/ContactInformation';
import QuestionForm from '../components/book-tours/QuestionForm';
import ksamil from '../../public/ksamili.jpg';

export default function Page() {
  // Define the highlight paragraphs
  const highlightParagraphs = [
    "Breath in the fresh sea air and feel the sun on your skin as you cruise around",
    "Admire iconic landmarks of Ksamil at your own pace including the three Islands",
    "Share a jet ski experience with your friends or family and explore hidden caves",
    "Test your need for speed and get an adrenaline rush from a powerful jet ski"
  ];

  // Items that are included in the tour
  const includedItems = [
    "Fuel",
    "Life Jacket",
    "All fees and taxes"
  ];

  // Items that are excluded from the tour
  const excludedItems = [
    "Hotel pickup and drop-off"
    ];

  // Tour description paragraphs
  const paragraph = [
    "Experience the thrill of jet skiing in the stunning coastal waters of Ksamil, Albania. Located on the Ionian Sea, Ksamil is renowned for its crystal-clear waters, picturesque islands, and beautiful beaches. Our jet ski rental service offers top-of-the-line equipment and a safe, exhilarating adventure for all skill levels. Whether you’re looking to explore hidden coves, enjoy the scenic views, or simply feel the adrenaline rush, our friendly and professional staff are here to ensure you have an unforgettable time on the water.\n\nNOTE: Prices are 70 € for one jet ski (one or two people on it)."
  ];
  
  // FAQ data
  const faqData = [
    { 
        question: 'WHEN CAN I RESERVE?', 
        answer: "Due to the high number of rental demand, you should make a reservation no longer than two days from the activity date. If you make a reservation more than two days from the day of rental, we can't promise your spot would be reserved. This is because at the moment we don't have an online payment method and it happens that someone reserve a spot and don't come at the day of the activity." 
      },
    { 
      question: 'WHERE CAN I USE THE JET SKI?', 
      answer: "You can use the Jetski up to 1 miles from our location. You can't use the jet ski in restricted areas and inside the perimeter of the Islands."
    },
    { 
      question: 'HOW MANY JET-SKI DO YOU HAVE', 
      answer: 'Currently we have 2 jet ski' 
    },
    { 
      question: 'IS THERE ANY AGE LIMIT?', 
      answer: 'The minimum age to rent a jet ski is 17 years old.' 
    },
    { 
      question: 'DO I NEED ANY DOCUMENT/ID?', 
      answer: 'An ID is enough to rent a Jet ski' 
    },
  ];

  return (
    <section className="mt-32 px-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl md:text-3xl font-bold text-black">
          30 minutes Jet Ski Rental in Ksamil
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
          Ksamil
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <Gallery />
          
          <TourDetails
      price="$100"
      MaxCapacity="50"
      hours="2 Hours"
      displayOptions={['group']}
    />
          
          <section className="mt-5">
            <Description
              title="Description"
              paragraphs={paragraph}
            />
          </section>
          
          <section className="py-5">
          <TourInfo 
            hours={"3 hours"} 
            people={"2 Persons"} 
            options={['groupSize']} 
            />

          </section>
          
          <PopularFeatures featuresToShow={['Adrenalines']} />
          <Highlights paragraphs={highlightParagraphs} />
          
          <section className="mt-8">
            <IncludedExcluded included={includedItems} excluded={excludedItems} />
          </section>
          
          <div className="py-5"></div>
          <MapComponent />
          <FAQBooking faqData={faqData} />
         
        </div>
        
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Information & Highlights
          </h2>
          
          <section className="list-disc list-inside text-gray-700 space-y-3">
            <BookingTour/>
          </section>
          
          <ContactInformation />
          <QuestionForm />
        </div>
      </div>
      <h1 className="text-2xl font-bold text-black py-5">You might also like</h1>
      <section className="flex flex-col md:flex-row gap-4">
        <Cards
          imageSrc={KsamilImage}
          altText="Jet Ski Rental"
          title="30 minutes Jet Ski Rental in Ksamil"
          price="70"
          location="Ksamil"
          description="Enjoy an exciting jet ski ride and explore the beautiful waters of Ksamil."
          link="/jet-ski-rental"
        />

        <Cards
          imageSrc={KsamilImage}
          altText="Speedboat Tour"
          title="Speedboat Tour to Pulebardha Beach"
          price="40"
          location="Ksamil"
          description="Explore the breathtaking Pulebardha Beach with a high-speed speedboat tour."
          link="/book-tour-2"
        />
      </section>
    </section>
  );
}
