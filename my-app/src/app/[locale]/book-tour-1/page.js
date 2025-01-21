'use client';
import React from 'react';
import { FaShareAlt, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
// import BookingForm from '../tour-destination/BookingForm';
import MapComponent from '../../components/map';
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
} from '../../components/book-tours';
import ContactInformation from '../../components/book-tours/ContactInformation';
import QuestionForm from '../../components/book-tours/QuestionForm';
import ksamil from '../../public/ksamili.jpg';

export default function Page() {
  // Define the highlight paragraphs
  const highlightParagraphs = [
    "Enjoy the pristine waters of Ksamil Islands that are only accessible by boat.",
    "Take amazing photos around the islands.",
    "Enjoy the adrenaline of the Speedboat.",
    "Swim and sunbathe at one of the beaches of the islands."
  ];

  // Items that are included in the tour
  const includedItems = [
    "Skipper",
    "All taxes and fees"
  ];

  // Items that are excluded from the tour
  const excludedItems = [
    "Food and drinks",
    "Hotel pickup and drop-off"
  ];

  // Tour description paragraphs
  const paragraph = [
    "Experience a 20-minute speedboat trip around the stunning Islands of Ksamil. Your journey begins as you meet your skipper at our designated starting point and board a comfortable speedboat.",
    "Feel the thrill as we sail around the islands, offering you the chance to capture breathtaking photos along the way.",
    "We’ll then dock at one of the islands for about two hours, giving you enough time to swim in crystal-clear waters and bask on a picturesque beach. This stop is the perfect opportunity to unwind and immerse yourself in the natural beauty of the area before we head back to our starting point."
  ];

  // Itineraries details
  const itineraries = {
    speedboat: {
      title: '9:00 am - SpeedBoat Ride',
      image: ksamil,
      description:
        'You will meet your skipper at our starting point and hop on board a comfortable speedboat. We will cruise around the islands where you can enjoy the adrenaline of the speedboat and take some amazing photos.',
      duration: '20 Minutes',
    },
    threeIslands: {
      title: '9:20 am - Three Islands Exploration',
      image: ksamil,
      description:
        "After exploring the area by boat, we'll stop for about two hours at one of the islands, allowing you to swim and sunbathe on one of its beautiful beaches. This provides a perfect opportunity to relax and soak in the natural beauty before we return to our starting points.",
      duration: '2 Hours',
    },
  };

  // FAQ data
  const faqData = [
    { 
      question: 'Where do we meet for our boat trip?', 
      answer: 'Our office location can be found by clicking here. This is our meeting point.' 
    },
    { 
      question: 'What time does the trip start?', 
      answer: 'The tour is available every hour, starting from 9:00 am to 7:00 pm' 
    },
    { 
      question: 'How do I pay for the trip?', 
      answer: 'We only accept payment with cash at our location.' 
    },
    { 
      question: 'What type of boats are used for the tour?', 
      answer: 'We use 7 meters rib boats. These boats are family friendly because they comfortably fit up to 15 people.' 
    },
    { 
      question: 'What should we wear for the tour?', 
      answer: 'Don’t forget a hat, sunscreen and sunglasses.' 
    },
    { 
      question: 'Can I bring my dog?', 
      answer: "Dogs are allowed on our tours; however, we do require an additional fee. Please remember it’s sometimes the case that they aren’t all that happy with the sensation of being onboard and we won't be able to simply pop them ashore during the trip." 
    }
  ];

  return (
    <section className="mt-32 px-8">
      <section className="flex flex-col gap-4">
        <section className="flex items-center justify-between">
          <h1 className="text-4xl md:text-3xl font-bold text-black">
            Ksamil: Three Islands Boat Tour
          </h1>
          <section className="flex gap-3">
            <section className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer hover:shadow-lg">
              <FaShareAlt className="text-blue-500 text-xl hover:text-blue-600" />
            </section>
            <section className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer hover:shadow-lg">
              <FaHeart className="text-blue-500 text-xl hover:text-blue-600" />
            </section>
          </section>
        </section>

        <p className="text-gray-800 text-md leading-relaxed flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-600 text-xl" />
          Islets of Ksamil, Rr. 4 Ishujt, Ksamil, Bashkia Sarandë, Vlorë County, Southern Albania, 9706, Albania.
        </p>
      </section>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="col-span-2">
          <Gallery />
          
          <TourDetails
            price="20 €"
            MaxCapacity="Maximum Capacity: 20"
            hours="3 hours"
            displayOptions={['adult', 'child', 'infant']}
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
            people={"5-15 people"} 
            options={['duration', 'tourType','groupSize', 'language']} 
           />

          </section>
          
          <PopularFeatures featuresToShow={['Adrenalines', 'Snorkeling' ,'Relaxing','Swimming']} />
          <Highlights paragraphs={highlightParagraphs} />
          
          <section className="mt-8">
            <IncludedExcluded included={includedItems} excluded={excludedItems} />
          </section>
          
          <TravelItinerary itineraries={itineraries} />
          
          <section className="py-5"></section>
          <MapComponent />
          <FAQBooking faqData={faqData} />
         
        </section>
        
        <section className="col-span-1">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Information & Highlights
          </h2>
          
          <section className="list-disc list-inside text-gray-700 space-y-3">
            <BookingTour/>
          </section>
          
          <ContactInformation />
          <QuestionForm />
        </section>
      </section>
      <h1 className="text-2xl font-bold text-black py-5">You might also like</h1>
      <section className="flex flex-col md:flex-row gap-4">
        <Cards
          imageSrc={KsamilImage}
          altText="Jet Ski Rental"
          title="30 minutes Jet Ski Rental in Ksamil"
          price="70"
          location="Ksamil"
          description="Enjoy an exciting jet ski ride and explore the beautiful waters of Ksamil."
          link="/book-tour-3"
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
