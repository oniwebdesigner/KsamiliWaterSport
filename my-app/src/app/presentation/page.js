import React from 'react';
import Presentation from '../presentation/presentation';
import KsamilImage from '../../public/ksamili.jpg'; 

export default function Page() {
  const title = '"Sail, Paddle, Dive: Embrace the Water Sports Lifestyle."';
  const paragraphs = [
    "Welcome to Ksamili Water Sports, your premier destination for thrilling water sports experiences! Dive into a world of excitement with our wide range of activities where you can rent a jet ski, pedal boat, kayak, speed boat trip and more.",
    "Let our private or group boat tours delight you coming with us to discover the most beautiful blue water you have ever seen: visit the isles of Ksamil, Tongo and the attractions on the coastline from sea level!",
  ];

  return (
    <>
      <Presentation 
        title={title} 
        paragraphs={paragraphs} 
        imageSrc={KsamilImage}  
        overlayText="Making Waves"  
      />
    </>
  );
}
