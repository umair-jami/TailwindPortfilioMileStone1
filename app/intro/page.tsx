import React from "react";
import bg from "../assets/image.png";
import btnImg from "../assets/hireme.png";
import Image from "next/image";

export default function Intro() {
  return (
    <section id="intro" className="relative h-[calc(100vh-4rem)] w-full max-w-6xl mx-auto overflow-hidden">
      <div className="flex flex-col justify-center h-full w-full px-8 text-3xl font-bold">
        <span className="text-xl font-light">Hello,</span>
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
          I'm <span className="text-yellow-400">Umair</span> <br />
          Web Developer
        </span>
        <p className="text-sm sm:text-base font-light mt-2 tracking-wide">
          I am a skilled web developer with experience in creating <br />
          visually appealing and user-friendly websites.
        </p>

        {/* Update this button to trigger the download */}
        <a href="/Umair-Jami-Resume.pdf" download="Umair-Jami-Resume.pdf">
          <button className="flex items-center bg-white text-black mt-4 px-6 py-3 rounded-full cursor-pointer shadow-lg">
            <Image src={btnImg} alt="CV" className="object-contain mr-2 h-4" />
            Download CV
          </button>
        </a>
      </div>
      
      <Image src={bg} alt="portfolio" className="absolute top-[-4rem] right-0 h-full object-cover hidden sm:block z-[-1]" />
    </section>
  );
}
