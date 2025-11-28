import Image from "next/image";
import Link from "next/link";
import { GiRotaryPhone } from "react-icons/gi";
import { TbMap2 } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 mt-16">
      {/* Contact strip */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        {/* Address */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-accent2 p-5">
            <TbMap2 className="text-3xl text-white" />
          </div>
          <h3 className="mb-3 text-lg font-semibold">Address</h3>
          <p>31453 King Rd, Unit 160</p>
          <p>Abbotsford, BC V2T 5Z2</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-accent2 p-5">
            <IoIosMail className="text-3xl text-white" />
          </div>
          <h3 className="mb-3 text-lg font-semibold">Email</h3>
          <Link
            href="mailto:info@metaldist.com"
            className="hover:text-accent2 transition-colors"
          >
            info@metaldist.com
          </Link>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-accent2 p-5">
            <GiRotaryPhone className="text-3xl text-white" />
          </div>
          <h3 className="mb-3 text-lg font-semibold">Phone</h3>
          <p>604-420-3731</p>
          <p>1-877-420-3731 (toll-free)</p>
        </div>

        {/* Map link */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-accent2 p-5">
            <GrMapLocation className="text-3xl text-white" />
          </div>
          <h3 className="mb-3 text-lg font-semibold">Find Us</h3>
          <Link
            href="https://maps.app.goo.gl/B8i4bjxzoKX8aQFZ8"
            target="_blank"
            className="hover:text-accent2 transition-colors"
          >
            View on Google Maps
          </Link>
        </div>
      </div>

      {/* Proudly Made in Canada strip */}
      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/images/made-in-canada-maxum.png"
              alt="Proudly made in Canada"
              width={60}
              height={60}
            />
            <p className="text-sm tracking-[0.25em] uppercase">
              Proudly Made in Canada
            </p>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Maxum CNC · Metal Distributors Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
