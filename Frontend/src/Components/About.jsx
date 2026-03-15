import { useEffect } from "react";
import Styles from "./About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import resume from "../assets/resume.pdf";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={Styles.aboutcontent} id="about">
      <div className={Styles.picture} data-aos="fade-up">
        <p className={Styles.who}>WHO AM I?</p>
        <p className={Styles.web}>
          Passionate Frontend Developer Creating Modern Web Experiences
        </p>
        <a href={resume} target="_blank" className={Styles.but} rel="noreferrer">
          Download CV
        </a>
      </div>

      <div className={Styles.paragraph} data-aos="fade-up">
        <p className={Styles.para}>
          I’m a Frontend Developer passionate about creating responsive and
          engaging web experiences. I work with technologies like React.js,
          JavaScript, HTML, and CSS to build modern, scalable, and
          user-friendly applications. With hands-on experience from MERN stack
          internships and real-world projects, I enjoy turning ideas into
          functional web solutions while continuously improving my technical
          skills.
        </p>
      </div>
    </section>
  );
};

export default About;