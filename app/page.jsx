"use client";

import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* FULLSCREEN VIDEO HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/maxum-video-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text + CTA */}
        <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <p className="mb-4 font-heading text-xs tracking-[0.3em] text-gray-200 md:text-sm">
              MAXUM CNC · METAL DISTRIBUTORS LTD
            </p>

            <h1 className="font-boldHeading text-4xl tracking-wider text-white md:text-5xl lg:text-6xl">
              PRECISION CNC MACHINING
            </h1>

            <p className="mt-6 text-lg font-light text-gray-100 md:text-2xl">
              Specializing in Lead (Pb), Zinc (Zn), Aluminum (Al) and Steel.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="rounded-lg border border-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
