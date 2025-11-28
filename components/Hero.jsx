import Image from "next/image";
// import bg1 from "../public/images/maxum-home";
import Link from "next/link";
import Home from "@app-delete/page";

const Hero = ({ heading, message, img }) => {
  return (
    <div className="relative flex flex-col items-center w-[100%]">
      <Image
        src={img}
        width={1000}
        height={800}
        style={{ objectFit: "cover" }}
        className="z[0] w-screen h-screen"
      />
      <div className="absolute top-0 md:top-0 flex flex-col items-center bg-black/30 text-white text-center z-[50] py-8 px-[75px] md:px-[250px] w-screen h-screen">
        <div className="absolute top-[35%]">
          <h1 className="text-white font-boldHeading text-6xl tracking-wider top-[30%] px-2 z-[20]">
            {heading}
          </h1>
          <p className="py-6 px-2 font-heading text-center text-2xl md:text-3xl text-white font-light z-[10]">
            {message}
          </p>
        </div>

        {/* <button className="text-white font-boldHeading text-4xl tracking-wider z-[10]  px-4 py-2 border-2 rounded-lg hover:bg-white hover:text-gray-500">
          <Link href={"/contact"}>Contact US</Link>
        </button> */}
      </div>
    </div>
  );
};

export default Hero;
