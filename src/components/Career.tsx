import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2 className="title">
          Mein Werdegang <span>&amp;</span>
          <br /> Erfahrung
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT-Support &amp; Management</h4>
                <h5>OnetenInnovations</h5>
              </div>
              <h3>01.2025 – 06.2025</h3>
            </div>
            <p className="para">
              Unterstützung bei der Planung, Organisation und Koordination von IT-Projekten.
              Erstellung und Pflege von Dokumentationen und Berichten. Kommunikation mit internen
              und externen Ansprechpartnern sowie Optimierung digitaler Arbeitsprozesse.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Science – Wirtschaftsinformatik</h4>
                <h5>Universität Siegen</h5>
              </div>
              <h3>10.2026 – Aktuell</h3>
            </div>
            <p className="para">
              Studium der Wirtschaftsinformatik an der Universität Siegen. Zuvor zwei Jahre
              Bachelor of Science am Emaan Institute in Karachi, Pakistan (07.2023 – 11.2026)
              absolviert.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
