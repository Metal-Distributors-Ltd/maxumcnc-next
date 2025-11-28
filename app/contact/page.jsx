import ContactForm from "../../components/ContactForm";
import Hero from "../../components/Hero";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      {/* HERO */}
      <Hero
        heading="CONTACT US"
        message="We are always ready and willing to help you with your next project."
        img="/images/maxum-process-tall.png"
      />

      {/* INTRO + FORM */}
      <section className="mt-20 flex w-full flex-col items-center justify-start px-4 md:flex-row-reverse md:px-10 lg:px-20">
        {/* Text + Hours */}
        <div className="flex w-full flex-col items-center md:w-1/2">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="mb-6 text-3xl md:mb-4">
              We would love to hear from you!
            </p>
            <p className="mb-10 w-[90%] text-xl md:mb-16 md:w-[80%]">
              Send us a message or contact us via one of the methods below and
              we will get back to you.
            </p>
          </div>

          <div className="flex w-[90%] flex-col items-center justify-center rounded-xl bg-accent2Light px-6 py-6 md:px-8 md:py-8">
            <h2 className="text-2xl font-semibold">Hours of Operation</h2>
            <ul className="my-4 text-center text-xl">
              <li>Monday – Thursday: 8am – 4pm</li>
              <li>Friday: 8am – 3pm</li>
              <li>Saturday – Sunday: Closed</li>
              <li>Stat Holidays: Closed</li>
            </ul>
          </div>
        </div>

        {/* FORM */}
        <div className="mt-10 w-full md:mt-0 md:w-1/2">
          <ContactForm />
        </div>
      </section>

      {/* CONTACT INFO GRID */}
      <section className="grid w-full grid-cols-1 bg-accent1 py-10 md:grid-cols-4">
        {/* Address */}
        <div className="flex flex-col items-center text-center text-white">
          <div className="mt-20 rounded-full bg-accent2 p-10 md:mt-0">
            <Image
              src="/images/maxum-map.png"
              width={100}
              height={100}
              alt="map icon"
            />
          </div>
          <h1 className="my-8 text-2xl font-semibold">Address</h1>
          <p className="text-xl tracking-wide">31453 King Rd, Unit 160</p>
          <p className="text-xl tracking-wide">Abbotsford, BC V2T 5Z2</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-center text-white">
          <div className="mt-20 rounded-full bg-accent2 p-10 md:mt-0">
            <Image
              src="/images/maxum-mail.png"
              width={90}
              height={100}
              alt="email icon"
            />
          </div>
          <h1 className="my-8 text-2xl font-semibold">Email</h1>
          <p className="text-xl tracking-wide">info@metaldist.com</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center text-white">
          <div className="mt-20 rounded-full bg-accent2 p-10 md:mt-0">
            <Image
              src="/images/maxum-phone.png"
              width={100}
              height={100}
              alt="phone icon"
            />
          </div>
          <h1 className="my-8 text-2xl font-semibold">Phone</h1>
          <p className="text-xl tracking-wide">604-420-3731</p>
          <p className="text-xl tracking-wide">1-877-420-3731 (toll-free)</p>
        </div>

        {/* Fax */}
        <div className="flex flex-col items-center text-center text-white">
          <div className="mt-20 rounded-full bg-accent2 p-10 md:mt-0">
            <Image
              src="/images/maxum-fax.png"
              width={100}
              height={100}
              alt="fax icon"
            />
          </div>
          <h1 className="my-8 text-2xl font-semibold">Fax</h1>
          <p className="text-xl tracking-wide">604-420-9240</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
