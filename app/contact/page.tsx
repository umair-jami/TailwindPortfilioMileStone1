'use client'
import React, { useRef } from "react";
import walmart from "../assets/walmart.png";
import facebook from "../assets/facebook.png";
import microsoft from "../assets/microsoft.png";
import adobe from "../assets/adobe.png";

import fbIcon from "../assets/facebook-icon.png";
import xIcon from "../assets/twitter.png";
import instaIcon from "../assets/instagram.png";
import youtubeIcon from "../assets/youtube.png";
import Image from "next/image";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  return (
    <section id="contactPage" className="min-h-screen w-full max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
      <div id="clients" className="py-8">
        <h1 className="text-3xl font-bold mb-4">My Clients</h1>
        <p className="text-base font-light">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with include
        </p>
        <div className="flex flex-wrap justify-center mt-4 space-x-4">
          <Image src={walmart} alt="walmart" className="w-1/4 min-w-[9rem] p-1" />
          <Image src={facebook} alt="facebook" className="w-1/4 min-w-[9rem] p-1" />
          <Image src={microsoft} alt="microsoft" className="w-1/4 min-w-[9rem] p-1" />
          <Image src={adobe} alt="adobe" className="w-1/4 min-w-[9rem] p-1" />
        </div>
      </div>

      <div id="contact" className="py-8">
        <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
        <span className="text-base font-light mb-6 block">
          Please fill out the form below to discuss any work opportunity
        </span>
        <form className="flex flex-col items-center w-full max-w-2xl space-y-4" ref={form}>
          <input type="text" className="w-full p-2 rounded-md bg-gray-800 text-white" placeholder="Your Name" name="your_name" />
          <input type="email" className="w-full p-2 rounded-md bg-gray-800 text-white" placeholder="Your Email" name="your_email" />
          <textarea
            className="w-full p-2 rounded-md bg-gray-800 text-white"
            name="message"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="bg-white text-black px-8 py-2 rounded-md mt-4">
            Submit
          </button>
          <div className="flex space-x-3 mt-6">
            <Image src={fbIcon} alt="fbIcon" className="h-12 w-12" />
            <Image src={xIcon} alt="xIcon" className="h-12 w-12" />
            <Image src={youtubeIcon} alt="youtubeIcon" className="h-12 w-12" />
            <Image src={instaIcon} alt="instaIcon" className="h-12 w-12" />
          </div>
        </form>
      </div>
    </section>
  );
}
