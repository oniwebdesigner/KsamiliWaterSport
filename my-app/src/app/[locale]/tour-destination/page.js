'use client';
import React from "react";
import CardContent from "./CardContent";
import backgroundImage from '../../public/ksamil.jpg';
import BookingForm from "./BookingForm";

export default function CardsPage() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 w-full h-auto gap-6 p-4 mt-10 lg:mt-28 justify-center items-center">
      {/* Left Section - Image and Card */}
      <CardContent
        imageSrc={backgroundImage}
        location="Ksamil"
        title="30 minutes Jet Ski Rental in Ksamil"
        description="Experience the thrill of jet skiing in the stunning coastal waters of Ksamil, Albania. Located on the..."
        price="70"
        originalPrice="89"
        buttonText="View Details"
        buttonLink="/book-tour-3" 
      />
      <div className="lg:col-span-1 bg-white p-4 lg:p-6 relative hidden sm:block">
        <BookingForm />
      </div>
      <CardContent
        imageSrc={backgroundImage}
        location="Shpella e Pellumbave Ksamil"
        title="Speedboat Tour to Pulebardha Beach, Pigeon Cave and three Islands."
        description="Starting Time: 11:00Experience the ultimate adventure with our speedboat tour to Pulebardha Beac..."
        price="40"
        originalPrice="49"
        buttonText="View Details"
        buttonLink="/book-tour-2" 
      />
      <CardContent
        imageSrc={backgroundImage}
        location="Islets of Ksamil, Rr. 4 Ishujt, Ksamil, Bashkia Sarandë, Vlorë County, Southern Albania, 9706, Albania"
        title="Ksamil: Three Islands Boat Tour"
        description="Experience a 20-minute speedboat trip around the stunning Islands of Ksamil. Your journey begins as ..."
        price="20"
        originalPrice="28"
        buttonText="View Details"
        buttonLink="book-tour-1" 
      />
      <div className="lg:col-span-1 bg-white p-4 lg:p-6 relative lg:hidden">
        <BookingForm />
      </div>
    </section>
  );
}
