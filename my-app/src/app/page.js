import React from 'react'
import HeroSection from './herosection/page'
import Presentation from './presentation/page'
import About from './about/About'
import Activities from './activities/Activities'

export default function page() {
  return (
    <>
      <HeroSection/>
      <Presentation/>
      <About/>
      <Activities/>
    </>
  )
}
