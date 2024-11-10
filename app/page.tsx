import Image from "next/image";
import Navbar from "./navbar/page";
import Intro from "./intro/page";
import Skills from "./skills/page";
import Works from "./works/page";
import Contact from "./contact/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Intro/>
    <Skills/>
    <Works/>
    <Contact/>
    <Footer/>
    </>
  );
}
