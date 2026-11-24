import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Kontakt</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>E-Mail</h4>
            <p>
              <a href="mailto:aunr1404@gmail.com" data-cursor="disable">
                aunr1404@gmail.com
              </a>
            </p>
            <h4>Telefon</h4>
            <p>
              <a href="tel:+4915563034789" data-cursor="disable">
                +49 155 63034789
              </a>
            </p>
            <h4>Ausbildung</h4>
            <p>Wirtschaftsinformatik – Universität Siegen</p>
            <h4>Sprachen</h4>
            <p>Urdu (Muttersprache) · Deutsch C1 · Englisch B2</p>
          </div>

          <div className="contact-box">
            <h2>
              Gestaltet und entwickelt <br /> von <span>Syed Naqvi</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 Alle Rechte vorbehalten
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
