import React from "react";
import Hero from "@components/Hero";

const Technology = () => {
  return (
    <div>
      <Hero
        heading={"OUR TECHNOLOGY"}
        message={
          "We have top of the line CNC machines and a fully equipped machine shop"
        }
        img={"/images/maxum-tech-tall.png"}
      />

      <div className="flex flex-col items-center mt-[5vh]">
        <h1 className="text-md mb-8 text-center">CNC Milling</h1>

        <div className="flex flex-col items-center md:flex-row md:justify-start py-8 md:px-[5%] border-y-[1.5px] border-black w-[90%] lg:w-[68%]">
          <div className="w-[70%] flex flex-col items-center md:items-start">
            <h2 className="flex flex-col md:flex-row md:items-center pb-3 text-center">
              DOOSAN<span className="font-extralight pl-2">DNM 4500</span>
            </h2>
            <div className="tracking-wide italic text-center md:text-left w-[70%] pb-2 md:pb-0">
              Reliable, high precision, stable Vertical Milling Center with a
              direct-coupled spindle for higher productivity
            </div>
          </div>

          <ul className="list-none text-center md:text-left whitespace-nowrap">
            <li>X - AXIS TRAVEL - 31.5&quot;</li>
            <li>Y - AXIS TRAVEL - 15.75&quot;</li>
            <li>Z - AXIS TRAVEL - 18.9&quot;</li>
            <li>MAX LOAD - 1323 lbs</li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:flex-row md:justify-start py-8 md:px-[5%] mb-4 border-b-[1.5px] border-black w-[90%] lg:w-[68%]">
          <div className="w-[70%] flex flex-col items-center md:items-start">
            <h2 className="flex flex-col md:flex-row md:items-center pb-3 text-center">
              HAAS<span className="font-extralight pl-2">VF2</span>
            </h2>
            <div className="tracking-wide italic text-center w-[70%] pb-2 md:pb-0 md:text-left">
              Best selling vertical machine in the World. Equipped with Pallet
              Changer for continuous production
            </div>
          </div>

          <ul className="list-none text-center md:text-left whitespace-nowrap">
            <li>X - AXIS TRAVEL - 30&quot;</li>
            <li>Y - AXIS TRAVEL - 16&quot;</li>
            <li>Z - AXIS TRAVEL - 20&quot;</li>
            <li>MAX LOAD - 3000 lbs</li>
          </ul>
        </div>

        <h1 className="text-md mt-8 mb-8 text-center">CNC TURNING</h1>

        <div className="flex flex-col items-center md:flex-row md:justify-start py-8 md:px-[5%] border-y-[1.5px] border-black w-[90%] lg:w-[68%]">
          <div className="w-[70%] flex flex-col items-center md:items-start">
            <h2 className="flex flex-col md:flex-row md:items-center pb-3 text-center">
              YAMA SEIKI<span className="font-extralight pl-2">GS-280LMY</span>
            </h2>
            <div className="tracking-wide italic text-center w-[70%] pb-2 md:pb-0 md:text-left">
              Powerful turning center with built-in spindle type tailstock to
              provide maximum rigidity and load capacity
            </div>
          </div>

          <ul className="list-none text-center md:text-left whitespace-nowrap">
            <li>MAX TURNING DIAMETER - 16.53&quot;</li>
            <li>MAX LENGTH - 47.24&quot;</li>
            <li>CHUCK CAPACITY - 10&quot;</li>
            <li>MAX LOAD - 506 lbs</li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:flex-row md:justify-start py-8 md:px-[5%] mb-4 border-b-[1.5px] border-black w-[90%] lg:w-[68%]">
          <div className="w-[70%] flex flex-col items-center md:items-start">
            <h2 className="flex flex-col md:flex-row md:items-center pb-3 text-center">
              YAMA SEIKI<span className="font-extralight pl-2">GA-2600</span>
            </h2>
            <div className="tracking-wide italic text-center w-[70%] pb-2 md:pb-0 md:text-left">
              Uses 2 different bed lengths and 5 different sizes of bar
              capacities combined with a powerful spindle, high speed servo
              indexing turret and high rigidity structure design
            </div>
          </div>

          <ul className="list-none text-center md:text-left whitespace-nowrap">
            <li>MAX TURNING DIAMETER - 13.77&quot;</li>
            <li>MAX LENGTH - 23.85&quot;</li>
            <li>CHUCK CAPACITY - 10&quot;</li>
            <li>MAX LOAD - 506 lbs</li>
          </ul>
        </div>

        <h1 className="py-8 text-center">SOFTWARE</h1>

        <div className="flex flex-col items-center md:flex-row md:justify-start py-8 md:px-[5%] mb-4 border-y-[1.5px] border-black w-[90%] lg:w-[68%]">
          <div className="w-[70%] flex flex-col items-center md:items-start">
            <h2 className="flex flex-col md:flex-row md:items-center pb-3 text-center">
              Autodesk<span className="font-extralight pl-2">Fusion 360</span>
            </h2>
            <div className="tracking-wide italic text-center w-[70%] pb-2 md:pb-0 md:text-left"></div>
          </div>

          <ul className="list-none text-center md:text-left whitespace-nowrap">
            <li>SUPPORTED FILES: STEP and 3MF</li>
          </ul>
        </div>

        <h1 className="py-8 text-center">FULLY EQUIPPED MACHINE SHOP</h1>

        <div className="flex flex-col items-center md:flex-row md:justify-start py-8 md:px-[5%] mb-4 border-y-[1.5px] border-black w-[90%] lg:w-[68%]">
          <div className="w-[70%] flex flex-col items-center md:items-start">
            <h2 className="flex flex-col md:flex-row md:items-center pb-3 text-center">
              MANUAL<span className="font-extralight pl-2">MACHINES</span>
            </h2>
            <div className="tracking-wide italic text-center w-[70%] pb-2 md:pb-0 md:text-left">
              We have a fully equipped manual machine shop so we can get you
              from protoype to finished product
            </div>
          </div>

          <ul className="list-none text-center md:text-left whitespace-nowrap">
            <li className="underline">TYPES OF EQUIPMENT WE HAVE:</li>
            <li>DRILL PRESSES</li>
            <li>METAL BAND SAWS</li>
            <li>MANUAL LATHES</li>
            <li>BELT SANDERS</li>
            <li>RADIAL SAWS</li>
            <li>GRINDERS</li>
            <li>AND MANY MORE</li>
          </ul>
        </div>

        <h1 className="py-8 text-center">DIE CASTING & FABRICATION</h1>

        <div className="flex flex-col items-center md:flex-row md:justify-start py-8 md:px-[5%] mb-4 border-y-[1.5px] border-black w-[90%] lg:w-[68%]">
          <div className="w-[70%] flex flex-col items-center md:items-start">
            <h2 className="flex flex-col md:flex-row md:items-center pb-3 text-center">
              AUTOMATED<span className="font-extralight pl-2">& MANUAL</span>
            </h2>
            <div className="tracking-wide italic text-center w-[70%] pb-2 md:pb-0 md:text-left">
  We are also a metal fabrication shop and have a variety of machines and equipment for automated and manual fabrication processes.
            </div>
          </div>

          <ul className="list-none text-center md:text-left whitespace-nowrap">
            <li className="underline">TYPES OF EQUIPMENT WE HAVE:</li>
            <li>SEVERAL DIE CASTING MACHINES</li>
            <li>LEAD (Pb) EXTRUDER</li>
            <li>LEAD (Pb) ROLLING MILL</li>
            <li>PUNCH PRESS</li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technology;
