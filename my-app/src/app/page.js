import React from 'react'
import HeroSection from './herosection/page'
import Presentation from './presentation/page'
import About from './about/About'

export default function page() {
  return (
    <div>
      <HeroSection/>
      <Presentation/>
      <About/>
    </div>
  )
}
