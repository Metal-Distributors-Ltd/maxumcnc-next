import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-right mt-[15%] md:mt-[10%] lg:mt-[8%] w-[100%]">
      <Image
        // src="https://user-images.githubusercontent.com/77664153/257346453-d67a11e6-d931-4916-b70c-b16992b05322.png"
        // src="https://user-images.githubusercontent.com/77664153/256884639-d6d1c43e-bd5f-4c05-b8ea-857fa5087abc.png"
        width={0}
        height={0}
        fill={true}
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="z[0]"
      />
      <div className="flex flex-col items-center bg-black/30 text-white text-center z-[100] py-8 px-[75px] md:px-[300px] w=full">
        <h1 className="text-white font-boldHeading text-6xl tracking-wider top-[30%] z-[10]">
          Precision Machining services
        </h1>
        <p className="py-6 font-heading text-center text-2xl md:text-3xl text-white font-light z-[10]">
          Based in Burnaby, BC
        </p>

        <button className="text-white font-boldHeading text-4xl tracking-wider z-[10]  px-4 py-2 border-2 rounded-lg hover:bg-white hover:text-gray-500">
          <Link href={"/contact"}>Contact US</Link>
        </button>

      </div>

    </div>
  );
};

export default Hero;
