import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:aun@oneteninnovations.com" data-cursor="disable">
                aun@oneteninnovations.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+4915563034789" data-cursor="disable">
                +49 155 63034789
              </a>
            </p>
            <h4>Education</h4>
            <p>Graduated from University of Siegen.</p>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Syed Naqvi</span>
            </h2>
            <h5>
              <MdCopyright /> 2025 All Rights Reserved
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
