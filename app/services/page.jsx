export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-heading">SERVICES</p>
        <h1 className="section-title">CNC machining, tooling and soft metal expertise.</h1>

        <p className="section-lead">
          Maxum CNC supports prototype, pre-production and ongoing production
          work. We focus on small and medium metal parts where material
          knowledge and surface finish matter as much as the machine.
        </p>

        <h2 className="section-title" style={{ marginTop: "2rem" }}>
          CNC machining
        </h2>
        <p className="section-lead">
          3-axis and 5-axis milling, drilling and light turning of small and
          medium components.
        </p>
        <ul className="contact-list">
          <li>Flat and prismatic parts with pockets, slots and holes.</li>
          <li>Complex shapes, contours and multi-face machining.</li>
          <li>Tight-tolerance features and clean surface finishes.</li>
        </ul>

        <h2 className="section-title" style={{ marginTop: "2rem" }}>
          Soft metal machining
        </h2>
        <p className="section-lead">
          Many shops avoid soft metals. We work with them every day.
        </p>
        <ul className="contact-list">
          <li>
            <strong>Lead (Pb):</strong> radiation shielding parts, blocks,
            custom profiles and tooling components.
          </li>
          <li>
            <strong>Zinc (Zn):</strong> sacrificial anode machining, post-cast
            surfacing, drilling and tapping.
          </li>
          <li>
            <strong>Aluminum (Al):</strong> fixtures, brackets, housings and
            marine hardware.
          </li>
          <li>
            <strong>Steel:</strong> where strength and rigidity are required.
          </li>
        </ul>

        <h2 className="section-title" style={{ marginTop: "2rem" }}>
          Tooling &amp; fixtures
        </h2>
        <p className="section-lead">
          We design and machine tooling and workholding that make production
          easier and more repeatable.
        </p>
        <ul className="contact-list">
          <li>Tooling plates and sub-plates.</li>
          <li>Custom workholding and clamping fixtures.</li>
          <li>Jigs for repeat fabrication or assembly tasks.</li>
        </ul>

        <h2 className="section-title" style={{ marginTop: "2rem" }}>
          5-axis &amp; complex work
        </h2>
        <p className="section-lead">
          For parts with multiple faces, undercuts or complex geometry, our
          5-axis capability reduces setups and improves accuracy.
        </p>
        <ul className="contact-list">
          <li>Multi-face machining in fewer operations.</li>
          <li>Reduced handling and stack-up error.</li>
          <li>Better repeatability on complex projects.</li>
        </ul>

        <h2 className="section-title" style={{ marginTop: "2rem" }}>
          CAD / CAM &amp; file formats
        </h2>
        <p className="section-lead">
          We program from your models and drawings using modern CAD/CAM tools.
        </p>
        <ul className="contact-list">
          <li>STEP, IGES, DXF, STL and common CAD exports.</li>
          <li>Support for engineering revisions and drawing updates.</li>
          <li>Feedback on manufacturability when needed.</li>
        </ul>
      </div>
    </section>
  );
}
