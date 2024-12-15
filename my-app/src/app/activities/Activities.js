import React from 'react'
import Carousel from '../components/Carousel'

export default function Activities() {
  return (
    <>
      <section className='text-center justify-center bg-gray-900 p-14'>
        <h2 className='text-yellow-400 text-2xl p-6'>Let the sea set you free</h2>
        <h1 className='text-white text-6xl font-extrabold'>Activities</h1>
        <article className="p-16">
          <Carousel />
        </article>
      </section>
    </>
  )
}
