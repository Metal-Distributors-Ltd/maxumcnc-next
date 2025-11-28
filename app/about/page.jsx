import React from 'react'
import Hero from "@components/Hero";

const About = () => {
  return (
    <>
          <Hero
      heading={"ABOUT US"}
      message={"Commited to providing Excellence and Quality"}
      img={"/images/maxum-home.png"} />
    <div className='mt-[300px] flex flex-col items-center'>
    <div className=' w-[50%]'>A subsidiary of Metal Distributors LTD, Maxum CNC was established in 2013 to service the growing need for CNC precision parts. Estsablished in 1949, Metal distributors has 75 years of experience in the metal fabrication industry. From extruding lead, to pressure die-casting, to tool and die making, we have the experience and expertise to take you from spec drawing to working prototype, to full-scale production.</div>
    </div>
    </>
  )
}

export default About