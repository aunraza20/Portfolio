import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hallo! Ich bin</h2>
            <h1>
              SYED
              <br />
              <span>NAQVI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>IT-Support &amp;</h3>
            <h2>
              <div className="landing-h2-info">Management</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
