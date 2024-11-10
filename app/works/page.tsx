import React from 'react'
import Portfolio1 from '../assets/portfolio-1.png'
import Portfolio2 from '../assets/portfolio-2.png'
import Portfolio3 from '../assets/portfolio-3.png'
import Portfolio4 from '../assets/portfolio-4.png'
import Portfolio5 from '../assets/portfolio-5.png'
import Portfolio6 from '../assets/portfolio-6.png'
import Image from 'next/image'

export default function Works() {
  return (
    <section id="works" className="min-h-screen w-full max-w-4xl mx-auto flex flex-col items-center text-center p-4">
      <h2 className="text-3xl font-bold my-4">My Portfolio</h2>
      <span className="font-light text-base max-w-3xl">
        I take pride in delivering high-quality work with a strong focus on attention to detail and client satisfaction. Explore my portfolio to see my dedication and expertise in action.
      </span>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        <Image src={Portfolio1} alt="Portfolio1" className="w-full h-auto object-cover rounded-lg" />
        <Image src={Portfolio2} alt="Portfolio2" className="w-full h-auto object-cover rounded-lg" />
        <Image src={Portfolio3} alt="Portfolio3" className="w-full h-auto object-cover rounded-lg" />
        <Image src={Portfolio4} alt="Portfolio4" className="w-full h-auto object-cover rounded-lg" />
        <Image src={Portfolio5} alt="Portfolio5" className="w-full h-auto object-cover rounded-lg" />
        <Image src={Portfolio6} alt="Portfolio6" className="w-full h-auto object-cover rounded-lg" />
      </div>
      
      {/* Uncomment if you want to use the button */}
      {/* <button className="mt-12 px-10 py-2 rounded-full bg-white text-lg cursor-pointer">See More</button> */}
    </section>
  )
}
