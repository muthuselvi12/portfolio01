import React from "react";
import Expe from "./Experience.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Experience = () => {
  const data = [
    {
      company: "ALO INFO TECH ",
      year: "Aug 2024 - Feb 2025",
      role: "Full Stack Web Developer",
      desc: "Built full-stack web applications using React, Node.js, Express, and MongoDB with REST API integration.",
    },
    {
      company: "ORVIONAR",
      year: "Jan 2026 - Mar 2026",
      role: "MERN Stack Developer",
      desc: "Developed scalable MERN applications with authentication, database integration, and responsive user interfaces.",
    },
    {
      company: "TECHVOLT SOFTWARE",
      year: "Feb 2023 - Mar 2023",
      role: "Frontend Developer",
      desc: "Developed responsive UI using HTML, CSS, JavaScript and improved user experience.",
    },
    {
      company: "SRISHTI INNOVATION",
      year: "Jun 2025 - Jun 2025",
      role: "MERN Stack Developer",
      desc: "Gained hands-on experience in building responsive user interfaces using HTML, CSS, JavaScript, and React.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className={Expe.experience} id="experience">
      <p
        className={Expe.subtitle}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {" "}
        <b>EXPERIENCE</b>
      </p>

      <div className={Expe.timeline}>
        {data.map((item, index) => (
          <div className={Expe.timelinerow} key={index}>
            <div className={Expe.company}>
              <h3>{item.company}</h3>
            </div>

            <div className={Expe.line}>
              <span className={Expe.circle}></span>
            </div>

            <div className={Expe.details}>
              <span className={Expe.year}>{item.year}</span>
              <h3>{item.role}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
