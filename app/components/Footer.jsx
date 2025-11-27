import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#3b3b3b] text-gray-200 py-16 mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold tracking-widest mb-4">WE’RE HERE TO HELP</h3>

          <p><b>Phone:</b> 604-420-3731 / 1-877-420-3731</p>
          <p><b>Email:</b> info@metaldist.com</p>
          <p><b>Address:</b> 31453 King Rd, Unit 160, Abbotsford, BC V2T 5Z2</p>

          <p className="mt-6 text-sm text-gray-400">
            © {new Date().getFullYear()} Metal Distributors Ltd.
          </p>
        </div>

        {/* Badge */}
        <div className="flex justify-end items-start">
          <div className="text-center">
            <Image
              src="/made-in-canada-maxum.png"
              width={120}
              height={120}
              alt="Proudly Made in Canada"
              className="mx-auto"
            />
            <p className="tracking-widest text-sm mt-2">
              PROUDLY<br />MADE IN<br />CANADA
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
