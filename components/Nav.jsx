"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";
import Image from "next/image";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("transparent");
  const [logoDark, setLogoDark] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        // setColor("#ffffff");
        setColor("#000000");
        // setTextColor("#52525b");
        setTextColor("#ffffff");
        // setLogoDark(true);
      } else {
        setColor("rgba(0, 0, 0, 0)");
        // setColor("#000000");
        setTextColor("rgba(0, 0, 0, 0)");
        // setLogoDark(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <div
        style={{ backgroundColor: `${color}` }}
        className="fixed left-0 top-0 w-[100%] z-[100] ease-in duration-300 block"
      >
        <div className="ml-0 pl-0 flex justify-between items-end p-4 z-1 text-white w-full h-[130px]">
          <div className="flex justify-end w-[50%] h-[130px] pr-[65px]">
            <Link href="/">
              {/* White Logo */}

              <Image
                src="/images/maxum-light-logo.svg"
                width="130"
                height="90"
                alt="light logo"
                className={
                  logoDark ? "hidden" : "fixed top-[7px]"
                }
              />

              {/* Dark Logo  */}

              <Image
                src="/images/maxum-dark-logo.svg"
                width="120"
                height="80"
                alt="dark logo"
                className={logoDark ? "fixed top-[7px] left-[46%]" : "hidden"}
              />
            </Link>
            </div>
            <div className="flex justify-end w-[50%]">
              <ul
                style={{ color: `${textColor}` }}
                className=" z-40 fixed right-5 top-22 hidden md:flex md:relative h-9 text-xl"
              >
                {/* 
            <li className="flex items-center mx-2 hover:text-[#4C4E52] hover:border-b-[2px] border-solid border-[#4C4E52] ">
              <Link href="/about">About Us</Link>
            </li> */}
                {/* 
            <li className="flex items-center mx-2 hover:text-[#4C4E52] hover:border-b-[2px] border-solid border-[#4C4E52] ">
              <Link href="/process">Our Process</Link>
            </li> */}

                {/* <li className="flex items-center mx-2 hover:text-[#4C4E52] hover:border-b-[2px] border-solid border-[#4C4E52] ">
              <Link href="/technology">Our Technologies</Link>
            </li> */}

                {/* <li class=" flex items-center mx-2 hover:text-[#4C4E52] hover:border-b-[2px] border-solid border-[#4C4E52]">
              <div class="relative group">
                <Link href="/products">Products</Link>
                <div class="absolute z-10 hidden bg-grey-300 group-hover:block mt-[0px]">
                  <div class="bg-gray-200 shadow-lg">
                    <div class="w-[100%] text-blaxk">
                      <Link
                        className="whitespace-nowrap block hover:bg-[#587cc5] px-[8px] pt-[5px]"
                        href="/products/commercial"
                      >
                        Commercial Anodes
                      </Link>
                      <Link
                        className="whitespace-nowrap block hover:bg-[#587cc5] px-[8px] pt-[5px]"
                        href="/products/pleasureCraft"
                      >
                        Pleasure Craft Anodes
                      </Link>
                      <Link
                        className="whitespace-nowrap block hover:bg-[#587cc5] px-[8px] pt-[5px] pb-[5px]"
                        href="/products/zincCap"
                      >
                        Zinc Anode Caps
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li> */}

                {/* <li className=" flex items-center mx-2 hover:text-[#4C4E52] hover:border-b-[2px] border-solid border-[#4C4E52]">
              <div className="relative group">
                <Link href="/technicalInfo">Our Technologies</Link>
                <div className="absolute z-10 hidden bg-grey-300 group-hover:block mt-[0px]">
                  <div className="bg-gray-200 shadow-lg">
                    <div className="w-[100%]">
                      <p className="whitespace-nowrap block hover:bg-[#587cc5] px-[8px] pt-[5px]">
                        <Link href="/technicalInfo/milSpec">
                          Why Choose Mil-Spec?
                        </Link>
                      </p>
                      <Link
                        className="whitespace-nowrap block hover:bg-[#587cc5] px-[8px] pt-[5px]"
                        href="/technicalInfo/protection"
                      >
                        Boat Protection Basics
                      </Link>
                      <Link
                        className="whitespace-nowrap block hover:bg-[#587cc5] px-[8px] pt-[5px] pb-[5px]"
                        href="/technicalInfo/faq"
                      >
                        FAQ
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li> */}

                <li className="flex items-center mx-2 hover:text-[#4C4E52] hover:border-b-[2px] border-solid border-[#4C4E52] ">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Mobile Button */}
            <div
              onClick={handleNav}
              className="absolute right-4 top-10 md:hidden z-[10]"
            >
              {nav ? (
                <CgCloseO size={70} style={{ color: `${textColor}` }} />
              ) : (
                <HiMenu size={70} style={{ color: `${textColor}` }} />
              )}
            </div>

            <div
              className={
                nav
                  ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/40"
                  : ""
              }
            >
              {/* Mobile Menu */}
              <div
                className={
                  nav
                    ? "md:hidden absolute top-0 left-[50%] right-0 bottom-0 flex justify-center items-center w-[50%] h-screen bg-black z-[10] text-center ease-in duration-300"
                    : "md:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-[50%] h-screen bg-black z-[10] text-center ease-in duration-300"
                }
              >
                <ul>
                  {/* <li
                  onClick={handleNav}
                  className="p-4 text-4xl hover:text-gray-500"
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-4 text-4xl hover:text-gray-500"
                >
                  <Link href="/about">About Us</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-4 text-4xl hover:text-gray-500"
                >
                  <Link href="/products">Products</Link>
                </li> */}
                  {/* <li
                  onClick={handleNav}
                  className="p-4 text-4xl hover:text-gray-500"
                >
                  <Link href="/technology">Our Technologies</Link>
                </li> */}
                  {/* <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/products/faq">FAQ</Link>
              </li> */}

                  <li
                    onClick={handleNav}
                    className="p-4 text-4xl hover:text-gray-500"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default Nav;
