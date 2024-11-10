import React from 'react'
import SeoImg from '../assets/seoicon.png'
import devImg from '../assets/devIcon.png'
import responiveImg from '../assets/responsiveicon.png'
import Image from 'next/image'

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden w-full max-w-4xl mx-auto flex flex-col items-center text-center">
      <span className="text-3xl font-semibold pt-12 mb-6">What I do</span>
      <span className="font-normal text-sm max-w-3xl px-8">
        Hello! I'm Umair, a web developer skilled in HTML, CSS, JavaScript, React.js, Tailwind CSS, and Next.js. I create visually appealing and user-friendly websites, focusing on both front-end design and seamless functionality. Let's build something amazing together and bring your vision to life!
      </span>
      
      <div className="mt-6 w-full max-w-5xl text-left">
        <div className="flex flex-col sm:flex-row items-start my-4 p-6 bg-gray-700 rounded-lg">
          <Image src={devImg} alt='devImg' className="object-cover h-12 w-12 mr-4 rounded-full" />
          <div>
            <h2 className="text-lg font-semibold">Web Development</h2>
            <p className="text-xs font-light mt-1">
              Transforming ideas into fully functional, responsive websites using modern web technologies. From front-end design to back-end development, we create scalable, secure, and high-performing web solutions tailored to your business needs.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start my-4 p-6 bg-gray-700 rounded-lg">
          <Image src={SeoImg} alt="seoImg" className="object-cover h-12 w-12 mr-4 rounded-full" />
          <div>
            <h2 className="text-lg font-semibold">SEO</h2>
            <p className="text-xs font-light mt-1">
              Delivering user-centric design and SEO strategies for intuitive interfaces and improved digital presence. Let's enhance your visibility and create lasting connections with your audience.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start my-4 p-6 bg-gray-700 rounded-lg">
          <Image src={responiveImg} alt="responiveImg" className="object-cover h-12 w-12 mr-4 rounded-full" />
          <div>
            <h2 className="text-lg font-semibold">Responsiveness</h2>
            <p className="text-xs font-light mt-1">
              Specializing in cross-platform and native app development to ensure seamless user experiences. We focus on efficient, scalable, and feature-rich applications that align with your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
