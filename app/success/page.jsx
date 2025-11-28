import Link from "next/link";
import React from "react";
import Hero from "@components/Hero";

const success = () => {
  return (
    <>
    <div className="flex flex-col items-center">
      <Hero
        heading={"Thank you!"}
        message={"We will review your submission and respond shortly"}
        img={"/images/maxum-home.png"}
      />

      <div className="absolute top-[60%] text-white text-xl bold z-[100] flex flex-col items-center text-center p-[10%]">
        <Link href="/" className="hover:text-accent2">
          Return to Home Page
        </Link>
      </div>
      </div>
    </>
  );
};

export default success;
