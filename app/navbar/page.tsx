"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import contactImg from "../assets/contact.png";
import menu from "../assets/menu.png";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-gray-800 h-20 w-full max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">
      <Image src={logo} alt="logo" className="object-cover h-12 w-16" />
      
      <div className="hidden md:flex space-x-4">
        <Link
        href="#intro"
         className="text-white cursor-pointer hover:text-yellow-400 hover:border-b-2 border-yellow-400">
          Home
        </Link>
        <Link
        href="#skills"
         className="text-white cursor-pointer hover:text-yellow-400 hover:border-b-2 border-yellow-400">
          About
        </Link>
        <Link 
        href="#works"
         className="text-white cursor-pointer hover:text-yellow-400 hover:border-b-2 border-yellow-400">
          Portfolio
        </Link>
        <Link 
        href="#contact"
        className="text-white cursor-pointer hover:text-yellow-400 hover:border-b-2 border-yellow-400">
          Clients
        </Link>
      </div>

      <Link
      href="#contact"
      className="hidden md:flex items-center bg-white text-black px-4 py-1 rounded-full cursor-pointer">
        <Image src={contactImg} alt="" className="object-contain h-4 w-4 mr-2" />
        Contact Me
      </Link>

      <Image
        src={menu}
        alt="Menu"
        className="md:hidden h-6 cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />

      {showMenu && (
        <div className="absolute top-16 right-8 z-20 flex flex-col p-2 bg-gray-800 rounded-lg shadow-lg min-w-[15rem]">
          <Link
          href="#intro"
           className="text-white py-2 px-8 cursor-pointer hover:bg-gray-700" onClick={() => setShowMenu(false)}>
            Home
          </Link>
          <Link
          
          href="#skills"
          className="text-white py-2 px-8 cursor-pointer hover:bg-gray-700" onClick={() => setShowMenu(false)}>
            About
          </Link>
          <Link
          
          href="#works"
          className="text-white py-2 px-8 cursor-pointer hover:bg-gray-700" onClick={() => setShowMenu(false)}>
            Portfolio
          </Link>
          <Link
          href="#contact"
          className="text-white py-2 px-8 cursor-pointer hover:bg-gray-700" onClick={() => setShowMenu(false)}>
            Clients
          </Link>
        </div>
      )}
    </nav>
  );
}
