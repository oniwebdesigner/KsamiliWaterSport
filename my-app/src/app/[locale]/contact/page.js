import React from 'react';
import ContactForm from '../../components/ContactForm';
import MapComponent from '../../components/map';

export default function page() {
  return (
    <>
      <section className="bg-gray-800 h-auto flex flex-col items-center pt-32">
        <h2 className="text-center text-yellow-400 text-2xl mb-5 mt-10">We'd Love To Hear From You</h2>
        <h1 className="text-white text-center text-7xl font-extrabold mb-16">Contact Us</h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center w-full px-10">
          <div className="flex flex-col items-center">
            <div className="w-20 h-3 bg-rose-600 mb-4"></div>
            <h3 className="text-white text-2xl font-bold mb-2">Find us Here</h3>
            <p className="text-gray-400">Shëtitorja, Ksamil 9706</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-3 bg-rose-600 mb-4"></div>
            <h3 className="text-white text-2xl font-extrabold mb-2">Get In Touch</h3>
            <p className="text-gray-400">+355 69 52 23 077</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-3 bg-rose-600 mb-4"></div>
            <h3 className="text-white text-2xl font-bold mb-2">Working Hours</h3>
            <p className="text-gray-400">Mon - Sun: 9am - 8pm</p>
          </div>
        </section>
       </section>
      <ContactForm/>
      <MapComponent/>
    </>
  );
}
