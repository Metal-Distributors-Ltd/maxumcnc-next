import fs from "fs";
import path from "path";

function getGalleryImages() {
  const imagesDir = path.join(process.cwd(), "public", "images");
  try {
    const files = fs.readdirSync(imagesDir);
    return files.filter((file) =>
      /\.(png|jpe?g|gif|webp|svg)$/i.test(file)
    );
  } catch {
    return [];
  }
}

export default function Home() {
  const gallery = getGalleryImages();

  return (
    <div className="page">
      <header className="site-header">
        <div className="container nav">
          <div className="logo">MAXUM CNC</div>
          <nav className="nav-links">
            <a href="#top">Home</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#industries">Industries</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO WITH VIDEO BACKGROUND */}
        <section className="hero">
          <div className="hero-video-wrap">
            <video className="hero-video" autoPlay muted loop playsInline>
              <source src="/maxum-video-bg.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay" />
          </div>

          <div className="container hero-grid">
            <div>
              <p className="hero-kicker">PRECISION CNC MACHINING</p>
              <h1 className="hero-title">
                Specializing in Lead (Pb), Zinc (Zn), Aluminum (Al) &amp; Steel
              </h1>
              <p className="hero-body">
                Custom CNC machining for small and medium metal components,
                fixtures and tooling. From one-off prototypes to repeat
                production runs, we deliver tight tolerances, smooth finishes
                and dependable lead times.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn-primary">
                  Contact Us
                </a>
                <a href="#capabilities" className="btn-secondary">
                  View Capabilities
                </a>
              </div>
              <p className="hero-meta">
                We ship worldwide from Abbotsford, British Columbia, Canada.
              </p>
            </div>

            <div className="hero-side">
              <div className="hero-card">
                <h3>Proudly Made in Canada</h3>
                <p>
                  Maxum CNC is part of Metal Distributors Limited, a Canadian
                  foundry and manufacturing group serving marine, construction
                  and industrial customers.
                </p>
                <p>
                  <strong>Phone:</strong> 604-420-3731 / 1-877-420-3731
                  <br />
                  <strong>Email:</strong> info@metaldist.com
                  <br />
                  <strong>Location:</strong> 31453 King Rd, Unit 160,
                  Abbotsford, BC V2T 5Z2
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="section">
          <div className="container">
            <p className="section-heading">WHAT WE DO</p>
            <h2 className="section-title">
              CNC machining from prototype to production.
            </h2>
            <p className="section-lead">
              Maxum CNC supports one-off parts, short runs and medium-volume
              production, with deep experience in soft metals most shops avoid:
              lead, zinc and aluminum.
            </p>

            <div className="section-grid">
              <div className="card">
                <h3>Core Capabilities</h3>
                <p>
                  3-axis and 5-axis milling, turning and drilling. Small to
                  medium parts, complex geometries and tight-tolerance features.
                </p>
              </div>
              <div className="card">
                <h3>Soft Metal Specialists</h3>
                <p>
                  Lead (Pb) parts for radiation shielding, zinc (Zn) for marine
                  anodes and cast components, aluminum (Al) fixtures and
                  housings, plus steel where needed.
                </p>
              </div>
              <div className="card">
                <h3>Tooling &amp; Fixtures</h3>
                <p>
                  Custom tooling plates, production jigs, holding fixtures and
                  assemblies for internal MDL operations and external clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section id="industries" className="section">
          <div className="container">
            <p className="section-heading">INDUSTRIES WE SERVE</p>
            <h2 className="section-title">
              Marine, industrial, construction and custom engineering.
            </h2>
            <p className="section-lead">
              Backed by MDL&apos;s casting and metal distribution operations,
              Maxum CNC supplies machined components into multiple sectors.
            </p>

            <div className="section-grid">
              <div className="card">
                <h3>Marine &amp; Corrosion</h3>
                <p>
                  Machined sacrificial anode components, brackets and hardware
                  for commercial and recreational marine applications.
                </p>
              </div>
              <div className="card">
                <h3>Industrial &amp; HVAC</h3>
                <p>
                  Custom brackets, housings and fixtures for industrial
                  fabrication, HVAC and mechanical product manufacturers.
                </p>
              </div>
              <div className="card">
                <h3>Medical &amp; Shielding</h3>
                <p>
                  Lead components and custom metal parts supporting radiation
                  shielding and specialty engineered solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY – ALL FILES IN /public/images */}
        {gallery.length > 0 && (
          <section id="gallery" className="section">
            <div className="container">
              <p className="section-heading">IN THE SHOP</p>
              <h2 className="section-title">
                A look at Maxum CNC machining and components.
              </h2>
              <p className="section-lead">
                Images are pulled directly from the Maxum CNC image library and
                update automatically as we add new photos.
