"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";
import Image from "next/image";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#ffffff");

  const toggleNav = () => setNavOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setBgColor("#000000");
        setTextColor("#ffffff");
      } else {
        setBgColor("transparent");
        setTextColor("#ffffff");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{ backgroundColor: bgColor }}
      className="fixed left-0 top-0 z-[100] w-full transition-colors duration-300"
    >
      <div className="flex h-[130px] items-end px-4">
        {/* LOGO */}
        <div className="flex h-[130px] w-1/2 justify-start pl-[10px]">
          <Link href="/">
            <Image
              src="/images/maxum-light-logo.svg"
              width={130}
              height={90}
              alt="Maxum CNC"
              className="mt-2"
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden w-1/2 items-center justify-end md:flex">
          <ul
            style={{ color: textColor }}
            className="flex items-center gap-6 text-xl"
          >
            {/* Add more links here as you build out pages */}
            {/* <li className="hover:border-b-2 border-[#4C4E52] pb-1">
              <Link href="/about">About Us</Link>
            </li> */}
            <li className="hover:border-b-2 border-[#4C4E52] pb-1">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleNav}
          className="absolute right-4 top-10 z-[110] md:hidden"
          aria-label="Toggle navigation"
        >
          {navOpen ? (
            <CgCloseO size={70} style={{ color: textColor }} />
          ) : (
            <HiMenu size={70} style={{ color: textColor }} />
          )}
        </button>
      </div>

      {/* MOBILE OVERLAY + MENU */}
      {navOpen && (
        <div className="fixed left-0 top-0 z-[90] h-screen w-full bg-black/40 md:hidden">
          <div className="absolute right-0 top-0 flex h-screen w-1/2 items-center justify-center bg-black text-center">
            <ul className="space-y-6 text-4xl text-white">
              {/* <li onClick={toggleNav} className="hover:text-gray-400">
                <Link href="/">Home</Link>
              </li> */}
              {/* <li onClick={toggleNav} className="hover:text-gray-400">
                <Link href="/about">About Us</Link>
              </li> */}
              <li onClick={toggleNav} className="hover:text-gray-400">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
