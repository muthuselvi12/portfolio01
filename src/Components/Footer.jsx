import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import Foot from "./Footer.module.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <section className={Foot.footer} >
        <div className={Foot.foot}>
          <div className={Foot.fonts}>
            <div>
              <a href="https://github.com/muthuselvi12">
                <FontAwesomeIcon icon={faGithub} className={Foot.icon} />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/muthu-selvi-s-31909125a">
                <FontAwesomeIcon icon={faLinkedin} className={Foot.icon} />
              </a>
            </div>
            <div>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=smuthuselvi965@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className={Foot.icon} />
              </a>
            </div>
          </div>
          <p>
            <FontAwesomeIcon icon={faCopyright} />
            2026 S Muthu Selvi | Frontend Developer
          </p>
          <p>Email: smuthuselvi965@gmail.com</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
