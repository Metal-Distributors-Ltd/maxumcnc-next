"use client";

import ContactForm from "@components/ContactForm";
import Hero from "@components/Hero";

const Home = () => {
  return (
    <>
      <Hero
        heading={"PRECISION CNC MACHINING"}
        message={
          "Specializing in Lead (Pb), Zinc (Zn), Aluminum (Al) and Steel"
        }
        img={""}
      />

      <video
        src={require("../public/videos/maxum-video-bg.mp4")}
        autoPlay
        muted
        loop
        className="absolute z[0] top-0 left-0 object-fill h-screen w-screen mb-0"
      />
    </>
  );
};

export default Home;
