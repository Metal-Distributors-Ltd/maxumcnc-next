import ContactForm from "@components/ContactForm";
import Hero from "@components/Hero";
import Image from "next/image";

const contact = () => {
  return (
    <div className="flex flex-col items-center">
      <Hero
        heading={"CONTACT US"}
        message={
          "We are always ready and willing to help you with your next project"
        }
        img={"/images/maxum-process-tall.png"}
      />

      <div className="flex flex-col md:flex-row-reverse items-center justify-start w-full mt-20">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="mb-10 md:mb-6 text-3xl">
              We would love to hear from you!
            </p>
            <p className="text-xl text-center mb-10 md:mb-28 w-[80%]">
              Send us a message or contact us via one of the methods below and
              we will get back to you.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-accent2Light w-[90%] h-[53%] rounded-xl pt-4">
            <h2>Hours Of Operation</h2>
            <ul className="text-center text-xl my-4">
              <li>Monday - Thursday: 8am - 4pm</li>
              <li>Friday: 8am - 3pm </li>
              <li>Saturday - Sunday: Closed</li>
              <li>Stat Holidays: Closed</li>
            </ul>
          </div>
        
        
        </div>
        <ContactForm />
      </div>

      <div className="bg-accent1 grid grid-cols-1 md:grid-cols-4 w-full py-10">
        <div className="flex flex-col items-center text-white text-center">
          <div className="bg-accent2 rounded-full p-10 mt-20 md:mt-0">
            <Image
              src="/images/maxum-map.png"
              width={100}
              height={100}
              alt="map icon"
            />
          </div>
          <h1 className="my-8">Address</h1>
          <p className="text-xl tracking-wide">31453 King Rd, Unit 160</p>
          <p className="text-xl tracking-wide">Abbotsford, BC V2T 5Z2</p>
        </div>

        <div className="flex flex-col items-center text-white text-center">
          <div className="bg-accent2 rounded-full p-10 mt-20 md:mt-0">
            <Image
              src="/images/maxum-mail.png"
              width={90}
              height={100}
              alt="email icon"
            />
          </div>
          <h1 className="my-8">Email</h1>
          <p className="text-xl tracking-wide">info@metaldist.com</p>
        </div>

        <div className="flex flex-col items-center text-white text-center">
          <div className="bg-accent2 rounded-full p-10 mt-20 md:mt-0">
            <Image
              src="/images/maxum-phone.png"
              width={100}
              height={100}
              alt="phone icon"
            />
          </div>
          <h1 className="my-8">Phone</h1>
          <p className="text-xl tracking-wide">604-420-3731</p>
          <p className="text-xl tracking-wide">1-877-420-3731 (toll-free)</p>
        </div>
        <div className="flex flex-col items-center text-white text-center">
          <div className="bg-accent2 rounded-full p-10 mt-20 md:mt-0">
            <Image
              src="/images/maxum-fax.png"
              width={100}
              height={100}
              alt="fax icon"
            />
          </div>
          <h1 className="my-8">Fax</h1>
          <p className="text-xl tracking-wide">604-420-9240</p>
        </div>
      </div>
    </div>
  );
};

export default contact;
