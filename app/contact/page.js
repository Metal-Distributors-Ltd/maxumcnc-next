export default function ContactPage() {
  return (
    <>
      {/* TOP HERO WITH BIG IMAGE */}
      <section className="contact-hero">
        <div
          className="contact-hero-bg"
          style={{ backgroundImage: "url(/images/maxum-home.png)" }}
        />
        <div className="contact-hero-overlay" />

        <div className="container contact-hero-inner">
          <h1 className="contact-hero-title">CONTACT US</h1>
          <p className="contact-hero-subtitle">
            We are always ready and willing to help with your next machining or
            tooling project.
          </p>
        </div>
      </section>

      {/* FORM PANEL */}
      <section className="section">
        <div className="container">
          <div className="contact-form-card">
            <h2 className="section-title">Tell us about your project</h2>
            <p className="section-lead">
              Share as much detail as you can—materials, quantities, tolerances
              and timing. We’ll get back to you with options and lead times.
            </p>

            <form className="contact-form-grid">
              <label className="contact-form-label">
                Name*
                <input
                  className="contact-form-input"
                  type="text"
                  name="name"
                  required
                />
              </label>

              <label className="contact-form-label">
                Company
                <input
                  className="contact-form-input"
                  type="text"
                  name="company"
                />
              </label>

              <label className="contact-form-label">
                Email*
                <input
                  className="contact-form-input"
                  type="email"
                  name="email"
                  required
                />
              </label>

              <label className="contact-form-label">
                Phone
                <input
                  className="contact-form-input"
                  type="tel"
                  name="phone"
                />
              </label>

              <label className="contact-form-label">
                Project details
                <textarea
                  className="contact-form-textarea"
                  name="details"
                  placeholder="Materials, quantities, tolerances, timing…"
                />
              </label>

              <button type="submit" className="contact-form-submit">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* PROUDLY MADE IN CANADA BANNER */}
          <div className="made-in-canada-banner">
            <img
              src="/images/made-in-canada-maxum.png"
              alt="Proudly made in Canada"
            />
            <span className="made-in-canada-text">
              PROUDLY MADE IN CANADA
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
