'use client';
import React, { useState } from 'react';
import Image from '../../../public/ksamili.jpg'
import Photo from '../../../public/ksamil.jpg';

export default function Gallery() {
  const images = [
    Photo.src, 
    Image.src, 
    Photo.src, 
    Image.src, 
    Photo.src, 
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleNext = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = (e) => {
    // Mbyll modalin vetëm nëse klikon jashtë imazhit
    if (e.target.classList.contains('lightbox-backdrop')) {
      setIsLightboxOpen(false);
    }
  };

  return (
    <section className="gallery-container p-4">
      <section className="main-image mb-4">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-[400px] md:h-[500px] object-cover rounded-lg cursor-pointer"
          onClick={openLightbox}
        />
      </section>
      <section className="thumbnails flex gap-2 overflow-x-auto justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`thumbnail w-20 h-20 md:w-24 md:h-24 border-2 rounded-lg ${
              selectedImage === image ? 'border-blue-500' : 'border-gray-300'
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </button>
        ))}
      </section>

      {/* Lightbox */}
      {isLightboxOpen && (
        <section
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 lightbox-backdrop"
          onClick={closeLightbox}
        >
          <section className="relative">
            <img
              src={selectedImage}
              alt="Fullscreen"
              className="max-w-full max-h-screen rounded-lg animate-fade-in"
            />
            <button
              onClick={handlePrev}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black text-white hover:bg-gray-200 p-3 rounded-full shadow-lg"
            >
              &#8249;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black text-white hover:bg-gray-200 p-3 rounded-full shadow-lg"
            >
              &#8250;
            </button>
          </section>
        </section>
      )}
    </section>
  );
}
