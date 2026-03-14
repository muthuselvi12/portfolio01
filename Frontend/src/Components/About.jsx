// import React from 'react'
import Styles from "./About.module.css";
import LightRays from "./LightRays";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import resume from '../assets/resume.pdf'


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className={Styles.raycontainer} id="about">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className={Styles.customrays}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />

        <div className={Styles.aboutcontent}>
          <div
            className={Styles.picture}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            {/* <img src={pic} alt="" /> */}
            <p className={Styles.who}>WHO AM I?</p>
            <p className={Styles.web}>
              Passionate Frontend Developer Creating Modern Web Experiences
            </p>
            <a href={resume} target="_blank"  className={Styles.but}>
             Download CV
            </a>
          </div>
          <div className={Styles.paragraph}>
            <p
              className={Styles.para}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              I’m a Frontend Developer passionate about creating responsive and
              engaging web experiences. I work with technologies like React.js,
              JavaScript, HTML, and CSS to build modern, scalable, and
              user-friendly applications. With hands-on experience from MERN
              stack internships and real-world projects, I enjoy turning ideas
              into functional web solutions while continuously improving my
              technical skills.
            </p>
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </>
  );
};

export default About;
