// import React from 'react'
import Style from "./Hero.module.css";
import mypic from "../assets/mypic1.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className={Style.bg} id="home">
        <section className={Style.sec}>
          <div className={Style.content}>
            <p className={Style.intro}>Hi , I am </p>
            <p className={Style.myname}>S MUTHU SELVI</p>
            <p className={Style.domain}>
              <TypeAnimation
                sequence={["Frontend Developer", 2000, "React Developer", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>
            <div className={Style.fonts}>
              
              <div className={Style.trans}>
                <a href="https://github.com/muthuselvi12">
                  <FontAwesomeIcon icon={faGithub} className={Style.icon} />
                </a>
              </div>
              <div className={Style.trans}>
                <a href="https://www.linkedin.com/in/muthu-selvi-s-31909125a">
                  <FontAwesomeIcon icon={faLinkedin} className={Style.icon} />
                </a>
              </div>
              <div className={Style.trans}>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=smuthuselvi965@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className={Style.icon} />
                </a>
              </div>
            </div>
          </div>
          <div className={Style.images} data-aos="fade-left">
            <img src={mypic} alt="" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
