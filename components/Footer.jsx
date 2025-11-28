import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiRotaryPhone } from "react-icons/gi";
import { TbMap2 } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between bg-black h-[15%] lg:h-[100px] w-[100%] z-0">
        <div className="lg:w-[100%]">
        <h4 className="text-white text-2xl lg:text-3xl tracking-wider font-serif bold italic text-center lg:text-left py-4 lg:pt-1 lg:pb-2 lg:px-4">
        <Link href="/contact">We Ship Worldwide! Contact Us Today:</Link>
        </h4>
          <ul className="text-white flex flex-col md:flex-row  pl-[12%] lg:pl-4 md:pl-0 text-left w-[100%] md:w-[100%]">
            <li className="flex items-center">
              <GiRotaryPhone size={30} />{" "}
              <p className="pl-2 md:pr-6 lg:pr-12 text-sm">
                (604) 420 3731 / 1 (877) 420 3731
              </p>
            </li>
            <li className="flex items-center">
              <IoIosMail size={30} />
              <p className="pl-2 md:pr-6 lg:pr-12 text-sm">info@metaldist.com</p>
            </li>
            <li className="flex items-center">
              <TbMap2 size={30} />
              <p className="pl-2 text-sm">
                7220 Winston Street, Burnaby, BC V5A 2G9
              </p>
            </li>
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end items-center w-[100%] py-2.5">
          <Image
            className="flex pr-2"
            src="/images/made-in-canada-maxum.png"
            width={80}
            height={50}
          />
          <div className="flex flex-col text-white text-s lg:text-base text-left font-fancy w-[25%] lg:w-[15%] lg:pl-2">
            <p>PROUDLY</p> <p>MADE IN</p> <p>CANADA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
