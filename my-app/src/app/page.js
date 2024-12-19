import React from 'react'
import Presentation from './presentation/page'
import About from './about/About'
import Activities from './activities/Activities'
import Destinations from './destinations/Destinations'
import HeroSection from './home/page'

export default function page() {
  return (
    <>
      <HeroSection/>
      <Presentation/>
      <About/>
      <Activities/>
      <Destinations/>
    </>
  )
}
