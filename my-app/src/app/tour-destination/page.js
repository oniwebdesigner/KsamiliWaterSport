'use client'
import React from "react";
import CardContent from "./CardContent";
import backgroundImage from '../../public/ksamil.jpg'
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
      />
      <CardContent
        imageSrc={backgroundImage}
        location="Ksamil"
        title="30 minutes Jet Ski Rental in Ksamil"
        description="Experience the thrill of jet skiing in the stunning coastal waters of Ksamil, Albania. Located on the..."
        price="70"
        originalPrice="89"
        buttonText="View Details"
      />
      <CardContent
        imageSrc={backgroundImage}
        location="Ksamil"
        title="30 minutes Jet Ski Rental in Ksamil"
        description="Experience the thrill of jet skiing in the stunning coastal waters of Ksamil, Albania. Located on the..."
        price="70"
        originalPrice="89"
        buttonText="View Details"
      />

      <div className="lg:col-span-1 bg-white p-4 lg:p-6 relative">
        <BookingForm/>
      </div>
    </section>
  );
}
