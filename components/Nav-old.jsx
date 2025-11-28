import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full z-40">
      <div className="flex justify-center bg-black w-[100%]">
          <div className="flex justify-center items-center mt-0 pb-o mb-0 z-[100] w-[100%] h-[125px] bg-black">
            <Link href="/">
          <Image
            src="https://user-images.githubusercontent.com/77664153/256351395-ce3f5c6c-b1f9-410b-ae34-f521e9db7c01.svg"
            width="180"
            height="40"
            className="mt-4 pt-6"
          />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
