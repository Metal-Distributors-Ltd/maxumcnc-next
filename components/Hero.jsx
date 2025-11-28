"use client";

import Image from "next/image";

const Hero = ({ heading, message, img }) => {
  return (
    <div className="relative flex w-full items-center justify-center">
      {/* Background image */}
      <div className="relative h-[70vh] w-screen md:h-[80vh]">
        <Image
          src={img}
          alt={heading || "Maxum CNC"}
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Text overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="px-6 text-center md:px-24 lg:px-48">
          <h1 className="text-4xl tracking-wider text-white md:text-5xl lg:text-6xl">
            {heading}
          </h1>
          <p className="mt-6 text-lg font-light text-white md:text-2xl">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
