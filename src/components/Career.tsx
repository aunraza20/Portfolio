import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Web Developer</h4>
                <h5>Independent</h5>
              </div>
              <h3>2019 - NOW</h3>
            </div>
            <p>
              Working as a full web developer, building modern, scalable, and interactive 
              web applications using modern frameworks and technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Manager and IT Services</h4>
                <h5>MATHH</h5>
              </div>
              <h3>2016 - 2019</h3>
            </div>
            <p>
              Managed IT projects and delivered remote IT services online, ensuring 
              successful project execution and client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
