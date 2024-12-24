'use client';

import React from 'react';
import { FaShareAlt, FaHeart } from 'react-icons/fa';
import BookingTour from '../tour-destination/BookingTour';
import MapComponent from '../../components/map';
import { Cards, Description, Gallery, TourDetails, TourInfo, PopularFeatures, Highlights, IncludedExcluded, TravelItinerary, FAQBooking } from '../../components/book-tours';
import ContactInformation from '../../components/book-tours/ContactInformation';
import QuestionForm from '../../components/book-tours/QuestionForm';
import ksamil from '../../public/ksamili.jpg';
import KsamilImage from '../../public/ksamil.jpg';

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
  
  const itineraries = {
    speedboat: {
      title: '9:00 am - Kep Merli',
      image: ksamil,
      description:
        'Our journey starts with a quick 10-minute ride from our starting point to Kep Merli, where stunning coastal views await. We will stay there for 7 minutes.',
      duration: '7 Minutes',
    },
    threeIslands: {
      title: '9:10 am - Pulbardha and Pasqyrat beach',
      image: ksamil,
      description:
        "We sail to Pulbardha and Pasqyrat beach and stay there for 10-15 minutes, offering a view of the rough shoreline, clear blue waters, and learning the rich history of the area. Along the ride, you will see Dema’s antique wall, part of Manastery of Shen Gjergji, some post war bunkers and the history behind them. Additionaly, there is a concealed cave in a rock at Pulbardha beach (Seagul beach) where you can swim through it and emerge to the other side.",
      duration: '15 Hours',
    },

    piegonCave: {
      title: '9:10 am - Pigeon Cave',
      image: ksamil,
      description:"Next, a ten-minute boat ride takes us to the mesmerizing Shpella e Pullumbave (pigeon cave), known for its interesting rock formations and a blue cave. We stay there for 20-30 minutes, where you can swim and snorkel. In case of rough sea with big waves, we are going to stay there just for 5 minutes and continue the tour.",
      duration: '30 Hours',
    }
  };

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
    },
    { 
      question: 'What if I have a severe joint injury, back injury, or an injury that might be aggravated by bumpy conditions?', 
      answer: "If you or someone in the party has a back injury, joint injury, or anything that might cause pain when driving over rough waters in our power boats, please let us know. If the weather conditions look like they may aggravate their condition or we cannot provide a safe and comfortable ride, we will need to either reschedule your tour or provide a full refund." 
    },
    { 
      question: 'What if we would like to book a private tour?', 
      answer: "If you would like to book a private tour, please contact us for more details." 
    },
    { 
      question: 'Is the boat trip suitable for me as I’m pregnant?', 
      answer: "The sea can be somewhat unpredictable at times so even though our helms are highly experienced, it may occasionally get a little bumpy. It is for this reason that we would recommend that you do not join us until your child is old enough to come along too." 
    }
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
            displayOptions={['adult', 'child', 'infant']}
          />
          <section className="mt-5">
            <Description
             title="Description"
             bold="Starting Time: 11:00"
             paragraphs={paragraph}
            />
          </section>
          <section className="py-5">
          <TourInfo 
            hours={"3 hours"} 
            people={"5-15 people"} 
            options={['duration','tourType','groupSize', 'language']} 
          />

          </section>
          <PopularFeatures featuresToShow={['Adrenalines', 'Snorkeling' ,'Relaxing','Swimming']} />
          <Highlights paragraphs={highlightParagraphs} />
          <section className="mt-8">
            <IncludedExcluded included={includedItems} excluded={excludedItems} />
          </section>
          <TravelItinerary itineraries={itineraries} />
          <div className="py-5"></div>
          <MapComponent />
          <FAQBooking faqData={faqData} />
        </div>

        <div className="col-span-1">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Information & Highlights
          </h2>
          <section className="list-disc list-inside text-gray-700 space-y-3">
            <BookingTour />
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
          link="/book-tour-3"
        />

        <Cards
          imageSrc={KsamilImage}
          altText="Speedboat Tour"
          title="Ksamil: Three Islands Boat Tour"
          price="20"
          location="Ksamil"
          description="Explore the breathtaking Pulebardha Beach with a high-speed speedboat tour."
          link="/book-tour-1"
        />
      </section>
    </section>
  );
}
