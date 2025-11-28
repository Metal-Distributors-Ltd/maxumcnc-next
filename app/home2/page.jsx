"use client";

import ContactForm from "@components/ContactForm";
import Hero from "@components/Hero";
import Link from "next/link";

const Home2 = () => {
  return (
    <>
      <Hero
        heading={"PRECISION CNC MACHINING"}
        message={
          "Specializing in Lead (Pb), Zinc (Zn), Aluminum (Al) amd Steel"
        }
        img={""}
      />

      <video
        src={require("../../public/videos/maxum-video-bg.mp4")}
        autoPlay
        muted
        loop
        className="absolute z[0] top-0 left-0 object-fill h-screen w-screen mb-0"
      />

      {/* <button className="relative text-white font-boldHeading text-4xl tracking-wider px-4 py-2 border-2 rounded-lg hover:bg-white hover:text-gray-500">
        <Link href={"/contact"}>Contact US</Link>
      </button> */}

      <div className="flex flex-col md:flex-row justify-center items-center bg-accent1 px-1 md:py-4 ">
        <div className="flex flex-col items-center justify center lg:flex-row h-[8.5rem] lg:h-[3.5rem]">
        <h1 className="flex items-center font-heading text-4xl bold font-medium text-accent2 my-4 md:my-0 md:px-4">
          Celebrating 75 years of
        </h1>
        <div className="overflow-hidden h-[3.25rem] mt-2 md:mt-4 lg:mt-0">
        <ul className="animate-titleflip text-center lg:text-left">
          <li className="font-serif bold italic text-white text-5xl">
          Precision 
          </li>
          <li className="font-serif bold italic text-white text-4xl md:text-5xl text-nowrap pb-1">
          Customer Service
          </li>
          <li className="font-serif bold italic text-white text-5xl mb-3">
            Quality
          </li>
          <li className="font-serif bold italic text-white text-5xl mt-1">
          Excellence 
          </li>
          <li className="font-serif bold italic text-white text-4xl md:text-5xl text-nowrap mt-1              ">
            Metal Fabrication
          </li>
        </ul>
        </div>
        </div>
      </div>

      <article className="bg-accent1 text-white tracking-wide w-screen flex justify-center items-center text-center">
        <p className="w-[90%] lg:w-[60%] my-2 md:my-0"> Maxum CNC is a brand of Metal Distributors and we are proud be celebrating our 75th year in the Metal Fabrication Industry! Our skilled team of fabricators, die casters and machinists have 
</p>
        

      </article>
      <div>
        <div>
          Maxum CNC is a brand of Metal Distributors Ltd and is a trusted
          manufacturer for intricate, detailed and complex metal components.
        </div>
        <h2>We can take you from prototype to production</h2>
        <h2>What Makes Us Different?</h2>
        <h2>Services</h2>
        <p>At Maxum CNC we offer more than just CNC services. Our team of skilled professionals are well versed in all aspects of the metal fabrication industry. </p>
        <ul>
          <li>Vertical CNC Milling</li>
          <li>CNC Turning</li>
          <li>Design for Manufacturability</li>
          <li>Assembly</li>
          <li>Parts Finishing</li>
          <li>Welding</li>
          <li>Bending</li>
          <li>Die Casting</li>
          <li>Extruding</li>
          <li>Plasma Cutting</li>
        </ul>
      </div>
    </>
  );
};

export default Home2;
