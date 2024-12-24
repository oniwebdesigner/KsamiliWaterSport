import Image from "next/image";
import { FaWhatsapp, FaShoppingCart } from 'react-icons/fa'; 
import backgroundImage from '../../../public/ksamili.jpg';

export default function HeroSection() {
    return (
      <section className="relative w-full h-screen">
        {/* Background Image for Hero Section */}
        <figure className="absolute inset-0 z-0">
          <Image
            src={backgroundImage} 
            alt="Background Image"
            layout="fill" 
            objectFit="cover" 
            quality={100} 
            priority 
          />
        </figure>

        {/* Content Section */}
        <article className="relative z-10 text-center text-white flex flex-col justify-center items-center w-full h-full">
            
            {/* Small Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-yellow-400 mb-8">Sailin' away from ordinary.</h2>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">KSAMILI</h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">WATER SPORTS</h1>

            {/* Description Paragraph */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-lg mx-auto">
                Jet ski rental, pedal boat rental, kayak rental, SUP – stand up paddle and private and group tours with speed boat in Ksamil, Albania.
            </p>

            {/* Button Section in Row Layout */}
            <section className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12">
                {/* First Button: WhatsApp */}
                <a 
                    href="https://wa.me/yourwhatsappnumber" // Insert your WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-black flex items-center px-8 py-4 rounded-md hover:bg-yellow-500 transition duration-300"
                >
                    <FaWhatsapp className="mr-2" />
                    Book Now 
                </a>

                {/* Second Button: Shopping Cart */}
                <a 
                    href="#"
                    className="bg-yellow-400 text-black flex items-center px-8 py-4 rounded-md hover:bg-yellow-500 transition duration-300"
                >
                    <FaShoppingCart className="mr-2" />
                    Book Now
                </a>
            </section>
        </article>
      </section>
    );
}