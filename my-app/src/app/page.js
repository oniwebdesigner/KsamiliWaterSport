import React from 'react'
import HeroSection from './home/page'
import Presentation from './presentation/page'
import About from './about/About'
import Activities from './activities/Activities'
import Destinations from './destinations/Destinations'

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
