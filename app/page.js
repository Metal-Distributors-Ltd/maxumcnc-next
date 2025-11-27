import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/maxum-video-bg.mp4"   // <- put the video in /public with this name
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Subtle dark gradient ONLY at very bottom so footer transition feels smooth */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-black/0" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <p className="section-label mb-4">Precision CNC Machining</p>

            <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] md:text-6xl font-semibold leading-tight drop-shadow-[0_0_20px_rgba(0,0,0,0.9)]">
              Custom Milling, Turning &amp; Tooling
            </h1>

            <p className="mt-4 max-w-2xl text-base md:text-lg text-gray-200 drop-shadow-[0_0_12px_rgba(0,0,0,0.85)]">
              Lead (Pb), zinc (Zn), aluminum (Al) and steel — small and medium
              metal parts, fixtures and tooling.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/services" className="btn-ghost">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE “WHAT WE DO” SECTION (very minimal copy) */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container grid md:grid-cols-3 gap-10 md:gap-12">
          <div className="md:col-span-2">
            <p className="section-label mb-3">What We Do</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Custom metal machining in lead, zinc, aluminum and steel.
            </h2>
            <p className="text-sm md:text-base text-gray-200 max-w-2xl">
              We machine custom metal components and tooling with a focus on
              consistent quality and clear communication. Jobs are scoped on a
              case-by-case basis — from one-off parts to repeat production runs.
            </p>
          </div>

          <div className="space-y-4 text-sm md:text-base text-gray-200">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-xs text-gray-400">
                Materials
              </p>
              <p>Lead, zinc, aluminum and steel.</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-xs text-gray-400">
                Typical Work
              </p>
              <p>Small and medium machined parts, fixtures and tooling.</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-xs text-gray-400">
                Location
              </p>
              <p>Abbotsford, BC — serving customers across Canada and beyond.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
