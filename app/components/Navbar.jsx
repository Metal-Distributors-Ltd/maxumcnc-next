"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItem = (href, label) => (
    <Link
      href={href}
      className={
        "px-4 py-2 text-sm tracking-widest hover:text-teal-400 transition " +
        (pathname === href ? "text-teal-300 font-semibold" : "text-gray-200")
      }
    >
      {label}
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-maxum.png"
            width={140}
            height={60}
            alt="Maxum CNC"
            priority
          />
        </Link>

        {/* Nav Links */}
        <nav className="flex gap-6">
          {navItem("/", "HOME")}
          {navItem("/about", "ABOUT US")}
          {navItem("/services", "SERVICES")}
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-teal-600 text-black font-semibold tracking-wide hover:bg-teal-500 transition"
          >
            CONTACT US
          </Link>
        </nav>
      </div>
    </header>
  );
}
