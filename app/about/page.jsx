import Hero from "../../components/Hero";

const About = () => {
  return (
    <>
      <Hero
        heading="ABOUT US"
        message="Committed to providing Excellence and Quality"
        img="/images/maxum-home.png"
      />

      {/* ABOUT CONTENT */}
      <section className="mx-auto mt-20 w-full max-w-4xl px-6 pb-24 text-center md:mt-28 md:px-10">
        <h2 className="mb-8 text-3xl font-semibold tracking-wide text-white">
          Our History & Expertise
        </h2>

        <p className="text-lg leading-relaxed text-gray-200">
          A subsidiary of <strong>Metal Distributors Ltd.</strong>, Maxum CNC
          was established in 2013 to service the growing need for CNC precision parts.
          <br />
          <br />
          Metal Distributors was founded in 1949 and has over{" "}
          <strong>75 years of experience</strong> in the metal fabrication
          industry. From extruding lead, to pressure die-casting, to tool and die
          making, our team has the knowledge and expertise to take you from a
          specification drawing, to a working prototype, and finally to{" "}
          <strong>full-scale production</strong>.
        </p>

        <p className="mt-10 text-lg leading-relaxed text-gray-200">
          Maxum CNC continues the tradition of quality, innovation, and
          craftsmanship—supporting industries across marine, industrial,
          manufacturing, medical shielding, and more.
        </p>
      </section>
    </>
  );
};

export default About;
